import type { As } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';

export type SeparatorProps = {
    as?: As;

    /** Visual and semantic axis of the rule. Defaults to `'horizontal'`. */
    orientation?: 'horizontal' | 'vertical';

    /**
     * When `true` (default) the rule is purely visual and removed from the accessibility
     * tree (`role="none"`). Set to `false` when the divider conveys a real grouping
     * boundary that assistive tech should announce (`role="separator"`).
     */
    decorative?: boolean;
};

/**
 * `<Separator/>`, a thin rule dividing content along one axis.
 *
 * Hand-rolled (no Radix dependency): the separator is a single element that mirrors the
 * decorative-vs-semantic distinction the WAI-ARIA `separator` role makes. A decorative
 * separator is hidden from assistive tech; a non-decorative one is announced with an
 * explicit `aria-orientation` so screen-reader users perceive the grouping the line implies.
 *
 * @param {object} props - `<Separator/>` props.
 * @param {As} [props.as='div'] - The element to render the component as.
 * @param {'horizontal' | 'vertical'} [props.orientation='horizontal'] - The axis of the rule.
 * @param {boolean} [props.decorative=true] - Hide the rule from the accessibility tree.
 * @returns {React.ReactNode} The `<Separator/>` component.
 *
 * @example
 * ```tsx
 * <Separator />
 * <Separator orientation="vertical" decorative={false} />
 * ```
 */
const Separator = forwardRef<'div', SeparatorProps>(
    ({ as: Tag = 'div', orientation = 'horizontal', decorative = true, className, ...props }, ref) => {
        return (
            <Tag
                data-orientation={orientation}
                ref={ref}
                {...(decorative ? { role: 'none' } : { 'aria-orientation': orientation, role: 'separator' })}
                className={cn(
                    'shrink-0 border-0 bg-foreground-highlight',
                    orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px self-stretch',
                    className,
                )}
                {...props}
            />
        );
    },
);

Separator.displayName = 'Nordstar.Separator';

export default Separator;
