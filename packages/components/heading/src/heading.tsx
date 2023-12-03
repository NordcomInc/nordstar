import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import styles from './heading.module.scss';

export type HeadingProps = {
    level?: 'h1' | 'h2' | 'h3' | 'h4';
    as?: As;
};

/**
 * `<Heading/>`, a component to render headings.
 *
 * @param {object} props - `<Heading/>` props.
 * @param {string} [props.level='h1'] - The level of the heading.
 * @param {As} [props.as] - The element to render the component as.
 * @returns {ReactNode} The `<Heading/>` component.
 */
const Heading = forwardRef<'h1', HeadingProps>(({ as, level = 'h1', className, ...props }, ref) => {
    const Tag = as || level;
    const classes = `${styles.container} ${styles[level]}${className ? ` ${className}` : ''}`;

    return <Tag ref={ref} {...props} className={classes} />;
});

Heading.displayName = 'Nordstar.Typography.Heading';

export default Heading;
