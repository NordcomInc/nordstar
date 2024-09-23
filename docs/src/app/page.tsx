import { Accented, Button, Card, Heading, Label } from '@nordcom/nordstar';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata: Metadata = {
    title: {
        absolute: 'Nordstar Component Library'
    },
    description:
        'An opinionated component library for building human-centric user interfaces by Nordcom AB and contributors.',
    alternates: {
        canonical: 'https://nordstar.dev/'
    }
};

export default async function IndexPage() {
    return (
        <>
            <div className={styles.header}>
                <Heading>
                    Nordstar by <Accented>Nordcom</Accented> Group Inc. and contributors
                </Heading>
                <Heading level="h2">
                    An opinionated component library for building <Accented>human</Accented>-centric user interfaces
                </Heading>
            </div>

            <div className={styles.content}>
                <Card className={styles.block}>
                    <Card.Header>
                        <Label className="leading-none" color="foreground">
                            1. Guides
                        </Label>
                    </Card.Header>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc. Turpis egestas maecenas
                        pharetra convallis posuere morbi leo urna. Amet consectetur adipiscing elit ut aliquam purus.
                        Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo.
                    </p>

                    <Card.Divider />

                    <Button variant="solid" color="primary" as={Link} href="/docs/getting-started/">
                        Get Started
                    </Button>
                </Card>
                <Card className={styles.block}>
                    <Card.Header>
                        <Label className="leading-none" color="foreground">
                            2. Examples
                        </Label>
                    </Card.Header>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc. Turpis egestas maecenas
                        pharetra convallis posuere morbi leo urna. Amet consectetur adipiscing elit ut aliquam purus.
                        Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo.
                    </p>

                    <Card.Divider />

                    <Button variant="solid" color="foreground" as={Link} href="/docs/installation/">
                        Get Started
                    </Button>
                </Card>
                <Card className={styles.block}>
                    <Card.Header>
                        <Label className="leading-none" color="foreground">
                            3. Documentation
                        </Label>
                    </Card.Header>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc. Turpis egestas maecenas
                        pharetra convallis posuere morbi leo urna. Amet consectetur adipiscing elit ut aliquam purus.
                        Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo.
                    </p>

                    <Card.Divider />

                    <Button variant="outline" color="foreground" as={Link} href="/docs/components/">
                        Get Started
                    </Button>
                </Card>
            </div>
        </>
    );
}
