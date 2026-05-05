import { Card } from '@nordcom/nordstar';

export default function Example() {
    return (
        <Card borderless padding={false}>
            <Card.Header>Header</Card.Header>
            <Card.Divider />
            <div className="p-3">A flush surface — borderless and full-bleed.</div>
        </Card>
    );
}
