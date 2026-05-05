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
                href={href as Parameters<typeof Link>[0]['href']}
                className="text-primary underline underline-offset-4 hover:no-underline"
                {...rest}
            >
                {children}
            </Link>
        );
    }
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary underline underline-offset-4 hover:no-underline"
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
        h1: (props) => <h1 className="mt-2 mb-4 text-3xl font-semibold tracking-tight" {...props} />,
        h2: (props) => <h2 className="mt-10 mb-3 text-2xl font-semibold tracking-tight" {...props} />,
        h3: (props) => <h3 className="mt-8 mb-2 text-xl font-medium" {...props} />,
        h4: (props) => <h4 className="mt-6 mb-2 text-lg font-medium" {...props} />,
        p: (props) => <p className="my-3 text-base leading-relaxed text-foreground-highlight" {...props} />,
        ul: (props) => <ul className="my-3 list-disc pl-6 text-foreground-highlight" {...props} />,
        ol: (props) => <ol className="my-3 list-decimal pl-6 text-foreground-highlight" {...props} />,
        li: (props) => <li className="my-1" {...props} />,
        blockquote: (props) => (
            <blockquote
                className="my-4 border-l-2 border-primary/60 pl-4 text-foreground-highlight italic"
                {...props}
            />
        ),
        code: (props) => (
            <code
                className="rounded bg-background-highlight/40 px-1 py-0.5 font-mono text-[0.9em]"
                {...props}
            />
        )
    };
}
