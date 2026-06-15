---
"@nordcom/nordstar-separator": patch
---

Add `<Separator/>`, a thin rule that divides content along one axis. It is
decorative by default and hidden from the accessibility tree (`role="none"`);
set `decorative={false}` when the divider conveys a real grouping boundary so
assistive tech announces it as a `separator` with the correct `aria-orientation`.
Hand-rolled with no Radix dependency and re-fitted to the Nordstar token contract.
