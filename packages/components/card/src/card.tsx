import { forwardRef, type As, type CSSCustomProperties, type NordstarColor } from '@nordcom/nordstar-system';
import type { ComponentProps } from 'react';
import styles from './card.module.scss';

export type CardProps = {
    as?: As;
    variant?: 'default' | 'solid';
    color?: NordstarColor;
    style?: CSSCustomProperties;
};

/**
 * `<Card/>`, a component to render cards.
 *
 * @param {object} props - `<Card/>` props.
 * @param {As} [props.as] - The element to render the component as.
 * @param {'default' | 'solid'} [props.variant='default'] - The variant of the card.
 * @param {NordstarColor} [props.color='default'] - The color scheme of the card.
 * @param {CSSCustomProperties} [props.style] - Custom CSS properties.
 * @param {React.ReactNode} [props.children] - The children of the component.
 * @returns {React.ReactNode} The `<Card/>` component.
 */

const Card = forwardRef<'section', CardProps>(
    ({ as, className, variant = 'default', color = 'default', ...props }, ref) => {
        const Tag = as || 'section';
        const classes = `${styles.container}${className ? ` ${className}` : ''}`;

        return (
            <Tag ref={ref} draggable={false} {...props} data-variant={variant} data-color={color} className={classes} />
        );
    }
);
Card.displayName = 'Nordstar.Card';

export type CardDividerProps = {} & ComponentProps<'hr'>;

/**
 * `<Card.Divider/>`, a component to render card dividers.
 * @param {object} props - `<Card.Divider/>` props.
 * @returns {React.ReactNode} The `<Card.Divider/>` component.
 */
const Divider = ({ className, ...props }: CardDividerProps) => {
    const classes = `${styles.divider}${className ? ` ${className}` : ''}`;

    return <section draggable={false} {...props} className={classes} />;
};
Divider.displayName = 'Nordstar.Card.Divider';

export default Object.assign(Card, { Divider });
