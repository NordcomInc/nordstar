import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import styles from './card.module.scss';

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
 * @returns {ReactNode} The `<Card/>` component.
 */
const Card = forwardRef<'section', CardProps>(({ as: Tag = 'section', className, ...props }, ref) => {
    const classes = `${styles.container}${className ? ` ${className}` : ''}`;

    const cardStyle = props.variant === 'solid' ? { backgroundColor: props.color === 'default' ? 'var(--color-foreground)' : props.color === 'primary' ? 'var(--color-primary)' : 'var(--color-secondary)' } : {};
return <Tag ref={ref} {...props} className={classes} style={cardStyle} />;
});

Card.displayName = 'Nordstar.Card';

export default Card;
