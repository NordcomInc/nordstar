import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Label } from '.';

describe('components', () => {
    describe('Label', () => {
        it('has correct displayName', () => {
            expect(Label).toHaveProperty('displayName', 'Nordstar.Typography.Label');
        });

        it('renders correctly', () => {
            const wrapper = render(<Label>Hello World</Label>);

            expect(() => wrapper.unmount()).not.toThrow();
        });

        (['foreground', 'primary', 'secondary'] as const).forEach((color) => {
            it(`renders with color ${color}`, () => {
                const wrapper = render(
                    <Label color={color} data-testid="nordstar-label">
                        Hello World
                    </Label>,
                );

                expect(wrapper.getByTestId('nordstar-label')).toHaveAttribute('data-color', color);
                expect(() => wrapper.unmount()).not.toThrow();
            });
        });
    });
});
