import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import styles from '@nordcom/nordstar-card/src/card.module.scss';

export type CardProps = {
    variant?: 'default' | 'solid';
    color?: 'default' | 'primary' | 'secondary';
    as?: As;
};

/**
 * `<Card/>`, a component to render cards.
 *
 * @param {object} props - `<Card/>` props.
 * @param {As} [props.as] - The element to render the component as.
 * @param {'default' | 'solid'} [props.variant] - The card variant.
 * @param {'default' | 'primary' | 'secondary'} [props.color] - The color of the card background.
 * @returns {ReactNode} The `<Card/>` component.
 */
const Card = forwardRef<'section', CardProps>(({ as: Tag = 'section', className, ...props }, ref) => {
    const classes = `${styles.container}${className ? ` ${className}` : ''}`;

    const bgColor = props.color === 'default' ? 'var(--color-background)' : 'var(--button-accent)';
    return <Tag ref={ref} {...props} className={classes} style={{'background-color': bgColor}} />;
});

Card.displayName = 'Nordstar.Card';

export default Card;
