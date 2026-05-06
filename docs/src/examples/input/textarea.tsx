import { Input } from '@nordcom/nordstar';

export default function Example() {
    return (
        <Input as="textarea" defaultValue={'Hello World!\nSecond line.'} label="Company Name" placeholder="Acme Inc." />
    );
}
