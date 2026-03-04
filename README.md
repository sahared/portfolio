# Diksha Sahare | Portfolio

A modern, responsive personal portfolio website showcasing professional experience, projects, and expertise. Built with React, TypeScript, and Vite.

---

## Overview

This portfolio highlights full-stack development experience across cloud-native systems, AI-driven applications, and enterprise platforms. It includes a dynamic hero section, project showcases, academic background, certifications, and a working contact form.

---

## Features

| Feature | Description |
|--------|-------------|
| **Hero Section** | Animated introduction with tech stack and professional summary |
| **About Page** | Academic background, certifications, experience, research, and volunteer work |
| **Projects** | Detailed project previews with images, tech stack, and GitHub links |
| **Contact Form** | Web3Forms integration for reliable message delivery |
| **Dark Mode** | System-aware theme toggle with persisted preference |
| **Responsive Design** | Mobile-first layout, works across all screen sizes |
| **SEO Ready** | Meta tags, sitemap, and Open Graph configured |
| **Performance** | Lazy-loaded routes, optimized images, production build |

---

## Tech Stack

**Core**
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 7](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

**UI & Animation**
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

**Routing**
- [React Router v7](https://reactrouter.com/)

---

## Project Structure

```
├── public/
│   ├── images/           # Profile photos, logos, project thumbnails
│   ├── projects/         # Project-specific images
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── sections/     # Page sections (Hero, Contact, About, etc.)
│   │   └── ui/           # Navigation, Footer, ErrorBoundary
│   ├── data/             # Projects data
│   ├── lib/              # Supabase client (legacy)
│   ├── pages/            # Route-level pages
│   └── types/            # TypeScript interfaces
├── scripts/
│   └── generate-sitemap.js
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Prerequisites

- **Node.js** ≥ 18.0.0
- **npm** ≥ 8.0.0

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sahared/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your [Web3Forms](https://web3forms.com/) access key:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_api_key_here
```

> **Note:** The contact form requires a valid Web3Forms API key. Sign up at [web3forms.com](https://web3forms.com/) to get a free key.

### 4. Development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Production build

```bash
npm run build
```

Output is written to the `dist/` directory. Preview the build locally:

```bash
npm run preview
```

---

## Deployment

### Netlify

1. Connect your GitHub repository to [Netlify](https://www.netlify.com/).
2. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Environment variables (Build & deploy → Environment):
   - `VITE_WEB3FORMS_ACCESS_KEY` = your Web3Forms key

### Vercel

1. Import the repository in [Vercel](https://vercel.com/).
2. Add environment variable: `VITE_WEB3FORMS_ACCESS_KEY`
3. Deploy (Vercel detects Vite automatically).

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build with TypeScript check and sitemap generation |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## License

This project is private and not licensed for redistribution.

---

## Author

**Diksha Sahare**  
Full-Stack Engineer | Cloud & AI-driven solutions

- **Email:** [sahare.d@northeastern.edu](mailto:sahare.d@northeastern.edu)
- **LinkedIn:** [linkedin.com/in/dikshasahare](https://www.linkedin.com/in/dikshasahare/)
- **GitHub:** [github.com/sahared](https://github.com/sahared)

---
