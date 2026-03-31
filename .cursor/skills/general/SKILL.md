---
name: general
description: >-
  Delivers work with minimal code, no redundancy, and senior-level UI structure.
  Use for any implementation or refactor in this repo, or when the user asks
  for concise solutions, clean layout, or design-system thinking.
---

# General principles

## Code

- Satisfy the request with **the least code possible**: smallest diff, fewest files, no speculative abstractions.
- **Remove redundancy** — repeated markup, duplicate styles, dead props, and classes that restate defaults (see project rule on redundant Tailwind/CSS).
- Prefer **one clear place** for behavior (one component, one token, one helper) over scattering logic.

## UI / layout

- Structure pages like a **senior product designer**: clear hierarchy, consistent spacing rhythm, typography scale, and alignment grid — not ad-hoc padding everywhere.
- **Compose** from layout primitives (stack, cluster, sidebar + main) instead of nesting one-off wrappers.
- **Tokens first** — spacing, type, and color from shared CSS variables or design tokens; avoid magic numbers in JSX unless one-off.
- **Accessibility and states** by default where it matters: focus, contrast, hit targets, reduced motion when using motion.

## When in doubt

- Ship the **simplest** thing that matches the design; refine in a follow-up if the user asks.
