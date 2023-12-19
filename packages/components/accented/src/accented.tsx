import type { As, NordstarColor } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import styles from './accented.module.scss';

export type AccentedProps = {
    as?: As;

    color?: NordstarColor;

    /** @deprecated use the `color` prop instead */
    secondary?: boolean;
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
    ({ as: Tag = 'span', color = 'default', secondary, className, ...props }, ref) => {
        return (
            <Tag
                ref={ref}
                data-color={!!secondary ? 'secondary' : color}
                {...props}
                className={`${styles.container}${className ? ` ${className}` : ''}`}
            />
        );
    }
);

Accented.displayName = 'Nordstar.Typography.Accented';

export default Accented;
