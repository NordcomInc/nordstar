import './styling.scss';

import type { ReactNode } from 'react';
import styles from './nordstar-provider.module.scss';

export type NordstarTheme = {
    accents: {
        primary: string;
        secondary: string;
    };
    colors?: {
        background?: string;
        foreground?: string;
        foregroundSecondary?: string;
        highlight?: string;
        error?: string;
    };
    fonts?: {
        heading?: string;
        body?: string;
        code?: string;
    };
    sizes?: {
        text?: {
            body?: string;
        };
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
    theme?: NordstarTheme;
    children?: ReactNode;
};

/**
 * `<NordstarProvider/>`, a component that should wrap the entire application.
 * @note When using Next.js make sure to to extract all providers into a client component used inside of your `RootLayout`.
 *
 * @param {object} props - `<NordstarProvider/>` props.
 * @param {ReactNode} props.children - The children of the `<NordstarProvider/>` component.
 * @param {NordstarTheme} [props.theme] - The theme to use for the application.
 * @returns {ReactNode} The `<NordstarProvider/>` component.
 */
export const NordstarProvider = ({ children, theme, ...props }: NordstarProviderProps) => {
    const { accents, colors, fonts, sizes, layout } = theme || {};

    const headingFont =
        fonts?.heading || fonts?.body ? `--font-heading: ${(fonts.heading || fonts.body)!.replaceAll("'", '')};` : '';
    const bodyFont =
        fonts?.body || fonts?.heading ? `--font-body: ${(fonts.body || fonts.heading)!.replaceAll("'", '')};` : '';

    const borderWidth = theme?.border?.width || 0.2;

    // TODO: Maybe create a utility function for this to better handle optional values (and to hide this away from view).
    const css = `
        :root {
            --color-accent-primary: ${accents?.primary};
            --color-accent-primary-foreground: #fefefe;
            --color-accent-secondary: ${accents?.secondary};
            --color-accent-secondary-foreground: #fefefe;

            --color-background: ${colors?.background ?? '#000000'};
            --color-background-highlight: ${colors?.highlight ?? '#262626'};
            --color-foreground: ${colors?.foreground ?? '#fefefe'};
            --color-foreground-secondary: ${colors?.foregroundSecondary ?? '#828282'};

            --color-error: ${colors?.error ?? '#ba3e3e'};

            ${headingFont}
            ${bodyFont}

            --size-text-body: ${sizes?.text?.body ?? '14px'};

            --border-width: ${borderWidth}rem;
            --border-width-small: ${borderWidth / 1.45}rem;
            --border-width-large: ${borderWidth * 1.45}rem;
            --border-radius: ${theme?.border?.radius ?? '0.45rem'};
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

            --duration-short: ${theme?.duration?.short ?? '0.25s'};
            --duration-medium: ${theme?.duration?.medium ?? '0.5s'};
        }
    `;

    return (
        <>
            <style {...props}>{css}</style>
            <div id="nordstar" role="document" className={styles.container || ''}>
                {children}
            </div>
        </>
    );
};
NordstarProvider.displayName = 'Nordstar.Core.NordstarProvider';
