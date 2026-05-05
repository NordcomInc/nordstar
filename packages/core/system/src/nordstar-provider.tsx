import hexToHsl from 'hex-to-hsl';
import type { HTMLAttributes, ReactNode } from 'react';
import { Fragment } from 'react';
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
        ? `--nordstar-font-heading: ${(fonts.heading || fonts.body).replaceAll("'", '')};`
        : '--nordstar-font-heading: var(--nordstar-font-sans, var(--nordstar-font-fallback));';
    const bodyFont = `--nordstar-font-body: ${(fonts.body || fonts.heading)?.replaceAll("'", '') || 'var(--nordstar-font-sans, var(--nordstar-font-fallback))'};`;

    const borderWidth = theme.border?.width || 0.2;
    const borderStyles = borderWidth
        ? `
        --nordstar-border-width-small: ${borderWidth / 1.45}rem;
        --nordstar-border-width:       ${borderWidth}rem;
        --nordstar-border-width-large: ${borderWidth * 1.45}rem;`.trim()
        : '';

    // TODO: Maybe create a utility function for this to better handle optional values (and to hide this away from view).
    const css = /* css */ `
    :root {
        --nordstar-color-primary:              ${toHsl(accents.primary)};
        --nordstar-color-primary-foreground:   ${toHsl('#fefefe')};
        --nordstar-color-secondary:            ${toHsl(accents.secondary)};
        --nordstar-color-secondary-foreground: ${toHsl('#fefefe')};

        --nordstar-color-background:           ${toHsl(colors?.background ?? '#000000')};
        --nordstar-color-background-highlight: ${toHsl(colors?.backgroundHighlight ?? '#262626')};
        --nordstar-color-foreground:           ${toHsl(colors?.foreground ?? '#fefefe')};
        --nordstar-color-foreground-highlight: ${toHsl(colors?.foregroundHighlight ?? '#828282')};

        --nordstar-color-error:                ${toHsl(colors?.error ?? '#ba3e3e')};

        ${headingFont}
        ${bodyFont}
        --nordstar-font-sans: var(--nordstar-font-body, var(--nordstar-font-fallback));
        --nordstar-font-mono: ${fonts.code ?? 'monospace'};

        ${borderStyles}
        --nordstar-border-radius:      ${theme.border?.radius ?? '0.45rem'};
        --nordstar-border-radius-half: calc(var(--nordstar-border-radius) / 2);

        --nordstar-layout-page-width:    ${layout?.page?.width ?? '1200px'};
        --nordstar-layout-page-spacing:  ${layout?.page?.spacing ?? '1rem'};
        --nordstar-layout-page-spacing-half: calc(var(--nordstar-layout-page-spacing) / 2);

        --nordstar-layout-section-spacing: ${layout?.section?.spacing ?? '1rem'};
        --nordstar-layout-section-padding: ${layout?.section?.padding ?? '1.75rem'};

        --nordstar-layout-block-padding:         ${layout?.block?.padding ?? '1rem'};
        --nordstar-layout-block-padding-double:  calc(var(--nordstar-layout-block-padding) * 2);
        --nordstar-layout-block-padding-half:    calc(var(--nordstar-layout-block-padding) / 2);
        --nordstar-layout-block-padding-quarter: calc(var(--nordstar-layout-block-padding) / 4);

        --nordstar-duration-short:  ${theme.duration?.short ?? '0.25s'};
        --nordstar-duration-medium: ${theme.duration?.medium ?? '0.5s'};
    }
`.trim();

    return (
        <Fragment>
            <style data-testid="style" suppressHydrationWarning={true}>
                {css}
            </style>
            <div id="nordstar" className={cn('contents font-medium', className)} {...props}>
                {children}
            </div>
        </Fragment>
    );
};
NordstarProvider.displayName = 'Nordstar.Core.NordstarProvider';
