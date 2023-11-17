# @nordcom/nordstar-system

## 0.0.5

### Patch Changes

-   [#58](https://github.com/NordcomInc/nordstar/pull/58) [`99f6c4c`](https://github.com/NordcomInc/nordstar/commit/99f6c4ca1bff0db7a0650be5abe1d5a65c51cf8d) Thanks [@filiphsps](https://github.com/filiphsps)! - Move `<NordstarProvider/>` into a separate package.
    This is done to avoid circular dependencies between `@nordcom/nordstar` and `@nordcom/nordstar-*` as the meta package were importing and then exporting all sub packages.
