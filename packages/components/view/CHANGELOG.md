# @nordcom/nordstar-view

## 0.0.21

### Patch Changes

-   [`9612e4f`](https://github.com/NordcomInc/nordstar/commit/9612e4ff50a605b0b6c3b51a68e5d6d6990d04d6) Thanks [@filiphsps](https://github.com/filiphsps)! - Improve usage of `<View />` in `withoutWrapper` mode.

-   Updated dependencies [[`254168f`](https://github.com/NordcomInc/nordstar/commit/254168fe9b427ea56eef3c20185eb597df1ebb73), [`961f9af`](https://github.com/NordcomInc/nordstar/commit/961f9af6d41ba187c928598ba17dc59782b5ba30)]:
    -   @nordcom/nordstar-system@0.0.21

## 0.0.20

### Patch Changes

-   [`df751f0`](https://github.com/NordcomInc/nordstar/commit/df751f05c32a3f26e3baecd26f3b24fe306cc935) Thanks [@filiphsps](https://github.com/filiphsps)! - Add `as`, `outerAs` and `withoutWrapper` props to `<View />`.

-   Updated dependencies []:
    -   @nordcom/nordstar-system@0.0.20

## 0.0.19

### Patch Changes

-   Updated dependencies []:
    -   @nordcom/nordstar-system@0.0.19

## 0.0.18

### Patch Changes

-   [#129](https://github.com/NordcomInc/nordstar/pull/129) [`69a6e39`](https://github.com/NordcomInc/nordstar/commit/69a6e39a0a1d6cbe3d412f887562e244c608d4e0) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency turbo to v1.11.1.

-   [`5233770`](https://github.com/NordcomInc/nordstar/commit/5233770af4db8114be467712404502b389ac2a6c) Thanks [@filiphsps](https://github.com/filiphsps)! - Refactor tests to use their own tsconfig; this is to prevent typepollution.

-   Updated dependencies [[`69a6e39`](https://github.com/NordcomInc/nordstar/commit/69a6e39a0a1d6cbe3d412f887562e244c608d4e0), [`c5cff63`](https://github.com/NordcomInc/nordstar/commit/c5cff6314804460934bbd200a8c952aa850b84a9), [`5233770`](https://github.com/NordcomInc/nordstar/commit/5233770af4db8114be467712404502b389ac2a6c)]:
    -   @nordcom/nordstar-system@0.0.18

## 0.0.17

### Patch Changes

-   Updated dependencies []:
    -   @nordcom/nordstar-system@0.0.17

## 0.0.16

### Patch Changes

-   Updated dependencies []:
    -   @nordcom/nordstar-system@0.0.16

## 0.0.15

### Patch Changes

-   [#108](https://github.com/NordcomInc/nordstar/pull/108) [`2885663`](https://github.com/NordcomInc/nordstar/commit/28856638ececea0f598cf5f418456f8fd2f2114d) Thanks [@filiphsps](https://github.com/filiphsps)! - - Update release tooling, this should hopefully fix the issue with wildcard (`*`) dependencies. I will have to push a new release to verify.

    -   Completely refactored how packages are built, exported and reimported. We will have to look into a better way to deal with `clean-package` as we'd eventually like to be able to export the `scss`/`css` modules as well.
        -   Fixes code duplication inside of `@nordcom/nordstar`.
        -   No longer embeds jsx-runtime into every package.

-   [#109](https://github.com/NordcomInc/nordstar/pull/109) [`ee1c4d5`](https://github.com/NordcomInc/nordstar/commit/ee1c4d5915be9bb07ea8bcbcaa342206ab3fa9c1) Thanks [@filiphsps](https://github.com/filiphsps)! - Revert class name minification.

-   Updated dependencies [[`2885663`](https://github.com/NordcomInc/nordstar/commit/28856638ececea0f598cf5f418456f8fd2f2114d)]:
    -   @nordcom/nordstar-system@0.0.15

## 0.0.14

### Patch Changes

-   [#106](https://github.com/NordcomInc/nordstar/pull/106) [`c2b7661`](https://github.com/NordcomInc/nordstar/commit/c2b7661b0f49beb5e7c0acf411fec3dfa35e5f06) Thanks [@filiphsps](https://github.com/filiphsps)! - Export `css`, you should probably never need nor use this;
    but it is now available for those who might need direct access to the styling.
-   Updated dependencies [[`c2b7661`](https://github.com/NordcomInc/nordstar/commit/c2b7661b0f49beb5e7c0acf411fec3dfa35e5f06), [`f2786c3`](https://github.com/NordcomInc/nordstar/commit/f2786c3c5dab2828fc6a1e8ee54063e8c6169031), [`2bf8c2c`](https://github.com/NordcomInc/nordstar/commit/2bf8c2cfc7ffd2a8d4d8149017c0f761f7a7a53b)]:
    -   @nordcom/nordstar-system@0.0.14

## 0.0.13

### Patch Changes

-   Updated dependencies [[`8ecf8f9`](https://github.com/NordcomInc/nordstar/commit/8ecf8f929c5f4b533a6de435b3049af5a3eaa9ca)]:
    -   @nordcom/nordstar-system@0.0.13

## 0.0.12

### Patch Changes

-   [#102](https://github.com/NordcomInc/nordstar/pull/102) [`2865136`](https://github.com/NordcomInc/nordstar/commit/28651364a2fb32d9353733cf32a6dc01c5943bc4) Thanks [@filiphsps](https://github.com/filiphsps)! - Add theme prop to `<NordstarProvider/>`.

-   Updated dependencies [[`2865136`](https://github.com/NordcomInc/nordstar/commit/28651364a2fb32d9353733cf32a6dc01c5943bc4)]:
    -   @nordcom/nordstar-system@0.0.12

## 0.0.11

### Patch Changes

-   [#72](https://github.com/NordcomInc/nordstar/pull/72) [`b98011e`](https://github.com/NordcomInc/nordstar/commit/b98011e2b7b3bb992d5db3bfe64abccc9ff72596) Thanks [@filiphsps](https://github.com/filiphsps)! - Use typescript codebase directly during development internally.

    The `exports` get automatically replaced during packaging as a part of running `clean-package` in the `prepack` and `postpack` script(s).

-   Updated dependencies [[`b98011e`](https://github.com/NordcomInc/nordstar/commit/b98011e2b7b3bb992d5db3bfe64abccc9ff72596)]:
    -   @nordcom/nordstar-system@0.0.11

## 0.0.10

### Patch Changes

-   Updated dependencies [[`fba1544`](https://github.com/NordcomInc/nordstar/commit/fba1544bd929659f2d29c4b09d100b6aa44d650c)]:
    -   @nordcom/nordstar-system@0.0.10

## 0.0.9

### Patch Changes

-   Updated dependencies [[`54e7ba4`](https://github.com/NordcomInc/nordstar/commit/54e7ba4b91f90c91bb3faabbdfc51add5cc158c1)]:
    -   @nordcom/nordstar-system@0.0.9

## 0.0.8

### Patch Changes

-   [#64](https://github.com/NordcomInc/nordstar/pull/64) [`98d2d1b`](https://github.com/NordcomInc/nordstar/commit/98d2d1b73d8c7f5fea75d20a50d11433760252a4) Thanks [@filiphsps](https://github.com/filiphsps)! - Add a few layout-related css variables.

-   [#64](https://github.com/NordcomInc/nordstar/pull/64) [`98d2d1b`](https://github.com/NordcomInc/nordstar/commit/98d2d1b73d8c7f5fea75d20a50d11433760252a4) Thanks [@filiphsps](https://github.com/filiphsps)! - Add `<View/>` component.

-   Updated dependencies [[`98d2d1b`](https://github.com/NordcomInc/nordstar/commit/98d2d1b73d8c7f5fea75d20a50d11433760252a4)]:
    -   @nordcom/nordstar-system@0.0.8
