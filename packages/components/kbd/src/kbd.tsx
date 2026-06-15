import type { As } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';
import { cva } from 'class-variance-authority';

const variants = cva(
    cn(
        'inline-flex select-none items-center justify-center gap-1 rounded-sm border-2 border-foreground-highlight border-solid bg-background-highlight text-center font-mono font-semibold text-foreground leading-none shadow-[inset_0_-0.125rem_0_0_hsl(0_0%_0%/0.45)]',
    ),
    {
        defaultVariants: {
            size: 'md',
        },
        variants: {
            size: {
                md: 'h-6 min-w-6 px-1.5 text-xs',
                sm: 'h-5 min-w-5 px-1 text-[0.625rem]',
            },
        },
    },
);

export type KbdProps = {
    as?: As;

    /** Size of the key chip. Defaults to `'md'`. */
    size?: 'sm' | 'md';
};

/**
 * `<Kbd/>`, a keyboard-key indicator for documenting shortcuts.
 *
 * Renders a real `<kbd>` element by default so the markup is semantically a keyboard input
 * and assistive tech announces it as such. The chip mirrors Nordstar's bordered, high-contrast
 * surface language; pass `size` to fit it inline with surrounding text or in denser menus.
 *
 * @param {object} props - `<Kbd/>` props.
 * @param {As} [props.as='kbd'] - The element to render the component as.
 * @param {'sm' | 'md'} [props.size='md'] - The chip size.
 * @returns {React.ReactNode} The `<Kbd/>` component.
 *
 * @example
 * ```tsx
 * <Kbd>⌘K</Kbd>
 * <Kbd size="sm">Esc</Kbd>
 * ```
 */
const Kbd = forwardRef<'kbd', KbdProps>(({ as: Tag = 'kbd', size = 'md', className, ...props }, ref) => {
    return <Tag className={cn(variants({ size }), className)} data-size={size} ref={ref} {...props} />;
});

Kbd.displayName = 'Nordstar.Kbd';

export default Kbd;
