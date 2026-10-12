# Kishore Pulugu — Portfolio

Premium, recruiter-focused personal portfolio with a futuristic 3D digital universe aesthetic.

Built with **React + Vite + TypeScript**, **React Three Fiber**, **Framer Motion**, and **Tailwind CSS**.

---

## Quick Start

```bash
cd kishore-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, GitHub Pages, or any static host.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Resume.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx
│   └── 3d/
│       ├── Scene3D.tsx
│       └── DigitalUniverse.tsx
├── data/
│   ├── profile.ts      ← name, bio, links, internship
│   ├── skills.ts       ← skill list & categories
│   └── projects.ts     ← project case studies
├── lib/utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## How to Customize

### 1. Personal details, email, social links
Edit **`src/data/profile.ts`**:
- `name`, `title`, `bio`, `aboutExtended`
- `links.email`, `links.github`, `links.linkedin`
- `internship` role, description, technologies
- `education` details

### 2. Skills
Edit **`src/data/skills.ts`**:
- Add / remove skills
- Change `level`: `"learning" | "comfortable" | "proficient"`
- Update descriptions

### 3. Projects
Edit **`src/data/projects.ts`**:
- Fill in real GitHub and live demo URLs
- Update problem / solution / contribution text
- Add or remove modules for FutureLeap AI
- Expand ClassGuard AI, KrishiLeap, and Data Analytics entries with real details

### 4. Resume PDF
1. Create your resume as a PDF
2. Place it at **`public/resume.pdf`**
3. The Download button is already linked

### 5. Contact form
The form uses `mailto:` by default (opens the visitor’s email client).  
To use a hosted service (Formspree, EmailJS, etc.), update the `handleSubmit` function in **`src/components/Contact.tsx`**.

---

## Design Notes

- Deep midnight navy + electric cyan + soft violet
- Glassmorphism cards, subtle glows, cinematic gradients
- 3D scene (planet, holographic figure, particles, floating geometry) is lazy-loaded and falls back gracefully when WebGL is unavailable
- Mobile-first responsive layout
- `prefers-reduced-motion` respected
- Accessible focus states and semantic HTML
- No fabricated metrics, awards, or employment history

---

## Deploy

### Vercel (recommended)
```bash
npx vercel
```
Or connect the GitHub repo in the Vercel dashboard.

### Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### GitHub Pages
Set `base` in `vite.config.ts` if deploying to a sub-path, then:
```bash
npm run build
# push dist/ to gh-pages branch
```

---

## Testing Checklist

- [ ] `npm install` succeeds
- [ ] `npm run dev` loads without console errors
- [ ] Hero CTAs scroll to correct sections
- [ ] Navbar highlights active section on scroll
- [ ] Mobile menu opens / closes
- [ ] Skills filter works
- [ ] Project cards open modal with full details
- [ ] Contact form validation works
- [ ] Resume download points to `/resume.pdf`
- [ ] 3D scene renders on desktop; page still usable if WebGL fails
- [ ] Layout looks clean on mobile (375px) and desktop (1440px)

---

Made for Kishore Pulugu — *I Build What I Imagine. I Learn What Comes Next.*
