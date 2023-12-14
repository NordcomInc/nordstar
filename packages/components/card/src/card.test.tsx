import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';

import { render } from '@testing-library/react';
import React from 'react';
import { Card } from '../src';

describe('components', () => {
    describe('card', () => {
        describe('Card', () => {
            it('should render correctly with default props', () => {
                const wrapper = render(<Card />);
                expect(() => wrapper.unmount()).not.toThrow();
            });
            it('should render correctly with variant="default" and color="default"', () => {
                const wrapper = render(<Card variant="default" color="default" />);
                expect(() => wrapper.unmount()).not.toThrow();
            });
            it('should render correctly with variant="solid" and color="default"', () => {
                const wrapper = render(<Card variant="solid" color="default" />);
                expect(() => wrapper.unmount()).not.toThrow();
            });
            it('should render correctly with variant="solid" and color="primary"', () => {
                const wrapper = render(<Card variant="solid" color="primary" />);
                expect(() => wrapper.unmount()).not.toThrow();
            });
            it('should render correctly with variant="solid" and color="secondary"', () => {
                const wrapper = render(<Card variant="solid" color="secondary" />);
                expect(() => wrapper.unmount()).not.toThrow();
            });
            it('should render correctly with variant="default" and color undefined', () => {
                const wrapper = render(<Card variant="default" />);
                expect(() => wrapper.unmount()).not.toThrow();
            });
            it('should render correctly with variant="solid" and color undefined', () => {
                const wrapper = render(<Card variant="solid" />);
                expect(() => wrapper.unmount()).not.toThrow();
            });
            it('should render correctly with variant undefined and color="default"', () => {
                const wrapper = render(<Card color="default" />);
                expect(() => wrapper.unmount()).not.toThrow();
            });
            it('should render correctly with variant undefined and color="primary"', () => {
                const wrapper = render(<Card color="primary" />);
                expect(() => wrapper.unmount()).not.toThrow();
            });
            it('should render correctly with variant undefined and color="secondary"', () => {
                const wrapper = render(<Card color="secondary" />);
                expect(() => wrapper.unmount()).not.toThrow();
            });
            it('should render correctly with variant and color both undefined', () => {
                const wrapper = render(<Card />);
                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
