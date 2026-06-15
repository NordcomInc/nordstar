import type { As } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';

export type ViewProps = {
    as?: As;
    outerAs?: As;
    withoutWrapper?: boolean;
    outerClassName?: string | undefined;
};

/**
 * `<View/>`, a component to render the main content of a page.
 *
 * @remarks
 * `className`, `ref` and spread props target the inner content element (`as`,
 * default `<article>`); use `outerClassName`/`outerAs` to style the landmark
 * wrapper (default `<main>`). Only one `<View/>` per page should keep the default
 * `outerAs="main"` — use `outerAs="section"` or `withoutWrapper` for secondary
 * regions to avoid duplicate `<main>` landmarks.
 *
 * @param {object} props - `<View/>` props.
 * @param {As} [props.as] - The element to render the component as.
 * @param {As} [props.outerAs] - The element to render the outer part of the component as.
 * @param {boolean} [props.withoutWrapper] - Don't include the wrapper/outer part of the component.
 * @param {string | undefined} [props.outerClassName] - The class name for the outer part of the component.
 * @returns {ReactNode} The `<View/>` component.
 */
const View = forwardRef<'main', ViewProps>(
    ({ as: Tag = 'article', outerAs: Wrapper = 'main', withoutWrapper, className, outerClassName, ...props }, ref) => {
        const inner = (
            <Tag
                draggable={false}
                {...props}
                className={cn(
                    'mx-auto my-3 flex w-full max-w-(--nordstar-layout-page-width) flex-col gap-3 overflow-x-clip',
                    className,
                )}
                data-without-wrapper={!!withoutWrapper}
                ref={ref}
            />
        );
        if (withoutWrapper) {
            return inner;
        }

        return <Wrapper className={cn('flex flex-col items-center justify-start', outerClassName)}>{inner}</Wrapper>;
    },
);

View.displayName = 'Nordstar.Layout.View';

export default View;
