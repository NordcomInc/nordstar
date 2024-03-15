# @nordcom/nordstar-header

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
