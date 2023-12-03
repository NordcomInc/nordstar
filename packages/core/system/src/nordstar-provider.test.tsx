import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import { NordstarProvider } from './nordstar-provider';

describe('core', () => {
    describe('system', () => {
        describe('NordstarProvider', () => {
            it('renders its children', () => {
                const testText = 'Hello, world!';

                const { getByText } = render(
                    <NordstarProvider>
                        <div>{testText}</div>
                    </NordstarProvider>
                );
                expect(getByText(testText)).toBeInTheDocument();
            });

            it('renders with theme prop', () => {
                const wrapper = render(
                    <NordstarProvider
                        theme={{
                            accents: {
                                primary: '#ff0000',
                                secondary: '#00ff00'
                            },
                            fonts: {
                                heading: 'sans-serif',
                                body: 'sans-serif'
                            }
                        }}
                    >
                        <div>Hello World!</div>
                    </NordstarProvider>
                );

                expect(wrapper.getByText('Hello World!')).toBeInTheDocument();
                expect(wrapper.getByRole('document')).toHaveStyle({
                    '--color-accent-primary': '#ff0000',
                    '--color-accent-secondary': '#00ff00',
                    '--font-heading': 'sans-serif',
                    '--font-body': 'sans-serif'
                });
                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
