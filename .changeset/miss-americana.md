---
'@nordcom/nordstar-accented': patch
'@nordcom/nordstar-heading': patch
'@nordcom/nordstar-button': patch
'@nordcom/nordstar-header': patch
'@nordcom/nordstar-input': patch
'@nordcom/nordstar-label': patch
'@nordcom/nordstar-card': patch
'@nordcom/nordstar-view': patch
'@nordcom/nordstar': patch
'@nordcom/nordstar-system': patch
---

-   Remove `clean-package` and replace it with `publishConfig` _(this still needs testing)_.
-   Switch from `"jsx": "preserve"` to `"jsx": "react-jsx"`.
-   Substantially improve both the `vite` and `typescript` configurations.
    -   Use `references` instead of `extends` in `tsconfig.json`s. This allows for better type checking and faster builds.
    -   Properly create `entry` and `rollupOptions`' `input` file lists. This fixes a bunch of issues.
    -   Define `__dirname`, we previously tried using `__dirname ` under esm which is not supported, somehow it didn't error or break the build but it's fixed now anyway.
-   Some groundwork done to eventually support [`jsr.io`](https://jsr.io/@nordcom)
