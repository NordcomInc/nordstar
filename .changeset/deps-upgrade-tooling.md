---
"@nordcom/nordstar": patch
"@nordcom/nordstar-system": patch
"@nordcom/nordstar-accented": patch
"@nordcom/nordstar-button": patch
"@nordcom/nordstar-card": patch
"@nordcom/nordstar-details": patch
"@nordcom/nordstar-header": patch
"@nordcom/nordstar-heading": patch
"@nordcom/nordstar-input": patch
"@nordcom/nordstar-label": patch
"@nordcom/nordstar-view": patch
---

Deps: upgrade build/test tooling and docs dependencies to their latest releases
(biome 2.5.0, vite 8.0.16, vitest 4.1.8, turbo 2.9.18, tailwindcss 4.3.1, sass
1.101.0, @types/node 25, @types/react 19.2.17, react 19.2.7, next 16.2.9, shiki
4.2.0 and related). Only devDependencies changed, so there is no runtime impact
for consumers. The Biome config was migrated to the 2.5.0 schema (`recommended`
→ `preset`) and the CI environment variables were declared in `turbo.json`.
`inquirer` is intentionally held at 13.x because the component generator relies
on its legacy prompt API.
