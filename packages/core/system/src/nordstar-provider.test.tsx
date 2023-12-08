import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
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
                expect(getByText(testText)).toBeDefined();
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
                                heading: 'Open Sans',
                                body: 'Roboto'
                            }
                        }}
                        {...{ 'data-testid': 'style' }}
                    >
                        <div>Hello World!</div>
                    </NordstarProvider>
                );

                expect(wrapper.getByText('Hello World!')).toBeDefined();
                // We add a style tag before the NordstarProvider's container element; let's check if it includes the styles

                const styleElementContent = wrapper.getByTestId('style').innerHTML;
                expect(styleElementContent).toContain('--color-accent-primary: #ff0000');
                expect(styleElementContent).toContain('--color-accent-secondary: #00ff00');
                expect(styleElementContent).toContain('--font-heading: Open Sans');
                expect(styleElementContent).toContain('--font-body: Roboto');

                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
