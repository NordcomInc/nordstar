# @nordcom/nordstar-input

## 0.0.46

### Patch Changes

- [#405](https://github.com/NordcomInc/nordstar/pull/405) [`be3c203`](https://github.com/NordcomInc/nordstar/commit/be3c20366d661a44f2fab64261754fdbb81e415b) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.2.68.

- [#406](https://github.com/NordcomInc/nordstar/pull/406) [`302520a`](https://github.com/NordcomInc/nordstar/commit/302520a45424197841da397ae621e44e00e46268) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.2.69.

- [#407](https://github.com/NordcomInc/nordstar/pull/407) [`d98ab55`](https://github.com/NordcomInc/nordstar/commit/d98ab55b5c4b38623aa5e87dbcc18e65ee8cfd76) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.2.4.

- [#411](https://github.com/NordcomInc/nordstar/pull/411) [`61c20e6`](https://github.com/NordcomInc/nordstar/commit/61c20e66c503477a317c40e22368e5d8ca20e3bb) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix duplicate `'use client';` directive.

- Updated dependencies [[`be3c203`](https://github.com/NordcomInc/nordstar/commit/be3c20366d661a44f2fab64261754fdbb81e415b), [`302520a`](https://github.com/NordcomInc/nordstar/commit/302520a45424197841da397ae621e44e00e46268), [`d98ab55`](https://github.com/NordcomInc/nordstar/commit/d98ab55b5c4b38623aa5e87dbcc18e65ee8cfd76)]:
  - @nordcom/nordstar-system@0.0.46

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

- [#357](https://github.com/NordcomInc/nordstar/pull/357) [`7264690`](https://github.com/NordcomInc/nordstar/commit/7264690b7d71c63cf87b1da192cbd4087fc84731) Thanks [@filiphsps](https://github.com/filiphsps)! - Improve general styling.

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

- [`8998013`](https://github.com/NordcomInc/nordstar/commit/8998013e260d77d3dfaadd39f09e4bcac5478a62) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix height changing during label animation.

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

- [`6bfddeb`](https://github.com/NordcomInc/nordstar/commit/6bfddebcee2e73889336b2d9c8d094e216ce4e36) Thanks [@filiphsps](https://github.com/filiphsps)! - Improve default value.

- [`8a7faae`](https://github.com/NordcomInc/nordstar/commit/8a7faaef11da11dcc8baa6e6044f174d71ccb11f) Thanks [@filiphsps](https://github.com/filiphsps)! - Input: Slightly improve styling.

- Updated dependencies []:
  - @nordcom/nordstar-system@0.0.31

## 0.0.30

### Patch Changes

- [`f92bbca`](https://github.com/NordcomInc/nordstar/commit/f92bbcaa15e25c146e5217333966fbcf36804f03) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix issues with `<Input />` and improve color support.

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

- [#220](https://github.com/NordcomInc/nordstar/pull/220) [`3e8bd2f`](https://github.com/NordcomInc/nordstar/commit/3e8bd2f70f6e8a87e06adb9777ee75040364f19c) Thanks [@filiphsps](https://github.com/filiphsps)! - Input: Introduce the `<Input/>` component.

- Updated dependencies [[`3e8bd2f`](https://github.com/NordcomInc/nordstar/commit/3e8bd2f70f6e8a87e06adb9777ee75040364f19c)]:
  - @nordcom/nordstar-system@0.0.27
