import type { As, NordstarColor } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';

const variants = cva(
    cn(
        'flex w-fit select-none appearance-none items-center justify-center gap-3 rounded-sm border-2 border-solid px-4 py-2 text-center font-bold text-sm no-underline outline-none transition-[color,background-color,border-color,filter,transform,box-shadow] duration-200 ease-out-soft focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    ),
    {
        compoundVariants: [
            {
                class: 'text-primary hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground active:brightness-75',
                color: 'primary',
                variant: 'outline',
            },
            {
                class: 'text-secondary hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground active:brightness-75',
                color: 'secondary',
                variant: 'outline',
            },
            {
                class: 'text-foreground hover:bg-foreground hover:text-background focus-visible:bg-foreground focus-visible:text-background active:brightness-75',
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
                outline: 'bg-transparent active:translate-y-0',
                solid: 'shadow-raised hover:-translate-y-px hover:shadow-floating hover:brightness-50 focus-visible:brightness-50 active:translate-y-0 active:shadow-raised active:brightness-75',
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
 * @param {'outline' | 'solid'} [props.variant='solid'] - The variant.
 * @param {NordstarColor} [props.color='primary'] - The color scheme.
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
            color = 'primary',
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
                    'aria-disabled': disabled,
                    // `disabled` is only valid on form-associated elements. For any other
                    // polymorphic `as` (e.g. `a`, `div`) reflect the state via `aria-disabled`
                    // and drop the element out of the tab order so it is truly inert.
                    ...(Tag === 'button' ? { disabled } : { tabIndex: disabled ? -1 : undefined }),
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
                {...(Tag === 'button' ? { type: type || 'button' } : {})}
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
