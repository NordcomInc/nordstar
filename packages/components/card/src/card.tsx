import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import styles from './card.module.scss';

export type CardProps = {
    as?: As;
    variant?: 'default' | 'solid';
    color?: 'default' | 'primary' | 'secondary';
};

/**
 * `<Card/>`, a component to render cards with optional variants and colors.
 *
 * @param {object} props - `<Card/>` props.
 * @param {As} [props.as] - The element to render the component as.
 * @param {('default' | 'solid')} [props.variant] - The variant of the card.
 * @param {('default' | 'primary' | 'secondary')} [props.color] - The color theme of the card.
 * @returns {ReactNode} The `<Card/>` component.
 */
const Card = forwardRef<'section', CardProps>(({ as: Tag = 'section', className, ...props }, ref) => {
    const { variant, color, ...restProps } = props;
const variantClass = variant === 'solid' ? styles.solid : undefined;
const colorClass = color === 'primary' ? styles.primary : color === 'secondary' ? styles.secondary : undefined;
const classes = classnames(styles.container, variantClass, colorClass, className);

    return <Tag ref={ref} {...props} className={classes} />;
});

Card.displayName = 'Nordstar.Card';

export default Card;
