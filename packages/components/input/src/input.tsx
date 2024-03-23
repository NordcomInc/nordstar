import type { NordstarColor } from '@nordcom/nordstar-system';
import { forwardRef, type As } from '@nordcom/nordstar-system';
import type { HTMLInputTypeAttribute } from 'react';
import { useEffect, useState } from 'react';
import styles from './input.module.scss';

export type InputProps = {
    as?: As;

    variant?: 'outline' | 'solid';
    color?: NordstarColor;

    label?: string;
    labelPosition?: 'inside' | 'outside';

    value?: string | number;
    defaultValue?: string | number;

    type?: Omit<HTMLInputTypeAttribute, 'number'>;
    min?: number;
    max?: number;
};

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
            labelPosition = 'inside',

            placeholder,

            value,
            defaultValue,

            ...props
        },
        ref
    ) => {
        const Tag = as || 'input';
        const [contents, setContents] = useState<typeof defaultValue>(defaultValue || '');

        useEffect(() => {
            if (!value) return;

            setContents(() => value);
        }, [value]);

        return (
            <>
                {label && labelPosition === 'outside' ? <label className={styles.label}>{label}</label> : null}

                <div className={styles.container} data-variant={variant} data-color={color}>
                    {label && labelPosition === 'inside' ? (
                        <label className={`${styles.label} ${!placeholder && !contents ? styles['full-height'] : ''}`}>
                            {label}
                        </label>
                    ) : null}

                    <Tag
                        {...props}
                        ref={ref}
                        type={type}
                        className={styles.input}
                        placeholder={placeholder}
                        value={contents}
                        onChange={(e: any) => setContents(() => e.target.value)}
                    />
                </div>
            </>
        );
    }
);
Input.displayName = 'Nordstar.Input';

export default Input;
