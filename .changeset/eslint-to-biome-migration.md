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
---

Replace ESLint and Prettier with Biome 2.x. Single root `biome.jsonc` covers linting and formatting; turbo no longer orchestrates lint/format; CI now runs `biome ci`. Source files reformatted (trailing commas, sorted Tailwind classes, organized imports). No public API changes.
