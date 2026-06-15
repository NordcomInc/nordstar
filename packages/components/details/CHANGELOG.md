# @nordcom/nordstar-details

## 0.1.0

### Patch Changes

- [#1189](https://github.com/NordcomInc/nordstar/pull/1189) [`5199c66`](https://github.com/NordcomInc/nordstar/commit/5199c6601687e89d244bce6652049f1e1d18a051) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v8.0.13.

- [#1201](https://github.com/NordcomInc/nordstar/pull/1201) [`1ef35d6`](https://github.com/NordcomInc/nordstar/commit/1ef35d6f7c9e55cc56c4bb0afa34d5fe7c739107) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite-plugin-dts to v5.0.1.

- [#1204](https://github.com/NordcomInc/nordstar/pull/1204) [`97df330`](https://github.com/NordcomInc/nordstar/commit/97df33095a4625292ab4913a8a64d8f4902eab07) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v19.2.15.

- [`5e0e5a3`](https://github.com/NordcomInc/nordstar/commit/5e0e5a3233403d70beb17ac802ecb53835624bc8) Thanks [@filiphsps](https://github.com/filiphsps)! - Deps: upgrade build/test tooling and docs dependencies to their latest releases
  (biome 2.5.0, vite 8.0.16, vitest 4.1.8, turbo 2.9.18, tailwindcss 4.3.1, sass
  1.101.0, @types/node 25, @types/react 19.2.17, react 19.2.7, next 16.2.9, shiki
  4.2.0 and related). Only devDependencies changed, so there is no runtime impact
  for consumers. The Biome config was migrated to the 2.5.0 schema (`recommended`
  → `preset`) and the CI environment variables were declared in `turbo.json`.
  `inquirer` is intentionally held at 13.x because the component generator relies
  on its legacy prompt API.

- [`b7025ea`](https://github.com/NordcomInc/nordstar/commit/b7025ea22ce9a9bc06c4602d4c6a1a854f5aeb7c) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix `<Details/>` typing, layout and accessibility:

  - `forwardRef` is now typed against `'details'` instead of `typeof Card`, so the
    ref resolves to the underlying `HTMLDetailsElement` and native `<details>`
    props (`open`, `onToggle`, `name`, …) are accepted by the public type.
  - The `<summary>` no longer stacks its marker above the label: the SCSS forced
    `flex-direction: column`, overriding the intended inline row. The marker and
    label now sit side by side.
  - The focusable `<summary>` gains hover and `focus-visible` affordances
    (primary-colored text + a focus outline), so keyboard users get clear feedback.
  - Marker spacing and the open-state padding now fall back to a sensible value
    when `--nordstar-layout-block-padding-quarter` is not provided by
    `<NordstarProvider/>`, so the component looks correct standalone.
  - Removed dead CSS (an unreachable `summary .content` rule and an unused
    `--border-color` custom property) and replaced `transition: all` with targeted
    transitions.

- [`2ca45c8`](https://github.com/NordcomInc/nordstar/commit/2ca45c8f176bb551cd6a75fc26ee3f863ee16983) Thanks [@filiphsps](https://github.com/filiphsps)! - Drop `<Details/>`'s SCSS module in favour of Tailwind utilities. The disclosure
  marker (a "+" that morphs into a downward triangle when open), the hidden native
  marker, hover/`focus-visible` colouring and outline, the open-state label colour
  and the open-state content padding are now all expressed with Tailwind classes
  (`group-open:`, `before:`, and a few arbitrary properties for the token-driven
  values). The marker's transition is collapsed to a single targeted transition;
  rendering is otherwise unchanged.
- Updated dependencies [[`5199c66`](https://github.com/NordcomInc/nordstar/commit/5199c6601687e89d244bce6652049f1e1d18a051), [`5cf91f1`](https://github.com/NordcomInc/nordstar/commit/5cf91f1a6fa372c9496a6535e6e9f19c4b707494), [`7e71328`](https://github.com/NordcomInc/nordstar/commit/7e713282cba8eeb499e528eb1d71ba5f48219488), [`1ef35d6`](https://github.com/NordcomInc/nordstar/commit/1ef35d6f7c9e55cc56c4bb0afa34d5fe7c739107), [`b7154b2`](https://github.com/NordcomInc/nordstar/commit/b7154b29ee3d5b3c96cd2918a005cf803cfa8fda), [`97df330`](https://github.com/NordcomInc/nordstar/commit/97df33095a4625292ab4913a8a64d8f4902eab07), [`5e0e5a3`](https://github.com/NordcomInc/nordstar/commit/5e0e5a3233403d70beb17ac802ecb53835624bc8), [`b731726`](https://github.com/NordcomInc/nordstar/commit/b73172600a91965e7ac26769859c157acda43d07), [`3b67c90`](https://github.com/NordcomInc/nordstar/commit/3b67c901f8e40b047486b18da98ee07aa991e339), [`0e06134`](https://github.com/NordcomInc/nordstar/commit/0e0613464834717a00c2c578219fd0b641680e07)]:
  - @nordcom/nordstar-card@0.1.0
  - @nordcom/nordstar-label@0.1.0
  - @nordcom/nordstar-system@0.1.0

## 0.0.75

### Patch Changes

- [#1069](https://github.com/NordcomInc/nordstar/pull/1069) [`67a3f83`](https://github.com/NordcomInc/nordstar/commit/67a3f8350a06568921e306c7d392f5ad9edcbeef) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v24.12.2.

- [#1155](https://github.com/NordcomInc/nordstar/pull/1155) [`385badd`](https://github.com/NordcomInc/nordstar/commit/385badd81b75aa9da7167387d9e64fff45a97f52) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v8.0.11.

- [#1164](https://github.com/NordcomInc/nordstar/pull/1164) [`54556de`](https://github.com/NordcomInc/nordstar/commit/54556deca480fb29033638b5e124db8c6cca720d) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update react monorepo .

- [#1168](https://github.com/NordcomInc/nordstar/pull/1168) [`06958bb`](https://github.com/NordcomInc/nordstar/commit/06958bbc5090b7c63aafaab067bd08c7baeb552f) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update react monorepo to v19.2.6.

- [#1173](https://github.com/NordcomInc/nordstar/pull/1173) [`c567686`](https://github.com/NordcomInc/nordstar/commit/c567686180d6394af3878986c76533e57f5f5ef2) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v24.12.3.

- [#1183](https://github.com/NordcomInc/nordstar/pull/1183) [`bf6163c`](https://github.com/NordcomInc/nordstar/commit/bf6163c51e908350109cf1e991f372db5685f5c4) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v8.0.12.

- [#1186](https://github.com/NordcomInc/nordstar/pull/1186) [`18dc32c`](https://github.com/NordcomInc/nordstar/commit/18dc32c28543d7bf4e060fdf084422119d5f7f01) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v24.12.4.

- Updated dependencies [[`67a3f83`](https://github.com/NordcomInc/nordstar/commit/67a3f8350a06568921e306c7d392f5ad9edcbeef), [`b23f199`](https://github.com/NordcomInc/nordstar/commit/b23f199992afac84d767efba49832b024dd3deef), [`385badd`](https://github.com/NordcomInc/nordstar/commit/385badd81b75aa9da7167387d9e64fff45a97f52), [`54556de`](https://github.com/NordcomInc/nordstar/commit/54556deca480fb29033638b5e124db8c6cca720d), [`06958bb`](https://github.com/NordcomInc/nordstar/commit/06958bbc5090b7c63aafaab067bd08c7baeb552f), [`e25ce8d`](https://github.com/NordcomInc/nordstar/commit/e25ce8d1c221f57cd79041f38ac816f1d03ce08b), [`c567686`](https://github.com/NordcomInc/nordstar/commit/c567686180d6394af3878986c76533e57f5f5ef2), [`2135b0a`](https://github.com/NordcomInc/nordstar/commit/2135b0a8106621f4d33b3af3f36e97d7982b08cb), [`210b4f1`](https://github.com/NordcomInc/nordstar/commit/210b4f1dd175f5ea88f7c33b2817537d94c36ea0), [`bf6163c`](https://github.com/NordcomInc/nordstar/commit/bf6163c51e908350109cf1e991f372db5685f5c4), [`0b8e5a0`](https://github.com/NordcomInc/nordstar/commit/0b8e5a0de70476af3cea1e7436d83353c66d122f), [`18dc32c`](https://github.com/NordcomInc/nordstar/commit/18dc32c28543d7bf4e060fdf084422119d5f7f01)]:
  - @nordcom/nordstar-card@0.0.75
  - @nordcom/nordstar-label@0.0.75
  - @nordcom/nordstar-system@0.0.75

## 0.0.74

### Patch Changes

- [`8462d28`](https://github.com/NordcomInc/nordstar/commit/8462d2814ba94a98a5f4919105cf2ba53948c54f) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix publishing.

- [#1116](https://github.com/NordcomInc/nordstar/pull/1116) [`4b8f4b5`](https://github.com/NordcomInc/nordstar/commit/4b8f4b5c3df3d3bd0b4a63e1f28dcb2988884f05) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.8.3.

- [#1127](https://github.com/NordcomInc/nordstar/pull/1127) [`541a54c`](https://github.com/NordcomInc/nordstar/commit/541a54c0fda9525bd08b701e47afdc7d891c127a) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency postcss to v8.5.14.

- [#1141](https://github.com/NordcomInc/nordstar/pull/1141) [`c8308d2`](https://github.com/NordcomInc/nordstar/commit/c8308d2d0d0d64f472e61c6b25b063222848505c) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite-plugin-dts to v5.

- [`956120e`](https://github.com/NordcomInc/nordstar/commit/956120e1687551663b9359e3ee639a2f25b0b940) Thanks [@filiphsps](https://github.com/filiphsps)! - Replace ESLint and Prettier with Biome 2.x. Single root `biome.jsonc` covers linting and formatting; turbo no longer orchestrates lint/format; CI now runs `biome ci`. Source files reformatted (trailing commas, sorted Tailwind classes, organized imports). No public API changes.

- [#1161](https://github.com/NordcomInc/nordstar/pull/1161) [`79c8058`](https://github.com/NordcomInc/nordstar/commit/79c80587d8aa8867231b89a756303b10c14d15b5) Thanks [@filiphsps](https://github.com/filiphsps)! - Bump requirement to react 19.

- [`ee84e1a`](https://github.com/NordcomInc/nordstar/commit/ee84e1a9446d90d634b6b55fc649e06136b5c1ce) Thanks [@filiphsps](https://github.com/filiphsps)! - Update homepage.

- [#1156](https://github.com/NordcomInc/nordstar/pull/1156) [`6bae752`](https://github.com/NordcomInc/nordstar/commit/6bae75216fcf66d3144c4d67157cb31615df320d) Thanks [@filiphsps](https://github.com/filiphsps)! - Migrate to Tailwind v4 consumer DX. The lib now ships a `tailwind.css` contract (`@theme` + `@source`) for Tailwind v4 users and a precompiled `styles.css` for non-Tailwind users. Consumers no longer maintain a duplicate `tailwind.config.cjs` — instead, `@import "@nordcom/nordstar"` in their main CSS does it all. Runtime CSS variables move to the `--nordstar-*` namespace; the `<NordstarProvider/>` React API is unchanged.

- Updated dependencies [[`8462d28`](https://github.com/NordcomInc/nordstar/commit/8462d2814ba94a98a5f4919105cf2ba53948c54f), [`4b8f4b5`](https://github.com/NordcomInc/nordstar/commit/4b8f4b5c3df3d3bd0b4a63e1f28dcb2988884f05), [`541a54c`](https://github.com/NordcomInc/nordstar/commit/541a54c0fda9525bd08b701e47afdc7d891c127a), [`c8308d2`](https://github.com/NordcomInc/nordstar/commit/c8308d2d0d0d64f472e61c6b25b063222848505c), [`956120e`](https://github.com/NordcomInc/nordstar/commit/956120e1687551663b9359e3ee639a2f25b0b940), [`79c8058`](https://github.com/NordcomInc/nordstar/commit/79c80587d8aa8867231b89a756303b10c14d15b5), [`ee84e1a`](https://github.com/NordcomInc/nordstar/commit/ee84e1a9446d90d634b6b55fc649e06136b5c1ce), [`6bae752`](https://github.com/NordcomInc/nordstar/commit/6bae75216fcf66d3144c4d67157cb31615df320d)]:
  - @nordcom/nordstar-card@0.0.74
  - @nordcom/nordstar-label@0.0.74
  - @nordcom/nordstar-system@0.0.74

## 0.0.73

### Patch Changes

- [`3c4e5cb`](https://github.com/NordcomInc/nordstar/commit/3c4e5cbda856f1c0aacfd16c45df16b4337f6223) Thanks [@filiphsps](https://github.com/filiphsps)! - Upgrade typescript.

- [`3c4e5cb`](https://github.com/NordcomInc/nordstar/commit/3c4e5cbda856f1c0aacfd16c45df16b4337f6223) Thanks [@filiphsps](https://github.com/filiphsps)! - Modernize build.

- Updated dependencies [[`71d7f26`](https://github.com/NordcomInc/nordstar/commit/71d7f267adc2ede56a3ebc7cdef9bea5c186436a), [`3c4e5cb`](https://github.com/NordcomInc/nordstar/commit/3c4e5cbda856f1c0aacfd16c45df16b4337f6223), [`3c4e5cb`](https://github.com/NordcomInc/nordstar/commit/3c4e5cbda856f1c0aacfd16c45df16b4337f6223)]:
  - @nordcom/nordstar-system@0.0.73
  - @nordcom/nordstar-label@0.0.73
  - @nordcom/nordstar-card@0.0.73

## 0.0.72

### Patch Changes

- [#928](https://github.com/NordcomInc/nordstar/pull/928) [`648662c`](https://github.com/NordcomInc/nordstar/commit/648662cdbf457bbae0be948446c3109e499a708e) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.16.11.

- [#929](https://github.com/NordcomInc/nordstar/pull/929) [`011e4d7`](https://github.com/NordcomInc/nordstar/commit/011e4d7621cd876c3292369a4a2b95ad62756ff7) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency typescript to v5.6.3.

- [#938](https://github.com/NordcomInc/nordstar/pull/938) [`abe372a`](https://github.com/NordcomInc/nordstar/commit/abe372a1d671bb4b056f5cbe87afdd43012ce848) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.4.9.

- [#942](https://github.com/NordcomInc/nordstar/pull/942) [`2d034ae`](https://github.com/NordcomInc/nordstar/commit/2d034ae189be8c3a0f9ccef81d869e4e6dd3ba55) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency tailwindcss to v3.4.14.

- [#965](https://github.com/NordcomInc/nordstar/pull/965) [`ef074d2`](https://github.com/NordcomInc/nordstar/commit/ef074d22dd02c042288827104cf76532c4227761) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.4.10.

- [`9c20df0`](https://github.com/NordcomInc/nordstar/commit/9c20df0be1ddbc9539ebf5d4209b37a9f8440993) Thanks [@filiphsps](https://github.com/filiphsps)! - Upgrade deps

- Updated dependencies [[`87b25b6`](https://github.com/NordcomInc/nordstar/commit/87b25b63b23848ff6cfaea7f2de57a9be4c6495e), [`648662c`](https://github.com/NordcomInc/nordstar/commit/648662cdbf457bbae0be948446c3109e499a708e), [`011e4d7`](https://github.com/NordcomInc/nordstar/commit/011e4d7621cd876c3292369a4a2b95ad62756ff7), [`bc761f8`](https://github.com/NordcomInc/nordstar/commit/bc761f88b50b1b59e3c4ef0fa110f4b2d11c03cd), [`abe372a`](https://github.com/NordcomInc/nordstar/commit/abe372a1d671bb4b056f5cbe87afdd43012ce848), [`2d034ae`](https://github.com/NordcomInc/nordstar/commit/2d034ae189be8c3a0f9ccef81d869e4e6dd3ba55), [`ef074d2`](https://github.com/NordcomInc/nordstar/commit/ef074d22dd02c042288827104cf76532c4227761), [`9c20df0`](https://github.com/NordcomInc/nordstar/commit/9c20df0be1ddbc9539ebf5d4209b37a9f8440993)]:
  - @nordcom/nordstar-system@0.0.72
  - @nordcom/nordstar-card@0.0.72
  - @nordcom/nordstar-label@0.0.72

## 0.0.71

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-card@0.0.71
  - @nordcom/nordstar-label@0.0.71
  - @nordcom/nordstar-system@0.0.71

## 0.0.70

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-card@0.0.70
  - @nordcom/nordstar-label@0.0.70
  - @nordcom/nordstar-system@0.0.70

## 0.0.69

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-card@0.0.69
  - @nordcom/nordstar-label@0.0.69
  - @nordcom/nordstar-system@0.0.69

## 0.0.68

### Patch Changes

- [#883](https://github.com/NordcomInc/nordstar/pull/883) [`f1276d3`](https://github.com/NordcomInc/nordstar/commit/f1276d3da92689043c8e0facc25ead5323828b73) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.16.7.

- [#885](https://github.com/NordcomInc/nordstar/pull/885) [`ab2834b`](https://github.com/NordcomInc/nordstar/commit/ab2834bdf7f087e4a963e65e971215f1e001cda2) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.4.8.

- [#886](https://github.com/NordcomInc/nordstar/pull/886) [`acc51bf`](https://github.com/NordcomInc/nordstar/commit/acc51bf41e14fad4a3dc790809071cd4ae944a6b) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.16.8.

- [#887](https://github.com/NordcomInc/nordstar/pull/887) [`d8cc5cd`](https://github.com/NordcomInc/nordstar/commit/d8cc5cde27b6deedf9ee49bf43786c40c3daf7b0) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.16.9.

- [#892](https://github.com/NordcomInc/nordstar/pull/892) [`605e0d0`](https://github.com/NordcomInc/nordstar/commit/605e0d0b525f4a327b24f42ab63c054bdad5f2d6) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.16.10.

- [#893](https://github.com/NordcomInc/nordstar/pull/893) [`c27d71c`](https://github.com/NordcomInc/nordstar/commit/c27d71cf2afdc4f6166d9c0317217bd960a9edee) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.3.10.

- Updated dependencies [[`f1276d3`](https://github.com/NordcomInc/nordstar/commit/f1276d3da92689043c8e0facc25ead5323828b73), [`ab2834b`](https://github.com/NordcomInc/nordstar/commit/ab2834bdf7f087e4a963e65e971215f1e001cda2), [`acc51bf`](https://github.com/NordcomInc/nordstar/commit/acc51bf41e14fad4a3dc790809071cd4ae944a6b), [`d8cc5cd`](https://github.com/NordcomInc/nordstar/commit/d8cc5cde27b6deedf9ee49bf43786c40c3daf7b0), [`605e0d0`](https://github.com/NordcomInc/nordstar/commit/605e0d0b525f4a327b24f42ab63c054bdad5f2d6), [`c27d71c`](https://github.com/NordcomInc/nordstar/commit/c27d71cf2afdc4f6166d9c0317217bd960a9edee)]:
  - @nordcom/nordstar-card@0.0.68
  - @nordcom/nordstar-label@0.0.68
  - @nordcom/nordstar-system@0.0.68

## 0.0.67

### Patch Changes

- [`78e00ee`](https://github.com/NordcomInc/nordstar/commit/78e00eef7ffd221faa7764f80210ce22ea8d4576) Thanks [@filiphsps](https://github.com/filiphsps)! - - Bogus change to trigger another npm publish (the previous release failed).

- Updated dependencies [[`78e00ee`](https://github.com/NordcomInc/nordstar/commit/78e00eef7ffd221faa7764f80210ce22ea8d4576)]:
  - @nordcom/nordstar-card@0.0.67
  - @nordcom/nordstar-label@0.0.67
  - @nordcom/nordstar-system@0.0.67

## 0.0.66

### Patch Changes

- [#878](https://github.com/NordcomInc/nordstar/pull/878) [`d65f264`](https://github.com/NordcomInc/nordstar/commit/d65f26470d11530f4cf1cc5f493571c5d7a33121) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.3.9.

- [#881](https://github.com/NordcomInc/nordstar/pull/881) [`16fd8e2`](https://github.com/NordcomInc/nordstar/commit/16fd8e259cd01f6687135ff44c8f7da21cc4a4a3) Thanks [@filiphsps](https://github.com/filiphsps)! - - Don't engage tailwind at the component level.

- Updated dependencies [[`d65f264`](https://github.com/NordcomInc/nordstar/commit/d65f26470d11530f4cf1cc5f493571c5d7a33121), [`16fd8e2`](https://github.com/NordcomInc/nordstar/commit/16fd8e259cd01f6687135ff44c8f7da21cc4a4a3)]:
  - @nordcom/nordstar-card@0.0.66
  - @nordcom/nordstar-label@0.0.66
  - @nordcom/nordstar-system@0.0.66

## 0.0.65

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-card@0.0.65
  - @nordcom/nordstar-label@0.0.65
  - @nordcom/nordstar-system@0.0.65

## 0.0.64

### Patch Changes

- Updated dependencies [[`7bc47f8`](https://github.com/NordcomInc/nordstar/commit/7bc47f86caeada2845f30479477c4b00688f089e)]:
  - @nordcom/nordstar-card@0.0.64
  - @nordcom/nordstar-label@0.0.64
  - @nordcom/nordstar-system@0.0.64

## 0.0.63

### Patch Changes

- [#809](https://github.com/NordcomInc/nordstar/pull/809) [`b2d7ad0`](https://github.com/NordcomInc/nordstar/commit/b2d7ad0e1b489a1229f7adf5752546b78dfef27d) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.16.6.

- [#871](https://github.com/NordcomInc/nordstar/pull/871) [`8fbb855`](https://github.com/NordcomInc/nordstar/commit/8fbb855a1b85f7e6e2449b142702d95a002fa90a) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency tailwindcss to v3.4.13.

- [`9dfeb3f`](https://github.com/NordcomInc/nordstar/commit/9dfeb3f0a233a67144d415d8d44d95d211807ea6) Thanks [@filiphsps](https://github.com/filiphsps)! - - Refactor components to use tailwind and `cva`.

- [`9dfeb3f`](https://github.com/NordcomInc/nordstar/commit/9dfeb3f0a233a67144d415d8d44d95d211807ea6) Thanks [@filiphsps](https://github.com/filiphsps)! - - Update domain to `https://nordcominc.github.io/nordstar/`

- Updated dependencies [[`b2d7ad0`](https://github.com/NordcomInc/nordstar/commit/b2d7ad0e1b489a1229f7adf5752546b78dfef27d), [`8fbb855`](https://github.com/NordcomInc/nordstar/commit/8fbb855a1b85f7e6e2449b142702d95a002fa90a), [`9dfeb3f`](https://github.com/NordcomInc/nordstar/commit/9dfeb3f0a233a67144d415d8d44d95d211807ea6), [`9dfeb3f`](https://github.com/NordcomInc/nordstar/commit/9dfeb3f0a233a67144d415d8d44d95d211807ea6), [`e586f33`](https://github.com/NordcomInc/nordstar/commit/e586f337007468d313af9741f9015d1c2a1f0aed)]:
  - @nordcom/nordstar-card@0.0.63
  - @nordcom/nordstar-label@0.0.63
  - @nordcom/nordstar-system@0.0.63

## 0.0.62

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-card@0.0.62
  - @nordcom/nordstar-label@0.0.62
  - @nordcom/nordstar-system@0.0.62

## 0.0.61

### Patch Changes

- [#801](https://github.com/NordcomInc/nordstar/pull/801) [`1acb17c`](https://github.com/NordcomInc/nordstar/commit/1acb17c033f54e0a727859edb99d7077b1eeaefd) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.3.5.

- [#817](https://github.com/NordcomInc/nordstar/pull/817) [`b33edda`](https://github.com/NordcomInc/nordstar/commit/b33eddaa9a843084ca3b7be3db8c6e4fdfb6d7ce) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.4.3.

- [#830](https://github.com/NordcomInc/nordstar/pull/830) [`0fd5c12`](https://github.com/NordcomInc/nordstar/commit/0fd5c1263c40b5fad497ad1d9f5859598fd4c048) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency typescript to v5.6.2.

- [#834](https://github.com/NordcomInc/nordstar/pull/834) [`69e50e1`](https://github.com/NordcomInc/nordstar/commit/69e50e1935bf93cbc2bcc8391dceab8dc165cdc6) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.4.4.

- [#851](https://github.com/NordcomInc/nordstar/pull/851) [`cefb2ed`](https://github.com/NordcomInc/nordstar/commit/cefb2ede635e9f61ea3c0a3c653c326287f710a3) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.3.6.

- [#854](https://github.com/NordcomInc/nordstar/pull/854) [`387a46b`](https://github.com/NordcomInc/nordstar/commit/387a46b578832fe64d223e4b452d59142d5cb3cb) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.3.7.

- [#855](https://github.com/NordcomInc/nordstar/pull/855) [`0ca65ef`](https://github.com/NordcomInc/nordstar/commit/0ca65efb4042d8f4feccf0e4bb27a6b030992c2c) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.4.6[SECURITY]

- [#860](https://github.com/NordcomInc/nordstar/pull/860) [`1591dc9`](https://github.com/NordcomInc/nordstar/commit/1591dc93b9158dfbeb3a3295919fa264cea1ab31) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.3.8.

- [#863](https://github.com/NordcomInc/nordstar/pull/863) [`7ccdbbb`](https://github.com/NordcomInc/nordstar/commit/7ccdbbbccec91d4c6e9629e620dc790dac970cfc) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.4.7.

- Updated dependencies [[`1acb17c`](https://github.com/NordcomInc/nordstar/commit/1acb17c033f54e0a727859edb99d7077b1eeaefd), [`b33edda`](https://github.com/NordcomInc/nordstar/commit/b33eddaa9a843084ca3b7be3db8c6e4fdfb6d7ce), [`0fd5c12`](https://github.com/NordcomInc/nordstar/commit/0fd5c1263c40b5fad497ad1d9f5859598fd4c048), [`69e50e1`](https://github.com/NordcomInc/nordstar/commit/69e50e1935bf93cbc2bcc8391dceab8dc165cdc6), [`cefb2ed`](https://github.com/NordcomInc/nordstar/commit/cefb2ede635e9f61ea3c0a3c653c326287f710a3), [`387a46b`](https://github.com/NordcomInc/nordstar/commit/387a46b578832fe64d223e4b452d59142d5cb3cb), [`0ca65ef`](https://github.com/NordcomInc/nordstar/commit/0ca65efb4042d8f4feccf0e4bb27a6b030992c2c), [`1591dc9`](https://github.com/NordcomInc/nordstar/commit/1591dc93b9158dfbeb3a3295919fa264cea1ab31), [`7ccdbbb`](https://github.com/NordcomInc/nordstar/commit/7ccdbbbccec91d4c6e9629e620dc790dac970cfc)]:
  - @nordcom/nordstar-card@0.0.61
  - @nordcom/nordstar-label@0.0.61
  - @nordcom/nordstar-system@0.0.61

## 0.0.60

### Patch Changes

- [#791](https://github.com/NordcomInc/nordstar/pull/791) [`15f44fb`](https://github.com/NordcomInc/nordstar/commit/15f44fb32c13314ebe6e00ff60fe7541f9869586) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.16.2.

- [`d17b2e0`](https://github.com/NordcomInc/nordstar/commit/d17b2e064772fd4157c82af59397c0799ed49f23) Thanks [@filiphsps](https://github.com/filiphsps)! - Meta: Change codegen slightly.

- Updated dependencies [[`15f44fb`](https://github.com/NordcomInc/nordstar/commit/15f44fb32c13314ebe6e00ff60fe7541f9869586), [`d17b2e0`](https://github.com/NordcomInc/nordstar/commit/d17b2e064772fd4157c82af59397c0799ed49f23)]:
  - @nordcom/nordstar-card@0.0.60
  - @nordcom/nordstar-label@0.0.60
  - @nordcom/nordstar-system@0.0.60

## 0.0.59

### Patch Changes

- [`762574c`](https://github.com/NordcomInc/nordstar/commit/762574caaf33cf998c4fa7defcbd3312df0a4553) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix `css` module inclusions.

- Updated dependencies [[`c53ba82`](https://github.com/NordcomInc/nordstar/commit/c53ba82cb902f93e3c66843fa862b30be6f62f0f), [`762574c`](https://github.com/NordcomInc/nordstar/commit/762574caaf33cf998c4fa7defcbd3312df0a4553)]:
  - @nordcom/nordstar-system@0.0.59
  - @nordcom/nordstar-label@0.0.59
  - @nordcom/nordstar-card@0.0.59

## 0.0.58

### Patch Changes

- [`0094d57`](https://github.com/NordcomInc/nordstar/commit/0094d57939d01385273900320f9ae9add4fd8ad9) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix engines field.

- [#758](https://github.com/NordcomInc/nordstar/pull/758) [`405a031`](https://github.com/NordcomInc/nordstar/commit/405a031aeb109fbdda6e986516f55e66fe2eca70) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.4.0.

- [#762](https://github.com/NordcomInc/nordstar/pull/762) [`515e27a`](https://github.com/NordcomInc/nordstar/commit/515e27ac66e9cea6415b02a751076cf48d1044cc) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.15.

- [#774](https://github.com/NordcomInc/nordstar/pull/774) [`ff15a5b`](https://github.com/NordcomInc/nordstar/commit/ff15a5bab61c2411245dfe4c089da31c6fe9c6af) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.15.0.

- [#776](https://github.com/NordcomInc/nordstar/pull/776) [`022cd26`](https://github.com/NordcomInc/nordstar/commit/022cd2671a78bff0cff204ca50acd8a3c0c1ae2c) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.16.0.

- [#777](https://github.com/NordcomInc/nordstar/pull/777) [`205f3ce`](https://github.com/NordcomInc/nordstar/commit/205f3ce3bac654743934c16be440d420bc293297) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.16.1.

- [#779](https://github.com/NordcomInc/nordstar/pull/779) [`8606051`](https://github.com/NordcomInc/nordstar/commit/86060510d1e8042b954897cb6c20705e7bd11a02) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.3.4.

- Updated dependencies [[`0094d57`](https://github.com/NordcomInc/nordstar/commit/0094d57939d01385273900320f9ae9add4fd8ad9), [`405a031`](https://github.com/NordcomInc/nordstar/commit/405a031aeb109fbdda6e986516f55e66fe2eca70), [`515e27a`](https://github.com/NordcomInc/nordstar/commit/515e27ac66e9cea6415b02a751076cf48d1044cc), [`ff15a5b`](https://github.com/NordcomInc/nordstar/commit/ff15a5bab61c2411245dfe4c089da31c6fe9c6af), [`022cd26`](https://github.com/NordcomInc/nordstar/commit/022cd2671a78bff0cff204ca50acd8a3c0c1ae2c), [`205f3ce`](https://github.com/NordcomInc/nordstar/commit/205f3ce3bac654743934c16be440d420bc293297), [`8606051`](https://github.com/NordcomInc/nordstar/commit/86060510d1e8042b954897cb6c20705e7bd11a02), [`6dc2efe`](https://github.com/NordcomInc/nordstar/commit/6dc2efea402461ec24b0ab60241b37a6775f7cf5)]:
  - @nordcom/nordstar-card@0.0.58
  - @nordcom/nordstar-label@0.0.58
  - @nordcom/nordstar-system@0.0.58

## 0.0.57

### Patch Changes

- Updated dependencies []:
  - @nordcom/nordstar-card@0.0.57
  - @nordcom/nordstar-label@0.0.57
  - @nordcom/nordstar-system@0.0.57

## 0.0.56

### Patch Changes

- [#646](https://github.com/NordcomInc/nordstar/pull/646) [`36020f4`](https://github.com/NordcomInc/nordstar/commit/36020f4456cd8f75e3e245e671b9965ef61e3ec2) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.3.

- [#648](https://github.com/NordcomInc/nordstar/pull/648) [`2b9f9e1`](https://github.com/NordcomInc/nordstar/commit/2b9f9e17b642e678b5042959abdc05be1eab74ff) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.4.

- [#649](https://github.com/NordcomInc/nordstar/pull/649) [`2a539ad`](https://github.com/NordcomInc/nordstar/commit/2a539adf615af8a9e2b3e35e2fb22808d45dc6b5) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.5.

- [#653](https://github.com/NordcomInc/nordstar/pull/653) [`364dfdc`](https://github.com/NordcomInc/nordstar/commit/364dfdc689a021c04bd7bfaddbd01a92b8566d59) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.6.

- [#657](https://github.com/NordcomInc/nordstar/pull/657) [`910bb16`](https://github.com/NordcomInc/nordstar/commit/910bb16c5360c54af06f676eaee2c9a74ff84579) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency typescript to v5.5.2.

- [#658](https://github.com/NordcomInc/nordstar/pull/658) [`a2a3f8f`](https://github.com/NordcomInc/nordstar/commit/a2a3f8ff6bf2edc35e5c7a0c7205808b50a80e0b) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.7.

- [#659](https://github.com/NordcomInc/nordstar/pull/659) [`9209b60`](https://github.com/NordcomInc/nordstar/commit/9209b60920e4ad0567c7fc77ddaa942d59d00b53) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.8.

- [#666](https://github.com/NordcomInc/nordstar/pull/666) [`d400b3c`](https://github.com/NordcomInc/nordstar/commit/d400b3c040de3c56c9c9abbe0ec83176e79a166c) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.9.

- [#672](https://github.com/NordcomInc/nordstar/pull/672) [`5de8f59`](https://github.com/NordcomInc/nordstar/commit/5de8f591dd2b963f513553972aea0698730170ee) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.3.2.

- [#676](https://github.com/NordcomInc/nordstar/pull/676) [`f769b24`](https://github.com/NordcomInc/nordstar/commit/f769b241309c34b611c59636b203b4bc4ba55f79) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency typescript to v5.5.3.

- [#678](https://github.com/NordcomInc/nordstar/pull/678) [`a378fbe`](https://github.com/NordcomInc/nordstar/commit/a378fbec14831646ff7a1d2099757425871c86c4) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.3.3.

- [#683](https://github.com/NordcomInc/nordstar/pull/683) [`4c6e010`](https://github.com/NordcomInc/nordstar/commit/4c6e010e78229fac11cee649948ba202d5f35d7d) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.10.

- [#702](https://github.com/NordcomInc/nordstar/pull/702) [`916781e`](https://github.com/NordcomInc/nordstar/commit/916781e4a44a9577f85b68ff80ca4ceaf2c48c39) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.3.3.

- [#706](https://github.com/NordcomInc/nordstar/pull/706) [`e7b5099`](https://github.com/NordcomInc/nordstar/commit/e7b509957066c5dc65987cc0fead5082e38193c7) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.3.4.

- [#707](https://github.com/NordcomInc/nordstar/pull/707) [`9c916c9`](https://github.com/NordcomInc/nordstar/commit/9c916c96bff06f7a522f7baec954cad846ba7c8a) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.11.

- [#725](https://github.com/NordcomInc/nordstar/pull/725) [`2af6f72`](https://github.com/NordcomInc/nordstar/commit/2af6f720fa521efa63ef61e3d40b7d41951b6370) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency typescript to v5.5.4.

- [#727](https://github.com/NordcomInc/nordstar/pull/727) [`c8a3b77`](https://github.com/NordcomInc/nordstar/commit/c8a3b77634e42249957c03815f8d2c2635354a25) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.12.

- [#729](https://github.com/NordcomInc/nordstar/pull/729) [`a1f39ab`](https://github.com/NordcomInc/nordstar/commit/a1f39ab90a0618dc28d862bbfc0beda8cc9644dc) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.3.5.

- [#732](https://github.com/NordcomInc/nordstar/pull/732) [`ac6dd18`](https://github.com/NordcomInc/nordstar/commit/ac6dd18b20866c4033b8d56e01b69ea1a1eaed04) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.13.

- [#744](https://github.com/NordcomInc/nordstar/pull/744) [`2eb404f`](https://github.com/NordcomInc/nordstar/commit/2eb404f104baffa2ff3f23bc1e4343155d1d796c) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.14.

- [`0c3f4e1`](https://github.com/NordcomInc/nordstar/commit/0c3f4e139ae18cded312865d58b6ebb423241737) Thanks [@filiphsps](https://github.com/filiphsps)! - Upgrade turbo.

- Updated dependencies [[`36020f4`](https://github.com/NordcomInc/nordstar/commit/36020f4456cd8f75e3e245e671b9965ef61e3ec2), [`2b9f9e1`](https://github.com/NordcomInc/nordstar/commit/2b9f9e17b642e678b5042959abdc05be1eab74ff), [`2a539ad`](https://github.com/NordcomInc/nordstar/commit/2a539adf615af8a9e2b3e35e2fb22808d45dc6b5), [`364dfdc`](https://github.com/NordcomInc/nordstar/commit/364dfdc689a021c04bd7bfaddbd01a92b8566d59), [`910bb16`](https://github.com/NordcomInc/nordstar/commit/910bb16c5360c54af06f676eaee2c9a74ff84579), [`a2a3f8f`](https://github.com/NordcomInc/nordstar/commit/a2a3f8ff6bf2edc35e5c7a0c7205808b50a80e0b), [`9209b60`](https://github.com/NordcomInc/nordstar/commit/9209b60920e4ad0567c7fc77ddaa942d59d00b53), [`d400b3c`](https://github.com/NordcomInc/nordstar/commit/d400b3c040de3c56c9c9abbe0ec83176e79a166c), [`5de8f59`](https://github.com/NordcomInc/nordstar/commit/5de8f591dd2b963f513553972aea0698730170ee), [`f769b24`](https://github.com/NordcomInc/nordstar/commit/f769b241309c34b611c59636b203b4bc4ba55f79), [`a378fbe`](https://github.com/NordcomInc/nordstar/commit/a378fbec14831646ff7a1d2099757425871c86c4), [`4c6e010`](https://github.com/NordcomInc/nordstar/commit/4c6e010e78229fac11cee649948ba202d5f35d7d), [`916781e`](https://github.com/NordcomInc/nordstar/commit/916781e4a44a9577f85b68ff80ca4ceaf2c48c39), [`e7b5099`](https://github.com/NordcomInc/nordstar/commit/e7b509957066c5dc65987cc0fead5082e38193c7), [`9c916c9`](https://github.com/NordcomInc/nordstar/commit/9c916c96bff06f7a522f7baec954cad846ba7c8a), [`2af6f72`](https://github.com/NordcomInc/nordstar/commit/2af6f720fa521efa63ef61e3d40b7d41951b6370), [`c8a3b77`](https://github.com/NordcomInc/nordstar/commit/c8a3b77634e42249957c03815f8d2c2635354a25), [`a1f39ab`](https://github.com/NordcomInc/nordstar/commit/a1f39ab90a0618dc28d862bbfc0beda8cc9644dc), [`ac6dd18`](https://github.com/NordcomInc/nordstar/commit/ac6dd18b20866c4033b8d56e01b69ea1a1eaed04), [`2eb404f`](https://github.com/NordcomInc/nordstar/commit/2eb404f104baffa2ff3f23bc1e4343155d1d796c), [`0c3f4e1`](https://github.com/NordcomInc/nordstar/commit/0c3f4e139ae18cded312865d58b6ebb423241737)]:
  - @nordcom/nordstar-card@0.0.56
  - @nordcom/nordstar-label@0.0.56
  - @nordcom/nordstar-system@0.0.56

## 0.0.55

### Patch Changes

- [#511](https://github.com/NordcomInc/nordstar/pull/511) [`d05d837`](https://github.com/NordcomInc/nordstar/commit/d05d837c22618a7b610cc1a905ff918ec41dc1ef) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.2.79.

- [#513](https://github.com/NordcomInc/nordstar/pull/513) [`5c0c50b`](https://github.com/NordcomInc/nordstar/commit/5c0c50ba69553dafb40d1caf9be58d21fc4e25d1) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.2.9.

- [#522](https://github.com/NordcomInc/nordstar/pull/522) [`ee87d37`](https://github.com/NordcomInc/nordstar/commit/ee87d3700ef993ad75f1128117a4d9172ebabe1b) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.2.10.

- [#532](https://github.com/NordcomInc/nordstar/pull/532) [`e76075e`](https://github.com/NordcomInc/nordstar/commit/e76075e9600bc9dac0df83a9a0acee2dcb09f298) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update react monorepo .

- [#534](https://github.com/NordcomInc/nordstar/pull/534) [`550c34f`](https://github.com/NordcomInc/nordstar/commit/550c34ff1ed8c8c563d48accf91144a5a4a0ff8a) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update react monorepo to v18.3.0.

- [#537](https://github.com/NordcomInc/nordstar/pull/537) [`5c4925d`](https://github.com/NordcomInc/nordstar/commit/5c4925de5378ccbedd3ee3af40b2da1f629f6d94) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update react monorepo .

- [#538](https://github.com/NordcomInc/nordstar/pull/538) [`9751710`](https://github.com/NordcomInc/nordstar/commit/9751710813114cf4ca3dd46f768590b719e077ed) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.3.1.

- [#542](https://github.com/NordcomInc/nordstar/pull/542) [`c7a6a87`](https://github.com/NordcomInc/nordstar/commit/c7a6a871ffc6e6927eb0e6a2e3e3387b971cbd9c) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.12.8.

- [#543](https://github.com/NordcomInc/nordstar/pull/543) [`b6f6423`](https://github.com/NordcomInc/nordstar/commit/b6f6423424c5dfb9ba02daa90f084cd54e60091c) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.2.11.

- [#549](https://github.com/NordcomInc/nordstar/pull/549) [`4dbb71b`](https://github.com/NordcomInc/nordstar/commit/4dbb71bc97aa0d8dff56c67efcd4f745d295040f) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.12.9.

- [#551](https://github.com/NordcomInc/nordstar/pull/551) [`758ab11`](https://github.com/NordcomInc/nordstar/commit/758ab11acc9bc17d74eecf55b5ab07bdc77c8a55) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.12.10.

- [#558](https://github.com/NordcomInc/nordstar/pull/558) [`5594b62`](https://github.com/NordcomInc/nordstar/commit/5594b62002f53ba917b7373f3099eb40a32f0df9) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.12.11.

- [#564](https://github.com/NordcomInc/nordstar/pull/564) [`15d6f9a`](https://github.com/NordcomInc/nordstar/commit/15d6f9a36938a90e3a830c77383ef7df35229dba) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.3.2.

- [#572](https://github.com/NordcomInc/nordstar/pull/572) [`8fcc6c8`](https://github.com/NordcomInc/nordstar/commit/8fcc6c86f553070d6d783aec17015b1a820d5487) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.12.12.

- [#588](https://github.com/NordcomInc/nordstar/pull/588) [`c161b4c`](https://github.com/NordcomInc/nordstar/commit/c161b4c63ccb50f65a0c02858bc379c01ae8b18f) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/react to v18.3.3.

- [#601](https://github.com/NordcomInc/nordstar/pull/601) [`f6d5141`](https://github.com/NordcomInc/nordstar/commit/f6d514176f2448b1671070ed7c5216a66dc45eae) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.2.12.

- [#606](https://github.com/NordcomInc/nordstar/pull/606) [`2e3a428`](https://github.com/NordcomInc/nordstar/commit/2e3a428050611f6e50a617f07855a5dadeed6b2d) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.12.13.

- [#613](https://github.com/NordcomInc/nordstar/pull/613) [`218f8a1`](https://github.com/NordcomInc/nordstar/commit/218f8a1fe76504509b7038b84dd038b257a0a870) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.13.0.

- [#614](https://github.com/NordcomInc/nordstar/pull/614) [`9b8c730`](https://github.com/NordcomInc/nordstar/commit/9b8c73003569f58369b7ac6692208120ea56f5d6) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.3.0.

- [#615](https://github.com/NordcomInc/nordstar/pull/615) [`a732c28`](https://github.com/NordcomInc/nordstar/commit/a732c2856df570f7810a188bd874cdde11124818) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.0.

- [#617](https://github.com/NordcomInc/nordstar/pull/617) [`7c99a25`](https://github.com/NordcomInc/nordstar/commit/7c99a2503562c57715629a21cd5745d16170e826) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.1.

- [#620](https://github.com/NordcomInc/nordstar/pull/620) [`c141456`](https://github.com/NordcomInc/nordstar/commit/c141456334ae17a43913da92f8156ac5c9fbe014) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.14.2.

- [#621](https://github.com/NordcomInc/nordstar/pull/621) [`fd3ca5b`](https://github.com/NordcomInc/nordstar/commit/fd3ca5bebf5385652e0ef19d2393ad4295802d6d) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.3.1.

- [#625](https://github.com/NordcomInc/nordstar/pull/625) [`5e51497`](https://github.com/NordcomInc/nordstar/commit/5e514972e3b59336c6f27c0a8f6ed1a10fce0e58) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.2.13.

- [#630](https://github.com/NordcomInc/nordstar/pull/630) [`25c4605`](https://github.com/NordcomInc/nordstar/commit/25c460578d0cf0fe89dfefe8db8487baf402076b) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency prettier to v3.3.2.

- [#639](https://github.com/NordcomInc/nordstar/pull/639) [`37cbe29`](https://github.com/NordcomInc/nordstar/commit/37cbe29d8cd406ba93b15bfb34815f6baea2e0de) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.3.0.

- [#643](https://github.com/NordcomInc/nordstar/pull/643) [`1102a78`](https://github.com/NordcomInc/nordstar/commit/1102a7899720153c34130b7326b121621cadb52b) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.3.1.

- Updated dependencies [[`d05d837`](https://github.com/NordcomInc/nordstar/commit/d05d837c22618a7b610cc1a905ff918ec41dc1ef), [`5c0c50b`](https://github.com/NordcomInc/nordstar/commit/5c0c50ba69553dafb40d1caf9be58d21fc4e25d1), [`ee87d37`](https://github.com/NordcomInc/nordstar/commit/ee87d3700ef993ad75f1128117a4d9172ebabe1b), [`e76075e`](https://github.com/NordcomInc/nordstar/commit/e76075e9600bc9dac0df83a9a0acee2dcb09f298), [`550c34f`](https://github.com/NordcomInc/nordstar/commit/550c34ff1ed8c8c563d48accf91144a5a4a0ff8a), [`5c4925d`](https://github.com/NordcomInc/nordstar/commit/5c4925de5378ccbedd3ee3af40b2da1f629f6d94), [`9751710`](https://github.com/NordcomInc/nordstar/commit/9751710813114cf4ca3dd46f768590b719e077ed), [`c7a6a87`](https://github.com/NordcomInc/nordstar/commit/c7a6a871ffc6e6927eb0e6a2e3e3387b971cbd9c), [`b6f6423`](https://github.com/NordcomInc/nordstar/commit/b6f6423424c5dfb9ba02daa90f084cd54e60091c), [`4dbb71b`](https://github.com/NordcomInc/nordstar/commit/4dbb71bc97aa0d8dff56c67efcd4f745d295040f), [`758ab11`](https://github.com/NordcomInc/nordstar/commit/758ab11acc9bc17d74eecf55b5ab07bdc77c8a55), [`5594b62`](https://github.com/NordcomInc/nordstar/commit/5594b62002f53ba917b7373f3099eb40a32f0df9), [`15d6f9a`](https://github.com/NordcomInc/nordstar/commit/15d6f9a36938a90e3a830c77383ef7df35229dba), [`8fcc6c8`](https://github.com/NordcomInc/nordstar/commit/8fcc6c86f553070d6d783aec17015b1a820d5487), [`c161b4c`](https://github.com/NordcomInc/nordstar/commit/c161b4c63ccb50f65a0c02858bc379c01ae8b18f), [`f6d5141`](https://github.com/NordcomInc/nordstar/commit/f6d514176f2448b1671070ed7c5216a66dc45eae), [`2e3a428`](https://github.com/NordcomInc/nordstar/commit/2e3a428050611f6e50a617f07855a5dadeed6b2d), [`218f8a1`](https://github.com/NordcomInc/nordstar/commit/218f8a1fe76504509b7038b84dd038b257a0a870), [`9b8c730`](https://github.com/NordcomInc/nordstar/commit/9b8c73003569f58369b7ac6692208120ea56f5d6), [`a732c28`](https://github.com/NordcomInc/nordstar/commit/a732c2856df570f7810a188bd874cdde11124818), [`7c99a25`](https://github.com/NordcomInc/nordstar/commit/7c99a2503562c57715629a21cd5745d16170e826), [`c141456`](https://github.com/NordcomInc/nordstar/commit/c141456334ae17a43913da92f8156ac5c9fbe014), [`fd3ca5b`](https://github.com/NordcomInc/nordstar/commit/fd3ca5bebf5385652e0ef19d2393ad4295802d6d), [`5e51497`](https://github.com/NordcomInc/nordstar/commit/5e514972e3b59336c6f27c0a8f6ed1a10fce0e58), [`25c4605`](https://github.com/NordcomInc/nordstar/commit/25c460578d0cf0fe89dfefe8db8487baf402076b), [`37cbe29`](https://github.com/NordcomInc/nordstar/commit/37cbe29d8cd406ba93b15bfb34815f6baea2e0de), [`1102a78`](https://github.com/NordcomInc/nordstar/commit/1102a7899720153c34130b7326b121621cadb52b)]:
  - @nordcom/nordstar-card@0.0.55
  - @nordcom/nordstar-label@0.0.55
  - @nordcom/nordstar-system@0.0.55

## 0.0.54

### Patch Changes

- [`93e2685`](https://github.com/NordcomInc/nordstar/commit/93e2685a6313a5bdb1d69d0e875bfe0aeb19493d) Thanks [@filiphsps](https://github.com/filiphsps)! - Details: Remove color.

- Updated dependencies []:
  - @nordcom/nordstar-card@0.0.54
  - @nordcom/nordstar-label@0.0.54
  - @nordcom/nordstar-system@0.0.54

## 0.0.53

### Patch Changes

- [`f7ba094`](https://github.com/NordcomInc/nordstar/commit/f7ba0949dbd3aaac6041e60c7b123457c9e56702) Thanks [@filiphsps](https://github.com/filiphsps)! - Add `<Details/>` component.

- [#505](https://github.com/NordcomInc/nordstar/pull/505) [`278877e`](https://github.com/NordcomInc/nordstar/commit/278877e3c238c6c7a042ed13c333cb648dedd20d) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.1.7[SECURITY]

- [#506](https://github.com/NordcomInc/nordstar/pull/506) [`04b4057`](https://github.com/NordcomInc/nordstar/commit/04b4057b7ae0d6ae62e41c5f15485d9d6aa79119) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency typescript to v5.4.5.

- [#507](https://github.com/NordcomInc/nordstar/pull/507) [`b70476f`](https://github.com/NordcomInc/nordstar/commit/b70476f8ae36b177256dba4b7aeb540841d99ae2) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update react monorepo .

- [#508](https://github.com/NordcomInc/nordstar/pull/508) [`e893059`](https://github.com/NordcomInc/nordstar/commit/e8930593500fec28dc2bf2d4d78777c96426bd6c) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency @types/node to v20.12.7.

- [#509](https://github.com/NordcomInc/nordstar/pull/509) [`b532348`](https://github.com/NordcomInc/nordstar/commit/b53234851c9a6cc49f43f8e3b64429833b9ce608) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v5.2.8.

- Updated dependencies [[`e1922f6`](https://github.com/NordcomInc/nordstar/commit/e1922f6eba5369c93e1ac0410dda6eb501c40ea5), [`67b4715`](https://github.com/NordcomInc/nordstar/commit/67b47150a7cc9c45c1ac7d99ee7ce87265cd657b), [`9d973a0`](https://github.com/NordcomInc/nordstar/commit/9d973a0c744b6e7f2fd6d9ddd3377cb9361ced70), [`dc819e1`](https://github.com/NordcomInc/nordstar/commit/dc819e1167a463cae2b1c153ae5510d053afb4bd), [`33b7ea4`](https://github.com/NordcomInc/nordstar/commit/33b7ea4475f7240ee606441f6e9e4dd9a32b379c), [`d86e557`](https://github.com/NordcomInc/nordstar/commit/d86e557f980106e3556ba75bfc3d3c4f65f0f0a1), [`a711791`](https://github.com/NordcomInc/nordstar/commit/a7117916cb74d2121b381563f3efb174f99fbdd7)]:
  - @nordcom/nordstar-card@0.0.53
  - @nordcom/nordstar-label@0.0.53
  - @nordcom/nordstar-system@0.0.53
