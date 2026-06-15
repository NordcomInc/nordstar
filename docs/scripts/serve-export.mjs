#!/usr/bin/env node
/*
 * Minimal, dependency-free static server for the docs' Next.js static export.
 *
 * The export is built with `basePath: '/nordstar'` and `trailingSlash: false`,
 * so every asset/link in the HTML is absolute under `/nordstar`. A plain static
 * server rooted at `out/` would 404 those, so this server mounts `out/` at the
 * `/nordstar` prefix (and redirects `/` there for convenience). It exists purely
 * to host the export for Playwright e2e — production is served by GitHub Pages,
 * which mounts the same artifact at the project's `/nordstar/` path.
 */

import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..', 'out');
const BASE_PATH = '/nordstar';
const PORT = Number(process.env.PORT ?? process.env.E2E_PORT ?? 4321);
const HOST = process.env.HOST ?? '127.0.0.1';

const CONTENT_TYPES = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.ico': 'image/x-icon',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.map': 'application/json; charset=utf-8',
    '.mjs': 'text/javascript; charset=utf-8',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.txt': 'text/plain; charset=utf-8',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.xml': 'application/xml; charset=utf-8',
};

if (!existsSync(ROOT)) {
    console.error(`[serve-export] No export found at ${ROOT}. Run \`pnpm run build:docs\` first.`);
    process.exit(1);
}

/** Resolve a request path (already stripped of the base prefix) to a file on disk, or null. */
function resolveFile(urlPath) {
    // Normalise and refuse anything that escapes the export root (path traversal).
    const clean = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.(\/|\\|$))+/, '');
    const candidates = [];

    if (clean === '/' || clean === '' || clean === '.') {
        candidates.push('index.html');
    } else {
        const trimmed = clean.replace(/\/+$/, '');
        candidates.push(trimmed); // direct file (e.g. /_next/static/x.css)
        candidates.push(`${trimmed}.html`); // export route (trailingSlash: false)
        candidates.push(join(trimmed, 'index.html')); // directory route
    }

    for (const candidate of candidates) {
        const filePath = resolve(ROOT, `.${candidate.startsWith('/') ? candidate : `/${candidate}`}`);
        if (!filePath.startsWith(ROOT + sep) && filePath !== ROOT) continue;
        if (existsSync(filePath) && statSync(filePath).isFile()) return filePath;
    }

    return null;
}

const server = createServer((req, res) => {
    const url = new URL(req.url ?? '/', `http://${req.headers.host}`);
    let pathname = url.pathname;

    // Bare root → send clients to the mounted app.
    if (pathname === '/' || pathname === '') {
        res.writeHead(302, { location: `${BASE_PATH}/` });
        res.end();
        return;
    }

    if (pathname === BASE_PATH) pathname = `${BASE_PATH}/`;
    if (!pathname.startsWith(`${BASE_PATH}/`)) {
        res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
        res.end('Not found');
        return;
    }

    const relativePath = pathname.slice(BASE_PATH.length) || '/';
    const filePath = resolveFile(relativePath);

    if (!filePath) {
        const notFound = resolve(ROOT, '404.html');
        if (existsSync(notFound)) {
            res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
            createReadStream(notFound).pipe(res);
            return;
        }
        res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
        res.end('Not found');
        return;
    }

    res.writeHead(200, {
        'cache-control': 'no-cache',
        'content-type': CONTENT_TYPES[extname(filePath)] ?? 'application/octet-stream',
    });
    createReadStream(filePath).pipe(res);
});

server.listen(PORT, HOST, () => {});
