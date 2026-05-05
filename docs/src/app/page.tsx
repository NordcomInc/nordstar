import { Accented, Button, Card, Heading, Label } from '@nordcom/nordstar';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata: Metadata = {
    description:
        'An opinionated component library for building human-centric user interfaces by Nordcom AB and contributors.',
    alternates: {
        canonical: 'https://nordcominc.github.io/nordstar/',
    },
    title: {
        absolute: 'Nordstar Component Library',
    },
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

                    <Button as={Link} color="primary" href="/docs/getting-started/" variant="solid">
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

                    <Button as={Link} color="foreground" href="/docs/installation/" variant="solid">
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

                    <Button as={Link} color="foreground" href="/docs/components/" variant="outline">
                        Get Started
                    </Button>
                </Card>
            </div>
        </>
    );
}
