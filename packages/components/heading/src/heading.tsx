import type { As } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';
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

    return (
        <Tag
            {...props}
            className={cn(
                styles.container,
                'font-heading',
                level === 'h1' && 'hyphens-auto font-extrabold text-4xl uppercase leading-12',
                level === 'h2' && 'font-normal text-2xl text-foreground-highlight lowercase leading-8',
                level === 'h3' && 'font-extrabold text-xl lowercase leading-8',
                level === 'h4' && 'font-bold text-base uppercase leading-leading-2',
                className,
            )}
            data-level={level}
            ref={ref}
        />
    );
});

Heading.displayName = 'Nordstar.Typography.Heading';

export default Heading;
