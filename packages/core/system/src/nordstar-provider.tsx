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
};

export type NordstarProviderProps = {
    children: ReactNode;
    theme?: NordstarTheme;
};

/**
 * `<NordstarProvider/>`, a component that should wrap the entire application.
 *
 * When using Next.js make sure to to extract all providers into a client component used inside of your `RootLayout`.
 *
 * @param {object} props - `<NordstarProvider/>` props.
 * @param {ReactNode} props.children - The children of the `<NordstarProvider/>` component.
 * @param {NordstarTheme} [props.theme] - The theme to use for the application.
 * @returns {ReactNode} The `<NordstarProvider/>` component.
 */
export const NordstarProvider = ({ children, theme }: NordstarProviderProps) => {
    if (theme) {
        // TODO: Maybe create a utility function for this to handle optional values.
        const style: CSSProperties = {
            // Colors.
            '--color-accent-primary': theme.accents.primary,
            '--color-accent-secondary': theme.accents.secondary,

            // Fonts.
            '--font-heading': theme.fonts.heading,
            '--font-body': theme.fonts.body
        } as CSSProperties;

        return (
            <div id="nordstar" style={style}>
                {children}
            </div>
        );
    }

    return <>{children}</>;
};
