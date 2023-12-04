import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import type { ReactNode } from 'react';
import styles from './label.module.scss';

export type LabelProps = {
    as?: As;
    children: ReactNode;
};

const Label = forwardRef<'label', LabelProps>(({ as: Tag = 'label', className, children, ...props }, ref) => {
    const classes = `${styles.container}${className ? ` ${className}` : ''}`;

    return (
        <Tag ref={ref} {...props} className={classes}>
            {children}
        </Tag>
    );
});

Label.displayName = 'Nordstar.Typography.Label';

export default Label;
