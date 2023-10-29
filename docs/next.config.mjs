/** @type {import('next').NextConfig} */
let config = {
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    productionBrowserSourceMaps: false,
    compress: true,
    experimental: {
        scrollRestoration: true,
        esmExternals: true,
        optimizePackageImports: []
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.nordcom.io',
            }, {
                protocol: 'https',
                hostname: '**.github.io',
            },
        ]
    },
    compiler: {
        styledComponents: true,
        ...(process.env.NODE_ENV === 'production' && {
            removeConsole: {
                exclude: ['warn', 'error'],
            }
        } || {})
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

export default config;
