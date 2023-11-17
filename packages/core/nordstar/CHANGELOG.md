# @nordcom/nordstar

## 0.0.7

### Patch Changes

-   [#62](https://github.com/NordcomInc/nordstar/pull/62) [`0fdb9b1`](https://github.com/NordcomInc/nordstar/commit/0fdb9b1b5bc0b9997aaf2f70bdda4d0a032fa22e) Thanks [@filiphsps](https://github.com/filiphsps)! - Meta: Switch to using `esmodule`s.

-   Updated dependencies [[`0fdb9b1`](https://github.com/NordcomInc/nordstar/commit/0fdb9b1b5bc0b9997aaf2f70bdda4d0a032fa22e), [`0fdb9b1`](https://github.com/NordcomInc/nordstar/commit/0fdb9b1b5bc0b9997aaf2f70bdda4d0a032fa22e), [`0fdb9b1`](https://github.com/NordcomInc/nordstar/commit/0fdb9b1b5bc0b9997aaf2f70bdda4d0a032fa22e)]:
    -   @nordcom/nordstar-heading@0.0.7
    -   @nordcom/nordstar-system@0.0.7
    -   @nordcom/nordstar-card@0.0.7

## 0.0.6

### Patch Changes

-   [#60](https://github.com/NordcomInc/nordstar/pull/60) [`0bb364b`](https://github.com/NordcomInc/nordstar/commit/0bb364b0e5079a14873a9249daa6cde569ad61c1) Thanks [@renovate](https://github.com/apps/renovate)! - Upgrade to `vite` v5.

-   [#59](https://github.com/NordcomInc/nordstar/pull/59) [`bf87d75`](https://github.com/NordcomInc/nordstar/commit/bf87d757c738fedbf22e9ed5a0855af9795041ea) Thanks [@filiphsps](https://github.com/filiphsps)! - Migrate to `vite` from `tsup`.

-   [#59](https://github.com/NordcomInc/nordstar/pull/59) [`73d05ec`](https://github.com/NordcomInc/nordstar/commit/73d05ec8449ada8065dc95f8bec46b8c2e29aff9) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix style injection when using `vite`.

-   Updated dependencies [[`0bb364b`](https://github.com/NordcomInc/nordstar/commit/0bb364b0e5079a14873a9249daa6cde569ad61c1), [`bf87d75`](https://github.com/NordcomInc/nordstar/commit/bf87d757c738fedbf22e9ed5a0855af9795041ea), [`73d05ec`](https://github.com/NordcomInc/nordstar/commit/73d05ec8449ada8065dc95f8bec46b8c2e29aff9)]:
    -   @nordcom/nordstar-card@0.0.6
    -   @nordcom/nordstar-heading@0.0.6
    -   @nordcom/nordstar-system@0.0.6

## 0.0.5

### Patch Changes

-   [#58](https://github.com/NordcomInc/nordstar/pull/58) [`99f6c4c`](https://github.com/NordcomInc/nordstar/commit/99f6c4ca1bff0db7a0650be5abe1d5a65c51cf8d) Thanks [@filiphsps](https://github.com/filiphsps)! - Move `<NordstarProvider/>` into a separate package.
    This is done to avoid circular dependencies between `@nordcom/nordstar` and `@nordcom/nordstar-*` as the meta package were importing and then exporting all sub packages.

-   [#56](https://github.com/NordcomInc/nordstar/pull/56) [`394fd8b`](https://github.com/NordcomInc/nordstar/commit/394fd8b9c9216644267e55e05ac5f6f5e6ca05a0) Thanks [@filiphsps](https://github.com/filiphsps)! - Attempt to properly exporting the typings.

-   Updated dependencies [[`99f6c4c`](https://github.com/NordcomInc/nordstar/commit/99f6c4ca1bff0db7a0650be5abe1d5a65c51cf8d), [`394fd8b`](https://github.com/NordcomInc/nordstar/commit/394fd8b9c9216644267e55e05ac5f6f5e6ca05a0)]:
    -   @nordcom/nordstar-system@0.0.5
    -   @nordcom/nordstar-heading@0.0.5
    -   @nordcom/nordstar-card@0.0.5

## 0.0.4

### Patch Changes

-   [#53](https://github.com/NordcomInc/nordstar/pull/53) [`7f132eb`](https://github.com/NordcomInc/nordstar/commit/7f132eb2dea663f0855fb731bf5952b2c72e8aa2) Thanks [@filiphsps](https://github.com/filiphsps)! - Use `scss` and css variables to handle component styling.

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
