---
"@nordcom/nordstar-input": patch
---

Improve `<Input/>` accessibility and state handling:

- The floating `<label>` is now programmatically associated with the control via
  `htmlFor`/`id` (using `useId`, while respecting a consumer-supplied `id`).
  Previously the label was a purely visual overlay, so screen readers announced
  an unlabeled textbox.
- Added a visible, semantic disabled state — disabled inputs now dim
  (`opacity-50`), show a `not-allowed` cursor and expose `data-disabled`,
  matching the affordance vocabulary of `<Button/>`. `disabled` is only forwarded
  to real form controls.
- The floating-label motion now tracks the `--nordstar-duration-short` token and
  transitions only the properties that actually animate, instead of the
  hardcoded `duration-200` + `transition-all`.
- A placeholder-only field now brightens its border/text in step with the floated
  label, fixing the previously half-applied "filled" appearance.
