import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import styles from './heading.module.scss';

export type HeadingProps = {
    level?: 'h1' | 'h2' | 'h3' | 'h4';
    as?: As;
};

const Heading = forwardRef<'h1', HeadingProps>((props, ref) => {
    const { as, level = 'h1', className } = props;

    const Tag = as || level;
    const classes = `${styles.container} ${styles[level]}${className ? ` ${className}` : ''}`;

    // TODO: Figure out a better way to exclude props from being passed to the DOM element.
    return (
        <Tag ref={ref} {...{ ...props, level: undefined, as: undefined, className: undefined }} className={classes} />
    );
});

Heading.displayName = 'Nordstar.Typography.Heading';

export default Heading;
