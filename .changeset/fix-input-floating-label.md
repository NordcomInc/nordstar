---
"@nordcom/nordstar-input": patch
---

Fix `<Input/>` floating label. The label's active-state utility classes were
separated by `U+00B7` middle-dots instead of spaces, so Tailwind never parsed
them — the label stayed full-size at the top and covered the value. Separators
are now spaces, restoring the float/scale animation. Single-line inputs also
center their value for consistent top/bottom padding, and the floated label
sits clear of the text in every state (value, placeholder, focus, textarea).
