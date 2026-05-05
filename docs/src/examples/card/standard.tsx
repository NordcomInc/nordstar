import { Card } from '@nordcom/nordstar';

export default function Example() {
    return (
        <Card>
            <Card.Header>Header</Card.Header>
            <Card.Divider />
            Hello world! Content inside the card.
            <Card.Divider />
            Imaginary footer
        </Card>
    );
}
