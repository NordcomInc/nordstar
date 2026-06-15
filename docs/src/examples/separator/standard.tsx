import { Separator } from '@nordcom/nordstar';

export default function Example() {
    return (
        <div className="flex flex-col gap-4">
            <p>Shipping address</p>
            <Separator />
            <p>Billing address</p>
        </div>
    );
}
