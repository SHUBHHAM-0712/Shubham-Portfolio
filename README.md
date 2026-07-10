<div align="center">

# 👋 Shubham Ramoliya — Developer Portfolio

### `< Full-Stack Engineer • Java Spring Boot & MERN Developer • Product Builder />`

<br/>

[![Live Site](https://img.shields.io/badge/🔗_Live_Site-portfolio.ramoliya--shubham.dev-FFD43B?style=for-the-badge)](https://portfolio.ramoliya-shubham.dev/)

<br/>

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

<br/>

## ⚡ What Is This?

A personal developer portfolio with a **neo-brutalist comic-style** design — bold borders, punchy colors, hover animations, and thick shadows. Not your typical minimal portfolio. This one has *personality*.

Built as a full-stack app with a **React + Vite** frontend and a **Node.js/Express** backend powering a secure contact form with **OTP email verification** via MongoDB.

<br/>

## 🧩 Features

| | Feature | Description |
|:---:|---|---|
| 🎨 | **Neo-Brutalist UI** | Bold 3px borders, comic panels, thick box-shadows, warm palette (yellow, cyan, pink, mint) |
| ✍️ | **Typewriter Hero** | Animated typing effect with floating decorative elements and tilted photo card |
| 📂 | **Project Showcase** | Cards with color-coded headers, tech tags, GitHub + Live Demo links |
| 🛠️ | **Skills Grid** | Categorized chips across 6 domains — Programming, Frameworks, Web, Databases, ML, Tools |
| 📄 | **Resume Timeline** | Tabbed view (Experience / Education / Achievements) with vertical timeline & certificate links |
| 📧 | **OTP-Verified Contact** | Server-side EmailJS + MongoDB TTL for OTP codes and rate limiting |
| 🏆 | **Coding Profiles** | Direct buttons linking to Codeforces & LeetCode profiles |
| 🎭 | **Micro-Animations** | Scroll reveals, hover wiggles, floating elements, chip interactions |
| 📱 | **Fully Responsive** | Optimized for desktop, tablet, and mobile viewports |

<br/>

## 🛠️ Tech Stack

<table>
  <tr>
    <td><strong>Frontend</strong></td>
    <td>React 19 · React Router · Vite</td>
  </tr>
  <tr>
    <td><strong>Styling</strong></td>
    <td>Tailwind CSS 4 · Custom CSS Variables · tw-animate-css · Google Fonts (Bungee, Nunito, Caveat)</td>
  </tr>
  <tr>
    <td><strong>UI Components</strong></td>
    <td>shadcn/ui · Radix UI · Lucide Icons</td>
  </tr>
  <tr>
    <td><strong>Forms</strong></td>
    <td>React Hook Form · Zod validation</td>
  </tr>
  <tr>
    <td><strong>Backend / API</strong></td>
    <td>Node.js · Express (dev) · Vercel Serverless Functions (prod)</td>
  </tr>
  <tr>
    <td><strong>Database</strong></td>
    <td>MongoDB (TTL collections for OTP)</td>
  </tr>
  <tr>
    <td><strong>Email</strong></td>
    <td>EmailJS REST API (server-side)</td>
  </tr>
</table>

<br/>

## 🎨 Design System

The portfolio uses a custom **neo-brutalist** design language:

| Token | Color | Usage |
|:---:|---|---|
| `--primary` | 🟡 Yellow | Card headers, highlight chips, timeline dots |
| `--secondary` | 🔵 Cyan | Buttons, social links, accent borders |
| `--accent` | 🔴 Pink | Tags, skill categories, decorative elements |
| `#b6e4d8` | 🟢 Mint | Score badges, special highlights |
| `--background` | ⬜ Warm White | Page background with subtle texture |
| `--border` | ⬛ Black | Bold 3px borders on all panels |

**Typography:**
- **Bungee** — Bold, blocky display font for headings
- **Nunito** — Clean, rounded sans-serif for body text
- **Caveat** — Handwritten style for decorative scribbles

<br/>

## 📂 Project Structure

```
Shubham-Portfolio/
│
├── 📡 api/                       → Vercel serverless functions
│   ├── send-otp.js
│   ├── send-contact.js
│   ├── verify-otp.js
│   └── _utils/
│
├── 🖥️ server/                    → Local dev API (Express)
│   ├── config/                   → DB connection
│   ├── models/                   → Mongoose schemas
│   └── utils/                    → Email helpers
│
├── 📦 src/
│   ├── App.jsx                   → Root layout & section routing
│   ├── main.jsx                  → React entry point
│   ├── index.css                 → Tailwind config + theme tokens
│   │
│   ├── 🧱 components/
│   │   ├── hero.jsx              → Landing hero with typewriter
│   │   ├── about.jsx             → About me + stat cards
│   │   ├── projects.jsx          → Project showcase grid
│   │   ├── skills.jsx            → Skills categories
│   │   ├── resume.jsx            → Experience / Education / Achievements
│   │   ├── contact.jsx           → Contact form with OTP
│   │   ├── navigation.jsx        → Header + mobile menu
│   │   └── ui/                   → Reusable UI primitives (shadcn)
│   │
│   ├── hooks/                    → Custom React hooks
│   ├── lib/                      → Utility functions
│   └── services/                 → API client helpers
│
├── 🌐 public/                    → Static assets & images
├── package.json
└── vite.config.js
```

<br/>

## 🔮 Featured Projects

| # | Project | Description | Stack |
|:---:|---|---|---|
| 01 | [**InternNova**](https://intern-nova.in/) | AI-powered career platform for internships & jobs | React · Spring Boot · MongoDB · GenAI |
| 02 | [**Classync**](https://classync2025.vercel.app/) | Virtual classroom with AI doubt solver & quiz generator | Next.js · Firebase · MongoDB · Socket.io |
| 03 | [**AI Fitness Tracker**](https://github.com/SHUBHHAM-0712/AI-Fitness-Tracker-Microservice-App) | Microservice fitness app with AI insights | Spring Boot · React · RabbitMQ · Keycloak |
| 04 | [**Skillify**](https://skillify-app.onrender.com/) | Full-stack freelancer networking platform | MERN · JWT · Nodemailer |

<br/>

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ LTS
- **npm** (comes with Node.js)
- **MongoDB** connection string (for OTP feature)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/SHUBHHAM-0712/Shubham-Portfolio.git
cd Shubham-Portfolio
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment setup

Copy `.env.example` → `.env` and fill in your values:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# EmailJS — OTP Account
EMAILJS_OTP_SERVICE_ID=...
EMAILJS_OTP_TEMPLATE_ID=...
EMAILJS_OTP_PUBLIC_KEY=...
EMAILJS_OTP_PRIVATE_KEY=...

# EmailJS — Contact Account
EMAILJS_CONTACT_SERVICE_ID=...
EMAILJS_TEMPLATE_ID=...
EMAILJS_AUTOREPLY_TEMPLATE_ID=...
EMAILJS_CONTACT_PUBLIC_KEY=...
EMAILJS_CONTACT_PRIVATE_KEY=...
```

### 4️⃣ Start development server

```bash
npm run dev
```

> This starts **both** Vite + Express concurrently. Open **http://localhost:5173**

<br/>

## ☁️ Deployment (Vercel)

1. Push your repo to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add all `.env` variables to **Project Settings → Environment Variables**
4. Set `VITE_API_BASE_URL` to **empty** (frontend calls `/api` on same domain)
5. Enable **API access from non-browser environments** in both EmailJS accounts
6. Deploy 🚀

<br/>

## 📧 Contact Form — OTP Flow

```
  User enters email
        │
        ▼
  ┌─────────────┐     ┌──────────┐     ┌─────────┐
  │  Request OTP │────▶│  MongoDB │────▶│ EmailJS │
  │  /api/send   │     │  (store) │     │ (send)  │
  └─────────────┘     └──────────┘     └────┬────┘
                                            │
        ┌───────────────────────────────────┘
        ▼
  User receives & enters OTP
        │
        ▼
  ┌─────────────┐     ┌──────────────────────┐
  │ Verify OTP   │────▶│ Send contact email + │
  │ /api/verify  │     │ auto-reply to user   │
  └─────────────┘     └──────────────────────┘
```

**Setup:** Requires two EmailJS accounts — one for OTP, one for contact + auto-reply.

<br/>

## ✏️ Customization Guide

| What to change | Where to edit |
|---|---|
| Colors & Theme | `src/index.css` — `:root` CSS custom properties |
| Fonts | `src/index.css` — Google Fonts import + `@theme` block |
| About / Bio | `src/components/about.jsx` |
| Projects | `src/components/projects.jsx` — `projects` array |
| Skills | `src/components/skills.jsx` — `skillCategories` array |
| Experience & Certs | `src/components/resume.jsx` — `experienceItems` array |
| Education | `src/components/resume.jsx` — `educationItems` array |
| Achievements | `src/components/resume.jsx` — `achievementsItems` array |
| Social Links | `src/components/hero.jsx` — `socialLinks` array |
| Profile Photo | `public/shubham2.JPG` |

<br/>

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite + Express dev server (concurrently) |
| `npm run dev:client` | Start only the Vite frontend |
| `npm run dev:server` | Start only the Express API |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint checks |

<br/>

## 📜 License

This is a personal portfolio project. You're welcome to reference the structure, design patterns, and ideas — but please don't copy personal content (text, images, or identity) directly.

---

<div align="center">

**Built with ☕ and bold borders by [Shubham Ramoliya](https://github.com/SHUBHHAM-0712)**

[![GitHub](https://img.shields.io/badge/GitHub-SHUBHHAM--0712-181717?style=flat-square&logo=github)](https://github.com/SHUBHHAM-0712)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Shubham_Ramoliya-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/ramoliya-shubham-288707329)
[![Email](https://img.shields.io/badge/Email-ramoliya.shubham07@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:ramoliya.shubham07@gmail.com)

⭐ **Star this repo if you found it useful!**

</div>
