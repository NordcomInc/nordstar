---
"@nordcom/nordstar-input": patch
---

Fix `<Input/>` switching between uncontrolled and controlled. With no `value` or
`defaultValue`, the rendered element started as `value={undefined}` (uncontrolled)
and only became controlled after the first keystroke, triggering React's
"changing an uncontrolled input to be controlled" warning. The component now
seeds its internal value so the element is controlled from the first render. A
consumer-supplied `onChange` is also forwarded — previously it was overwritten by
the component's own handler, so a controlled `value` could never update. Finally,
rendering with a non-input `as` (e.g. `as="article"`) no longer applies an invalid
`type` attribute.
