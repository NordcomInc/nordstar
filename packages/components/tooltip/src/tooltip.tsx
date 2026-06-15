'use client';

import { cn } from '@nordcom/nordstar-system';
import * as Primitive from '@radix-ui/react-tooltip';
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from 'react';

export type TooltipContentProps = ComponentPropsWithoutRef<typeof Primitive.Content>;

/**
 * `<Tooltip.Content/>`, the portal-rendered bubble shown next to the trigger.
 *
 * @param {object} props - Every `@radix-ui/react-tooltip` Content prop.
 * @param {number} [props.sideOffset=6] - Pixel gap between the trigger and the bubble.
 * @returns {React.ReactNode} The portalled tooltip content with a matching arrow.
 */
const TooltipContent = forwardRef<ComponentRef<typeof Primitive.Content>, TooltipContentProps>(
    ({ className, sideOffset = 6, children, ...props }, ref) => (
        <Primitive.Portal>
            <Primitive.Content
                className={cn(
                    'z-50 max-w-xs origin-[var(--radix-tooltip-content-transform-origin)] select-none text-balance rounded-md border-2 border-foreground border-solid bg-foreground px-2 py-1 font-body font-semibold text-background text-xs leading-tight shadow-overlay data-[state=delayed-open]:animate-overlay-in data-[state=instant-open]:animate-overlay-in',
                    className,
                )}
                ref={ref}
                sideOffset={sideOffset}
                {...props}
            >
                {children}
                <Primitive.Arrow className="fill-foreground" />
            </Primitive.Content>
        </Primitive.Portal>
    ),
);
TooltipContent.displayName = 'Nordstar.Tooltip.Content';

export type TooltipProps = ComponentPropsWithoutRef<typeof Primitive.Root>;

/**
 * `<Tooltip/>`, a floating label that explains an element on hover or keyboard focus.
 *
 * Wraps `@radix-ui/react-tooltip` as a compound component: mount `<Tooltip.Provider>` once near the
 * root of the app (or section) to share open/close timing, then compose `<Tooltip>` with
 * `<Tooltip.Trigger>` and `<Tooltip.Content>`. Radix handles focus, dismissal, collision-aware
 * positioning, and the `aria-describedby` wiring; the content is re-fitted to the Nordstar token
 * contract. Tooltips are supplementary — never put essential or interactive content inside one.
 *
 * @param {object} props - Every `@radix-ui/react-tooltip` Root prop (`open`, `defaultOpen`, `delayDuration`, …).
 * @returns {React.ReactNode} The tooltip root that scopes a single trigger/content pair.
 *
 * @example
 * ```tsx
 * <Tooltip.Provider>
 *     <Tooltip>
 *         <Tooltip.Trigger>Hover me</Tooltip.Trigger>
 *         <Tooltip.Content>Helpful hint</Tooltip.Content>
 *     </Tooltip>
 * </Tooltip.Provider>
 * ```
 */
const Tooltip = Object.assign(
    (props: TooltipProps) => {
        return <Primitive.Root {...props} />;
    },
    {
        Content: TooltipContent,
        displayName: 'Nordstar.Tooltip',
        Provider: Primitive.Provider,
        Trigger: Primitive.Trigger,
    },
);

export default Tooltip;
