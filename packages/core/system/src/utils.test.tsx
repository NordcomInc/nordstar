import { describe, expect, it } from 'vitest';
import { cn, forwardRef } from './utils';

describe('core', () => {
    describe('system', () => {
        describe('forwardRef', () => {
            it('forward refs', () => {
                const ref = { current: null };
                const Component = forwardRef<'div', { foo: string }>((props, ref) => {
                    return <div ref={ref} {...props} />;
                }) as any;
                const element: any = <Component foo="bar" ref={ref} />;
                expect(element.props.foo).toBe('bar');
                expect(element.ref).toBe(ref);
            });
        });

        describe('cn', () => {
            it('returns undefined when no classes resolve', () => {
                expect(cn()).toBeUndefined();
                expect(cn(null, undefined, false)).toBeUndefined();
            });

            it('merges and dedupes class names', () => {
                expect(cn('foo', 'bar', null, false, undefined)).toBe('foo bar');
            });
        });
    });
});
