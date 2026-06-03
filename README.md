# Sam Dhanalakota — Portfolio

Personal portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS.

🌐 **Live:** [sam.dhanalakota.app](https://www.samdhanalakota.com/)

---

## Tech Stack

- **Framework:** Next.js 14+ App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + CSS Modules
- **Animation:** Framer Motion
- **Theme:** next-themes (dark/light)
- **Icons:** lucide-react + @devicon/react + @lobehub/icons
- **Email:** Resend
- **Deployment:** Vercel

---

## Features

- Dark/light theme toggle
- Custom cursor with hover and click effects
- Scroll progress indicator
- Smooth section navigation
- Horizontal scrolling project cards with SCOPE/TECH toggle
- Auto-scrolling skills rows with category filters
- Contact form powered by Resend
- Fully responsive

---

## Sections

- **Intro** — Hero with animated headline
- **About** — Bio, stats, and tech stack
- **Projects** — 6 featured projects with case study links
- **Skills** — 57 skills across 9 categories
- **Journey** — Work experience and education timeline
- **Contact** — Contact form + scheduling

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
RESEND_TO_EMAIL=your_email@gmail.com
NEXT_PUBLIC_EMAIL=your_email@gmail.com
NEXT_PUBLIC_LINKEDIN=https://www.linkedin.com/in/your-profile/
NEXT_PUBLIC_GITHUB=https://github.com/your-username
NEXT_PUBLIC_PHONE=+1 (000) 000-0000
NEXT_PUBLIC_CAL_LINK=your-cal-username/connect
```

---

## Project Structure

```
sam-portfolio/
├── app/                    # Next.js App Router
│   ├── api/contact/        # Contact form API route
│   ├── globals.css         # Global styles + CSS variables
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Projects, Skills, Journey, Contact
│   └── ui/                 # shadcn/ui components
├── hooks/                  # Custom hooks
├── lib/
│   ├── constants/          # Navigation items, social links
│   ├── i18n/               # Translations (en)
│   └── utils/              # Utility functions
├── public/                 # Static assets
└── agent-os/               # Project context and standards
```

---

## License

MIT

---

Built by [Sam Dhanalakota](https://www.linkedin.com/in/sam-dhanalakota/)
