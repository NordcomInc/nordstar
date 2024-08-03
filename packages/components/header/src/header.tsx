import { Card } from '@nordcom/nordstar-card';
import { cn, forwardRef } from '@nordcom/nordstar-system';
import { View } from '@nordcom/nordstar-view';
import type { ComponentProps } from 'react';
import styles from './header.module.scss';

import type { As, CSSCustomProperties, NordstarColor } from '@nordcom/nordstar-system';

export type HeaderProps = {
    color?: NordstarColor;
    style?: CSSCustomProperties;
} & ComponentProps<'header'>;

const Header = ({ className, children, ...props }: HeaderProps) => {
    return (
        <Card as="header" borderless={true} {...props} className={cn(styles.container, className)}>
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
 * @param {HeaderLogoProps} props - `<Header.Logo/>` props.
 * @returns {React.ReactNode} The `<Header.Logo/>` component.
 */
const Logo = ({ className, ...props }: HeaderLogoProps) => {
    return <section {...props} draggable={false} className={cn(styles.logo, className)} />;
};
Logo.displayName = 'Nordstar.Layout.Header.Logo';

export type HeaderMenuProps = {
    noOverflowShadow?: boolean;
} & ComponentProps<'nav'>;

/**
 * `<Header.Menu/>`, a component to render a header's content.
 * @param {HeaderMenuProps} props - `<Header.Menu/>` props.
 * @returns {React.ReactNode} The `<Header.Menu/>` component.
 */
const Menu = ({ className, noOverflowShadow = false, ...props }: HeaderMenuProps) => {
    return (
        <nav
            {...props}
            draggable={false}
            className={cn(styles.nav, !noOverflowShadow && styles.overflowShadow, className)}
        />
    );
};
Menu.displayName = 'Nordstar.Layout.Header.Menu';

export type HeaderMenuLinkProps = {
    as?: As;
};

/**
 * `<Header.Menu.Link/>`, a component to render header links.
 * @param {HeaderMenuLinkProps} props - `<Header.Menu.Link/>` props.
 * @returns {React.ReactNode} The `<Header.Menu.Link/>` component.
 */
const Link = forwardRef<'a', HeaderMenuLinkProps>(({ as, className, ...props }, ref) => {
    const Tag = as || 'a';

    return <Tag ref={ref} draggable={false} {...props} className={cn(styles.link, className)} />;
});
Link.displayName = 'Nordstar.Layout.Header.Menu.Link';

export default Object.assign(Header, { Logo, Menu: Object.assign(Menu, { Link }) });
