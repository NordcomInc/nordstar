'use client';

import type { As, NordstarColor } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { HTMLInputTypeAttribute } from 'react';
import { useEffect, useState } from 'react';
import styles from './input.module.scss';

const variants = cva(
    cn(
        'group relative inline-flex h-15 flex-col gap-[.1rem] overflow-clip rounded-lg bg-transparent px-4 py-2 text-base transition-colors',
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
                class: 'border-foreground-highlight text-foreground-highlight focus-within:border-foreground focus-within:text-foreground hover:border-foreground hover:text-foreground data-[value]:border-foreground data-[value]:text-foreground data-[value]:*:text-foreground',
                color: 'foreground',
                variant: 'outline',
            },
        ],
        defaultVariants: {
            color: 'foreground',
            variant: 'outline',
        },
        variants: {
            color: {
                foreground: 'border-foreground bg-foreground text-background',
                primary: 'border-primary bg-primary text-primary-foreground',
                secondary: 'border-secondary bg-secondary text-secondary-foreground',
            },
            variant: {
                outline: 'border-2 border-solid bg-transparent',
                solid: 'hover:brightness-75 focus-visible:brightness-75 active:brightness-50',
            },
        },
    },
);

type InputBaseProps = {
    color?: NordstarColor;

    label?: string;
} & Omit<VariantProps<typeof variants>, 'color'>;

type InputTextAreaProps = {
    as: 'textarea';

    value?: string;
    defaultValue?: string;

    type?: never;
};

type InputTextProps = {
    as?: Exclude<As, 'textarea'>;

    value?: string;
    defaultValue?: string;

    type?: Exclude<HTMLInputTypeAttribute, 'number'>;
};

type InputNumberProps = {
    as?: Exclude<As, 'textarea'>;

    value?: number;
    defaultValue?: number;

    type: 'number';
    min?: number;
    max?: number;
};

export type InputProps<T extends As> = InputBaseProps &
    (T extends 'textarea' ? InputTextAreaProps : T extends 'number' ? InputNumberProps : InputTextProps);

/**
 * `<Input/>`, generalized input element.
 *
 * @param {object} props - `<Input/>` props.
 * @param {As} [props.as] - The element to render the component as.
 * @param {'outline' | 'solid'} [props.variant='outline'] - The variant.
 * @param {NordstarColor} [props.color='default'] - The color scheme.
 * @returns {React.ReactNode} The `<Input/>` component.
 */
const Input = forwardRef<'input' | 'textarea', InputProps<As>>(
    (
        {
            as,

            variant = 'outline',
            color = 'default',

            label,

            placeholder,

            value,
            defaultValue,

            className,
            style = undefined,
            ...props
        },
        ref,
    ) => {
        const Tag = as || 'input';
        const [contents, setContents] = useState<string | number | undefined>(defaultValue);

        useEffect(() => {
            if (!value) {
                return;
            }

            setContents(() => value);
        }, [value]);

        return (
            <div
                className={cn(
                    variants({
                        variant,
                        color: color === 'default' ? 'foreground' : color,
                    }),
                    as === 'textarea' && 'h-auto',
                    className,
                )}
                data-color={color}
                data-value={value || undefined}
                data-variant={variant}
                style={style}
            >
                {label ? (
                    <label
                        className={cn(
                            styles.label,
                            'pointer-events-none select-none font-extrabold text-xs uppercase transition-all [transform:translateZ(0)_translateY(0)]',
                            !placeholder &&
                                !contents &&
                                '-mb-2 text-inherit [transform:translateY(.65rem)] group-first-of-type:-mb-0 group-focus-within:translate-y-0 group-focus-within:text-sm',
                        )}
                        data-full-height={!placeholder && !contents}
                    >
                        {label}
                    </label>
                ) : null}

                <Tag
                    {...(props as any)}
                    {...(as !== 'textarea'
                        ? 'type' in props
                            ? { type: props.type || 'text' }
                            : { type: 'text' }
                        : {})}
                    className={cn(
                        styles.input,
                        'relative h-full w-full appearance-none border-0 bg-transparent p-0 text-sm leading-none outline-0 [font-size:inherit] placeholder:text-foreground-highlight placeholder:transition-opacity placeholder:[font-size:inherit]',
                        label && as !== 'textarea' && 'absolute inset-y-0 h-15 pt-3',
                        as === 'textarea' && 'h-full min-h-20 leading-normal',
                    )}
                    onChange={(e: any) => e?.target && setContents(e.target.value)}
                    placeholder={placeholder}
                    ref={ref}
                    value={contents || undefined}
                />
            </div>
        );
    },
);

export default Object.assign(Input, {
    displayName: 'Nordstar.Input',
});
