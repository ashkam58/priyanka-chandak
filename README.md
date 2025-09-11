# Priyanka Chandak — Rubik's Cube & Calligraphy (Landing Page)

Feature highlights:
- **Next.js App Router + TypeScript**
- **TailwindCSS** with glass UI
- **Framer Motion** parallax sections
- **Lucide-react** icons
- **Theme switch** via `next-themes` (Day = subtle moving sun, Night = animated starfield)
- **Courses** for Rubik's and Calligraphy
- **Calligraphy animation** (SVG stroke draw)
- **WhatsApp CTA**

## Quickstart
```bash
npm i
npm run dev
# open http://localhost:3000
```
> If you copy a single file into a non-TypeScript project, remove the `: type` annotations. This project is already TypeScript-ready.

## Structure
- `app/` – pages and layout
- `components/` – UI & sections (shadcn-like minimal components included)
- `components/Backgrounds/SunSky.tsx` – moving sun in day theme
- `components/Backgrounds/StarField.tsx` – moving stars in night theme
- `components/ParallaxSection.tsx` – framer motion parallax wrapper

## Notes
- Replace the WhatsApp number in `components/CTA.tsx` with Priyanka's actual number.
- You can expand testimonials, add gallery, pricing, FAQs, etc.
