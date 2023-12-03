# @nordcom/nordstar-system

## 0.0.13

### Patch Changes

-   [`8ecf8f9`](https://github.com/NordcomInc/nordstar/commit/8ecf8f929c5f4b533a6de435b3049af5a3eaa9ca) Thanks [@filiphsps](https://github.com/filiphsps)! - Add layout and sizing options to `<NordstarProvider/>` and refine overall design.

## 0.0.12

### Patch Changes

-   [#102](https://github.com/NordcomInc/nordstar/pull/102) [`2865136`](https://github.com/NordcomInc/nordstar/commit/28651364a2fb32d9353733cf32a6dc01c5943bc4) Thanks [@filiphsps](https://github.com/filiphsps)! - Add theme prop to `<NordstarProvider/>`.

## 0.0.11

### Patch Changes

-   [#72](https://github.com/NordcomInc/nordstar/pull/72) [`b98011e`](https://github.com/NordcomInc/nordstar/commit/b98011e2b7b3bb992d5db3bfe64abccc9ff72596) Thanks [@filiphsps](https://github.com/filiphsps)! - Use typescript codebase directly during development internally.

    The `exports` get automatically replaced during packaging as a part of running `clean-package` in the `prepack` and `postpack` script(s).

## 0.0.10

### Patch Changes

-   [#69](https://github.com/NordcomInc/nordstar/pull/69) [`fba1544`](https://github.com/NordcomInc/nordstar/commit/fba1544bd929659f2d29c4b09d100b6aa44d650c) Thanks [@filiphsps](https://github.com/filiphsps)! - Remove unused css module.

## 0.0.9

### Patch Changes

-   [#66](https://github.com/NordcomInc/nordstar/pull/66) [`54e7ba4`](https://github.com/NordcomInc/nordstar/commit/54e7ba4b91f90c91bb3faabbdfc51add5cc158c1) Thanks [@filiphsps](https://github.com/filiphsps)! - Tweak default theme's values.

## 0.0.8

### Patch Changes

-   [#64](https://github.com/NordcomInc/nordstar/pull/64) [`98d2d1b`](https://github.com/NordcomInc/nordstar/commit/98d2d1b73d8c7f5fea75d20a50d11433760252a4) Thanks [@filiphsps](https://github.com/filiphsps)! - Add a few layout-related css variables.

## 0.0.7

### Patch Changes

-   [#62](https://github.com/NordcomInc/nordstar/pull/62) [`0fdb9b1`](https://github.com/NordcomInc/nordstar/commit/0fdb9b1b5bc0b9997aaf2f70bdda4d0a032fa22e) Thanks [@filiphsps](https://github.com/filiphsps)! - Add barebones `forwardRef` impl.

-   [#62](https://github.com/NordcomInc/nordstar/pull/62) [`0fdb9b1`](https://github.com/NordcomInc/nordstar/commit/0fdb9b1b5bc0b9997aaf2f70bdda4d0a032fa22e) Thanks [@filiphsps](https://github.com/filiphsps)! - Meta: Switch to using `esmodule`s.

## 0.0.6

### Patch Changes

-   [#60](https://github.com/NordcomInc/nordstar/pull/60) [`0bb364b`](https://github.com/NordcomInc/nordstar/commit/0bb364b0e5079a14873a9249daa6cde569ad61c1) Thanks [@renovate](https://github.com/apps/renovate)! - Upgrade to `vite` v5.

-   [#59](https://github.com/NordcomInc/nordstar/pull/59) [`bf87d75`](https://github.com/NordcomInc/nordstar/commit/bf87d757c738fedbf22e9ed5a0855af9795041ea) Thanks [@filiphsps](https://github.com/filiphsps)! - Migrate to `vite` from `tsup`.

-   [#59](https://github.com/NordcomInc/nordstar/pull/59) [`73d05ec`](https://github.com/NordcomInc/nordstar/commit/73d05ec8449ada8065dc95f8bec46b8c2e29aff9) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix style injection when using `vite`.

## 0.0.5

### Patch Changes

-   [#58](https://github.com/NordcomInc/nordstar/pull/58) [`99f6c4c`](https://github.com/NordcomInc/nordstar/commit/99f6c4ca1bff0db7a0650be5abe1d5a65c51cf8d) Thanks [@filiphsps](https://github.com/filiphsps)! - Move `<NordstarProvider/>` into a separate package.
    This is done to avoid circular dependencies between `@nordcom/nordstar` and `@nordcom/nordstar-*` as the meta package were importing and then exporting all sub packages.
