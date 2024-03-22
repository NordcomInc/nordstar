# @nordcom/nordstar-heading

## 0.0.45

### Patch Changes

- [#404](https://github.com/NordcomInc/nordstar/pull/404) [`e4f7d7f`](https://github.com/NordcomInc/nordstar/commit/e4f7d7fefd2158ddfe7b053e602106e19696b1c3) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.2.3.

- [#401](https://github.com/NordcomInc/nordstar/pull/401) [`156a41b`](https://github.com/NordcomInc/nordstar/commit/156a41b49d49cbb9989f8066c0500cd51f4bb608) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix export.

- Updated dependencies [[`e4f7d7f`](https://github.com/NordcomInc/nordstar/commit/e4f7d7fefd2158ddfe7b053e602106e19696b1c3), [`156a41b`](https://github.com/NordcomInc/nordstar/commit/156a41b49d49cbb9989f8066c0500cd51f4bb608)]:
  - @nordcom/nordstar-system@0.0.45

## 0.0.44

### Patch Changes

- [#395](https://github.com/NordcomInc/nordstar/pull/395) [`017d737`](https://github.com/NordcomInc/nordstar/commit/017d7374d54c383a360c6abcaf06685e463035db) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.2.2.

- [#397](https://github.com/NordcomInc/nordstar/pull/397) [`1993898`](https://github.com/NordcomInc/nordstar/commit/19938982af7abd2c4538001223c9e413b4c63961) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency typescript to v5.4.3.

- [#388](https://github.com/NordcomInc/nordstar/pull/388) [`34dc5fb`](https://github.com/NordcomInc/nordstar/commit/34dc5fb8ae5080a72743f88f4c25c431aca3e5f8) Thanks [@filiphsps](https://github.com/filiphsps)! - - Improve testing setup to be more reliable and consistent.
  - Substantially improve both the output from the transpiler/compiler and the built type definitions.
- Updated dependencies [[`017d737`](https://github.com/NordcomInc/nordstar/commit/017d7374d54c383a360c6abcaf06685e463035db), [`1993898`](https://github.com/NordcomInc/nordstar/commit/19938982af7abd2c4538001223c9e413b4c63961), [`34dc5fb`](https://github.com/NordcomInc/nordstar/commit/34dc5fb8ae5080a72743f88f4c25c431aca3e5f8)]:
  - @nordcom/nordstar-system@0.0.44

## 0.0.43

### Patch Changes

- [`11e5754`](https://github.com/NordcomInc/nordstar/commit/11e575480178c327aa95f1a13bb832c56c634d2b) Thanks [@filiphsps](https://github.com/filiphsps)! - - Improve exports.

  - Fix types.
  - Improve build output.

- [#374](https://github.com/NordcomInc/nordstar/pull/374) [`0b2ef6d`](https://github.com/NordcomInc/nordstar/commit/0b2ef6d8424b8a617ff560701d4b94499391b10a) Thanks [@filiphsps](https://github.com/filiphsps)! - - Substantially improve testing.

- Updated dependencies [[`11e5754`](https://github.com/NordcomInc/nordstar/commit/11e575480178c327aa95f1a13bb832c56c634d2b), [`0b2ef6d`](https://github.com/NordcomInc/nordstar/commit/0b2ef6d8424b8a617ff560701d4b94499391b10a)]:
  - @nordcom/nordstar-system@0.0.43

## 0.0.42

### Patch Changes

- [#369](https://github.com/NordcomInc/nordstar/pull/369) [`85cda90`](https://github.com/NordcomInc/nordstar/commit/85cda9069f19cba8f3da958b02878cea549e48c8) Thanks [@filiphsps](https://github.com/filiphsps)! - - Remove `clean-package` and replace it with `publishConfig` _(this still needs testing)_.

  - Switch from `"jsx": "preserve"` to `"jsx": "react-jsx"`.
  - Substantially improve both the `vite` and `typescript` configurations.
    - Use `references` instead of `extends` in `tsconfig.json`s. This allows for better type checking and faster builds.
    - Properly create `entry` and `rollupOptions`' `input` file lists. This fixes a bunch of issues.
    - Define `__dirname`, we previously tried using `__dirname ` under esm which is not supported, somehow it didn't error or break the build but it's fixed now anyway.
  - Some groundwork done to eventually support [`jsr.io`](https://jsr.io/@nordcom)

- [#367](https://github.com/NordcomInc/nordstar/pull/367) [`bd8b007`](https://github.com/NordcomInc/nordstar/commit/bd8b0079663eeb080e97f623ebec953061bc4e74) Thanks [@filiphsps](https://github.com/filiphsps)! - Meta: Migrate to `bun` from `npm`.

- Updated dependencies [[`85cda90`](https://github.com/NordcomInc/nordstar/commit/85cda9069f19cba8f3da958b02878cea549e48c8), [`bd8b007`](https://github.com/NordcomInc/nordstar/commit/bd8b0079663eeb080e97f623ebec953061bc4e74)]:
  - @nordcom/nordstar-system@0.0.42

## 0.0.41

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.41

## 0.0.40

### Patch Changes

- [#340](https://github.com/NordcomInc/nordstar/pull/340) [`7189dd3`](https://github.com/NordcomInc/nordstar/commit/7189dd31e996aa6f510392ec06ddd142e2169303) Thanks [@filiphsps](https://github.com/filiphsps)! - Add `packageManager` field and missing component descriptions.

- Updated dependencies [[`7189dd3`](https://github.com/NordcomInc/nordstar/commit/7189dd31e996aa6f510392ec06ddd142e2169303)]:
  - @nordcom/nordstar-system@0.0.40

## 0.0.39

### Patch Changes

- [#303](https://github.com/NordcomInc/nordstar/pull/303) [`98552a0`](https://github.com/NordcomInc/nordstar/commit/98552a0ea80eb8b7bd0e4d9afdf305dda472ff82) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.2.5.

- Updated dependencies [[`98552a0`](https://github.com/NordcomInc/nordstar/commit/98552a0ea80eb8b7bd0e4d9afdf305dda472ff82)]:
  - @nordcom/nordstar-system@0.0.39

## 0.0.38

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.38

## 0.0.37

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.37

## 0.0.36

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.36

## 0.0.35

### Patch Changes

- [#250](https://github.com/NordcomInc/nordstar/pull/250) [`a9cc081`](https://github.com/NordcomInc/nordstar/commit/a9cc0816f18ce8f0d879e989705bb8aa7cb108b5) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.2.0.

- [#252](https://github.com/NordcomInc/nordstar/pull/252) [`2f836e9`](https://github.com/NordcomInc/nordstar/commit/2f836e92d17941b6d131021c821625f7c41a360b) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.2.1.

- [#253](https://github.com/NordcomInc/nordstar/pull/253) [`914b186`](https://github.com/NordcomInc/nordstar/commit/914b1862e4e211b423f15205f204a25fcce5b94d) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.2.2.

- [#261](https://github.com/NordcomInc/nordstar/pull/261) [`5a7645c`](https://github.com/NordcomInc/nordstar/commit/5a7645cdb1074c4e1f0c3938e7e8e3a0da467df1) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.2.4.

- Updated dependencies [[`a9cc081`](https://github.com/NordcomInc/nordstar/commit/a9cc0816f18ce8f0d879e989705bb8aa7cb108b5), [`2f836e9`](https://github.com/NordcomInc/nordstar/commit/2f836e92d17941b6d131021c821625f7c41a360b), [`914b186`](https://github.com/NordcomInc/nordstar/commit/914b1862e4e211b423f15205f204a25fcce5b94d), [`5a7645c`](https://github.com/NordcomInc/nordstar/commit/5a7645cdb1074c4e1f0c3938e7e8e3a0da467df1)]:
  - @nordcom/nordstar-system@0.0.35

## 0.0.34

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.34

## 0.0.33

### Patch Changes

- [`347baab`](https://github.com/NordcomInc/nordstar/commit/347baab2c084676779c0ace369e87de67e94faec) Thanks [@filiphsps](https://github.com/filiphsps)! - Design: Fix styling.

- Updated dependencies [[`347baab`](https://github.com/NordcomInc/nordstar/commit/347baab2c084676779c0ace369e87de67e94faec)]:
  - @nordcom/nordstar-system@0.0.33

## 0.0.32

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.32

## 0.0.31

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.31

## 0.0.30

### Patch Changes

- Updated dependencies [[`76f9c57`](https://github.com/NordcomInc/nordstar/commit/76f9c577147515d6113b25758521f549cfa300f5), [`f92bbca`](https://github.com/NordcomInc/nordstar/commit/f92bbcaa15e25c146e5217333966fbcf36804f03)]:
  - @nordcom/nordstar-system@0.0.30

## 0.0.29

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.29

## 0.0.28

### Patch Changes

- Updated dependencies [[`2dac3e6`](https://github.com/NordcomInc/nordstar/commit/2dac3e68d2e0e9b02446c80a2fd949558626bc1e)]:
  - @nordcom/nordstar-system@0.0.28

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

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.23

## 0.0.22

### Patch Changes

- [`77e0506`](https://github.com/NordcomInc/nordstar/commit/77e050682f350aff49572c8ddd108b4aaf811ec3) Thanks [@filiphsps](https://github.com/filiphsps)! - Improve how `tsc` builds the packages/apps, we now use `"moduleResolution": "Bundler"` and `"moduleDetection": "force"`.

- [`db0ae56`](https://github.com/NordcomInc/nordstar/commit/db0ae561b6a878e72115600d662eda21eda346d0) Thanks [@filiphsps](https://github.com/filiphsps)! - Update package description.

- [`83a4120`](https://github.com/NordcomInc/nordstar/commit/83a4120cdfaae92bc1cfa3933b9cdc7aedf8ac55) Thanks [@filiphsps](https://github.com/filiphsps)! - Increase default `line-height` slightly.

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

- [`5233770`](https://github.com/NordcomInc/nordstar/commit/5233770af4db8114be467712404502b389ac2a6c) Thanks [@filiphsps](https://github.com/filiphsps)! - Refactor tests to use their own tsconfig; this is to prevent typepollution.

- [`e2e55ee`](https://github.com/NordcomInc/nordstar/commit/e2e55eeae39da39be8367b28ecefe93540d2981b) Thanks [@filiphsps](https://github.com/filiphsps)! - Switch from normal classes to use attributes (eg `data-level="h2"`).

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
- Updated dependencies [[`c2b7661`](https://github.com/NordcomInc/nordstar/commit/c2b7661b0f49beb5e7c0acf411fec3dfa35e5f06), [`f2786c3`](https://github.com/NordcomInc/nordstar/commit/f2786c3c5dab2828fc6a1e8ee54063e8c6169031), [`2bf8c2c`](https://github.com/NordcomInc/nordstar/commit/2bf8c2cfc7ffd2a8d4d8149017c0f761f7a7a53b)]:
  - @nordcom/nordstar-system@0.0.14

## 0.0.13

### Patch Changes

- [`8ecf8f9`](https://github.com/NordcomInc/nordstar/commit/8ecf8f929c5f4b533a6de435b3049af5a3eaa9ca) Thanks [@filiphsps](https://github.com/filiphsps)! - Add layout and sizing options to `<NordstarProvider/>` and refine overall design.

- Updated dependencies [[`8ecf8f9`](https://github.com/NordcomInc/nordstar/commit/8ecf8f929c5f4b533a6de435b3049af5a3eaa9ca)]:
  - @nordcom/nordstar-system@0.0.13

## 0.0.12

### Patch Changes

- [#102](https://github.com/NordcomInc/nordstar/pull/102) [`2865136`](https://github.com/NordcomInc/nordstar/commit/28651364a2fb32d9353733cf32a6dc01c5943bc4) Thanks [@filiphsps](https://github.com/filiphsps)! - Add theme prop to `<NordstarProvider/>`.

- Updated dependencies [[`2865136`](https://github.com/NordcomInc/nordstar/commit/28651364a2fb32d9353733cf32a6dc01c5943bc4)]:
  - @nordcom/nordstar-system@0.0.12

## 0.0.11

### Patch Changes

- [#72](https://github.com/NordcomInc/nordstar/pull/72) [`b98011e`](https://github.com/NordcomInc/nordstar/commit/b98011e2b7b3bb992d5db3bfe64abccc9ff72596) Thanks [@filiphsps](https://github.com/filiphsps)! - Use typescript codebase directly during development internally.

  The `exports` get automatically replaced during packaging as a part of running `clean-package` in the `prepack` and `postpack` script(s).

- Updated dependencies [[`b98011e`](https://github.com/NordcomInc/nordstar/commit/b98011e2b7b3bb992d5db3bfe64abccc9ff72596)]:
  - @nordcom/nordstar-system@0.0.11

## 0.0.10

### Patch Changes

- Updated dependencies [[`fba1544`](https://github.com/NordcomInc/nordstar/commit/fba1544bd929659f2d29c4b09d100b6aa44d650c)]:
  - @nordcom/nordstar-system@0.0.10

## 0.0.9

### Patch Changes

- [#66](https://github.com/NordcomInc/nordstar/pull/66) [`54e7ba4`](https://github.com/NordcomInc/nordstar/commit/54e7ba4b91f90c91bb3faabbdfc51add5cc158c1) Thanks [@filiphsps](https://github.com/filiphsps)! - Tweak default theme's values.

- Updated dependencies [[`54e7ba4`](https://github.com/NordcomInc/nordstar/commit/54e7ba4b91f90c91bb3faabbdfc51add5cc158c1)]:
  - @nordcom/nordstar-system@0.0.9

## 0.0.8

### Patch Changes

- [#64](https://github.com/NordcomInc/nordstar/pull/64) [`98d2d1b`](https://github.com/NordcomInc/nordstar/commit/98d2d1b73d8c7f5fea75d20a50d11433760252a4) Thanks [@filiphsps](https://github.com/filiphsps)! - Add a few layout-related css variables.

- Updated dependencies [[`98d2d1b`](https://github.com/NordcomInc/nordstar/commit/98d2d1b73d8c7f5fea75d20a50d11433760252a4)]:
  - @nordcom/nordstar-system@0.0.8

## 0.0.7

### Patch Changes

- [#62](https://github.com/NordcomInc/nordstar/pull/62) [`0fdb9b1`](https://github.com/NordcomInc/nordstar/commit/0fdb9b1b5bc0b9997aaf2f70bdda4d0a032fa22e) Thanks [@filiphsps](https://github.com/filiphsps)! - Replace `subheading` prop with `level`.
  Define the level of the heading by setting the `level` prop to a value from `h1` to `h4`.

- [#62](https://github.com/NordcomInc/nordstar/pull/62) [`0fdb9b1`](https://github.com/NordcomInc/nordstar/commit/0fdb9b1b5bc0b9997aaf2f70bdda4d0a032fa22e) Thanks [@filiphsps](https://github.com/filiphsps)! - Meta: Switch to using `esmodule`s.

- Updated dependencies [[`0fdb9b1`](https://github.com/NordcomInc/nordstar/commit/0fdb9b1b5bc0b9997aaf2f70bdda4d0a032fa22e), [`0fdb9b1`](https://github.com/NordcomInc/nordstar/commit/0fdb9b1b5bc0b9997aaf2f70bdda4d0a032fa22e)]:
  - @nordcom/nordstar-system@0.0.7

## 0.0.6

### Patch Changes

- [#60](https://github.com/NordcomInc/nordstar/pull/60) [`0bb364b`](https://github.com/NordcomInc/nordstar/commit/0bb364b0e5079a14873a9249daa6cde569ad61c1) Thanks [@renovate](https://github.com/apps/renovate)! - Upgrade to `vite` v5.

- [#59](https://github.com/NordcomInc/nordstar/pull/59) [`bf87d75`](https://github.com/NordcomInc/nordstar/commit/bf87d757c738fedbf22e9ed5a0855af9795041ea) Thanks [@filiphsps](https://github.com/filiphsps)! - Migrate to `vite` from `tsup`.

- [#59](https://github.com/NordcomInc/nordstar/pull/59) [`73d05ec`](https://github.com/NordcomInc/nordstar/commit/73d05ec8449ada8065dc95f8bec46b8c2e29aff9) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix style injection when using `vite`.

- Updated dependencies [[`0bb364b`](https://github.com/NordcomInc/nordstar/commit/0bb364b0e5079a14873a9249daa6cde569ad61c1), [`bf87d75`](https://github.com/NordcomInc/nordstar/commit/bf87d757c738fedbf22e9ed5a0855af9795041ea), [`73d05ec`](https://github.com/NordcomInc/nordstar/commit/73d05ec8449ada8065dc95f8bec46b8c2e29aff9)]:
  - @nordcom/nordstar-system@0.0.6

## 0.0.5

### Patch Changes

- [#56](https://github.com/NordcomInc/nordstar/pull/56) [`394fd8b`](https://github.com/NordcomInc/nordstar/commit/394fd8b9c9216644267e55e05ac5f6f5e6ca05a0) Thanks [@filiphsps](https://github.com/filiphsps)! - Attempt to properly exporting the typings.

- Updated dependencies [[`99f6c4c`](https://github.com/NordcomInc/nordstar/commit/99f6c4ca1bff0db7a0650be5abe1d5a65c51cf8d)]:
  - @nordcom/nordstar-system@0.0.5

## 0.0.4

### Patch Changes

- [#53](https://github.com/NordcomInc/nordstar/pull/53) [`ba39c4c`](https://github.com/NordcomInc/nordstar/commit/ba39c4cd601eadae3b17bfbd93de35b54c79126b) Thanks [@filiphsps](https://github.com/filiphsps)! - Add initial `<Heading/>` component.

- Updated dependencies [[`7f132eb`](https://github.com/NordcomInc/nordstar/commit/7f132eb2dea663f0855fb731bf5952b2c72e8aa2), [`ba39c4c`](https://github.com/NordcomInc/nordstar/commit/ba39c4cd601eadae3b17bfbd93de35b54c79126b)]:
  - @nordcom/nordstar@0.0.4
