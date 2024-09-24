import './globals.css';

import hexToHsl from 'hex-to-hsl';
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from './utils';

const toHsl = (input?: string) =>
    input
        ? hexToHsl(input)
              ?.map((val, index) => (index > 0 ? `${val}%` : val))
              .join(' ')
        : null;

export type NordstarTheme = {
    accents: {
        primary: string;
        secondary: string;
    };
    colors?: {
        background?: string;
        backgroundHighlight?: string;
        foreground?: string;
        foregroundHighlight?: string;
        error?: string;
    };
    fonts: {
        heading?: string;
        body: string;
        code?: string;
    };
    border?: {
        width?: number;
        radius?: string;
    };
    layout?: {
        page?: {
            width?: string;
            spacing?: string;
        };
        section?: {
            spacing?: string;
            padding?: string;
        };
        block?: {
            padding?: string;
        };
    };
    duration?: {
        short?: string;
        medium?: string;
    };
};

export type NordstarProviderProps = {
    theme: NordstarTheme;
    children?: ReactNode | ReactNode[];
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;

/**
 * `<NordstarProvider/>`, a component that should wrap the entire application.
 * @note When using Next.js make sure to to extract all providers into a client component used inside of your `RootLayout`.
 *
 * @param {object} props - `<NordstarProvider/>` props.
 * @param {ReactNode | ReactNode[]} props.children - The children of the `<NordstarProvider/>` component.
 * @param {string | undefined} [props.className] - The class name for the wrapper element.
 * @param {NordstarTheme} [props.theme] - The theme to use for the application.
 * @returns {ReactNode} The `<NordstarProvider/>` component.
 */
export const NordstarProvider = ({ theme, children, className, ...props }: NordstarProviderProps) => {
    const { accents, colors, fonts, layout } = theme;

    const headingFont = fonts.heading
        ? `--font-heading: ${(fonts.heading || fonts.body).replaceAll("'", '')};`
        : '--font-heading: var(--font-primary, var(--font-fallback));';
    const bodyFont = `--font-body: ${(fonts.body || fonts.heading)?.replaceAll("'", '') || 'var(--font-primary, var(--font-fallback))'};`;

    const borderWidth = theme.border?.width || 0.2;
    const borderStyles = borderWidth
        ? `
            --border-width-small: ${borderWidth / 1.45}rem;
            --border-width: ${borderWidth}rem;
            --border-width-large: ${borderWidth * 1.45}rem;`.trim()
        : '';

    // TODO: Maybe create a utility function for this to better handle optional values (and to hide this away from view).
    const css = /* css */ `
        :root {
            --color-accent-primary: ${toHsl(accents.primary)};
            --color-accent-primary-foreground: ${toHsl('#fefefe')};
            --color-accent-secondary: ${toHsl(accents.secondary)};
            --color-accent-secondary-foreground: ${toHsl('#fefefe')};

            --color-background: ${toHsl(colors?.background ?? '#000000')};
            --color-background-highlight: ${toHsl(colors?.backgroundHighlight ?? '#262626')};
            --color-foreground: ${toHsl(colors?.foreground ?? '#fefefe')};
            --color-foreground-highlight: ${toHsl(colors?.foregroundHighlight ?? '#828282')};

            --color-error: ${toHsl(colors?.error ?? '#ba3e3e')};


            ${headingFont}
            ${bodyFont}
            --font-sans: var(--font-body, var(--font-primary, var(--font-fallback)));
            --font-mono: ${fonts.code ?? 'monospace'};

            ${borderStyles}
            --border-radius: ${theme.border?.radius ?? '0.45rem'};
            --border-radius-half: calc(var(--border-radius) / 2);

            --layout-page-width: ${layout?.page?.width ?? '1200px'};
            --layout-page-spacing: ${layout?.page?.spacing ?? '1rem'};
            --layout-page-spacing-half: calc(var(--layout-page-spacing) / 2);

            --layout-section-spacing: ${layout?.section?.spacing ?? '1rem'};
            --layout-section-padding: ${layout?.section?.padding ?? '1.75rem'};

            --layout-block-padding: ${layout?.block?.padding ?? '1rem'};
            --layout-block-padding-double: calc(var(--layout-block-padding) * 2);
            --layout-block-padding-half: calc(var(--layout-block-padding) / 2);
            --layout-block-padding-quarter: calc(var(--layout-block-padding) / 4);

            --duration-short: ${theme.duration?.short ?? '0.25s'};
            --duration-medium: ${theme.duration?.medium ?? '0.5s'};
        }
    `.trim();

    return (
        <>
            <style data-testid="style" suppressHydrationWarning={true}>
                {css}
            </style>
            <div
                id="nordstar"
                className={cn('contents bg-background text-[16px] font-medium text-foreground', className)}
                {...props}
            >
                {children}
            </div>
        </>
    );
};
NordstarProvider.displayName = 'Nordstar.Core.NordstarProvider';
