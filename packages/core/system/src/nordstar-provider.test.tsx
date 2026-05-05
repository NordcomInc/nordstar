import '@testing-library/jest-dom/vitest';
import '@testing-library/react';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { NordstarProvider } from './nordstar-provider';

describe('core', () => {
    describe('NordstarProvider', () => {
        it('has correct displayName', () => {
            expect(NordstarProvider).toHaveProperty('displayName', 'Nordstar.Core.NordstarProvider');
        });

        it('renders its children', () => {
            const testText = 'Hello, world!';

            const { getByText } = render(
                <NordstarProvider theme={{ accents: {}, fonts: {} } as any}>
                    <div>{testText}</div>
                </NordstarProvider>,
            );
            expect(getByText(testText)).toBeDefined();
        });

        it('renders with theme prop', () => {
            const wrapper = render(
                <NordstarProvider
                    theme={{
                        accents: {
                            primary: '#ff0000',
                            secondary: '#00ff00',
                        },
                        fonts: {
                            body: 'Roboto',
                            heading: 'Open Sans',
                        },
                    }}
                >
                    <div>Hello World!</div>
                </NordstarProvider>,
            );

            expect(wrapper.getByText('Hello World!')).toBeDefined();

            const styleElementContent = wrapper.getByTestId('style').innerHTML;
            expect(styleElementContent).toContain('--nordstar-color-primary:              0 100% 50%');
            expect(styleElementContent).toContain('--nordstar-color-secondary:            120 100% 50%');
            expect(styleElementContent).toContain('--nordstar-font-heading: Open Sans');
            expect(styleElementContent).toContain('--nordstar-font-body: Roboto');

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders with theme prop with only the heading font', () => {
            const wrapper = render(
                <NordstarProvider
                    theme={{
                        accents: {
                            primary: '#ff0000',
                            secondary: '#00ff00',
                        },
                        fonts: {
                            body: 'heading',
                            heading: 'heading',
                        },
                    }}
                />,
            );

            const styleElementContent = wrapper.getByTestId('style').innerHTML;
            expect(styleElementContent).toContain('--nordstar-font-heading: heading');
            expect(styleElementContent).toContain('--nordstar-font-body: heading');

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders with theme prop with only the body font', () => {
            const wrapper = render(
                <NordstarProvider
                    theme={{
                        accents: {
                            primary: '#ff0000',
                            secondary: '#00ff00',
                        },
                        fonts: {
                            body: 'body',
                        },
                    }}
                />,
            );

            const styleElementContent = wrapper.getByTestId('style').innerHTML;
            expect(styleElementContent).toContain('--nordstar-font-heading');
            expect(styleElementContent).toContain('--nordstar-font-body: body');

            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
