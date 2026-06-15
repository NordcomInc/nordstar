---
"@nordcom/nordstar-system": patch
---

Fix `<NordstarProvider/>` theme generation and markup:

- A theme with missing accents no longer emits invalid `--nordstar-color-primary:
  null;` declarations. The accent lines are now omitted when absent, so the
  `@theme` defaults apply (mirroring how every other optional color already
  falls back).
- `fonts.code` is now quote-stripped just like `fonts.heading`/`fonts.body`, so a
  quoted value such as `'Fira Code'` produces a valid `font-family` instead of a
  malformed declaration.
- The structural `id="nordstar"` is now deterministic: props are spread before it
  so a consumer-supplied `id` can no longer silently replace the wrapper's own
  id.
