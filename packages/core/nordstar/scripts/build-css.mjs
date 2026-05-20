#!/usr/bin/env node
/*
 * Builds the umbrella's CSS outputs:
 *   dist/tailwind.css → src/styles/tailwind.css + a single @source directive
 *                       pointing at the umbrella's own dist (component code is
 *                       inlined there by the Vite build).
 *   dist/styles.css   → Tailwind v4 precompile of the same.
 *
 * Run after the Vite build; Turbo enforces ordering via dependsOn: ["^build"].
 */

import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const pkgRoot = resolve(import.meta.dirname, '..'); // packages/core/nordstar
const distDir = resolve(pkgRoot, 'dist');

mkdirSync(distDir, { recursive: true });

// 1. Build dist/tailwind.css = src/styles/tailwind.css + a single @source directive.
const tailwindCssSource = readFileSync(resolve(pkgRoot, 'src/styles/tailwind.css'), 'utf8');
writeFileSync(
    resolve(distDir, 'tailwind.css'),
    `${tailwindCssSource}\n\n/* @source directive appended at build time. */\n@source "./";\n`,
);

// 2. Build dist/_entry.css for the precompile.
const entryCss = `@import "tailwindcss";\n@import "../src/styles/tailwind.css";\n@source "./";\n`;
writeFileSync(resolve(distDir, '_entry.css'), entryCss);

// 3. Precompile styles.css for non-Tailwind consumers.
const cli = resolve(pkgRoot, 'node_modules/.bin/tailwindcss');
execFileSync(cli, ['-i', 'dist/_entry.css', '-o', 'dist/styles.css', '--minify'], {
    cwd: pkgRoot,
    stdio: 'inherit',
});

// Clean up the internal precompile entry — it must NOT ship in the published tarball.
rmSync(resolve(distDir, '_entry.css'));
