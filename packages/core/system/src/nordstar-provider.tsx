import type { CSSProperties, ReactNode } from 'react';
import './styling.scss';

export type NordstarTheme = {
    accents: {
        primary: string;
        secondary: string;
    };
    fonts: {
        heading: string;
        body: string;
    };
    sizes?: {
        text?: {
            body?: string;
        };
    };
    layout?: {
        page?: {
            width?: string;
            spacing?: string;
        };
        block?: {
            padding?: string;
        };
    };
};

export type NordstarProviderProps = {
    children: ReactNode;
    theme?: NordstarTheme;
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
    if (theme) {
        const { accents, fonts, sizes, layout } = theme;

        // TODO: Maybe create a utility function for this to better handle optional values.
        const style: CSSProperties = {
            // Colors.
            '--color-accent-primary': accents.primary,
            '--color-accent-secondary': accents.secondary,

            // Fonts.
            '--font-heading': fonts.heading,
            '--font-body': fonts.body,

            // Sizes.
            '--size-text-body': sizes?.text?.body || '14px',

            // Layout.Page.
            '--layout-page-width': layout?.page?.width || '1200px',
            '--layout-page-spacing': layout?.page?.spacing || '1rem',
            // Layout.Block.
            '--layout-block-padding': layout?.block?.padding || '1rem'
        } as CSSProperties;

        return (
            <div id="nordstar" role="document" style={style}>
                {children}
            </div>
        );
    }

    return <>{children}</>;
};
