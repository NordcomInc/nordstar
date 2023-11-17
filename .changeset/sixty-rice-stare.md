---
'@nordcom/nordstar-system': patch
'@nordcom/nordstar': patch
---

Move `<NordstarProvider/>` into a separate package.
This is done to avoid circular dependencies between `@nordcom/nordstar` and `@nordcom/nordstar-*` as the meta package were importing and then exporting all sub packages.
