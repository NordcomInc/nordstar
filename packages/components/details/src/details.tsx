import { Card } from '@nordcom/nordstar-card';
import { Label } from '@nordcom/nordstar-label';
import type { CSSCustomProperties } from '@nordcom/nordstar-system';
import { cn, forwardRef } from '@nordcom/nordstar-system';
import styles from './details.module.scss';

export type DetailsProps = {
    label: string;
    style?: CSSCustomProperties;
};

/**
 * `<Details/>`, hide/Show content using a styled &lt;details&gt; element.
 *
 * @param {CardProps} props - `<Details/>` props.
 * @param {string} props.label - The label of the details.
 * @param {CSSCustomProperties} [props.style] - Custom CSS properties.
 * @returns {React.ReactNode} The `<Details/>` component.
 */
const Details = forwardRef<typeof Card, DetailsProps>(({ label, className, children, ...props }, ref) => {
    return (
        <Card ref={ref} as="details" {...props} color="foreground" className={cn(styles.container, className)}>
            <summary>
                <Label as="div" className={styles.label}>
                    {label}
                </Label>
            </summary>
            <div className={styles.content}>{children}</div>
        </Card>
    );
});

export default Object.assign(Details, {
    displayName: 'Nordstar.Details'
});
