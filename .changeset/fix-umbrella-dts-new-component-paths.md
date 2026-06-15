---
"@nordcom/nordstar": patch
---

Fix the umbrella's type rollup leaking external `@nordcom/nordstar-*` imports for
the seven admin-derived components (Accordion, DropdownMenu, Kbd, Select, Separator,
Switch, Tooltip). Their workspace path aliases were never added to the root
`tsconfig.json`, so the dts bundler couldn't resolve them to source and emitted bare
re-exports instead of inlining the declarations — leaving the package without those
sub-package dependencies, so consumers' types degraded to `any`. Map the missing
aliases so the rollup inlines them and the umbrella stays self-contained.
