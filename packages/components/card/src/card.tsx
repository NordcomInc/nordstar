import type { As, CSSCustomProperties, NordstarColor } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { ComponentProps, HTMLAttributes } from 'react';

const variants = cva(cn('group overflow-hidden rounded-lg border-2 border-solid font-body'), {
    variants: {
        color: {
            primary: 'bg-primary border-primary [&>[data-divider]]:bg-primary',
            secondary: 'border-secondary bg-secondary [&>[data-divider]]:bg-secondary',
            foreground:
                'border-foreground border-foreground-highlight bg-foreground [&>[data-divider]]:bg-foreground-highlight'
        },
        variant: {
            outline: 'bg-transparent border-2 border-solid',
            solid: ''
        }
    },
    compoundVariants: [
        {
            color: 'primary',
            variant: 'solid',
            class: 'border-primary-foreground [&>[data-divider]]:bg-primary-foreground'
        },
        {
            color: 'secondary',
            variant: 'solid',
            class: 'border-secondary-foreground [&>[data-divider]]:bg-secondary-foreground'
        },
        {
            color: 'foreground',
            variant: 'solid',
            class: 'border-background-highlight [&>[data-divider]]:bg-background-highlight'
        }
    ],
    defaultVariants: {
        color: 'foreground',
        variant: 'outline'
    }
});

export type CardProps = {
    as?: As;
    variant?: 'outline' | 'solid';
    color?: NordstarColor;
    borderless?: boolean;
    padding?: boolean;
    style?: CSSCustomProperties;
} & Omit<VariantProps<typeof variants>, 'color'>;

/**
 * `<Card/>`, a consistent card-like container for blocks of content.
 *
 * @param {CardProps} props - `<Card/>` props.
 * @param {As} [props.as] - The element to render the component as.
 * @param {'outline' | 'solid'} [props.variant='outline'] - The variant.
 * @param {NordstarColor} [props.color='default'] - The color scheme.
 * @param {CSSCustomProperties} [props.style] - Custom CSS properties.
 * @param {boolean} [props.borderless=false] - Whether the card should be borderless.
 * @param {boolean} [props.padding=true] - If the card should have an inner padding.
 * @param {React.ReactNode} [props.children] - The children of the component.
 * @returns {React.ReactNode} The `<Card/>` component.
 */
const Card = forwardRef<'section', CardProps>(
    ({ as, className, variant = 'outline', color = 'default', borderless = false, padding = true, ...props }, ref) => {
        const Tag = as || 'section';

        return (
            <Tag
                {...props}
                ref={ref}
                draggable={false}
                className={cn(
                    variants({
                        variant,
                        color: color === 'default' ? 'foreground' : color
                    }),
                    padding && 'p-3',
                    borderless && 'border-0',
                    className
                )}
                data-variant={variant}
                data-color={color}
                data-borderless={borderless}
                data-padding={padding}
            />
        );
    }
);

export type CardDividerProps = {} & ComponentProps<'hr'>;
/**
 * `<Card.Divider/>`, a component to render card dividers.
 * @param {CardDividerProps} props - `<Card.Divider/>` props.
 * @returns {React.ReactNode} The `<Card.Divider/>` component.
 */
const Divider = ({ className, ...props }: CardDividerProps) => {
    return (
        <div
            {...props}
            className={cn(
                'h-[var(--border-width,2px)] bg-foreground-highlight group-data-[padding=true]:m-3 group-data-[padding=true]:-mx-3 group-data-[padding=true]:w-[calc(100%+calc(.75rem*2))]',
                className
            )}
            draggable={false}
            data-divider
        />
    );
};

export type HeaderProps = {} & HTMLAttributes<HTMLDivElement>;
/**
 * `<Card.Header/>`, a component to render card headers.
 * @param {HeaderProps} props - `<Card.Header/>` props.
 * @returns {React.ReactNode} The `<Card.Header/>` component.
 */
const Header = ({ children, className, ...props }: HeaderProps) => {
    return (
        <header {...props} className={cn('bg-transparent py-2', className)} draggable={false}>
            {children}
        </header>
    );
};

export default Object.assign(Card, {
    displayName: 'Nordstar.Card',
    Header: Object.assign(Header, {
        displayName: 'Nordstar.Card.Header'
    }),
    Divider: Object.assign(Divider, {
        displayName: 'Nordstar.Card.Divider'
    })
});
