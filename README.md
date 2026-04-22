# Effira Decor — ქუთაისქალაქობა

A single-page Next.js 14 celebration site for **Effira Decor**, a Georgian event styling & decor brand based in Kutaisi, marking Kutaisi City Day (ქუთაისქალაქობა).

Two design variants ship side-by-side:

| Route | Aesthetic | Description |
| --- | --- | --- |
| `/` | **Romantic Georgian Baroque** | Light, airy, dusty-rose & champagne-gold invitation card on an animated gradient mesh with drifting rose petals. |
| `/atelier` | **Dark Georgian Atelier** | High-end candlelit baroque. Near-black base with breathing rose/gold orbs, conic shimmer, SVG grain, and a wax-seal logo reveal. |

## Tech

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for layout utilities
- **CSS Modules** for the dark variant
- **Google Fonts** via `next/font/google` — *Cormorant Garamond*, *Cormorant*, *Noto Serif Georgian*
- `lucide-react` for the Instagram icon
- **Zero animation libraries** — every motion is pure CSS keyframes

## Development

```bash
npm install
npm run dev
```

Then open:

- Light variant: http://localhost:3000/
- Dark variant: http://localhost:3000/atelier

## Production build

```bash
npm run build
npm run start
```

Both routes prerender as static content.

## Credits

Design by **თეკლა ჭოლაძე** (Tekla Choladze).
Instagram: [@effira_decor](https://www.instagram.com/effira_decor)
