import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import styles from './view.module.scss';

export type ViewProps = {
    as?: As;
    outerAs?: As;
    withoutWrapper?: boolean;
    outerClassName?: string | undefined;
};

/**
 * `<View/>`, a component to render the main content of a page.
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
        const classes = `${styles.content}${className ? ` ${className}` : ''}`;

        const inner = <Tag ref={ref} {...props} className={classes} />;
        if (withoutWrapper) return inner;

        return <Wrapper className={`${styles.container} ${outerClassName || ''}`}>{inner}</Wrapper>;
    }
);

View.displayName = 'Nordstar.Layout.View';

export default View;
