import { Card, Heading, View } from '@nordcom/nordstar';
import styles from './page.module.scss';

export default async function IndexPage() {
    return (
        <View className={styles.container}>
            <div className={styles.title}>
                <Heading>Nordstar</Heading>
                <Heading level="h2">
                    An opinionated component library for building human-centric user interfaces
                </Heading>
            </div>

            <div className={styles.content}>
                <Card>
                    <Heading level="h3">Guides</Heading>
                </Card>
                <Card>
                    <Heading level="h3">Examples</Heading>
                </Card>
                <Card>
                    <Heading level="h3">Documentation</Heading>
                </Card>
            </div>
        </View>
    );
}
