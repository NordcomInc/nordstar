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
            ref={ref}
            className={cn(
                styles.container,
                'font-heading',
                level === 'h1' && 'hyphens-auto text-4xl font-extrabold uppercase leading-none',
                level === 'h2' && 'text-2xl font-normal lowercase leading-tight text-foreground-highlight',
                level === 'h3' && 'text-xl font-extrabold lowercase leading-tight',
                level === 'h4' && 'text-base font-bold uppercase leading-none',
                className
            )}
            data-level={level}
        />
    );
});

Heading.displayName = 'Nordstar.Typography.Heading';

export default Heading;
