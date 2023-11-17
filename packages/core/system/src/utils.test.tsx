import React from 'react';
import { describe, expect, it } from 'vitest';
import { forwardRef } from './utils';

describe('core', () => {
    describe('system', () => {
        describe('forwardRef', () => {
            it('should forward refs', () => {
                const ref = { current: null };
                const Component = forwardRef<'div', { foo: string }>((props, ref) => {
                    return <div ref={ref} {...props} />;
                }) as any;
                const element: any = <Component foo="bar" ref={ref} />;
                expect(element.props.foo).toBe('bar');
                expect(element.ref).toBe(ref);
            });
        });
    });
});
