import { Accented, Button, Card, Heading, Label, View } from '@nordcom/nordstar';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata: Metadata = {
    title: {
        absolute: 'Nordstar Component Library'
    },
    description:
        'An opinionated component library for building human-centric user interfaces by Nordcom Group Inc. and contributors.',
    alternates: {
        canonical: 'https://nordstar.nordcom.io/'
    }
};

export default async function IndexPage() {
    return (
        <View className={styles.container}>
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
                    <Label>Guides</Label>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc. Turpis egestas maecenas
                        pharetra convallis posuere morbi leo urna. Amet consectetur adipiscing elit ut aliquam purus.
                        Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo.
                    </p>

                    <div style={{ paddingTop: '0.25rem' }}>
                        <Button variant="solid" color="primary" as={Link} href="/docs/">
                            Get Started
                        </Button>
                    </div>
                </Card>
                <Card className={styles.block}>
                    <Label>Examples</Label>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc. Turpis egestas maecenas
                        pharetra convallis posuere morbi leo urna. Amet consectetur adipiscing elit ut aliquam purus.
                        Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo.
                    </p>
                </Card>
                <Card className={styles.block}>
                    <Label>Documentation</Label>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Vitae elementum curabitur vitae nunc. Turpis egestas maecenas
                        pharetra convallis posuere morbi leo urna. Amet consectetur adipiscing elit ut aliquam purus.
                        Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo.
                    </p>
                </Card>
            </div>
        </View>
    );
}
