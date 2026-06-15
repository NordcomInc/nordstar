import { Card } from '@nordcom/nordstar-card';
import type { As, CSSCustomProperties } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';
import { View } from '@nordcom/nordstar-view';
import type { ComponentProps } from 'react';

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
                'z-10 mb-3 flex min-h-20 w-full flex-1 grow items-center justify-center rounded-none border-0 border-none bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 md:h-20',
                sticky &&
                    'sticky inset-0 bottom-auto z-40 border-0 border-background-highlight border-b-2 border-solid',
                className,
            )}
            data-sticky={sticky}
        >
            <View
                as="div"
                className={cn(
                    'm-0 grid h-full w-full max-w-(--nordstar-layout-page-width) grid-cols-[1fr] items-center justify-center gap-3 border-0 border-none p-0 md:grid-cols-[1fr_auto]',
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
            className={cn(
                'font-extrabold text-lg uppercase *:h-full *:object-contain *:object-left [&>a]:transition-colors [&>a]:hover:text-primary',
                className,
            )}
            draggable={false}
            ref={ref}
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
            className={cn(
                'flex w-full touch-auto select-none items-center gap-6 overflow-x-auto scroll-smooth py-3 md:justify-end',
                overflowShadow && 'animate-scroll-shadow-inset [animation-timeline:scroll(self_inline)]',
                className,
            )}
            data-overflow-shadow={overflowShadow}
            draggable={false}
            ref={ref}
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
            className={cn(
                'cursor-pointer whitespace-nowrap break-all font-base font-extrabold text-sm uppercase leading-none transition-colors hover:text-primary active:text-primary md:text-base',
                className,
            )}
            draggable={false}
            ref={ref}
        />
    );
});

export default Object.assign(Header, {
    displayName: 'Nordstar.Header',
    Logo: Object.assign(Logo, {
        displayName: 'Nordstar.Header.Logo',
    }),
    Menu: Object.assign(Menu, {
        displayName: 'Nordstar.Header.Menu',
        Link: Object.assign(Link, {
            displayName: 'Nordstar.Header.Menu.Link',
        }),
    }),
});
