import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import styles from './card.module.scss';

export type CardProps = {
    variant?: 'default' | 'solid',
    color?: 'default' | 'primary' | 'secondary',
    as?: As;
};

/**
 * `<Card/>`, a component to render cards.
 *
 * @param {object} props - `<Card/>` props.
 * @param {As} [props.as] - The element to render the component as.
 * @param {object} props - `<Card/>` props.
@param {As} [props.as] - The element to render the component as.
@param {'default' | 'solid'} [props.variant] - The variant of the card.
@param {'default' | 'primary' | 'secondary'} [props.color] - The color of the card background.
@returns {ReactNode} The `<Card/>` component.
 */
const Card = forwardRef<'section', CardProps>(({ as: Tag = 'section', className, ...props }, ref) => {
    const classes = `${styles.container}${className ? ` ${className}` : ''}`;

    return <Tag ref={ref} {...props} className={classes} />;
});

Card.displayName = 'Nordstar.Card';

export default Card;
