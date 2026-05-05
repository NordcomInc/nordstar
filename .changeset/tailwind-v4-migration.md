---
'@nordcom/nordstar': patch
'@nordcom/nordstar-system': patch
'@nordcom/nordstar-accented': patch
'@nordcom/nordstar-button': patch
'@nordcom/nordstar-card': patch
'@nordcom/nordstar-details': patch
'@nordcom/nordstar-header': patch
'@nordcom/nordstar-heading': patch
'@nordcom/nordstar-input': patch
'@nordcom/nordstar-label': patch
'@nordcom/nordstar-view': patch
'@nordcom/nordstar-docs': patch
'@nordcom/nordstar-storybook': patch
---

Migrate to Tailwind v4 consumer DX. The lib now ships a `tailwind.css` contract (`@theme` + `@source`) for Tailwind v4 users and a precompiled `styles.css` for non-Tailwind users. Consumers no longer maintain a duplicate `tailwind.config.cjs` — instead, `@import "@nordcom/nordstar"` in their main CSS does it all. Runtime CSS variables move to the `--nordstar-*` namespace; the `<NordstarProvider/>` React API is unchanged.
