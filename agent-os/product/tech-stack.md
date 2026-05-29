# Tech Stack Decisions

## Framework
Next.js 14+ with App Router — SEO, performance, Vercel deployment

## Language
TypeScript — strict mode, no any types

## Styling
Tailwind CSS only — no inline styles, no CSS modules except globals.css

## Animation
framer-motion — scroll animations, page transitions, cursor effects

## Smooth Scroll
Lenis — premium scroll feel across the entire site

## Icons
lucide-react only — no other icon libraries

## Fonts
Google Fonts via next/font/google
- Display: Space Grotesk (headings)
- Body: Inter (paragraphs, UI)

## Theme
next-themes — dark default, light available via toggle

## Analytics
Vercel Analytics — privacy-first, no cookie banner needed

## Deployment
Vercel — connected to GitHub, auto-deploy on push

## Logo
public/logo.png — white SD monogram, use next/image
Dark mode: as-is | Light mode: CSS invert filter