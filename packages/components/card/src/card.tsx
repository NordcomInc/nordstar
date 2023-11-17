import type { HTMLProps, ReactNode } from 'react';
import styles from './card.module.scss';

export type CardProps = {
    children?: ReactNode;
} & HTMLProps<HTMLDivElement>;

const Card = (props: CardProps) => {
    const { children } = props;

    return (
        <section {...props} className={`${styles.container} ${props.className || ''}`}>
            {children}
        </section>
    );
};

export default Card;
