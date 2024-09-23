import type { As, NordstarColor } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';
import type { ReactNode } from 'react';

export type LabelProps = {
    as?: As;

    color?: NordstarColor;

    children?: ReactNode;
};

const Label = forwardRef<'label', LabelProps>(({ as: Tag = 'label', color, className, children, ...props }, ref) => {
    return (
        <Tag
            {...props}
            ref={ref}
            className={cn(
                'block font-heading text-base font-bold uppercase leading-none text-foreground-highlight [&>a]:underline [&>a]:transition-colors [&>a]:hover:text-primary',
                color === 'foreground' && 'text-foreground',
                color === 'primary' && 'text-primary',
                color === 'secondary' && 'text-secondary',
                className
            )}
            data-color={color}
        >
            {children}
        </Tag>
    );
});

Label.displayName = 'Nordstar.Typography.Label';

export default Label;
