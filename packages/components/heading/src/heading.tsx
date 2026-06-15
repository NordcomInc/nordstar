import type { As } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';

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
    // When rendered as a non-heading element (e.g. `as="div"`), the element still
    // looks like a heading, so restore heading semantics for assistive tech. Native
    // headings (and custom components) keep their own semantics.
    const isNativeHeading = typeof Tag === 'string' && /^h[1-6]$/.test(Tag);

    return (
        <Tag
            {...(typeof Tag === 'string' && !isNativeHeading
                ? { 'aria-level': Number(level.slice(1)), role: 'heading' }
                : {})}
            {...props}
            className={cn(
                'font-heading',
                // Decorative trailing period on non-empty h1/h2. The `/ ''` alt-text keeps
                // it out of the accessibility tree so screen readers don't say "Title.".
                (level === 'h1' || level === 'h2') && "[&:not(:empty)]:after:[content:'.'_/_'']",
                level === 'h1' && 'hyphens-auto font-extrabold text-4xl uppercase leading-12',
                level === 'h2' && 'font-normal text-2xl text-foreground-highlight lowercase leading-8',
                level === 'h3' && 'font-extrabold text-xl lowercase leading-8',
                level === 'h4' && 'font-bold text-base uppercase leading-6',
                className,
            )}
            data-level={level}
            ref={ref}
        />
    );
});

Heading.displayName = 'Nordstar.Typography.Heading';

export default Heading;
