import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import styles from './accented.module.scss';

export type AccentedProps = {
    secondary?: boolean;
    as?: As;
};

/**
 * `<Accented/>`, a component to highlight text with an accent color.
 *
 * @param {object} props - `<Accented/>` props.
 * @param {boolean} [props.secondary] - Whether to use the secondary accent color.
 * @param {As} [props.as='span'] - The element to render the component as.
 * @returns {ReactNode} The `<Accented/>` component.
 */
const Accented = forwardRef<'span', AccentedProps>(
    ({ as: Tag = 'span', secondary = 'false', className, ...props }, ref) => {
        const classes = `${styles[secondary ? 'secondary' : 'primary']}${className ? ` ${className}` : ''}`;

        return <Tag ref={ref} {...props} className={classes} />;
    }
);

Accented.displayName = 'Nordstar.Typography.Accented';

export default Accented;
