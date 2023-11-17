import { forwardRef } from '@nordcom/nordstar-system';
import type { ReactNode } from 'react';
import styles from './view.module.scss';

export type ViewProps = {
    children?: ReactNode;
};

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
