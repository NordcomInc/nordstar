import type { CSSProperties, ReactNode } from 'react';
import styles from './nordstar-provider.module.scss';
import './styling.scss';

export type NordstarTheme = {
    accents: {
        primary: string;
        secondary: string;
    };
    fonts: {
        heading: string;
        body: string;
        code?: string;
    };
    sizes?: {
        text?: {
            body?: string;
        };
    };
    border?: {
        width?: string;
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
};

export type NordstarProviderProps = {
    theme?: NordstarTheme;
    children: ReactNode;
    style?: CSSProperties;
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
export const NordstarProvider = ({ children, theme }: NordstarProviderProps) => {
    const { accents, fonts, sizes, layout } = theme ?? {};

    return (
        <>
            <style>
                {`
                    ${/* TODO: Maybe create a utility function for this to better handle optional values. */ ''}
                    :root {
                        --color-accent-primary: ${accents?.primary};
                        --color-accent-secondary: ${accents?.secondary};
                        --color-background: #000000;
                        --color-background-highlight: #262626;
                        --color-foreground: #fefefe;
                        --color-foreground-secondary: #828282;

                        ${
                            fonts?.heading || fonts?.body
                                ? `--font-heading: ${(fonts.heading || fonts.body).replaceAll("'", '')};`
                                : ''
                        }
                        ${
                            fonts?.body || fonts?.heading
                                ? `--font-body: ${(fonts.body || fonts.heading).replaceAll("'", '')};`
                                : ''
                        }

                        --size-text-body: ${sizes?.text?.body || '14px'};

                        --border-width: ${theme?.border?.width || '0.18rem'};
                        --border-radius: ${theme?.border?.radius || '0.5rem'};

                        --layout-page-width: ${layout?.page?.width || '1200px'};
                        --layout-page-spacing: ${layout?.page?.spacing || '1rem'};

                        --layout-section-spacing: ${layout?.section?.spacing || '1rem'};
                        --layout-section-padding: ${layout?.section?.padding || '1.75rem'};

                        --layout-block-padding: ${layout?.block?.padding || '1rem'};
                    }
                `}
            </style>
            <div id="nordstar" role="document" className={styles.container}>
                {children}
            </div>
        </>
    );
};
