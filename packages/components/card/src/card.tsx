import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import type { ReactNode } from 'react';
import styles from './card.module.scss';

export type CardProps = {
    children?: ReactNode;
    as?: As;
};

const Card = forwardRef<'section', CardProps>((props, ref) => {
    const { as, className } = props;

    const Tag = as || 'section';
    const classes = `${styles.container}${className ? ` ${className}` : ''}`;

    // TODO: Figure out a better way to exclude props from being passed to the DOM element.
    return <Tag ref={ref} {...{ ...props, as: undefined, className: undefined }} className={classes} />;
});

Card.displayName = 'Nordstar.Card';

export default Card;
