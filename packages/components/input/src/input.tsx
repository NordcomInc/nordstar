'use client';

import type { NordstarColor } from '@nordcom/nordstar-system';
import { forwardRef, type As } from '@nordcom/nordstar-system';
import type { HTMLInputTypeAttribute } from 'react';
import { useState } from 'react';
import styles from './input.module.scss';

export type InputProps = {
    as?: As;

    variant?: 'outline' | 'solid';
    color?: NordstarColor;

    label?: string;
    labelPosition?: 'inside' | 'outside';

    defaultValue?: string | number;
} & (
    | {
          type: Omit<HTMLInputTypeAttribute, 'number'>;
      }
    | {
          type: 'number';

          min?: number;
          max?: number;
      }
);

const Input = forwardRef<'input', InputProps>(
    (
        {
            as,
            type = 'text',

            variant = 'outline',
            color = 'default',

            label,
            labelPosition = 'inside',

            placeholder,

            defaultValue = '',

            ...props
        },
        ref
    ) => {
        const Tag = as || 'input';
        const [value, setValue] = useState<typeof defaultValue>(defaultValue);

        return (
            <>
                {label && labelPosition === 'outside' ? <label className={styles.label}>{label}</label> : null}

                <div className={styles.container} data-variant={variant} data-color={color}>
                    {label && labelPosition === 'inside' ? (
                        <label className={`${styles.label} ${!placeholder && !value ? styles['full-height'] : ''}`}>
                            {label}
                        </label>
                    ) : null}

                    <Tag
                        {...props}
                        ref={ref}
                        type={type}
                        className={styles.input}
                        placeholder={placeholder}
                        value={value}
                        defaultValue={defaultValue}
                        onChange={(e: any) => setValue(() => e.target.value)}
                    />
                </div>
            </>
        );
    }
);
Input.displayName = 'Nordstar.Input';

export default Input;
