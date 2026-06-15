import { Card } from '@nordcom/nordstar-card';
import { Label } from '@nordcom/nordstar-label';
import type { CSSCustomProperties } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';

export type DetailsProps = {
    label: string;
    style?: CSSCustomProperties;
};

/**
 * `<Details/>`, hide/Show content using a styled &lt;details&gt; element.
 *
 * @param {DetailsProps} props - `<Details/>` props.
 * @param {string} props.label - The label of the details.
 * @param {CSSCustomProperties} [props.style] - Custom CSS properties.
 * @returns {React.ReactNode} The `<Details/>` component.
 */
const Details = forwardRef<'details', DetailsProps>(({ label, className, children, ...props }, ref) => {
    return (
        <Card
            as="details"
            ref={ref}
            {...props}
            className={cn(
                'overflow-y-auto overflow-x-hidden transition-colors duration-[var(--nordstar-duration-short)] ease-in-out',
                className,
            )}
            color="foreground"
        >
            <summary
                className={cn(
                    'relative flex min-h-[1em] w-full cursor-pointer select-none flex-row items-center justify-start',
                    'transition-colors duration-[var(--nordstar-duration-short)] ease-in-out',
                    'hover:text-primary focus-visible:text-primary',
                    'focus-visible:rounded-[var(--nordstar-border-radius,0.45rem)] focus-visible:outline-offset-[0.2em] focus-visible:[outline:var(--nordstar-border-width-small,1px)_solid_hsl(var(--nordstar-color-primary))]',
                    '[&::-webkit-details-marker]:hidden',
                    // Disclosure marker: a "+" that morphs into a downward triangle when open.
                    "before:inline-flex before:size-[0.5em] before:rotate-0 before:items-center before:justify-center before:border-[length:var(--nordstar-border-width-large)] before:border-transparent before:border-solid before:font-bold before:text-[1.15em] before:content-['+'] before:[margin-right:var(--nordstar-layout-block-padding-quarter,calc(var(--nordstar-layout-block-padding,1rem)*0.25))] before:[transform-origin:0.25em_50%]",
                    'before:transition-[color,border-color,transform] before:duration-[var(--nordstar-duration-short)] before:ease-in-out',
                    "group-open:text-primary group-open:before:rotate-90 group-open:before:border-l-primary group-open:before:text-transparent group-open:before:content-['']",
                )}
            >
                <Label as="div" className="contents text-inherit">
                    {label}
                </Label>
            </summary>
            <div className="flex w-full group-open:[padding-top:var(--nordstar-layout-block-padding-quarter,calc(var(--nordstar-layout-block-padding,1rem)*0.25))]">
                {children}
            </div>
        </Card>
    );
});

export default Object.assign(Details, {
    displayName: 'Nordstar.Details',
});
