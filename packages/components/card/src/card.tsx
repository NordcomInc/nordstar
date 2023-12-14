import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import styles from './card.module.scss';

export type CardProps = {
    as?: As;
};

/**
 * `<Card/>`, a component to render cards.\n* @param {('default' | 'solid')} [props.variant='default'] - The card variant.
 *
 * @param {object} props - `<Card/>` props.
 * @param {As} [props.as] - The element to render the component as.
 * @returns {ReactNode} The `<Card/>` component.
 */
const Card = forwardRef<'section', CardProps>(({ as: Tag = 'section', className, ...props }, ref) => {
    const classes = `${styles.container} ${props.variant === 'solid' ? styles.solid : ''}${className ? ` ${className}` : ''}`;

    return <Tag ref={ref} {...props} className={classes} />;
});

Card.displayName = 'Nordstar.Card';

export default Card;
