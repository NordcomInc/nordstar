import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import styles from './card.module.scss';

export type CardProps = {
    as?: As;
    variant?: 'solid' | 'default';
    color?: 'default' | 'primary' | 'secondary';
};

/**
 * `<Card/>`, a component to render cards.
 *
 * @param {'solid' | 'default' | undefined} [props.variant='default'] - The appearance variant of the card.
 * @param {'default' | 'primary' | 'secondary' | undefined} [props.color='default'] - The color variant of the card.
 *
 * @param {object} props - `<Card/>` props.
 * @param {As} [props.as] - The element to render the component as.
 * @returns {ReactNode} The `<Card/>` component.
 */
const Card = forwardRef<'section', CardProps>(({ as: Tag = 'section', variant = 'default', color = 'default', className, ...props }, ref) => {
    const classes = `${styles.container}${className ? ` ${className}` : ''}`;

    return <Tag ref={ref} {...props} className={classes} data-variant={variant} data-color={color} />;
});

Card.displayName = 'Nordstar.Card';

export default Card;
