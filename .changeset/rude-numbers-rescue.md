---
'@nordcom/nordstar': patch
'@nordcom/nordstar-storybook': patch
'@nordcom/nordstar-docs': patch
---

Added an initial `<NordstarProvider/>` component.

This will in the future be used to deal with things like overlays,
modals, and other components that need to be rendered outside of the
normal flow of the application. It will most likely also deal with the
theming of the components (instead of using a dedicated
`<ThemeProvider/>`) and the `i18n` support. (d8afab94).
