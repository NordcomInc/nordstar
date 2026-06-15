'use client';

import { cn } from '@nordcom/nordstar-system';
import * as Primitive from '@radix-ui/react-select';
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef, type SVGProps } from 'react';

/**
 * Inline chevron icon (no external icon dependency) used by the trigger and scroll affordances.
 *
 * @param {SVGProps<SVGSVGElement>} props - Standard SVG props; `direction` picks the arrow.
 * @returns {React.ReactNode} A 1em chevron that inherits `currentColor`.
 */
function Chevron({ direction = 'down', ...props }: SVGProps<SVGSVGElement> & { direction?: 'down' | 'up' }) {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            {...props}
        >
            <path d={direction === 'down' ? 'm6 9 6 6 6-6' : 'm6 15 6-6 6 6'} />
        </svg>
    );
}

/**
 * Inline check icon shown next to the active option.
 *
 * @param {SVGProps<SVGSVGElement>} props - Standard SVG props.
 * @returns {React.ReactNode} A 1em check mark that inherits `currentColor`.
 */
function Check(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

export type SelectProps = ComponentPropsWithoutRef<typeof Primitive.Root>;
export type SelectTriggerProps = ComponentPropsWithoutRef<typeof Primitive.Trigger>;
export type SelectContentProps = ComponentPropsWithoutRef<typeof Primitive.Content>;
export type SelectItemProps = ComponentPropsWithoutRef<typeof Primitive.Item>;

const SelectTrigger = forwardRef<ComponentRef<typeof Primitive.Trigger>, SelectTriggerProps>(
    ({ className, children, ...props }, ref) => (
        <Primitive.Trigger
            className={cn(
                'group flex h-10 w-full items-center justify-between gap-2 rounded-sm border-2 border-foreground-highlight border-solid bg-background px-3 font-body text-foreground text-sm outline-none transition-colors duration-150 hover:border-foreground focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-foreground-highlight [&>span]:truncate',
                className,
            )}
            ref={ref}
            {...props}
        >
            {children}
            <Primitive.Icon asChild>
                <Chevron
                    className="size-4 shrink-0 opacity-60 transition-transform duration-200 ease-out-soft group-data-[state=open]:rotate-180"
                    direction="down"
                />
            </Primitive.Icon>
        </Primitive.Trigger>
    ),
);
SelectTrigger.displayName = 'Nordstar.Select.Trigger';

const SelectScrollUpButton = forwardRef<
    ComponentRef<typeof Primitive.ScrollUpButton>,
    ComponentPropsWithoutRef<typeof Primitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
    <Primitive.ScrollUpButton
        className={cn('flex cursor-default items-center justify-center py-1', className)}
        ref={ref}
        {...props}
    >
        <Chevron className="size-4" direction="up" />
    </Primitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = 'Nordstar.Select.ScrollUpButton';

const SelectScrollDownButton = forwardRef<
    ComponentRef<typeof Primitive.ScrollDownButton>,
    ComponentPropsWithoutRef<typeof Primitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
    <Primitive.ScrollDownButton
        className={cn('flex cursor-default items-center justify-center py-1', className)}
        ref={ref}
        {...props}
    >
        <Chevron className="size-4" direction="down" />
    </Primitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = 'Nordstar.Select.ScrollDownButton';

const SelectContent = forwardRef<ComponentRef<typeof Primitive.Content>, SelectContentProps>(
    ({ className, children, position = 'popper', ...props }, ref) => (
        <Primitive.Portal>
            <Primitive.Content
                className={cn(
                    'relative z-50 max-h-96 min-w-32 origin-[var(--radix-select-content-transform-origin)] overflow-hidden rounded-md border-2 border-foreground border-solid bg-background text-foreground shadow-overlay data-[state=open]:animate-overlay-in',
                    position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1',
                    className,
                )}
                position={position}
                ref={ref}
                {...props}
            >
                <SelectScrollUpButton />
                <Primitive.Viewport
                    className={cn(
                        'p-1',
                        position === 'popper' &&
                            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
                    )}
                >
                    {children}
                </Primitive.Viewport>
                <SelectScrollDownButton />
            </Primitive.Content>
        </Primitive.Portal>
    ),
);
SelectContent.displayName = 'Nordstar.Select.Content';

const SelectLabel = forwardRef<ComponentRef<typeof Primitive.Label>, ComponentPropsWithoutRef<typeof Primitive.Label>>(
    ({ className, ...props }, ref) => (
        <Primitive.Label
            className={cn('px-2 py-1.5 font-bold text-foreground-highlight text-xs uppercase tracking-wide', className)}
            ref={ref}
            {...props}
        />
    ),
);
SelectLabel.displayName = 'Nordstar.Select.Label';

const SelectItem = forwardRef<ComponentRef<typeof Primitive.Item>, SelectItemProps>(
    ({ className, children, ...props }, ref) => (
        <Primitive.Item
            className={cn(
                'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-2 pl-8 font-body font-medium text-sm outline-none transition-colors focus:bg-background-highlight data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                className,
            )}
            ref={ref}
            {...props}
        >
            <span className="absolute left-2 flex size-4 items-center justify-center">
                <Primitive.ItemIndicator>
                    <Check className="size-4" />
                </Primitive.ItemIndicator>
            </span>
            <Primitive.ItemText>{children}</Primitive.ItemText>
        </Primitive.Item>
    ),
);
SelectItem.displayName = 'Nordstar.Select.Item';

const SelectSeparator = forwardRef<
    ComponentRef<typeof Primitive.Separator>,
    ComponentPropsWithoutRef<typeof Primitive.Separator>
>(({ className, ...props }, ref) => (
    <Primitive.Separator className={cn('-mx-1 my-1 h-px bg-foreground-highlight', className)} ref={ref} {...props} />
));
SelectSeparator.displayName = 'Nordstar.Select.Separator';

/**
 * `<Select/>`, a dropdown for choosing a single option from a list.
 *
 * Wraps `@radix-ui/react-select` as a compound component: compose `Select` with `Select.Trigger`
 * (which holds a `Select.Value`), then a `Select.Content` of `Select.Item`s, optionally organised
 * with `Select.Group`, `Select.Label`, and `Select.Separator`. Radix provides typeahead, full
 * keyboard control, collision-aware positioning, and native form integration; the surface is
 * re-fitted to the Nordstar token contract. Controlled (`value` + `onValueChange`) and uncontrolled
 * (`defaultValue`) usage both work.
 *
 * @param {object} props - Every `@radix-ui/react-select` Root prop.
 * @returns {React.ReactNode} The select root that scopes a single trigger/content pair.
 *
 * @example
 * ```tsx
 * <Select defaultValue="apple">
 *     <Select.Trigger><Select.Value placeholder="Pick a fruit" /></Select.Trigger>
 *     <Select.Content>
 *         <Select.Item value="apple">Apple</Select.Item>
 *         <Select.Item value="pear">Pear</Select.Item>
 *     </Select.Content>
 * </Select>
 * ```
 */
const Select = Object.assign(
    (props: SelectProps) => {
        return <Primitive.Root {...props} />;
    },
    {
        Content: SelectContent,
        displayName: 'Nordstar.Select',
        Group: Primitive.Group,
        Item: SelectItem,
        Label: SelectLabel,
        Separator: SelectSeparator,
        Trigger: SelectTrigger,
        Value: Primitive.Value,
    },
);

export default Select;
