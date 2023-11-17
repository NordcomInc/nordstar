import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import type { ReactNode } from 'react';
import styles from './card.module.scss';

export type CardProps = {
    children?: ReactNode;
    as?: As;
};

const Card = forwardRef<'section', CardProps>(({ as, className, ...props }, ref) => {
    const Tag = as || 'section';
    const classes = `${styles.container}${className ? ` ${className}` : ''}`;

    return <Tag ref={ref} {...props} className={classes} />;
});

Card.displayName = 'Nordstar.Card';

export default Card;
