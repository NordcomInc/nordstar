# @nordcom/nordstar-system

## 0.0.35

### Patch Changes

- [#250](https://github.com/NordcomInc/nordstar/pull/250) [`a9cc081`](https://github.com/NordcomInc/nordstar/commit/a9cc0816f18ce8f0d879e989705bb8aa7cb108b5) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.2.0.

- [#252](https://github.com/NordcomInc/nordstar/pull/252) [`2f836e9`](https://github.com/NordcomInc/nordstar/commit/2f836e92d17941b6d131021c821625f7c41a360b) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.2.1.

- [#253](https://github.com/NordcomInc/nordstar/pull/253) [`914b186`](https://github.com/NordcomInc/nordstar/commit/914b1862e4e211b423f15205f204a25fcce5b94d) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.2.2.

- [#261](https://github.com/NordcomInc/nordstar/pull/261) [`5a7645c`](https://github.com/NordcomInc/nordstar/commit/5a7645cdb1074c4e1f0c3938e7e8e3a0da467df1) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.2.4.

## 0.0.34

## 0.0.33

### Patch Changes

- [`347baab`](https://github.com/NordcomInc/nordstar/commit/347baab2c084676779c0ace369e87de67e94faec) Thanks [@filiphsps](https://github.com/filiphsps)! - Design: Fix styling.

## 0.0.32

## 0.0.31

## 0.0.30

### Patch Changes

- [#225](https://github.com/NordcomInc/nordstar/pull/225) [`76f9c57`](https://github.com/NordcomInc/nordstar/commit/76f9c577147515d6113b25758521f549cfa300f5) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency sass to v1.69.6.

- [`f92bbca`](https://github.com/NordcomInc/nordstar/commit/f92bbcaa15e25c146e5217333966fbcf36804f03) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix issues with `<Input />` and improve color support.

## 0.0.29

## 0.0.28

### Patch Changes

- [#209](https://github.com/NordcomInc/nordstar/pull/209) [`2dac3e6`](https://github.com/NordcomInc/nordstar/commit/2dac3e68d2e0e9b02446c80a2fd949558626bc1e) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update storybook monorepo to v7.6.6.

## 0.0.27

### Patch Changes

- [#220](https://github.com/NordcomInc/nordstar/pull/220) [`3e8bd2f`](https://github.com/NordcomInc/nordstar/commit/3e8bd2f70f6e8a87e06adb9777ee75040364f19c) Thanks [@filiphsps](https://github.com/filiphsps)! - Input: Introduce the `<Input/>` component.

## 0.0.26

### Patch Changes

- [`3ddfe12`](https://github.com/NordcomInc/nordstar/commit/3ddfe12ac03a9fb7ee26f4766294d5613efbff8e) Thanks [@filiphsps](https://github.com/filiphsps)! - Refactor `<Accented/>` to use data attributes.

## 0.0.25

## 0.0.24

## 0.0.23

## 0.0.22

### Patch Changes

- [`77e0506`](https://github.com/NordcomInc/nordstar/commit/77e050682f350aff49572c8ddd108b4aaf811ec3) Thanks [@filiphsps](https://github.com/filiphsps)! - Improve how `tsc` builds the packages/apps, we now use `"moduleResolution": "Bundler"` and `"moduleDetection": "force"`.

- [`db0ae56`](https://github.com/NordcomInc/nordstar/commit/db0ae561b6a878e72115600d662eda21eda346d0) Thanks [@filiphsps](https://github.com/filiphsps)! - Update package description.

## 0.0.21

### Patch Changes

- [`254168f`](https://github.com/NordcomInc/nordstar/commit/254168fe9b427ea56eef3c20185eb597df1ebb73) Thanks [@filiphsps](https://github.com/filiphsps)! - Add a modern (the-new-css-reset) style reset to `nordstar-system`.

  See https://github.com/elad2412/the-new-css-reset.

- [`961f9af`](https://github.com/NordcomInc/nordstar/commit/961f9af6d41ba187c928598ba17dc59782b5ba30) Thanks [@filiphsps](https://github.com/filiphsps)! - Improve general styling across all Nordstar components.

## 0.0.20

## 0.0.19

## 0.0.18

### Patch Changes

- [#129](https://github.com/NordcomInc/nordstar/pull/129) [`69a6e39`](https://github.com/NordcomInc/nordstar/commit/69a6e39a0a1d6cbe3d412f887562e244c608d4e0) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency turbo to v1.11.1.

- [`c5cff63`](https://github.com/NordcomInc/nordstar/commit/c5cff6314804460934bbd200a8c952aa850b84a9) Thanks [@filiphsps](https://github.com/filiphsps)! - Apply css vars to `:root`.

- [`5233770`](https://github.com/NordcomInc/nordstar/commit/5233770af4db8114be467712404502b389ac2a6c) Thanks [@filiphsps](https://github.com/filiphsps)! - Refactor tests to use their own tsconfig; this is to prevent typepollution.

## 0.0.17

## 0.0.16

## 0.0.15

### Patch Changes

- [#108](https://github.com/NordcomInc/nordstar/pull/108) [`2885663`](https://github.com/NordcomInc/nordstar/commit/28856638ececea0f598cf5f418456f8fd2f2114d) Thanks [@filiphsps](https://github.com/filiphsps)! - - Update release tooling, this should hopefully fix the issue with wildcard (`*`) dependencies. I will have to push a new release to verify.
  - Completely refactored how packages are built, exported and reimported. We will have to look into a better way to deal with `clean-package` as we'd eventually like to be able to export the `scss`/`css` modules as well.
    - Fixes code duplication inside of `@nordcom/nordstar`.
    - No longer embeds jsx-runtime into every package.

## 0.0.14

### Patch Changes

- [#106](https://github.com/NordcomInc/nordstar/pull/106) [`c2b7661`](https://github.com/NordcomInc/nordstar/commit/c2b7661b0f49beb5e7c0acf411fec3dfa35e5f06) Thanks [@filiphsps](https://github.com/filiphsps)! - Export `css`, you should probably never need nor use this;
  but it is now available for those who might need direct access to the styling.

- [#106](https://github.com/NordcomInc/nordstar/pull/106) [`f2786c3`](https://github.com/NordcomInc/nordstar/commit/f2786c3c5dab2828fc6a1e8ee54063e8c6169031) Thanks [@filiphsps](https://github.com/filiphsps)! - Further increase the available theming options.

- [#106](https://github.com/NordcomInc/nordstar/pull/106) [`2bf8c2c`](https://github.com/NordcomInc/nordstar/commit/2bf8c2cfc7ffd2a8d4d8149017c0f761f7a7a53b) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix logical oversight resulting in missing styling when no theme was provided.

## 0.0.13

### Patch Changes

- [`8ecf8f9`](https://github.com/NordcomInc/nordstar/commit/8ecf8f929c5f4b533a6de435b3049af5a3eaa9ca) Thanks [@filiphsps](https://github.com/filiphsps)! - Add layout and sizing options to `<NordstarProvider/>` and refine overall design.

## 0.0.12

### Patch Changes

- [#102](https://github.com/NordcomInc/nordstar/pull/102) [`2865136`](https://github.com/NordcomInc/nordstar/commit/28651364a2fb32d9353733cf32a6dc01c5943bc4) Thanks [@filiphsps](https://github.com/filiphsps)! - Add theme prop to `<NordstarProvider/>`.

## 0.0.11

### Patch Changes

- [#72](https://github.com/NordcomInc/nordstar/pull/72) [`b98011e`](https://github.com/NordcomInc/nordstar/commit/b98011e2b7b3bb992d5db3bfe64abccc9ff72596) Thanks [@filiphsps](https://github.com/filiphsps)! - Use typescript codebase directly during development internally.

  The `exports` get automatically replaced during packaging as a part of running `clean-package` in the `prepack` and `postpack` script(s).

## 0.0.10

### Patch Changes

- [#69](https://github.com/NordcomInc/nordstar/pull/69) [`fba1544`](https://github.com/NordcomInc/nordstar/commit/fba1544bd929659f2d29c4b09d100b6aa44d650c) Thanks [@filiphsps](https://github.com/filiphsps)! - Remove unused css module.

## 0.0.9

### Patch Changes

- [#66](https://github.com/NordcomInc/nordstar/pull/66) [`54e7ba4`](https://github.com/NordcomInc/nordstar/commit/54e7ba4b91f90c91bb3faabbdfc51add5cc158c1) Thanks [@filiphsps](https://github.com/filiphsps)! - Tweak default theme's values.

## 0.0.8

### Patch Changes

- [#64](https://github.com/NordcomInc/nordstar/pull/64) [`98d2d1b`](https://github.com/NordcomInc/nordstar/commit/98d2d1b73d8c7f5fea75d20a50d11433760252a4) Thanks [@filiphsps](https://github.com/filiphsps)! - Add a few layout-related css variables.

## 0.0.7

### Patch Changes

- [#62](https://github.com/NordcomInc/nordstar/pull/62) [`0fdb9b1`](https://github.com/NordcomInc/nordstar/commit/0fdb9b1b5bc0b9997aaf2f70bdda4d0a032fa22e) Thanks [@filiphsps](https://github.com/filiphsps)! - Add barebones `forwardRef` impl.

- [#62](https://github.com/NordcomInc/nordstar/pull/62) [`0fdb9b1`](https://github.com/NordcomInc/nordstar/commit/0fdb9b1b5bc0b9997aaf2f70bdda4d0a032fa22e) Thanks [@filiphsps](https://github.com/filiphsps)! - Meta: Switch to using `esmodule`s.

## 0.0.6

### Patch Changes

- [#60](https://github.com/NordcomInc/nordstar/pull/60) [`0bb364b`](https://github.com/NordcomInc/nordstar/commit/0bb364b0e5079a14873a9249daa6cde569ad61c1) Thanks [@renovate](https://github.com/apps/renovate)! - Upgrade to `vite` v5.

- [#59](https://github.com/NordcomInc/nordstar/pull/59) [`bf87d75`](https://github.com/NordcomInc/nordstar/commit/bf87d757c738fedbf22e9ed5a0855af9795041ea) Thanks [@filiphsps](https://github.com/filiphsps)! - Migrate to `vite` from `tsup`.

- [#59](https://github.com/NordcomInc/nordstar/pull/59) [`73d05ec`](https://github.com/NordcomInc/nordstar/commit/73d05ec8449ada8065dc95f8bec46b8c2e29aff9) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix style injection when using `vite`.

## 0.0.5

### Patch Changes

- [#58](https://github.com/NordcomInc/nordstar/pull/58) [`99f6c4c`](https://github.com/NordcomInc/nordstar/commit/99f6c4ca1bff0db7a0650be5abe1d5a65c51cf8d) Thanks [@filiphsps](https://github.com/filiphsps)! - Move `<NordstarProvider/>` into a separate package.
  This is done to avoid circular dependencies between `@nordcom/nordstar` and `@nordcom/nordstar-*` as the meta package were importing and then exporting all sub packages.
