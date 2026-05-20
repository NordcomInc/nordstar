---
"@nordcom/nordstar": minor
---

Revamp packaging: umbrella is now self-contained — sub-package code is inlined
and deduplicated at build time, dropped from runtime dependencies. Removed
broken `./*` wildcard subpath exports and fixed `.d.ts` path leakage.

Carry-along cleanup across all sub-packages: removed broken `./*` wildcard
exports, dropped deprecated `module` field, normalised the exports field to a
single canonical shape. Public APIs unchanged.
