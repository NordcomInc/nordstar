import { Accordion } from '@nordcom/nordstar';

export default function Example() {
    return (
        <Accordion className="w-full max-w-md" collapsible type="single">
            <Accordion.Item value="shipping">
                <Accordion.Trigger>How long does shipping take?</Accordion.Trigger>
                <Accordion.Content>Orders ship within 1–2 business days and arrive in under a week.</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="returns">
                <Accordion.Trigger>What is the return policy?</Accordion.Trigger>
                <Accordion.Content>Return any unused item within 30 days for a full refund.</Accordion.Content>
            </Accordion.Item>
        </Accordion>
    );
}
