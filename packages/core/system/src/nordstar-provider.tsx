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
    const { accents, fonts, sizes, layout } = theme ?? {};

    // TODO: Maybe create a utility function for this to better handle optional values.
    // TODO: We should probably try to get this into a `:root` selector.
    const style: CSSProperties = {
        // Colors.
        '--color-accent-primary': accents?.primary,
        '--color-accent-secondary': accents?.secondary,

        // Fonts.
        ...(fonts?.heading && { '--font-heading': fonts.heading }),
        ...(fonts?.body && {
            '--font-body': fonts.body,
            fontFamily: `var('--font-body')`
        }),

        // Sizes.
        '--size-text-body': sizes?.text?.body || '14px',

        // Border.
        '--border-width': theme?.border?.width || '0.18rem',
        '--border-radius': theme?.border?.radius || '0.5rem',

        // Layout.Page.
        '--layout-page-width': layout?.page?.width || '1200px',
        '--layout-page-spacing': layout?.page?.spacing || '1rem',

        // Layout.Section.
        '--layout-section-spacing': layout?.section?.spacing || '1rem',
        '--layout-section-padding': layout?.section?.padding || '1.75rem',

        // Layout.Block.
        '--layout-block-padding': layout?.block?.padding || '1rem'
    } as CSSProperties;

    return (
        <div id="nordstar" role="document" style={style} className={styles.container}>
            {children}
        </div>
    );
};
