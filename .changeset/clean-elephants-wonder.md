---
'@nordcom/nordstar-accented': patch
'@nordcom/nordstar-button': patch
'@nordcom/nordstar-label': patch
'@nordcom/nordstar-card': patch
'@nordcom/nordstar': patch
'@nordcom/nordstar-system': patch
'@nordcom/nordstar-heading': patch
'@nordcom/nordstar-view': patch
---

- Update release tooling, this should hopefully fix the issue with wildcard (`*`) dependencies. I will have to push a new release to verify.
- Completely refactored how packages are built, exported and reimported. We will have to look into a better way to deal with `clean-package` as we'd eventually like to be able to export the `scss`/`css` modules as well.
  - Fixes code duplication inside of `@nordcom/nordstar`.
  - No longer embeds jsx-runtime into every package.
