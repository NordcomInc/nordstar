import { forwardRef } from '@nordcom/nordstar-system';
import type { ReactNode } from 'react';
import styles from './view.module.scss';

export type ViewProps = {
    children?: ReactNode;
};

const View = forwardRef<'main', ViewProps>((props, ref) => {
    const { className } = props;
    const classes = `${styles.content}${className ? ` ${className}` : ''}`;

    // TODO: Figure out a better way to exclude props from being passed to the DOM element.
    return (
        <div className={styles.container}>
            <main ref={ref} {...{ ...props, className: undefined }} className={classes} />
        </div>
    );
});

View.displayName = 'Nordstar.Layout.View';

export default View;
