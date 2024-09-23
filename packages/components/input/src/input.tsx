'use client';

import type { As, NordstarColor } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';
import type { HTMLInputTypeAttribute } from 'react';
import { useEffect, useState } from 'react';
import styles from './input.module.scss';

type InputBaseProps = {
    as?: As;

    variant?: 'outline' | 'solid';
    color?: NordstarColor;

    label?: string;
};

type InputTextProps = {
    value?: string;
    defaultValue?: string;

    type?: Omit<HTMLInputTypeAttribute, 'number' | 'textarea'>;
};
type InputNumberProps = {
    value?: number;
    defaultValue?: number;

    type: Extract<HTMLInputTypeAttribute, 'number'>;
    min?: number;
    max?: number;
};

export type InputProps = InputBaseProps & (InputTextProps | InputNumberProps);

/**
 * `<Input/>`, generalized input element.
 *
 * @param {object} props - `<Input/>` props.
 * @param {As} [props.as] - The element to render the component as.
 * @param {'outline' | 'solid'} [props.variant='outline'] - The variant.
 * @param {NordstarColor} [props.color='default'] - The color scheme.
 * @returns {React.ReactNode} The `<Input/>` component.
 */
const Input = forwardRef<'input', InputProps>(
    (
        {
            as,
            type = 'text',

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
        ref
    ) => {
        const Tag = as || 'input';
        const [contents, setContents] = useState<typeof defaultValue>(defaultValue || '');

        useEffect(() => {
            if (!value) {
                return;
            }

            setContents(() => value);
        }, [value]);

        return (
            <>
                <div
                    className={cn(styles.container, className)}
                    style={style}
                    data-variant={variant}
                    data-color={color}
                >
                    {!!label ? (
                        <label className={cn(styles.label, !placeholder && !contents && styles['full-height'])}>
                            {label}
                        </label>
                    ) : null}

                    <Tag
                        {...(props as any)}
                        ref={ref}
                        className={styles.input}
                        type={type}
                        placeholder={placeholder}
                        value={contents || undefined}
                        onChange={(e: any) => e?.target && setContents(() => e.target.value)}
                    />
                </div>
            </>
        );
    }
);
Input.displayName = 'Nordstar.Input';

export default Input;
