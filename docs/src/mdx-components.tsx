import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

import { Callout } from '@/components/docs/callout';
import { C } from '@/components/docs/component-link';
import { Install } from '@/components/docs/install';
import { Preview } from '@/components/docs/preview';
import { PropsTable } from '@/components/docs/props-table';
import { Related } from '@/components/docs/related';
import { TabPane, Tabs } from '@/components/docs/tabs';

function MdxLink({ href = '', children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    const internal = href.startsWith('/docs');
    if (internal) {
        return (
            <Link
                className="text-primary underline underline-offset-4 hover:no-underline"
                href={href as Parameters<typeof Link>[0]['href']}
                {...rest}
            >
                {children}
            </Link>
        );
    }
    return (
        <a
            className="text-primary underline underline-offset-4 hover:no-underline"
            href={href}
            rel="noreferrer noopener"
            target="_blank"
            {...rest}
        >
            {children}
        </a>
    );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,

        // Shortcodes
        Preview,
        PropsTable,
        Install,
        Callout,
        Tabs,
        TabPane,
        C,
        Related,

        // Markdown overrides
        a: MdxLink,
        blockquote: (props) => (
            <blockquote
                className="my-4 border-primary/60 border-l-2 pl-4 text-foreground-highlight italic"
                {...props}
            />
        ),
        code: (props) => (
            <code className="rounded bg-background-highlight/40 px-1 py-0.5 font-mono text-[0.9em]" {...props} />
        ),
        h1: (props) => <h1 className="mt-2 mb-4 font-semibold text-3xl tracking-tight" {...props} />,
        h2: (props) => <h2 className="mt-6 mb-3 font-semibold text-2xl tracking-tight" {...props} />,
        h3: (props) => <h3 className="mt-8 mb-2 font-medium text-xl" {...props} />,
        h4: (props) => <h4 className="mt-6 mb-2 font-medium text-lg" {...props} />,
        li: (props) => <li className="my-1" {...props} />,
        ol: (props) => <ol className="my-3 list-decimal pl-6 text-foreground-highlight" {...props} />,
        p: (props) => <p className="mt-3 text-base text-foreground-highlight leading-relaxed" {...props} />,
        ul: (props) => <ul className="my-3 list-disc pl-6 text-foreground-highlight" {...props} />,
    };
}
