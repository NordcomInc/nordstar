'use client';

import type { NordstarColor } from '@nordcom/nordstar-system';
import { cn } from '@nordcom/nordstar-system';
import * as Primitive from '@radix-ui/react-switch';
import { cva } from 'class-variance-authority';
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from 'react';

const trackVariants = cva(
    cn(
        'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-foreground-highlight border-solid bg-background-highlight p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
    ),
    {
        defaultVariants: {
            color: 'primary',
            size: 'md',
        },
        variants: {
            color: {
                foreground: 'data-[state=checked]:border-foreground data-[state=checked]:bg-foreground',
                primary: 'data-[state=checked]:border-primary data-[state=checked]:bg-primary',
                secondary: 'data-[state=checked]:border-secondary data-[state=checked]:bg-secondary',
            },
            size: {
                md: 'h-6 w-11',
                sm: 'h-5 w-9',
            },
        },
    },
);

const thumbVariants = cva(cn('pointer-events-none block rounded-full bg-foreground transition-transform'), {
    defaultVariants: {
        color: 'primary',
        size: 'md',
    },
    variants: {
        color: {
            foreground: 'data-[state=checked]:bg-background',
            primary: 'data-[state=checked]:bg-primary-foreground',
            secondary: 'data-[state=checked]:bg-secondary-foreground',
        },
        size: {
            md: 'size-4 data-[state=checked]:translate-x-5',
            sm: 'size-3 data-[state=checked]:translate-x-4',
        },
    },
});

export type SwitchProps = ComponentPropsWithoutRef<typeof Primitive.Root> & {
    /** Size of the control. Defaults to `'md'`. */
    size?: 'sm' | 'md';

    /** Color scheme applied to the checked state. Defaults to `'primary'`. */
    color?: NordstarColor;
};

/**
 * `<Switch/>`, a boolean toggle with an animated thumb that slides between off and on.
 *
 * Wraps `@radix-ui/react-switch`, so it is keyboard operable (Space/Enter), exposes the correct
 * `switch` role and `aria-checked`, and integrates with native forms via `name`/`value`. Controlled
 * (`checked` + `onCheckedChange`) and uncontrolled (`defaultChecked`) usage both work. The thumb and
 * track are re-fitted to the Nordstar token contract; the `'default'` color resolves to `foreground`.
 *
 * @param {object} props - `<Switch/>` props. Accepts every `@radix-ui/react-switch` Root prop.
 * @param {'sm' | 'md'} [props.size='md'] - The control size.
 * @param {NordstarColor} [props.color='primary'] - The checked-state color scheme.
 * @returns {React.ReactNode} The `<Switch/>` component.
 *
 * @example
 * ```tsx
 * <Switch defaultChecked color="primary" />
 * <Switch checked={enabled} onCheckedChange={setEnabled} />
 * ```
 */
const Switch = forwardRef<ComponentRef<typeof Primitive.Root>, SwitchProps>(
    ({ className, size = 'md', color = 'primary', ...props }, ref) => {
        const resolved = color === 'default' ? 'foreground' : color;

        return (
            <Primitive.Root
                className={cn(trackVariants({ color: resolved, size }), className)}
                data-color={color}
                data-size={size}
                ref={ref}
                {...props}
            >
                <Primitive.Thumb className={thumbVariants({ color: resolved, size })} />
            </Primitive.Root>
        );
    },
);

Switch.displayName = 'Nordstar.Switch';

export default Switch;
