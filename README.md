# Shubham Ramoliya – Developer Portfolio

A modern developer portfolio built with React, Vite, and Tailwind CSS. The site presents projects with clear sections, smooth animations, and a layout optimized for readability.

## 🧩 Features

- **Project showcase layout** – Projects are presented with badges, tags, and clear CTAs.
- **Section-based navigation** – Home, About, Projects, Skills, Resume, and Contact pages with keyboard-like navigation between sections.
- **Responsive design** – Fully responsive layout that works on desktops, tablets, and phones.
- **Contact form with OTP verification** – Secure contact flow using server-side EmailJS + MongoDB TTL.
- **Shadcn UI + Radix primitives** – Accessible, composable UI components styled for clarity and consistency.
- **Polished visual design** – Subtle background texture, defined panels, and animated accents.

## 🛠 Tech Stack

- **Frontend:** React 19, React Router
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, custom CSS variables, tw-animate-css
- **UI Components:** shadcn/ui, Radix UI, lucide-react icons
- **Forms & Validation:** React Hook Form, Zod (via @hookform/resolvers)
- **API:** Vercel Serverless Functions (OTP + contact)
- **Database:** MongoDB (TTL collections for OTP + rate limit)
- **Email:** EmailJS REST API (server-side)

## 📂 Project Structure

```text
api/              # Vercel serverless functions
  send-otp.js
  send-contact.js
  verify-otp.js
  _utils/
server/           # Shared DB/models/email helpers used by API
  config/
  models/
  utils/
src/
  App.jsx           # Routing and page layout
  main.jsx          # React entry point
  index.css         # Tailwind + custom theme tokens
  components/
    hero.jsx        # Landing hero section
    about.jsx       # About section
    projects.jsx    # Projects section
    skills.jsx      # Skills section
    resume.jsx      # Experience & education timeline
    contact.jsx     # Contact page + form
    ui/             # Reusable UI components (button, card, input, etc.)
  hooks/            # Custom hooks (mobile menu, toast)
  lib/              # Utilities
  services/
    contactService.ts # Client → API helpers
```

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- pnpm, npm, or yarn (examples use **pnpm**)

### Install dependencies

```bash
pnpm install
```

### Environment setup

Copy `.env.example` → `.env` and fill in your values.

### Start the development server

```bash
pnpm dev
```

This runs Vite + the local Express API (for dev only).

````

Then open http://localhost:5173 in your browser.

## ☁️ Deploy to Vercel (Option 1: Serverless API)

This project includes Vercel Serverless Functions under `/api` for OTP and contact.

1. Push the repo to GitHub.
2. Import it in Vercel.
3. In Vercel → Project Settings → Environment Variables, add:
   - `MONGODB_URI`
   - `EMAILJS_OTP_SERVICE_ID`, `EMAILJS_OTP_TEMPLATE_ID`
   - `EMAILJS_OTP_PUBLIC_KEY`, `EMAILJS_OTP_PRIVATE_KEY`
   - `EMAILJS_CONTACT_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`, `EMAILJS_AUTOREPLY_TEMPLATE_ID`
   - `EMAILJS_CONTACT_PUBLIC_KEY`, `EMAILJS_CONTACT_PRIVATE_KEY`
4. Ensure `VITE_API_BASE_URL` is **empty** (so the frontend calls `/api` on the same domain).
5. In EmailJS (both accounts): enable **API access from non-browser environments**.
6. Deploy.

### Build for production

```bash
pnpm build
````

### Preview the production build

```bash
pnpm preview
```

## 📫 Contact Form + OTP Configuration

The contact page uses a **server-side EmailJS** flow with OTP verification.

1. Create two EmailJS accounts:

- Account A: OTP service + OTP template
- Account B: Contact + Auto-reply templates

2. Create a `.env` file (copy from `.env.example`) and fill in:

- `MONGODB_URI`
- `EMAILJS_OTP_SERVICE_ID`, `EMAILJS_OTP_TEMPLATE_ID`
- `EMAILJS_OTP_PUBLIC_KEY`, `EMAILJS_OTP_PRIVATE_KEY` (Account A for OTP)
- `EMAILJS_CONTACT_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`, `EMAILJS_AUTOREPLY_TEMPLATE_ID`
- `EMAILJS_CONTACT_PUBLIC_KEY`, `EMAILJS_CONTACT_PRIVATE_KEY` (Account B for contact)

3. In EmailJS templates:

- Main contact template **To Email** = your email
- Auto-reply template **To Email** = `{{email}}`

4. Start the app:

- `pnpm dev`

## 🎯 Customization

- **Colors & Theme:**
  - All key colors (background, primary, secondary, accent) live in `src/index.css` under the `:root` CSS variables.
- **Fonts:**
  - Body text uses a clean, readable font.
  - Headings use a bold display font for hierarchy.
- **Sections & Content:**
  - Update text and project details inside the components in `src/components/`.

## 📦 Scripts

From `package.json`:

- `pnpm dev` – Run Vite + local API.
- `pnpm build` – Build the app for production.
- `pnpm preview` – Preview the production build.
- `pnpm lint` – Run ESLint over the project.

## 🧪 Future Improvements (Ideas)

- Add more micro-interactions and scroll reveals.
- Add theme toggle (light / dark variants).
- Add analytics to track section visits and clicks.

## 📝 License

This is a personal portfolio project. You are welcome to reference the structure and ideas, but please avoid copying content (text, images, identity) directly.
