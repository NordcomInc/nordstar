import type { ElementType, HTMLProps } from 'react';
import styles from './heading.module.scss';

export type HeadingProps = {
    subheading?: boolean;
    as?: ElementType;
} & HTMLProps<HTMLHeadingElement>;

const Heading = (props: HeadingProps) => {
    const { as, subheading, children, className } = props;

    const Tag = as || subheading ? 'h2' : 'h1';
    const classes = `${styles.container} ${subheading ? styles.subheading : styles.heading}${
        className ? ` ${className}` : ''
    }`;

    return (
        <Tag {...{ ...props, subheading: undefined }} className={classes}>
            {children}
        </Tag>
    );
};

export default Heading;
