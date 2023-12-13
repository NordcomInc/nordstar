import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import styles from './card.module.scss';

export type CardProps = {
    as?: As;
    variant?: 'default' | 'solid';
    color?: 'default' | 'primary' | 'secondary';
};

/**
 * `<Card/>`, a component to render cards.
 *
 * @param {object} props - `<Card/>` props.
 * @param {As} [props.as] - The element to render the component as.
 * @returns {ReactNode} The `<Card/>` component.
 */
const Card = forwardRef<'section', CardProps>(({ as: Tag = 'section', variant, color, className, ...props }, ref) => {
    // We are not using className to apply variant and color anymore, hence it's being omitted
    return <Tag ref={ref} {...props} data-variant={variant} data-color={color} className={styles.container} />;
});

Card.displayName = 'Nordstar.Card';

export default Card;
