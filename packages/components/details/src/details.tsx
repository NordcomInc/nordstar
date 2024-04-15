import { Card } from '@nordcom/nordstar-card';
import { Label } from '@nordcom/nordstar-label';
import type { CSSCustomProperties } from '@nordcom/nordstar-system';
import { forwardRef } from '@nordcom/nordstar-system';
import styles from './details.module.scss';

export type DetailsProps = {
    label: string;
    color: never;
    style?: CSSCustomProperties;
};

/**
 * `<Details/>`, hide/Show content using a styled &lt;details&gt; element.
 *
 * @param {CardProps} props - `<Card/>` props.
 * @param {string} props.label - The label of the details.
 * @param {CSSCustomProperties} [props.style] - Custom CSS properties.
 * @returns {React.ReactNode} The `<Details/>` component.
 */
const Details = forwardRef<typeof Card, DetailsProps>(({ label, className, children, ...props }, ref) => {
    const classes = `${styles.container}${className ? ` ${className}` : ''}`;

    return (
        <Card ref={ref} as="details" {...props} color="foreground" className={classes}>
            <summary>
                <Label as="div" className={styles.label}>
                    {label}
                </Label>
            </summary>
            <div className={styles.content}>{children}</div>
        </Card>
    );
});

Details.displayName = 'Nordstar.Details';

export default Details;
