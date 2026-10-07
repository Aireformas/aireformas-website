# aireformas — Design System

Boutique editorial. Quiet luxury. Photography first. UI almost invisible.

## Palette

| Token | Value | Use |
|-------|-------|-----|
| `--color-paper` | `#F5F2ED` | Page background |
| `--color-paper-warm` | `#EDE8E0` | Alt sections, materials |
| `--color-ink` | `#2C2824` | Body text |
| `--color-ink-muted` | `#2C2824` @ 55–70% | Secondary copy |
| `--color-accent` | `#1b2c4a` | Links active, navy accent only |
| `--color-stone` | `#3D3834` | Dark editorial blocks |

Navy is **accent only** — never full header/footer fills on light pages.

## Typography

| Role | Font | Notes |
|------|------|-------|
| Display / headings | Cormorant Garamond (serif) | Wide tracking `0.12–0.18em`, weight 400–500 |
| Body | Inter | 16px, relaxed leading |
| Labels / nav | Inter or DM Mono | `10–11px`, tracking `0.2–0.28em`, uppercase |

## Layout

- Generous vertical rhythm: `section-y` ~140–160px on large screens
- Asymmetric grids: offset columns, varied aspect ratios
- Images: no heavy borders; radius max 4px
- Hero CTAs: text links with thin underline — no pill buttons
- Cards: avoid boxes; if border needed, `ink/5` max

## Motion

- Soft opacity/blur reveals (`InView`)
- Image hover: subtle scale (~1.02), no shimmer glare
- Respect `prefers-reduced-motion`

## Brand voice (visual)

Detalle. Material. Proporción. Luz. Confort.  
Never shout “lujo / premium / exclusivo” in UI chrome.
