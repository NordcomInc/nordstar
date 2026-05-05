import { Input } from '@nordcom/nordstar';

export default function Example() {
    return (
        <Input as="textarea" label="Company Name" placeholder="Acme Inc." defaultValue={'Hello World!\nSecond line.'} />
    );
}
