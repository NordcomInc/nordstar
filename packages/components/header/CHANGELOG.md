# @nordcom/nordstar-header

## 0.0.46

### Patch Changes

- [#405](https://github.com/NordcomInc/nordstar/pull/405) [`be3c203`](https://github.com/NordcomInc/nordstar/commit/be3c20366d661a44f2fab64261754fdbb81e415b) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.2.68.

- [#406](https://github.com/NordcomInc/nordstar/pull/406) [`302520a`](https://github.com/NordcomInc/nordstar/commit/302520a45424197841da397ae621e44e00e46268) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.2.69.

- [#407](https://github.com/NordcomInc/nordstar/pull/407) [`d98ab55`](https://github.com/NordcomInc/nordstar/commit/d98ab55b5c4b38623aa5e87dbcc18e65ee8cfd76) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.2.4.

- Updated dependencies [[`be3c203`](https://github.com/NordcomInc/nordstar/commit/be3c20366d661a44f2fab64261754fdbb81e415b), [`302520a`](https://github.com/NordcomInc/nordstar/commit/302520a45424197841da397ae621e44e00e46268), [`d98ab55`](https://github.com/NordcomInc/nordstar/commit/d98ab55b5c4b38623aa5e87dbcc18e65ee8cfd76), [`4fac8d3`](https://github.com/NordcomInc/nordstar/commit/4fac8d37e4fa0aa1820de9f85c43d52e47a47bc9)]:
  - @nordcom/nordstar-card@0.0.46
  - @nordcom/nordstar-view@0.0.46
  - @nordcom/nordstar-system@0.0.46

## 0.0.45

### Patch Changes

- [#404](https://github.com/NordcomInc/nordstar/pull/404) [`e4f7d7f`](https://github.com/NordcomInc/nordstar/commit/e4f7d7fefd2158ddfe7b053e602106e19696b1c3) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.2.3.

- [#401](https://github.com/NordcomInc/nordstar/pull/401) [`156a41b`](https://github.com/NordcomInc/nordstar/commit/156a41b49d49cbb9989f8066c0500cd51f4bb608) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix export.

- Updated dependencies [[`e4f7d7f`](https://github.com/NordcomInc/nordstar/commit/e4f7d7fefd2158ddfe7b053e602106e19696b1c3), [`156a41b`](https://github.com/NordcomInc/nordstar/commit/156a41b49d49cbb9989f8066c0500cd51f4bb608)]:
  - @nordcom/nordstar-card@0.0.45
  - @nordcom/nordstar-view@0.0.45
  - @nordcom/nordstar-system@0.0.45

## 0.0.44

### Patch Changes

- [#395](https://github.com/NordcomInc/nordstar/pull/395) [`017d737`](https://github.com/NordcomInc/nordstar/commit/017d7374d54c383a360c6abcaf06685e463035db) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.2.2.

- [#397](https://github.com/NordcomInc/nordstar/pull/397) [`1993898`](https://github.com/NordcomInc/nordstar/commit/19938982af7abd2c4538001223c9e413b4c63961) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency typescript to v5.4.3.

- [#388](https://github.com/NordcomInc/nordstar/pull/388) [`34dc5fb`](https://github.com/NordcomInc/nordstar/commit/34dc5fb8ae5080a72743f88f4c25c431aca3e5f8) Thanks [@filiphsps](https://github.com/filiphsps)! - - Improve testing setup to be more reliable and consistent.
  - Substantially improve both the output from the transpiler/compiler and the built type definitions.
- Updated dependencies [[`017d737`](https://github.com/NordcomInc/nordstar/commit/017d7374d54c383a360c6abcaf06685e463035db), [`1993898`](https://github.com/NordcomInc/nordstar/commit/19938982af7abd2c4538001223c9e413b4c63961), [`34dc5fb`](https://github.com/NordcomInc/nordstar/commit/34dc5fb8ae5080a72743f88f4c25c431aca3e5f8)]:
  - @nordcom/nordstar-card@0.0.44
  - @nordcom/nordstar-view@0.0.44
  - @nordcom/nordstar-system@0.0.44

## 0.0.43

### Patch Changes

- [`11e5754`](https://github.com/NordcomInc/nordstar/commit/11e575480178c327aa95f1a13bb832c56c634d2b) Thanks [@filiphsps](https://github.com/filiphsps)! - - Improve exports.

  - Fix types.
  - Improve build output.

- [#374](https://github.com/NordcomInc/nordstar/pull/374) [`0b2ef6d`](https://github.com/NordcomInc/nordstar/commit/0b2ef6d8424b8a617ff560701d4b94499391b10a) Thanks [@filiphsps](https://github.com/filiphsps)! - - Substantially improve testing.

- Updated dependencies [[`11e5754`](https://github.com/NordcomInc/nordstar/commit/11e575480178c327aa95f1a13bb832c56c634d2b), [`0b2ef6d`](https://github.com/NordcomInc/nordstar/commit/0b2ef6d8424b8a617ff560701d4b94499391b10a)]:
  - @nordcom/nordstar-view@0.0.43
  - @nordcom/nordstar-system@0.0.43
  - @nordcom/nordstar-card@0.0.43

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
  - @nordcom/nordstar-card@0.0.42
  - @nordcom/nordstar-view@0.0.42
  - @nordcom/nordstar-system@0.0.42

## 0.0.41

### Patch Changes

- Updated dependencies [[`7264690`](https://github.com/NordcomInc/nordstar/commit/7264690b7d71c63cf87b1da192cbd4087fc84731)]:
  - @nordcom/nordstar-card@0.0.41
  - @nordcom/nordstar-view@0.0.41
  - @nordcom/nordstar-system@0.0.41

## 0.0.40

### Patch Changes

- [#340](https://github.com/NordcomInc/nordstar/pull/340) [`7189dd3`](https://github.com/NordcomInc/nordstar/commit/7189dd31e996aa6f510392ec06ddd142e2169303) Thanks [@filiphsps](https://github.com/filiphsps)! - Add `packageManager` field and missing component descriptions.

- Updated dependencies [[`7189dd3`](https://github.com/NordcomInc/nordstar/commit/7189dd31e996aa6f510392ec06ddd142e2169303)]:
  - @nordcom/nordstar-card@0.0.40
  - @nordcom/nordstar-view@0.0.40
  - @nordcom/nordstar-system@0.0.40

## 0.0.39

### Patch Changes

- [#303](https://github.com/NordcomInc/nordstar/pull/303) [`98552a0`](https://github.com/NordcomInc/nordstar/commit/98552a0ea80eb8b7bd0e4d9afdf305dda472ff82) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.2.5.

- Updated dependencies [[`98552a0`](https://github.com/NordcomInc/nordstar/commit/98552a0ea80eb8b7bd0e4d9afdf305dda472ff82)]:
  - @nordcom/nordstar-card@0.0.39
  - @nordcom/nordstar-view@0.0.39
  - @nordcom/nordstar-system@0.0.39

## 0.0.38

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-card@0.0.38
  - @nordcom/nordstar-view@0.0.38
  - @nordcom/nordstar-system@0.0.38

## 0.0.37

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-card@0.0.37
  - @nordcom/nordstar-view@0.0.37
  - @nordcom/nordstar-system@0.0.37

## 0.0.36

### Patch Changes

- [#263](https://github.com/NordcomInc/nordstar/pull/263) [`5110c02`](https://github.com/NordcomInc/nordstar/commit/5110c02e8c996f2b9042e292e42c4ae5fa22e83c) Thanks [@filiphsps](https://github.com/filiphsps)! - Components: Add (stub) `<Header />` component(s).

  These are currently being backported from https://shops.nordcom.io/
  and https://nordcom.io/ to standardize them.

- Updated dependencies []:
  - @nordcom/nordstar-card@0.0.36
  - @nordcom/nordstar-view@0.0.36
  - @nordcom/nordstar-system@0.0.36
