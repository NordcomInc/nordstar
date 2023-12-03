import { forwardRef } from '@nordcom/nordstar-system';
import styles from './view.module.scss';

export type ViewProps = {};

/**
 * `<View/>`, a component to render the main content of a page.
 *
 * @param {object} props - `<View/>` props.
 * @returns {ReactNode} The `<View/>` component.
 */
const View = forwardRef<'main', ViewProps>(({ className, ...props }, ref) => {
    const classes = `${styles.content}${className ? ` ${className}` : ''}`;

    return (
        <div className={styles.container}>
            <main ref={ref} {...props} className={classes} />
        </div>
    );
});

View.displayName = 'Nordstar.Layout.View';

export default View;
