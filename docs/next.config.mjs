import createVercelToolbar from '@vercel/toolbar/plugins/next';

const withVercelToolbar = createVercelToolbar();

export function getBaseUrl() {
    if (process.env.VERCEL_ENV === 'production') {
        return 'https://nordstar.dev';
    }

    return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
}

/** @type {import('next').NextConfig} */
let config = {
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    productionBrowserSourceMaps: true,
    compress: true,
    assetPrefix: getBaseUrl(),
    experimental: {
        appNavFailHandling: true,
        caseSensitiveRoutes: true,
        cssChunking: 'strict',
        esmExternals: true,
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

export default withVercelToolbar(config);
