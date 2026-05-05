import { Header } from '@nordcom/nordstar';

export default function Example() {
    return (
        <Header sticky={false}>
            <Header.Logo>Nordstar</Header.Logo>
            <Header.Menu>
                <Header.Menu.Link>Docs</Header.Menu.Link>
                <Header.Menu.Link>Components</Header.Menu.Link>
                <Header.Menu.Link>GitHub</Header.Menu.Link>
            </Header.Menu>
        </Header>
    );
}
