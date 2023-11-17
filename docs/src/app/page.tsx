import { Card } from '@nordcom/nordstar-card';
import { Heading } from '@nordcom/nordstar-heading';
import styles from './page.module.scss';

export default async function IndexPage() {
    return (
        <main className={styles.container}>
            <div className={styles.title}>
                <Heading>Nordstar</Heading>
                <Heading subheading>
                    An opinionated component library for building human-centric user interfaces
                </Heading>
            </div>

            <div className={styles.content}>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </main>
    );
}
