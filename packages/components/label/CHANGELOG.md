# @nordcom/nordstar-label

## 0.0.19

### Patch Changes

-   Updated dependencies []:
    -   @nordcom/nordstar-system@0.0.19

## 0.0.18

### Patch Changes

-   [#129](https://github.com/NordcomInc/nordstar/pull/129) [`69a6e39`](https://github.com/NordcomInc/nordstar/commit/69a6e39a0a1d6cbe3d412f887562e244c608d4e0) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency turbo to v1.11.1.

-   [`3a2967d`](https://github.com/NordcomInc/nordstar/commit/3a2967d167091124c7930d68948451c64c06403a) Thanks [@filiphsps](https://github.com/filiphsps)! - Inherit text size.

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

-   [#106](https://github.com/NordcomInc/nordstar/pull/106) [`7576eba`](https://github.com/NordcomInc/nordstar/commit/7576eba51730bde64f955d4e47e9819375755c93) Thanks [@filiphsps](https://github.com/filiphsps)! - Add the `<Label/>` component.

    You no longer have to misuse `<Heading level="h4" as="div"/>` 🥳.

-   Updated dependencies [[`c2b7661`](https://github.com/NordcomInc/nordstar/commit/c2b7661b0f49beb5e7c0acf411fec3dfa35e5f06), [`f2786c3`](https://github.com/NordcomInc/nordstar/commit/f2786c3c5dab2828fc6a1e8ee54063e8c6169031), [`2bf8c2c`](https://github.com/NordcomInc/nordstar/commit/2bf8c2cfc7ffd2a8d4d8149017c0f761f7a7a53b)]:
    -   @nordcom/nordstar-system@0.0.14
