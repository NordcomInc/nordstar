# @nordcom/nordstar-button

## 0.0.27

### Patch Changes

- Updated dependencies [[`3e8bd2f`](https://github.com/NordcomInc/nordstar/commit/3e8bd2f70f6e8a87e06adb9777ee75040364f19c)]:
  - @nordcom/nordstar-system@0.0.27

## 0.0.26

### Patch Changes

- Updated dependencies [[`3ddfe12`](https://github.com/NordcomInc/nordstar/commit/3ddfe12ac03a9fb7ee26f4766294d5613efbff8e)]:
  - @nordcom/nordstar-system@0.0.26

## 0.0.25

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.25

## 0.0.24

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.24

## 0.0.23

### Patch Changes

- [`70b300d`](https://github.com/NordcomInc/nordstar/commit/70b300d773a89f2244f4a183b0ad0ffce62c3418) Thanks [@filiphsps](https://github.com/filiphsps)! - Center button content.

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.23

## 0.0.22

### Patch Changes

- [`52451b9`](https://github.com/NordcomInc/nordstar/commit/52451b99481315791fa11bff8aa69bfb46fb7e0e) Thanks [@filiphsps](https://github.com/filiphsps)! - Refactor `<Button/>` to use `[data-content]` and `[data-icon]`, making it way easier to style without having add a bunch of custom `className` props.

- [`77e0506`](https://github.com/NordcomInc/nordstar/commit/77e050682f350aff49572c8ddd108b4aaf811ec3) Thanks [@filiphsps](https://github.com/filiphsps)! - Improve how `tsc` builds the packages/apps, we now use `"moduleResolution": "Bundler"` and `"moduleDetection": "force"`.

- [`db0ae56`](https://github.com/NordcomInc/nordstar/commit/db0ae561b6a878e72115600d662eda21eda346d0) Thanks [@filiphsps](https://github.com/filiphsps)! - Update package description.

- [`9aee8f5`](https://github.com/NordcomInc/nordstar/commit/9aee8f529d25d9726367b7f6445ec528832acb78) Thanks [@filiphsps](https://github.com/filiphsps)! - Add support for rendering an icon.

- Updated dependencies [[`77e0506`](https://github.com/NordcomInc/nordstar/commit/77e050682f350aff49572c8ddd108b4aaf811ec3), [`db0ae56`](https://github.com/NordcomInc/nordstar/commit/db0ae561b6a878e72115600d662eda21eda346d0)]:
  - @nordcom/nordstar-system@0.0.22

## 0.0.21

### Patch Changes

- Updated dependencies [[`254168f`](https://github.com/NordcomInc/nordstar/commit/254168fe9b427ea56eef3c20185eb597df1ebb73), [`961f9af`](https://github.com/NordcomInc/nordstar/commit/961f9af6d41ba187c928598ba17dc59782b5ba30)]:
  - @nordcom/nordstar-system@0.0.21

## 0.0.20

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.20

## 0.0.19

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.19

## 0.0.18

### Patch Changes

- [#129](https://github.com/NordcomInc/nordstar/pull/129) [`69a6e39`](https://github.com/NordcomInc/nordstar/commit/69a6e39a0a1d6cbe3d412f887562e244c608d4e0) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency turbo to v1.11.1.

- [`b950cd4`](https://github.com/NordcomInc/nordstar/commit/b950cd448243fe0ba5b831e95a6d2ea483846f16) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix content alignment.

- [`5233770`](https://github.com/NordcomInc/nordstar/commit/5233770af4db8114be467712404502b389ac2a6c) Thanks [@filiphsps](https://github.com/filiphsps)! - Refactor tests to use their own tsconfig; this is to prevent typepollution.

- Updated dependencies [[`69a6e39`](https://github.com/NordcomInc/nordstar/commit/69a6e39a0a1d6cbe3d412f887562e244c608d4e0), [`c5cff63`](https://github.com/NordcomInc/nordstar/commit/c5cff6314804460934bbd200a8c952aa850b84a9), [`5233770`](https://github.com/NordcomInc/nordstar/commit/5233770af4db8114be467712404502b389ac2a6c)]:
  - @nordcom/nordstar-system@0.0.18

## 0.0.17

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.17

## 0.0.16

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.16

## 0.0.15

### Patch Changes

- [#108](https://github.com/NordcomInc/nordstar/pull/108) [`2885663`](https://github.com/NordcomInc/nordstar/commit/28856638ececea0f598cf5f418456f8fd2f2114d) Thanks [@filiphsps](https://github.com/filiphsps)! - - Update release tooling, this should hopefully fix the issue with wildcard (`*`) dependencies. I will have to push a new release to verify.

  - Completely refactored how packages are built, exported and reimported. We will have to look into a better way to deal with `clean-package` as we'd eventually like to be able to export the `scss`/`css` modules as well.
    - Fixes code duplication inside of `@nordcom/nordstar`.
    - No longer embeds jsx-runtime into every package.

- [#109](https://github.com/NordcomInc/nordstar/pull/109) [`ee1c4d5`](https://github.com/NordcomInc/nordstar/commit/ee1c4d5915be9bb07ea8bcbcaa342206ab3fa9c1) Thanks [@filiphsps](https://github.com/filiphsps)! - Revert class name minification.

- Updated dependencies [[`2885663`](https://github.com/NordcomInc/nordstar/commit/28856638ececea0f598cf5f418456f8fd2f2114d)]:
  - @nordcom/nordstar-system@0.0.15

## 0.0.14

### Patch Changes

- [#106](https://github.com/NordcomInc/nordstar/pull/106) [`c2b7661`](https://github.com/NordcomInc/nordstar/commit/c2b7661b0f49beb5e7c0acf411fec3dfa35e5f06) Thanks [@filiphsps](https://github.com/filiphsps)! - Export `css`, you should probably never need nor use this;
  but it is now available for those who might need direct access to the styling.

- [#106](https://github.com/NordcomInc/nordstar/pull/106) [`c5540d2`](https://github.com/NordcomInc/nordstar/commit/c5540d23f9d8d9af4a44b56a30739f496b1e4742) Thanks [@filiphsps](https://github.com/filiphsps)! - Add `<Button/>` component for triggering actionable events on an interaction.

- Updated dependencies [[`c2b7661`](https://github.com/NordcomInc/nordstar/commit/c2b7661b0f49beb5e7c0acf411fec3dfa35e5f06), [`f2786c3`](https://github.com/NordcomInc/nordstar/commit/f2786c3c5dab2828fc6a1e8ee54063e8c6169031), [`2bf8c2c`](https://github.com/NordcomInc/nordstar/commit/2bf8c2cfc7ffd2a8d4d8149017c0f761f7a7a53b)]:
  - @nordcom/nordstar-system@0.0.14
