import createMDX from '@next/mdx';
import createVercelToolbar from '@vercel/toolbar/plugins/next';

import remarkGfm from 'remark-gfm';

const withVercelToolbar = createVercelToolbar();

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: []
    }
});

/** @type {import('next').NextConfig} */
let config = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    productionBrowserSourceMaps: true,
    transpilePackages: ['next-mdx-remote'],
    compress: true,
    experimental: {
        appNavFailHandling: true,
        caseSensitiveRoutes: true,
        mdxRs: {
            mdxType: 'gfm'
        },
        optimizePackageImports: [],
        optimizeServerReact: true,
        parallelServerBuildTraces: true,
        parallelServerCompiles: true,
        scrollRestoration: true,
        serverComponentsHmrCache: true,
        serverSourceMaps: true,
        useEarlyImport: true,
        webpackBuildWorker: true
    },
    images: {
        dangerouslyAllowSVG: true,
        minimumCacheTTL: 60,
        contentDispositionType: 'inline',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nordcom.io'
            },
            {
                protocol: 'https',
                hostname: '**.nordcom.io'
            },
            {
                protocol: 'https',
                hostname: '**.github.io'
            },
            {
                protocol: 'https',
                hostname: '**.gravatar.com'
            }
        ],
        formats: ['image/webp', 'image/avif']
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors: true,
        tsconfigPath: 'tsconfig.json'
    },

    async generateBuildId() {
        return process.env.VERCEL_GIT_COMMIT_SHA || 'unknown';
    },

    webpack(config, _context) {
        return {
            ...config,
            experiments: {
                ...config.experiments,
                topLevelAwait: true
            }
        };
    }
};

export default withVercelToolbar(withMDX(config));
