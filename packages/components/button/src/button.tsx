import { cn, forwardRef } from '@nordcom/nordstar-system';

import type { As, NordstarColor } from '@nordcom/nordstar-system';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';

const variants = cva(
    cn(
        'flex w-fit select-none appearance-none items-center justify-center gap-3 rounded-lg border-2 border-solid px-4 py-2 text-center text-sm font-bold no-underline transition-all'
    ),
    {
        variants: {
            color: {
                primary: 'bg-primary border-primary text-primary-foreground',
                secondary: 'bg-secondary border-secondary text-secondary-foreground',
                foreground: 'bg-foreground border-foreground text-background'
            },
            variant: {
                outline: 'bg-transparent',
                solid: 'hover:brightness-50 focus-visible:brightness-50 active:brightness-75'
            }
        },
        compoundVariants: [
            {
                color: 'primary',
                variant: 'outline',
                class: 'text-primary hover:bg-primary hover:text-primary-foreground'
            },
            {
                color: 'secondary',
                variant: 'outline',
                class: 'text-secondary hover:bg-secondary hover:text-secondary-foreground'
            },
            {
                color: 'foreground',
                variant: 'outline',
                class: 'text-foreground hover:bg-foreground hover:text-background'
            }
        ],
        defaultVariants: {
            color: 'primary',
            variant: 'solid'
        }
    }
);

type ButtonBaseProps = {
    as?: As;

    variant?: 'outline' | 'solid';
    color?: NordstarColor;
    icon?: ReactNode;
    disabled?: boolean;

    contentClassName?: string;
} & Omit<VariantProps<typeof variants>, 'color'>;

type ButtonIconProps = {
    icon: ReactNode;
    iconClassName?: string;
};
type ButtonNoIconProps = {
    icon?: undefined;
    iconClassName?: never;
};

export type ButtonProps = ButtonBaseProps & (ButtonIconProps | ButtonNoIconProps);

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
            variant,
            color,
            icon = null,
            as: Tag = 'button',
            disabled,
            className,
            type,
            children,

            contentClassName,
            iconClassName,
            ...props
        },
        ref
    ) => {
        return (
            <Tag
                {...props}
                {...(typeof disabled !== 'undefined' && {
                    disabled,
                    'aria-disabled': disabled
                })}
                ref={ref}
                role="button"
                type={type || 'button'}
                draggable={false}
                className={cn(
                    variants({
                        variant,
                        color: color === 'default' ? 'foreground' : color
                    }),
                    !disabled && 'cursor-pointer',
                    disabled && 'pointer-events-none cursor-not-allowed brightness-50',
                    className
                )}
                data-variant={variant}
                data-color={color}
            >
                {icon ? (
                    <div
                        className={cn(
                            'contents *:block *:aspect-square *:w-4 *:stroke-1 *:text-[length:inherit] *:text-inherit *:font-inherit',
                            iconClassName
                        )}
                    >
                        {icon}
                    </div>
                ) : null}
                <div
                    className={cn(
                        'block text-center font-heading text-inherit font-inherit uppercase',
                        contentClassName
                    )}
                >
                    {children}
                </div>
            </Tag>
        );
    }
);

export default Object.assign(Button, {
    displayName: 'Nordstar.Button'
});
