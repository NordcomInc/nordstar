---
"@nordcom/nordstar-details": patch
---

Drop `<Details/>`'s SCSS module in favour of Tailwind utilities. The disclosure
marker (a "+" that morphs into a downward triangle when open), the hidden native
marker, hover/`focus-visible` colouring and outline, the open-state label colour
and the open-state content padding are now all expressed with Tailwind classes
(`group-open:`, `before:`, and a few arbitrary properties for the token-driven
values). The marker's transition is collapsed to a single targeted transition;
rendering is otherwise unchanged.
