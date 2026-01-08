# Shubham Ramoliya – Gaming Themed Portfolio

A modern, gaming-inspired developer portfolio built with React, Vite, and Tailwind CSS. The site presents projects as **game levels**, with smooth animations, neon accents, and a layout optimized for readability.

## 🧩 Features

- **Game-level project layout** – Projects are presented as levels with badges, tags, and clear CTAs.
- **Section-based navigation** – Home, About, Projects, Skills, Resume, and Contact pages with keyboard-like navigation between sections.
- **Responsive design** – Fully responsive layout that works on desktops, tablets, and phones.
- **Contact form with EmailJS** – Visitors can send messages directly via the contact form.
- **Shadcn UI + Radix primitives** – Accessible, composable UI components styled to match the gaming theme.
- **Dark, neon aesthetic** – Subtle grid background, glowing cards, and animated accents.

## 🛠 Tech Stack

- **Frontend:** React 19, React Router
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, custom CSS variables, tw-animate-css
- **UI Components:** shadcn/ui, Radix UI, lucide-react icons
- **Forms & Validation:** React Hook Form, Zod (via @hookform/resolvers)
- **Email:** @emailjs/browser (for the contact form)

## 📂 Project Structure

```text
src/
  App.jsx           # Routing and page layout
  main.jsx          # React entry point
  index.css         # Tailwind + custom theme tokens
  components/
    hero.jsx        # Landing hero section
    about.jsx       # Player profile / about section
    projects.jsx    # Game levels (projects)
    skills.jsx      # Skill tree / abilities
    resume.jsx      # Experience & education timeline
    contact.jsx     # Contact page + form
    ui/             # Reusable UI components (button, card, input, etc.)
  hooks/            # Custom hooks (mobile menu, toast)
  lib/              # Utilities
  services/
    contactService.ts # Email / contact form logic
```

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- pnpm, npm, or yarn (examples use **pnpm**)

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

Then open http://localhost:5173 in your browser.

### Build for production

```bash
pnpm build
```

### Preview the production build

```bash
pnpm preview
```

## 📫 Contact Form Configuration

The contact page uses **EmailJS** via `sendContactMessage` in `src/services/contactService.ts`.

1. Create an EmailJS account and a service/template.
2. Add your **service ID**, **template ID**, and **public key** inside `contactService.ts`.
3. Deploy the site – messages submitted from the Contact page will be sent to your configured email.

## 🎮 Customization

- **Colors & Theme:**
  - All key colors (background, primary, secondary, accent) live in `src/index.css` under the `:root` CSS variables.
- **Fonts:**
  - Body text uses a clean, readable gaming-style font.
  - Headings use a futuristic display font to keep the arcade feel.
- **Sections & Content:**
  - Update text and project details inside the components in `src/components/`.

## 📦 Scripts

From `package.json`:

- `pnpm dev` – Run the development server.
- `pnpm build` – Build the app for production.
- `pnpm preview` – Preview the production build.
- `pnpm lint` – Run ESLint over the project.

## 🧪 Future Improvements (Ideas)

- Add more game-like micro-interactions (XP progress, achievements, etc.).
- Add theme toggle (light / dark variants) while keeping the gaming identity.
- Add analytics to track section visits and clicks.

## 📝 License

This is a personal portfolio project. You are welcome to reference the structure and ideas, but please avoid copying content (text, images, identity) directly.
