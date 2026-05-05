import { Card } from '@nordcom/nordstar';

export default function Example() {
    return (
        <Card padding={false}>
            <Card.Header>Header</Card.Header>
            <Card.Divider />
            <div className="p-3">When you want to control padding yourself.</div>
        </Card>
    );
}
