---
"@nordcom/nordstar": patch
---

Honor `prefers-reduced-motion`. The published CSS contract now neutralizes
animations, transitions and smooth scrolling when the user's operating system
requests reduced motion, so Nordstar's hover/focus/disclosure motion respects
that preference. The reset only applies under the `prefers-reduced-motion: reduce`
media query, so it has no effect for users who haven't opted out of motion.
