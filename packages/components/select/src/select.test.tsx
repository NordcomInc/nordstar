import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Select } from '.';

/**
 * Renders a minimal but complete select for the wrapper assertions below.
 *
 * @param props - Root props forwarded to `Select` (e.g. `disabled`, `defaultValue`).
 * @returns The Testing Library render result.
 */
const renderSelect = (props: Partial<Parameters<typeof Select>[0]> = {}) =>
    render(
        <Select {...props}>
            <Select.Trigger>
                <Select.Value placeholder="Pick a fruit" />
            </Select.Trigger>
            <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="pear">Pear</Select.Item>
            </Select.Content>
        </Select>,
    );

describe('components', () => {
    describe('Select', () => {
        it('has correct displayName', () => {
            expect(Select).toHaveProperty('displayName', 'Nordstar.Select');
        });

        it('exposes the compound parts', () => {
            expect(Select.Trigger).toHaveProperty('displayName', 'Nordstar.Select.Trigger');
            expect(Select.Content).toHaveProperty('displayName', 'Nordstar.Select.Content');
            expect(Select.Item).toHaveProperty('displayName', 'Nordstar.Select.Item');
            expect(Select.Label).toHaveProperty('displayName', 'Nordstar.Select.Label');
            expect(Select.Separator).toHaveProperty('displayName', 'Nordstar.Select.Separator');
            expect(Select.Value).toBeDefined();
            expect(Select.Group).toBeDefined();
        });

        it('renders a closed trigger showing the placeholder', () => {
            const wrapper = renderSelect();
            const trigger = wrapper.getByRole('combobox');

            expect(trigger).toHaveTextContent('Pick a fruit');
            expect(trigger).toHaveAttribute('aria-expanded', 'false');
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('does not render the options until opened', () => {
            const wrapper = renderSelect();

            expect(wrapper.queryByText('Pear')).not.toBeInTheDocument();
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('reflects the disabled state on the trigger', () => {
            const wrapper = renderSelect({ disabled: true });
            const trigger = wrapper.getByRole('combobox');

            expect(trigger).toBeDisabled();
            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('merges a custom className onto the trigger', () => {
            const wrapper = render(
                <Select>
                    <Select.Trigger className="custom">
                        <Select.Value placeholder="Pick a fruit" />
                    </Select.Trigger>
                    <Select.Content>
                        <Select.Item value="apple">Apple</Select.Item>
                    </Select.Content>
                </Select>,
            );
            const trigger = wrapper.getByRole('combobox');

            expect(trigger).toHaveClass('custom');
            expect(trigger).toHaveClass('rounded-sm');
            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
