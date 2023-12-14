import type { As, CSSCustomProperties } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import styles from './card.module.scss';

export type CardProps = {
    as?: As;
    variant?: 'default' | 'solid';
    color?: 'default' | 'primary' | 'secondary';
    style?: CSSCustomProperties;
};

/**
 * `<Card/>`, a component to render cards.
 *
 * @param {object} props - `<Card/>` props.
 * @param {As} [props.as] - The element to render the component as.
 * @param {'default' | 'solid'} [props.variant='default'] - The variant of the card.
 * @param {'default' | 'primary' | 'secondary'} [props.color='default'] - The color scheme of the card.
 * @returns {ReactNode} The `<Card/>` component.
 */
const Card = forwardRef<'section', CardProps>(
    ({ as: Tag = 'section', className, variant = 'default', color = 'default', ...props }, ref) => {
        const classes = `${styles.container}${className ? ` ${className}` : ''}`;

        return <Tag ref={ref} data-variant={variant} data-color={color} {...props} className={classes} />;
    }
);

Card.displayName = 'Nordstar.Card';

export default Card;
