import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import React from 'react';
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

                const styleElementContent = wrapper.getByTestId('style').innerHTML;
                expect(styleElementContent).toContain('--color-accent-primary: #ff0000');
                expect(styleElementContent).toContain('--color-accent-secondary: #00ff00');
                expect(styleElementContent).toContain('--font-heading: Open Sans');
                expect(styleElementContent).toContain('--font-body: Roboto');

                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('renders with theme prop without fonts', () => {
                const wrapper = render(
                    <NordstarProvider
                        theme={{
                            accents: {
                                primary: '#ff0000',
                                secondary: '#00ff00'
                            }
                        }}
                        {...{ 'data-testid': 'style' }}
                    />
                );

                const styleElementContent = wrapper.getByTestId('style').innerHTML;
                expect(styleElementContent).not.toContain('--font-heading');
                expect(styleElementContent).not.toContain('--font-body');

                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('renders with theme prop with only the heading font', () => {
                const wrapper = render(
                    <NordstarProvider
                        theme={{
                            accents: {
                                primary: '#ff0000',
                                secondary: '#00ff00'
                            },
                            fonts: {
                                heading: 'heading'
                            }
                        }}
                        {...{ 'data-testid': 'style' }}
                    />
                );

                const styleElementContent = wrapper.getByTestId('style').innerHTML;
                expect(styleElementContent).toContain('--font-heading: heading');
                expect(styleElementContent).toContain('--font-body: heading');

                expect(() => wrapper.unmount()).not.toThrow();
            });
            it('renders with theme prop with only the body font', () => {
                const wrapper = render(
                    <NordstarProvider
                        theme={{
                            accents: {
                                primary: '#ff0000',
                                secondary: '#00ff00'
                            },
                            fonts: {
                                body: 'body'
                            }
                        }}
                        {...{ 'data-testid': 'style' }}
                    />
                );

                const styleElementContent = wrapper.getByTestId('style').innerHTML;
                expect(styleElementContent).toContain('--font-heading: body');
                expect(styleElementContent).toContain('--font-body: body');

                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('renders with theme prop with sizes defined', () => {
                const wrapper = render(
                    <NordstarProvider
                        theme={{
                            accents: {
                                primary: '#ff0000',
                                secondary: '#00ff00'
                            },
                            sizes: {
                                text: {
                                    body: '16px'
                                }
                            },
                            border: {
                                width: '8px',
                                radius: '25px'
                            }
                        }}
                        {...{ 'data-testid': 'style' }}
                    />
                );

                const styleElementContent = wrapper.getByTestId('style').innerHTML;
                expect(styleElementContent).toContain('--size-text-body: 16px');
                expect(styleElementContent).toContain('--border-width: 8px');
                expect(styleElementContent).toContain('--border-radius: 25px');

                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
