import { Card } from '@nordcom/nordstar-card';
import { cn, forwardRef } from '@nordcom/nordstar-system';
import { View } from '@nordcom/nordstar-view';
import type { ComponentProps } from 'react';

import type { As, CSSCustomProperties } from '@nordcom/nordstar-system';

export type HeaderProps = {
    sticky?: boolean;
    style?: CSSCustomProperties | undefined;
} & Omit<ComponentProps<'header'>, 'color'>;

const Header = ({ sticky = true, className, children, ...props }: HeaderProps) => {
    return (
        <Card
            {...props}
            as="header"
            borderless={true}
            className={cn(
                'z-10 mb-3 flex min-h-20 w-full items-center justify-center rounded-none border-0 border-none bg-background/95 px-0 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/75 md:h-20',
                sticky &&
                    'sticky inset-0 bottom-auto z-40 border-0 border-b-2 border-solid border-background-highlight',
                className
            )}
            data-sticky={sticky}
        >
            <View
                as="div"
                className={cn(
                    'm-0 grid h-full w-full grid-cols-[1fr] items-center justify-center gap-3 border-0 border-none p-0 md:grid-cols-[1fr_auto]'
                )}
                withoutWrapper={true}
            >
                {children}
            </View>
        </Card>
    );
};

export type HeaderLogoProps = {
    as?: As;
} & ComponentProps<'nav'>;

/**
 * `<Header.Logo/>`, a component to render a header's logo.
 * @param {HeaderLogoProps} props - `<Header.Logo/>` props.
 * @returns {React.ReactNode} The `<Header.Logo/>` component.
 */
const Logo = forwardRef<'section', HeaderLogoProps>(({ as, className, ...props }, ref) => {
    const Tag = as || 'section';
    return (
        <Tag
            {...props}
            ref={ref}
            draggable={false}
            className={cn(
                '[var(--layout-page-width)]:px-0 px-3 text-lg font-extrabold uppercase *:h-full *:object-contain *:object-left [&>a]:transition-colors [&>a]:hover:text-primary',
                className
            )}
        />
    );
});

export type HeaderMenuProps = {
    as?: As;
    overflowShadow?: boolean;
};

/**
 * `<Header.Menu/>`, a component to render a header's content.
 * @param {HeaderMenuProps} props - `<Header.Menu/>` props.
 * @returns {React.ReactNode} The `<Header.Menu/>` component.
 */
const Menu = forwardRef<'nav', HeaderMenuProps>(({ as, className, overflowShadow = true, ...props }, ref) => {
    const Tag = as || 'nav';

    return (
        <Tag
            {...props}
            ref={ref}
            draggable={false}
            className={cn(
                'md:overflow-x [var(--layout-page-width)]:px-0 flex w-full touch-auto select-none items-center gap-6 overflow-x-auto scroll-smooth px-3 py-3 md:justify-end',
                overflowShadow && 'animate-scroll-shadow-inset [animation-timeline:scroll(self_inline)]',
                className
            )}
            data-overflow-shadow={overflowShadow}
        />
    );
});

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

    return (
        <Tag
            {...props}
            ref={ref}
            draggable={false}
            className={cn(
                'font-base cursor-pointer whitespace-nowrap break-all text-sm font-extrabold uppercase leading-none transition-colors hover:text-primary active:text-primary md:text-base',
                className
            )}
        />
    );
});

export default Object.assign(Header, {
    displayName: 'Nordstar.Header',
    Logo: Object.assign(Logo, {
        displayName: 'Nordstar.Header.Logo'
    }),
    Menu: Object.assign(Menu, {
        displayName: 'Nordstar.Header.Menu',
        Link: Object.assign(Link, {
            displayName: 'Nordstar.Header.Menu.Link'
        })
    })
});
