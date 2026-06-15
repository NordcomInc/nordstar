---
"@nordcom/nordstar-tooltip": patch
---

Add `<Tooltip/>`, a compound floating label built on `@radix-ui/react-tooltip`
(`Tooltip.Provider`, `Tooltip.Trigger`, `Tooltip.Content`). It handles focus,
`Escape`/pointer-leave dismissal, collision-aware positioning, and `aria-describedby`
wiring, with the bubble re-fitted to the Nordstar token contract.
