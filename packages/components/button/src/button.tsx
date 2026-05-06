import type { As, NordstarColor } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';

const variants = cva(
    cn(
        'flex w-fit select-none appearance-none items-center justify-center gap-3 rounded-sm border-2 border-solid px-4 py-2 text-center font-bold text-sm no-underline transition-all',
    ),
    {
        compoundVariants: [
            {
                class: 'text-primary hover:bg-primary hover:text-primary-foreground',
                color: 'primary',
                variant: 'outline',
            },
            {
                class: 'text-secondary hover:bg-secondary hover:text-secondary-foreground',
                color: 'secondary',
                variant: 'outline',
            },
            {
                class: 'text-foreground hover:bg-foreground hover:text-background',
                color: 'foreground',
                variant: 'outline',
            },
        ],
        defaultVariants: {
            color: 'primary',
            variant: 'solid',
        },
        variants: {
            color: {
                foreground: 'border-foreground bg-foreground text-background',
                primary: 'border-primary bg-primary text-primary-foreground',
                secondary: 'border-secondary bg-secondary text-secondary-foreground',
            },
            variant: {
                outline: 'bg-transparent',
                solid: 'hover:brightness-50 focus-visible:brightness-50 active:brightness-75',
            },
        },
    },
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
        ref,
    ) => {
        return (
            <Tag
                {...props}
                {...(typeof disabled !== 'undefined' && {
                    disabled,
                    'aria-disabled': disabled,
                })}
                className={cn(
                    variants({
                        variant,
                        color: color === 'default' ? 'foreground' : color,
                    }),
                    !disabled && 'cursor-pointer',
                    disabled && 'pointer-events-none cursor-not-allowed brightness-50',
                    className,
                )}
                data-color={color}
                data-variant={variant}
                draggable={false}
                ref={ref}
                role="button"
                type={type || 'button'}
            >
                {icon ? (
                    <div
                        className={cn(
                            'contents *:block *:aspect-square *:w-4 *:stroke-1 *:font-inherit *:text-[length:inherit] *:text-inherit',
                            iconClassName,
                        )}
                    >
                        {icon}
                    </div>
                ) : null}
                <div
                    className={cn(
                        'block text-center font-heading font-inherit text-inherit uppercase',
                        contentClassName,
                    )}
                >
                    {children}
                </div>
            </Tag>
        );
    },
);

export default Object.assign(Button, {
    displayName: 'Nordstar.Button',
});
