import createMDX from '@next/mdx';
import createVercelToolbar from '@vercel/toolbar/plugins/next';
import type { NextConfig } from 'next';

const withVercelToolbar = createVercelToolbar({});

const withMDX = createMDX({
    options: {
        remarkPlugins: ['remark-gfm'],
        rehypePlugins: ['rehype-slug', 'rehype-autolink-headings']
    } as never
});

const config: NextConfig = {
    output: 'export',
    basePath: '/nordstar',
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: false,
    transpilePackages: ['next-mdx-remote'],
    typedRoutes: true,
    experimental: {
        appNavFailHandling: true,
        caseSensitiveRoutes: true,
        mdxRs: true,
        optimizePackageImports: [],
        serverComponentsHmrCache: true,
        typedEnv: true
    },
    images: {
        unoptimized: true,
        dangerouslyAllowSVG: true,
        contentDispositionType: 'inline'
    },
    typescript: {
        ignoreBuildErrors: true,
        tsconfigPath: 'tsconfig.json'
    },

    async generateBuildId() {
        return process.env.VERCEL_GIT_COMMIT_SHA || 'unknown';
    }
};

export default withVercelToolbar(withMDX(config));
