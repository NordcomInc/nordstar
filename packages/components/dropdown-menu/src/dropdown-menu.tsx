'use client';

import { cn } from '@nordcom/nordstar-system';
import * as Primitive from '@radix-ui/react-dropdown-menu';
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef, type SVGProps } from 'react';

const ICON_BASE: SVGProps<SVGSVGElement> = {
    'aria-hidden': 'true',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    viewBox: '0 0 24 24',
};

/**
 * Inline check icon shown for an active checkbox item.
 *
 * @param {SVGProps<SVGSVGElement>} props - Standard SVG props.
 * @returns {React.ReactNode} A 1em check mark inheriting `currentColor`.
 */
function Check(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...ICON_BASE} strokeWidth={3} {...props}>
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

/**
 * Inline filled dot shown for the selected radio item.
 *
 * @param {SVGProps<SVGSVGElement>} props - Standard SVG props.
 * @returns {React.ReactNode} A small filled circle inheriting `currentColor`.
 */
function Dot(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...ICON_BASE} fill="currentColor" stroke="none" {...props}>
            <circle cx="12" cy="12" r="4" />
        </svg>
    );
}

/**
 * Inline right-chevron shown on a submenu trigger.
 *
 * @param {SVGProps<SVGSVGElement>} props - Standard SVG props.
 * @returns {React.ReactNode} A 1em rightward chevron inheriting `currentColor`.
 */
function ChevronRight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...ICON_BASE} strokeWidth={2.5} {...props}>
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}

const ITEM_CLASS =
    'relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 font-body font-medium text-foreground text-sm outline-none transition-colors duration-150 focus:bg-background-highlight focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50';
const INDICATOR_ITEM_CLASS =
    'relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pr-2 pl-8 font-body font-medium text-foreground text-sm outline-none transition-colors duration-150 focus:bg-background-highlight focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50';
const PANEL_CLASS =
    'z-50 min-w-40 origin-[var(--radix-dropdown-menu-content-transform-origin)] overflow-hidden rounded-md border-2 border-foreground border-solid bg-background p-1 text-foreground shadow-overlay data-[state=open]:animate-overlay-in';

export type DropdownMenuProps = ComponentPropsWithoutRef<typeof Primitive.Root>;
export type DropdownMenuContentProps = ComponentPropsWithoutRef<typeof Primitive.Content>;
export type DropdownMenuItemProps = ComponentPropsWithoutRef<typeof Primitive.Item> & { inset?: boolean };
export type DropdownMenuLabelProps = ComponentPropsWithoutRef<typeof Primitive.Label> & { inset?: boolean };

const DropdownMenuContent = forwardRef<ComponentRef<typeof Primitive.Content>, DropdownMenuContentProps>(
    ({ className, sideOffset = 6, ...props }, ref) => (
        <Primitive.Portal>
            <Primitive.Content className={cn(PANEL_CLASS, className)} ref={ref} sideOffset={sideOffset} {...props} />
        </Primitive.Portal>
    ),
);
DropdownMenuContent.displayName = 'Nordstar.DropdownMenu.Content';

const DropdownMenuItem = forwardRef<ComponentRef<typeof Primitive.Item>, DropdownMenuItemProps>(
    ({ className, inset, ...props }, ref) => (
        <Primitive.Item className={cn(ITEM_CLASS, inset && 'pl-8', className)} ref={ref} {...props} />
    ),
);
DropdownMenuItem.displayName = 'Nordstar.DropdownMenu.Item';

const DropdownMenuCheckboxItem = forwardRef<
    ComponentRef<typeof Primitive.CheckboxItem>,
    ComponentPropsWithoutRef<typeof Primitive.CheckboxItem>
