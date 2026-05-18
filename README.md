# THRIVE Website Redesign (Concept Demo)

This repository contains a concept redesign of **THRIVE Social Services Society**’s website.  
The demo illustrates a modern visual direction, improved information architecture, dual user journeys (clients vs. donors), and a modular design system that can be translated into a staff‑manageable CMS build.  

> **Note:** This is *not* the production site.  It’s a front‑end prototype meant to demonstrate layout, styling, interaction patterns, and accessibility considerations.  The full implementation (donation forms, CMS editing, RiseUp integration, blog/news system, analytics, etc.) would be completed as part of the production project.

---

## Features

- **Dual user pathways:** separate calls‑to‑action and navigation flows for people seeking support and those wishing to donate or learn more about campaigns.
- **Campaign readiness:** a landing page for the Foundry Westshore capital campaign with donation prompts and storytelling sections.
- **Program navigation:** dedicated pages for children, youth, family services, and adult services, organized by audience needs and referral types.
- **Trauma‑informed UX:** soft color palette, clear typography, accessible contrast, and low‑pressure interactions designed for youth and families in need.
- **Responsive design:** mobile‑first layouts, large touch targets, scroll‑reveal animations, and adaptive typography across breakpoints.
- **Built with modern tools:** React + TanStack Router for routing, Vite for fast development, Tailwind CSS for utility‑first styling, Framer Motion for animations, and TypeScript for type safety.
- **Future‑ready architecture:** the code demonstrates modular components and pages that can be ported into a CMS such as WordPress or another headless solution.

---

## 📁 Project Structure

```txt
thrive/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages deployment workflow
│
├── src/
│   ├── assets/                     # Site images and logo assets
│   │   ├── adults.jpg
│   │   ├── coast.jpg
│   │   ├── family.jpg
│   │   ├── foundry.jpg
│   │   ├── hero.jpg
│   │   ├── seedling.jpg
│   │   ├── thrive-logo.png
│   │   └── thrive-logo_onwhite.png
│   │
│   ├── components/
│   │   ├── Reveal.tsx              # Scroll reveal and card animation helpers
│   │   ├── SiteLayout.tsx          # Main site layout, navigation, footer
│   │   └── ui/                     # Reusable UI components
│   │
│   ├── hooks/
│   │   └── use-mobile.tsx          # Mobile viewport detection hook
│   │
│   ├── lib/
│   │   ├── async-local-storage-browser.ts
│   │   ├── error-capture.ts
│   │   ├── error-page.ts
│   │   └── utils.ts                # Shared helper utilities
│   │
│   ├── routes/                     # TanStack Router page routes
│   │   ├── __root.tsx              # Root layout route
│   │   ├── about.tsx               # About THRIVE page
│   │   ├── adult-services.tsx      # Adult services page
│   │   ├── contact.tsx             # Contact page and form
│   │   ├── donate.tsx              # Donation page
│   │   ├── family-services.tsx     # Children, youth & family services page
│   │   ├── foundry.tsx             # Foundry Westshore campaign page
│   │   ├── get-help.tsx            # Service access / support pathways
│   │   └── index.tsx               # Homepage
│   │
│   ├── main.tsx                    # React entry point
│   ├── router.tsx                  # Router setup
│   ├── routeTree.gen.ts            # Generated TanStack route tree
│   ├── server.ts
│   ├── start.ts
│   └── styles.css                  # Tailwind theme, global styles, animations
│
├── index.html                      # Base HTML document
├── package.json                    # Scripts and dependencies
├── package-lock.json
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite, Tailwind, alias, and GitHub Pages config
├── components.json                 # shadcn/ui component configuration
├── eslint.config.js
└── README.md

```
---

## Tech Stack

- **React** — component‑based UI library
- **Vite** — modern build tooling for rapid dev and optimized production builds
- **TanStack Router** — file‑based routing and navigation handling
- **Tailwind CSS** — utility‑first styling with custom theme tokens
- **Framer Motion** — declarative animations and scroll‑reveal effects
- **TypeScript** — static typing and IDE support

---

## 🌐 Deployment
Deployed using **GitHub Pages**.  
Access it here → https://kyla-zeit.github.io/thrive/
