# @nordcom/nordstar

## 0.0.3

### Patch Changes

-   [`3c6334e`](https://github.com/NordcomInc/nordstar/commit/3c6334e1fcc33c358a2f25c53a476633d58b064c) Thanks [@filiphsps](https://github.com/filiphsps)! - Improve and update the release infrastructure.

-   [#34](https://github.com/NordcomInc/nordstar/pull/34) [`c65ef98`](https://github.com/NordcomInc/nordstar/commit/c65ef98b6a3764ec2b0451d4f77402f3f720697a) Thanks [@filiphsps](https://github.com/filiphsps)! - Update `release` workflow to support automatic `unstable` releases.

## 0.0.2

### Patch Changes

-   [#29](https://github.com/NordcomInc/nordstar/pull/29) [`f2705e7`](https://github.com/NordcomInc/nordstar/commit/f2705e7da345bb82bf81f0db51495b064d1f1846) Thanks [@filiphsps](https://github.com/filiphsps)! - Added an initial `<NordstarProvider/>` component.

    This will in the future be used to deal with things like overlays,
    modals, and other components that need to be rendered outside of the
    normal flow of the application. It will most likely also deal with the
    theming of the components (instead of using a dedicated
    `<ThemeProvider/>`) and the `i18n` support. (d8afab94).
