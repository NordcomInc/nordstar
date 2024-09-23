import type { As, NordstarColor } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';

export type AccentedProps = {
    as?: As;

    color?: NordstarColor;
};

/**
 * `<Accented/>`, a component to highlight text with an accent color.
 *
 * @param {object} props - `<Accented/>` props.
 * @param {As} [props.as='span'] - The element to render the component as.
 * @param {NordstarColor} [props.color='default'] - The color of the accented text.
 * @returns {React.ReactNode} The `<Accented/>` component.
 */
const Accented = forwardRef<'span', AccentedProps>(
    ({ as: Tag = 'span', color = 'default', className, ...props }, ref) => {
        return (
            <Tag
                ref={ref}
                {...props}
                className={cn(
                    color === 'foreground' && 'text-foreground',
                    (color === 'default' || color === 'primary') && 'text-primary',
                    color === 'secondary' && 'text-secondary',
                    className
                )}
            />
        );
    }
);

Accented.displayName = 'Nordstar.Typography.Accented';

export default Accented;
