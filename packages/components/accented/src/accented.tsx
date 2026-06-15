import type { As, NordstarColor } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';

export type AccentedProps = {
    as?: As;

    color?: NordstarColor;
};

/**
 * `<Accented/>`, a transparent inline wrapper that highlights text with an accent color.
 *
 * @remarks
 * Renders with `display: contents`, so it only affects inherited properties such as
 * `color`. Box-level utilities (padding, background, borders) passed via `className`
 * have no effect unless `display` is also overridden.
 *
 * @param {object} props - `<Accented/>` props.
 * @param {As} [props.as='span'] - The element to render the component as.
 * @param {NordstarColor} [props.color='primary'] - The accent color; `default` inherits the surrounding color.
 * @returns {React.ReactNode} The `<Accented/>` component.
 */
const Accented = forwardRef<'span', AccentedProps>(
    ({ as: Tag = 'span', color = 'primary', className, ...props }, ref) => {
        return (
            <Tag
                {...props}
                className={cn(
                    'contents',
                    color === 'foreground' && 'text-foreground',
                    color === 'primary' && 'text-primary',
                    color === 'secondary' && 'text-secondary',
                    className,
                )}
                data-color={color}
                ref={ref}
            />
        );
    },
);

Accented.displayName = 'Nordstar.Typography.Accented';

export default Accented;
