import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import type { WeakValidationMap } from 'prop-types';
import type { ComponentPropsWithoutRef, ElementType, ForwardRefRenderFunction, ReactElement } from 'react';
import { forwardRef as baseForwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type As<Props = any> = ElementType<Props>;

export type PropsOf<T extends As> = ComponentPropsWithoutRef<T> & {
    as?: As;
};

export type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<
    Target,
    'as' | OmitAdditionalProps
>;

export type RightJoinProps<SourceProps extends object = {}, OverrideProps extends object = {}> = OmitCommonProps<
    SourceProps,
    keyof OverrideProps
> &
    OverrideProps;

export type MergeWithAs<
    ComponentProps extends object,
    AsProps extends object,
    AdditionalProps extends object = {},
    AsComponent extends As = As
> = (RightJoinProps<ComponentProps, AdditionalProps> | RightJoinProps<AsProps, AdditionalProps>) & {
    as?: AsComponent;
};

export type InternalForwardRefRenderFunction<
    Component extends As,
    Props extends object = {},
    OmitKeys extends keyof any = never
> = {
    <AsComponent extends As = Component>(
        props: MergeWithAs<
            ComponentPropsWithoutRef<Component>,
            Omit<ComponentPropsWithoutRef<AsComponent>, OmitKeys>,
            Props,
            AsComponent
        >
    ): ReactElement | null;
    readonly $$typeof: symbol;
    defaultProps?: Partial<Props> | undefined;
    propTypes?: WeakValidationMap<Props> | undefined;
    displayName?: string | undefined;
};

export type CSSCustomProperties = {
    [key: `--${string}`]: string | number;
} & React.CSSProperties;

export function forwardRef<Component extends As, Props extends object, OmitKeys extends keyof any = never>(
    component: ForwardRefRenderFunction<
        any,
        RightJoinProps<PropsOf<Component>, Props> & {
            as?: As;
        }
    >
) {
    return baseForwardRef(component as any) as InternalForwardRefRenderFunction<Component, Props, OmitKeys>;
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs)) || undefined;
}