>(({ className, children, ...props }, ref) => (
    <Primitive.CheckboxItem className={cn(INDICATOR_ITEM_CLASS, className)} ref={ref} {...props}>
        <span className="absolute left-2 flex size-4 items-center justify-center">
            <Primitive.ItemIndicator>
                <Check className="size-4" />
            </Primitive.ItemIndicator>
        </span>
        {children}
    </Primitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = 'Nordstar.DropdownMenu.CheckboxItem';

const DropdownMenuRadioItem = forwardRef<
    ComponentRef<typeof Primitive.RadioItem>,
    ComponentPropsWithoutRef<typeof Primitive.RadioItem>
>(({ className, children, ...props }, ref) => (
    <Primitive.RadioItem className={cn(INDICATOR_ITEM_CLASS, className)} ref={ref} {...props}>
        <span className="absolute left-2 flex size-4 items-center justify-center">
            <Primitive.ItemIndicator>
                <Dot className="size-4" />
            </Primitive.ItemIndicator>
        </span>
        {children}
    </Primitive.RadioItem>
));
DropdownMenuRadioItem.displayName = 'Nordstar.DropdownMenu.RadioItem';

const DropdownMenuLabel = forwardRef<ComponentRef<typeof Primitive.Label>, DropdownMenuLabelProps>(
    ({ className, inset, ...props }, ref) => (
        <Primitive.Label
            className={cn(
                'px-2 py-1.5 font-bold text-foreground-highlight text-xs uppercase tracking-wide',
                inset && 'pl-8',
                className,
            )}
            ref={ref}
            {...props}
        />
    ),
);
DropdownMenuLabel.displayName = 'Nordstar.DropdownMenu.Label';

const DropdownMenuSeparator = forwardRef<
    ComponentRef<typeof Primitive.Separator>,
    ComponentPropsWithoutRef<typeof Primitive.Separator>
>(({ className, ...props }, ref) => (
    <Primitive.Separator className={cn('-mx-1 my-1 h-px bg-foreground-highlight', className)} ref={ref} {...props} />
));
DropdownMenuSeparator.displayName = 'Nordstar.DropdownMenu.Separator';

const DropdownMenuSubTrigger = forwardRef<
    ComponentRef<typeof Primitive.SubTrigger>,
    ComponentPropsWithoutRef<typeof Primitive.SubTrigger> & { inset?: boolean }
>(({ className, inset, children, ...props }, ref) => (
    <Primitive.SubTrigger
        className={cn(ITEM_CLASS, 'data-[state=open]:bg-background-highlight', inset && 'pl-8', className)}
        ref={ref}
        {...props}
    >
        {children}
        <ChevronRight className="ml-auto size-4" />
    </Primitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = 'Nordstar.DropdownMenu.SubTrigger';

const DropdownMenuSubContent = forwardRef<
    ComponentRef<typeof Primitive.SubContent>,
    ComponentPropsWithoutRef<typeof Primitive.SubContent>
>(({ className, ...props }, ref) => (
    <Primitive.Portal>
        <Primitive.SubContent className={cn(PANEL_CLASS, className)} ref={ref} {...props} />
    </Primitive.Portal>
));
DropdownMenuSubContent.displayName = 'Nordstar.DropdownMenu.SubContent';

/**
 * `<DropdownMenu/>`, a menu of actions revealed by a trigger button.
 *
 * Wraps `@radix-ui/react-dropdown-menu` as a compound component. Compose `DropdownMenu` with
 * `DropdownMenu.Trigger` and `DropdownMenu.Content`, then fill the content with `DropdownMenu.Item`s,
 * `DropdownMenu.CheckboxItem`s, a `DropdownMenu.RadioGroup` of `DropdownMenu.RadioItem`s, and
 * `DropdownMenu.Label`/`DropdownMenu.Separator` for structure. Nested `DropdownMenu.Sub` +
 * `DropdownMenu.SubTrigger`/`DropdownMenu.SubContent` build submenus. Radix supplies the menu role,
 * roving focus, typeahead, and pointer/keyboard dismissal; the surface is re-fitted to the Nordstar
 * token contract and all indicator icons are inlined (no icon dependency).
 *
 * @param {object} props - Every `@radix-ui/react-dropdown-menu` Root prop (`open`, `modal`, …).
 * @returns {React.ReactNode} The dropdown-menu root that scopes a trigger/content pair.
 *
 * @example
 * ```tsx
 * <DropdownMenu>
 *     <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
 *     <DropdownMenu.Content>
 *         <DropdownMenu.Item onSelect={save}>Save</DropdownMenu.Item>
 *         <DropdownMenu.Separator />
 *         <DropdownMenu.Item onSelect={remove}>Delete</DropdownMenu.Item>
 *     </DropdownMenu.Content>
 * </DropdownMenu>
 * ```
 */
const DropdownMenu = Object.assign(
    (props: DropdownMenuProps) => {
        return <Primitive.Root {...props} />;
    },
    {
        CheckboxItem: DropdownMenuCheckboxItem,
        Content: DropdownMenuContent,
        displayName: 'Nordstar.DropdownMenu',
        Group: Primitive.Group,
        Item: DropdownMenuItem,
        Label: DropdownMenuLabel,
        RadioGroup: Primitive.RadioGroup,
        RadioItem: DropdownMenuRadioItem,
        Separator: DropdownMenuSeparator,
        Sub: Primitive.Sub,
        SubContent: DropdownMenuSubContent,
        SubTrigger: DropdownMenuSubTrigger,
        Trigger: Primitive.Trigger,
    },
);

export default DropdownMenu;
