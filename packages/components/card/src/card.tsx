import type { HTMLProps, ReactNode } from 'react';

export type CardProps = {
    children?: ReactNode;
} & HTMLProps<HTMLDivElement>;

const Card = (props: CardProps) => {
    const { children } = props;

    return <section {...props}>{children}</section>;
};

export default Card;
