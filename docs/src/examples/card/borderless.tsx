import { Card } from '@nordcom/nordstar';

export default function Example() {
    return (
        <Card borderless>
            <Card.Header>Header</Card.Header>
            <Card.Divider />
            A borderless card relies on its background to delimit content.
        </Card>
    );
}
