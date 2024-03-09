import { forwardRef } from '@nordcom/nordstar-system';
import styles from './button.module.scss';

import type { As, NordstarColor } from '@nordcom/nordstar-system';
import type { ReactNode } from 'react';

export type ButtonProps = {
    as?: As;

    variant?: 'outline' | 'solid';
    color?: NordstarColor;
    icon?: ReactNode;
    disabled?: boolean;
};

/**
 * `<Button/>`, a generalized button element.
 *
 * @param {object} props - `<Button/>` props.
 * @param {As} [props.as] - The element to render the component as.
 * @param {'outline' | 'solid'} [props.variant='outline'] - The variant.
 * @param {NordstarColor} [props.color='default'] - The color scheme.
 * @returns {React.ReactNode} The `<Button/>` component.
 *
 * @example
 * ```tsx
 * <Button>Button</Button>
 * ```
 */
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
