'use client';

import { cn } from '@nordcom/nordstar-system';
import * as Primitive from '@radix-ui/react-accordion';
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef, type SVGProps } from 'react';

/**
 * Inline chevron icon (no external icon dependency) that rotates when its section opens.
 *
 * @param {SVGProps<SVGSVGElement>} props - Standard SVG props.
 * @returns {React.ReactNode} A 1em downward chevron inheriting `currentColor`.
 */
function Chevron(props: SVGProps<SVGSVGElement>) {
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
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

export type AccordionItemProps = ComponentPropsWithoutRef<typeof Primitive.Item>;
export type AccordionTriggerProps = ComponentPropsWithoutRef<typeof Primitive.Trigger>;
export type AccordionContentProps = ComponentPropsWithoutRef<typeof Primitive.Content>;

const AccordionItem = forwardRef<ComponentRef<typeof Primitive.Item>, AccordionItemProps>(
    ({ className, ...props }, ref) => (
        <Primitive.Item
            className={cn('border-foreground-highlight border-b-2 border-solid', className)}
            ref={ref}
            {...props}
        />
    ),
);
AccordionItem.displayName = 'Nordstar.Accordion.Item';

const AccordionTrigger = forwardRef<ComponentRef<typeof Primitive.Trigger>, AccordionTriggerProps>(
    ({ className, children, ...props }, ref) => (
        <Primitive.Header className="flex">
            <Primitive.Trigger
                className={cn(
                    'flex flex-1 cursor-pointer items-center justify-between gap-2 py-3 text-left font-body font-bold text-foreground text-sm outline-none transition-colors hover:text-foreground-highlight focus-visible:text-foreground-highlight [&[data-state=open]>svg]:rotate-180',
                    className,
                )}
                ref={ref}
                {...props}
            >
                {children}
                <Chevron className="size-4 shrink-0 text-foreground-highlight transition-transform duration-200" />
            </Primitive.Trigger>
        </Primitive.Header>
    ),
);
AccordionTrigger.displayName = 'Nordstar.Accordion.Trigger';

const AccordionContent = forwardRef<ComponentRef<typeof Primitive.Content>, AccordionContentProps>(
    ({ className, children, ...props }, ref) => (
        <Primitive.Content className="overflow-hidden font-body text-foreground-highlight text-sm" ref={ref} {...props}>
            <div className={cn('pb-3', className)}>{children}</div>
        </Primitive.Content>
    ),
);
AccordionContent.displayName = 'Nordstar.Accordion.Content';

export type AccordionProps = ComponentPropsWithoutRef<typeof Primitive.Root>;

/**
 * `<Accordion/>`, a vertically stacked set of collapsible sections.
 *
 * Wraps `@radix-ui/react-accordion` as a compound component: compose `Accordion` with
 * `Accordion.Item`s, each holding an `Accordion.Trigger` and `Accordion.Content`. Set `type="single"`
 * (optionally `collapsible`) to allow one open section at a time, or `type="multiple"` for several.
 * Radix handles the disclosure semantics, roving focus, and keyboard navigation; the surface is
 * re-fitted to the Nordstar token contract, and the trigger chevron rotates on open.
 *
 * @param {object} props - Every `@radix-ui/react-accordion` Root prop (`type`, `collapsible`, `value`, …).
 * @returns {React.ReactNode} The accordion root that scopes its items.
 *
 * @example
 * ```tsx
 * <Accordion type="single" collapsible>
 *     <Accordion.Item value="a">
 *         <Accordion.Trigger>Shipping</Accordion.Trigger>
 *         <Accordion.Content>Ships in 1–2 business days.</Accordion.Content>
 *     </Accordion.Item>
 * </Accordion>
 * ```
 */
const Accordion = Object.assign(
    (props: AccordionProps) => {
        return <Primitive.Root {...props} />;
    },
    {
        Content: AccordionContent,
        displayName: 'Nordstar.Accordion',
        Item: AccordionItem,
        Trigger: AccordionTrigger,
    },
);

export default Accordion;
