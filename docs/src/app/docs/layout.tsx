import { Card, Label, View } from '@nordcom/nordstar';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './layout.module.scss';

export const metadata: Metadata = {
    title: 'Documentation',
    alternates: {
        canonical: 'https://nordstar.nordcom.io/docs/'
    }
};

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <View className={styles.container}>
            <Card className={styles.sidebar}>
                <Link href="/docs/">Overview</Link>

                <Label>Components</Label>
                <Link href="/docs/button/">Button</Link>
                <Link href="/docs/card/">Card</Link>
                <Link href="/docs/details/">Details</Link>
                <Link href="/docs/input/">Input</Link>

                <Label>Layout</Label>
                <Link href="/docs/header/">Header</Link>
                <Link href="/docs/view/">View</Link>

                <Label>Typography</Label>
                <Link href="/docs/accented/">Accented</Link>
                <Link href="/docs/heading/">Heading</Link>
                <Link href="/docs/label/">label</Link>
            </Card>
            <Card className={styles.content}>{children}</Card>
        </View>
    );
}
