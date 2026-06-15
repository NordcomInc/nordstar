import '@testing-library/jest-dom/vitest';
import '@testing-library/react';

import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Input } from '.';

describe('components', () => {
    describe('Input', () => {
        it('has correct displayName', () => {
            expect(Input).toHaveProperty('displayName', 'Nordstar.Input');
        });

        it('renders correctly', () => {
            const wrapper = render(<Input />);

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders correctly with label', () => {
            const wrapper = render(<Input data-testid="nordstar-input" label="Hello World!" />);

            const element = wrapper.getByTestId('nordstar-input').parentElement;

            expect(element).toContainElement(wrapper.getByText('Hello World!'));
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders correctly with value', () => {
            const wrapper = render(<Input data-testid="nordstar-input" value={'Hello World!'} />);

            const element = wrapper.getByTestId('nordstar-input');

            expect(element).toHaveValue('Hello World!');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders correctly with defaultValue', () => {
            const wrapper = render(<Input data-testid="nordstar-input" defaultValue={'Hello World!'} />);

            const element = wrapper.getByTestId('nordstar-input');

            expect(element).toHaveValue('Hello World!');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders correctly with defaultValue', () => {
            const wrapper = render(<Input data-testid="nordstar-input" placeholder="Hello World!" />);

            const element = wrapper.getByTestId('nordstar-input');

            expect(element).toHaveAttribute('placeholder', 'Hello World!');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders correctly as another element', () => {
            const wrapper = render(
                <Input as="article" data-testid="nordstar-input">
                    Hello World!
                </Input>,
            );

            const element = wrapper.getByTestId('nordstar-input');

            expect(element).toHaveTextContent('Hello World!');
            expect(element.tagName).toBe('ARTICLE');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('updates contents when typing', () => {
            const wrapper = render(<Input data-testid="nordstar-input" />);

            const element = wrapper.getByTestId('nordstar-input') as HTMLInputElement;

            fireEvent.change(element, { target: { value: 'Hello World!' } });

            expect(element).toHaveValue('Hello World!');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders as a textarea', () => {
            const wrapper = render(<Input as="textarea" data-testid="nordstar-input" label="Note" />);

            const element = wrapper.getByTestId('nordstar-input');

            expect(element.tagName).toBe('TEXTAREA');
            expect(element).not.toHaveAttribute('type');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders with explicit input type', () => {
            const wrapper = render(<Input data-testid="nordstar-input" type="email" />);

            expect(wrapper.getByTestId('nordstar-input')).toHaveAttribute('type', 'email');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('falls back to type="text" when type prop is empty', () => {
            const wrapper = render(<Input data-testid="nordstar-input" type={'' as any} />);

            expect(wrapper.getByTestId('nordstar-input')).toHaveAttribute('type', 'text');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('renders with non-default color', () => {
            const wrapper = render(<Input color="primary" data-testid="nordstar-input" />);

            const wrapperElement = wrapper.getByTestId('nordstar-input').parentElement;
            expect(wrapperElement).toHaveAttribute('data-color', 'primary');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('floats the label when a value is present', () => {
            const wrapper = render(<Input data-testid="nordstar-input" defaultValue="Hello World!" label="Greeting" />);

            const wrapperElement = wrapper.getByTestId('nordstar-input').parentElement;
            expect(wrapperElement).toHaveAttribute('data-value');
            expect(wrapper.getByText('Greeting')).toHaveClass('scale-65');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('forwards onChange to the consumer for uncontrolled inputs', () => {
            const onChange = vi.fn();
            const wrapper = render(<Input data-testid="nordstar-input" onChange={onChange} />);

            const element = wrapper.getByTestId('nordstar-input') as HTMLInputElement;
            fireEvent.change(element, { target: { value: 'Hello World!' } });

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(element).toHaveValue('Hello World!');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('forwards onChange to the consumer for controlled inputs', () => {
            const onChange = vi.fn();
            const wrapper = render(<Input data-testid="nordstar-input" onChange={onChange} value="Fixed" />);

            fireEvent.change(wrapper.getByTestId('nordstar-input'), { target: { value: 'Changed' } });

            expect(onChange).toHaveBeenCalledTimes(1);
            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
