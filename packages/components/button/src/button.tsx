import type { As } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import type { ReactNode } from 'react';
import styles from './button.module.scss';

export type ButtonProps = {
    variant?: 'solid' | 'outline';
    color?: 'default' | 'primary' | 'secondary';
    icon?: ReactNode;
    as?: As;
    disabled?: boolean;
};

const Button = forwardRef<'button', ButtonProps>(
    (
        {
            variant = 'solid',
            color = 'default',
            icon = null,
            as: Tag = 'button',
            disabled,
            className,
            type,
            children,
            ...props
        },
        ref
    ) => {
        const classes = `${styles.container}${className ? ` ${className}` : ''}`;

        return (
            <Tag
                ref={ref}
                role="button"
                type={type || 'button'}
                data-variant={variant}
                data-color={color}
                {...props}
                {...(typeof disabled !== 'undefined' && {
                    disabled,
                    'aria-disabled': disabled
                })}
                className={classes}
            >
                {icon ? <div data-icon>{icon}</div> : null}
                <div data-content>{children}</div>
            </Tag>
        );
    }
);

Button.displayName = 'Nordstar.Button';

export default Button;
