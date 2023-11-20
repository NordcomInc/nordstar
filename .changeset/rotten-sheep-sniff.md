---
'@nordcom/nordstar-heading': patch
'@nordcom/nordstar-card': patch
'@nordcom/nordstar-view': patch
'@nordcom/nordstar': patch
'@nordcom/nordstar-system': patch
---

Use typescript codebase directly during development internally.

The `exports` get automatically replaced during packaging as a part of running `clean-package` in the `prepack` and `postpack` script(s).
