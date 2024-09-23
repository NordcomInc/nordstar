import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

type Parameters<Type extends (...args: any) => any> = Type extends (...args: infer Args) => any ? Args : never;
type NonNullable<T> = Exclude<T, null | undefined>;
type Theme = NonNullable<Parameters<(typeof addons)['setConfig']>['0']['theme']>;

export const darkTheme: Theme = create({
    base: 'dark',

    brandImage: 'https://nordcom.io/logo-light.svg',
    brandTarget: '_self',
    brandTitle: "Nordcom AB's Nordstar",
    brandUrl: 'https://nordstar.dev/',

    appBg: '#262626',
    appBorderColor: '#262626',
    appBorderRadius: 0,
    appContentBg: '#000000',
    appPreviewBg: '#000000',
    barBg: '#262626',
    barHoverColor: '#ed1e79',
    barSelectedColor: '#ed1e79',
    barTextColor: '#fefefe',
    booleanBg: '#ed1e79',
    booleanSelectedBg: '#000000',
    buttonBg: '#ed1e79',
    buttonBorder: '#ed1e79',
    colorPrimary: '#ed1e79',
    colorSecondary: '#ed1e79',
    fontBase: 'var(--font-sans, var(--font-fallback))',
    fontCode: 'var(--font-mono)',
    gridCellSize: 8,
    inputBg: '#000000',
    inputBorder: '#fefefe',
    inputBorderRadius: 8,
    inputTextColor: '#fefefe',
    textColor: '#fefefe',
    textInverseColor: '#000000',
    textMutedColor: '#e5e7eb'
});
export const lightTheme: Theme = create({
    base: 'light',

    brandImage: 'https://nordcom.io/logo-dark.svg',
    brandTarget: '_self',
    brandTitle: "Nordcom AB's Nordstar",
    brandUrl: 'https://nordstar.dev/',

    appBg: '#e5e7eb',
    appBorderColor: '#e5e7eb',
    appBorderRadius: 0,
    appContentBg: '#fefefe',
    appPreviewBg: '#fefefe',
    barBg: '#e5e7eb',
    barHoverColor: '#ed1e79',
    barSelectedColor: '#ed1e79',
    barTextColor: '#000000',
    booleanBg: '#ed1e79',
    booleanSelectedBg: '#fefefe',
    buttonBg: '#ed1e79',
    buttonBorder: '#ed1e79',
    colorPrimary: '#ed1e79',
    colorSecondary: '#ed1e79',
    fontBase: 'var(--font-sans, var(--font-fallback))',
    fontCode: 'var(--font-mono)',
    gridCellSize: 8,
    inputBg: '#fefefe',
    inputBorder: '#fefefe',
    inputBorderRadius: 8,
    inputTextColor: '#000000',
    textColor: '#000000',
    textInverseColor: '#fefefe',
    textMutedColor: '#262626'
});

addons.setConfig({
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme
});
