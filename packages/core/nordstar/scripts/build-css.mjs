#!/usr/bin/env node
/*
 * Builds the umbrella's CSS outputs:
 *   dist/tailwind.css → src/styles/tailwind.css + @source lines for PUBLISHED layout.
 *   dist/styles.css   → Tailwind v4 precompile using @source lines for the WORKSPACE layout.
 *
 * Sub-package list is discovered from the umbrella's `dependencies` (entries starting
 * with `@nordcom/nordstar-` and not `-system`). Adding a new component package
 * automatically expands @source coverage — no edits to this script needed.
 *
 * Run after sub-package builds; Turbo enforces ordering via dependsOn: ["^build"].
 */

import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const Dirname = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(Dirname, '..'); // packages/core/nordstar
const distDir = resolve(pkgRoot, 'dist');

const pkg = JSON.parse(readFileSync(resolve(pkgRoot, 'package.json'), 'utf8'));

// Discover sub-package short names: '@nordcom/nordstar-button' → 'button'.
const subPackageShortNames = Object.keys(pkg.dependencies ?? {})
    .filter((name) => name.startsWith('@nordcom/nordstar-') && name !== '@nordcom/nordstar-system')
    .map((name) => name.replace('@nordcom/nordstar-', ''))
    .sort();

if (subPackageShortNames.length === 0) {
    throw new Error('[nordstar:build-css] no @nordcom/nordstar-* dependencies found in package.json');
}

mkdirSync(distDir, { recursive: true });

// 1. Build dist/tailwind.css = src/styles/tailwind.css + @source lines for every
//    layout this file may be loaded from. Tailwind v4 silently skips paths that
//    don't resolve, so listing every reasonable layout is safe.
//    Layouts:
//      - npm install:     dist/tailwind.css → ../../nordstar-<name>/dist
//      - pnpm install:    same as npm (sub-packages are siblings via .pnpm symlinks)
//      - pnpm workspace:  dist/tailwind.css's realpath is packages/core/nordstar/dist/
//                         → sub-packages live at ../../../components/<name>/dist
const tailwindCssSource = readFileSync(resolve(pkgRoot, 'src/styles/tailwind.css'), 'utf8');
const sourceDirectives = subPackageShortNames
    .flatMap((name) => [`@source "../../nordstar-${name}/dist";`, `@source "../../../components/${name}/dist";`])
    .join('\n');
writeFileSync(
    resolve(distDir, 'tailwind.css'),
    `${tailwindCssSource}\n\n/* @source directives appended at build time. */\n${sourceDirectives}\n`,
);

// 2. Build dist/_entry.css for the precompile, with WORKSPACE-layout @source paths.
//    From dist/_entry.css (packages/core/nordstar/dist/), sub-package source lives at
//    ../../../components/<name>/dist/.
const workspaceSources = subPackageShortNames.map((name) => `@source "../../../components/${name}/dist";`).join('\n');
const entryCss = `@import "tailwindcss";\n@import "../src/styles/tailwind.css";\n${workspaceSources}\n`;
writeFileSync(resolve(distDir, '_entry.css'), entryCss);

// 3. Precompile styles.css for non-Tailwind consumers.
//    Resolve the CLI from the umbrella's LOCAL node_modules — the workspace root
//    may have v3 hoisted because storybook/docs still pin v3 until those packages
//    are migrated. The umbrella's local @tailwindcss/cli@4 is the right binary.
const cli = resolve(pkgRoot, 'node_modules/.bin/tailwindcss');
execSync(`"${cli}" -i dist/_entry.css -o dist/styles.css --minify`, {
    cwd: pkgRoot,
    stdio: 'inherit',
});

// Clean up the internal precompile entry — it must NOT ship in the published tarball.
rmSync(resolve(distDir, '_entry.css'));
