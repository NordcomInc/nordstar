import React from 'react';

import '@testing-library/jest-dom/vitest';
import '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import { Header } from '.';

describe('components', () => {
    describe('layout', () => {
        describe('Header', () => {
            it('has correct displayName', () => {
                expect(Header).toHaveProperty('displayName', 'Nordstar.Header');
            });

            it('renders correctly', () => {
                const wrapper = render(<Header />);

                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('renders the menu with content', () => {
                const wrapper = render(
                    <Header>
                        <Header.Menu>
                            <Header.Menu.Link data-testid="nordstar-header-menu-link">Hello World!</Header.Menu.Link>
                        </Header.Menu>
                    </Header>
                );

                const element = wrapper.getByTestId('nordstar-header-menu-link');

                expect(element).toHaveTextContent('Hello World!');
                expect(() => wrapper.unmount()).not.toThrow();
            });
        });

        describe('Header.Logo', () => {
            it('has correct displayName', () => {
                expect(Header.Logo).toHaveProperty('displayName', 'Nordstar.Header.Logo');
            });

            it('renders correctly', () => {
                const wrapper = render(
                    <Header>
                        <Header.Logo data-testid="nordstar-header-logo">Hello World!</Header.Logo>
                    </Header>
                );

                const element = wrapper.getByTestId('nordstar-header-logo');

                expect(element).toHaveTextContent('Hello World!');
                expect(() => wrapper.unmount()).not.toThrow();
            });
        });

        describe('Header.Menu', () => {
            it('has correct displayName', () => {
                expect(Header.Menu).toHaveProperty('displayName', 'Nordstar.Header.Menu');
            });

            it('renders correctly', () => {
                const wrapper = render(
                    <Header>
                        <Header.Menu data-testid="nordstar-header-menu">Hello World!</Header.Menu>
                    </Header>
                );

                const element = wrapper.getByTestId('nordstar-header-menu');

                expect(element).toHaveTextContent('Hello World!');
                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('renders as another element', () => {
                const wrapper = render(
                    <Header>
                        <Header.Menu>
                            <Header.Menu.Link data-testid="nordstar-header-menu-link" as="article">
                                Hello World!
                            </Header.Menu.Link>
                        </Header.Menu>
                    </Header>
                );

                const element = wrapper.getByTestId('nordstar-header-menu-link');

                expect(element).toHaveTextContent('Hello World!');
                expect(element.tagName).toBe('ARTICLE');
                expect(() => wrapper.unmount()).not.toThrow();
            });
        });

        describe('Header.Menu.Link', () => {
            it('has correct displayName', () => {
                expect(Header.Menu.Link).toHaveProperty('displayName', 'Nordstar.Header.Menu.Link');
            });

            it('renders correctly', () => {
                const wrapper = render(
                    <Header>
                        <Header.Menu>
                            <Header.Menu.Link data-testid="nordstar-header-menu-link">Hello World!</Header.Menu.Link>
                        </Header.Menu>
                    </Header>
                );

                const element = wrapper.getByTestId('nordstar-header-menu-link');

                expect(element).toHaveTextContent('Hello World!');
                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
