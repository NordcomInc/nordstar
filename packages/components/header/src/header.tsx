import { Card } from '@nordcom/nordstar-card';
import { As, CSSCustomProperties, NordstarColor, forwardRef } from '@nordcom/nordstar-system';
import { View } from '@nordcom/nordstar-view';
import { ComponentProps } from 'react';
import styles from './header.module.scss';

export type HeaderProps = {
    color?: NordstarColor;
    style?: CSSCustomProperties;
} & ComponentProps<'header'>;

const Header = ({ className, children, ...props }: HeaderProps) => {
    const classes = `${styles.container}${className ? ` ${className}` : ''}`;

    return (
        <Card as="header" borderless={true} {...props} className={classes}>
            <View as="div" className={styles.content} withoutWrapper={true}>
                {children}
            </View>
        </Card>
    );
};
Header.displayName = 'Nordstar.Layout.Header';

export type HeaderLogoProps = {} & ComponentProps<'nav'>;

/**
 * `<Header.Logo/>`, a component to render a header's logo.
 * @param {object} props - `<Header.Logo/>` props.
 * @returns {React.ReactNode} The `<Header.Logo/>` component.
 */
const Logo = ({ className, ...props }: HeaderLogoProps) => {
    const classes = `${styles.logo}${className ? ` ${className}` : ''}`;

    return <section {...props} draggable={false} className={classes} />;
};
Logo.displayName = 'Nordstar.Layout.Header.Logo';

export type HeaderMenuProps = {} & ComponentProps<'nav'>;

/**
 * `<Header.Menu/>`, a component to render a header's content.
 * @param {object} props - `<Header.Menu/>` props.
 * @returns {React.ReactNode} The `<Header.Menu/>` component.
 */
const Menu = ({ className, ...props }: HeaderMenuProps) => {
    const classes = `${styles.nav}${className ? ` ${className}` : ''}`;

    return <nav {...props} draggable={false} className={classes} />;
};
Menu.displayName = 'Nordstar.Layout.Header.Menu';

export type HeaderMenuLinkProps = {
    as?: As;
};

/**
 * `<Header.Menu.Link/>`, a component to render header links.
 * @param {object} props - `<Header.Menu.Link/>` props.
 * @returns {React.ReactNode} The `<Header.Menu.Link/>` component.
 */
const Link = forwardRef<'a', HeaderMenuLinkProps>(({ as, className, ...props }, ref) => {
    const Tag = as || 'a';
    const classes = `${styles.link}${className ? ` ${className}` : ''}`;

    return <Tag ref={ref} draggable={false} {...props} className={classes} />;
});
Link.displayName = 'Nordstar.Layout.Header.Menu.Link';

export default Object.assign(Header, { Logo, Menu: Object.assign(Menu, { Link }) });
