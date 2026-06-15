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
            className={cn(
                'block font-bold font-heading text-base text-foreground-highlight uppercase leading-none',
                '[&>a]:underline [&>a]:transition-colors [&>a]:hover:text-primary [&>a]:focus-visible:text-primary',
                color === 'foreground' && 'text-foreground',
                color === 'primary' && 'text-primary',
                color === 'secondary' && 'text-secondary [&>a]:hover:text-secondary [&>a]:focus-visible:text-secondary',
                className,
            )}
            data-color={color}
            ref={ref}
        >
            {children}
        </Tag>
    );
});

Label.displayName = 'Nordstar.Typography.Label';

export default Label;
