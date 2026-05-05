import type { NordstarTheme } from '@nordcom/nordstar';
import { NordstarProvider } from '@nordcom/nordstar';
import type { ReactNode } from 'react';

export function Providers({ fonts, children }: { fonts: NordstarTheme['fonts']; children: ReactNode }) {
    return (
        <NordstarProvider
            theme={{
                accents: {
                    primary: '#ed1e79',
                    secondary: '#ed1e79'
                },
                fonts
            }}
        >
            {children}
        </NordstarProvider>
    );
}
