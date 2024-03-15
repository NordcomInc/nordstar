import { forwardRef } from '@nordcom/nordstar-system';
import styles from './card.module.scss';

import type { As, CSSCustomProperties, NordstarColor } from '@nordcom/nordstar-system';
import type { ComponentProps } from 'react';

export type CardProps = {
    as?: As;
    variant?: 'outline' | 'solid';
    color?: NordstarColor;
    borderless?: boolean;
    style?: CSSCustomProperties;
};

/**
 * `<Card/>`, a consistent card-like container for blocks of content.
 *
 * @param {CardProps} props - `<Card/>` props.
 * @param {As} [props.as] - The element to render the component as.
 * @param {'outline' | 'solid'} [props.variant='outline'] - The variant.
 * @param {NordstarColor} [props.color='default'] - The color scheme.
 * @param {CSSCustomProperties} [props.style] - Custom CSS properties.
 * @param {React.ReactNode} [props.children] - The children of the component.
 * @returns {React.ReactNode} The `<Card/>` component.
 */
const Card = forwardRef<'section', CardProps>(
    ({ as, className, variant = 'outline', color = 'default', borderless = false, ...props }, ref) => {
        const Tag = as || 'section';
        const classes = `${styles.container}${className ? ` ${className}` : ''}`;

        return (
            <Tag
                ref={ref}
                draggable={false}
                {...props}
                data-variant={variant}
                data-color={color}
                data-borderless={borderless}
                className={classes}
            />
        );
    }
);
Card.displayName = 'Nordstar.Card';

export type CardDividerProps = {} & ComponentProps<'hr'>;

/**
 * `<Card.Divider/>`, a component to render card dividers.
 * @param {CardDividerProps} props - `<Card.Divider/>` props.
 * @returns {React.ReactNode} The `<Card.Divider/>` component.
 */
const Divider = ({ className, ...props }: CardDividerProps) => {
    const classes = `${styles.divider}${className ? ` ${className}` : ''}`;

    return <section draggable={false} {...props} className={classes} />;
};
Divider.displayName = 'Nordstar.Card.Divider';

export default Object.assign(Card, { Divider });
