# Project Analysis: Portfolio

> Generated on 2026-02-08

## Overview

A personal portfolio website for Zac Holly, a Software Engineer, built with Nuxt 4 and deployed on Vercel. The site showcases technical skills and projects across work, personal, and academic categories. It features a contact form with reCAPTCHA v3 validation and server-side email delivery, responsive layouts with Tailwind CSS 4, interactive mouse-tracking gradient effects, and an animated Vanta.js wave background on desktop.

**Version:** 0.2.0
**License:** MIT
**Author:** Zac Holly
**Live URL:** https://zacholly.dev

## Technologies

| Category | Technology | Version |
|---|---|---|
| Language | JavaScript / TypeScript | ES2020+ / ^22.13 (types) |
| Framework | Nuxt | ^4.3.1 |
| UI Framework | Vue 3 (Composition API) | (via Nuxt) |
| Component Library | Nuxt UI | ^4.4.0 |
| CSS Framework | Tailwind CSS | 4.x (via `@import "tailwindcss"`) |
| Server Engine | Nitro | (via Nuxt) |
| Runtime | Node.js | (via Nuxt) |
| Deployment | Vercel | Analytics ^1.6.1 + Speed Insights ^1.3.1 |
| Email | Nodemailer | via `nuxt-nodemailer` ^1.1.4 |
| Spam Protection | Google reCAPTCHA v3 | via `vue-recaptcha-v3` ^2.0.1 |
| Background Animation | Vanta.js (Waves) + Three.js | r134 |
| Utilities | VueUse | ^14.2.0 |
| Device Detection | @nuxtjs/device | ^4.0.0 |
| Icons | Iconify (MDI, Simple Icons, Hugeicons) | various |
| Font | Google Fonts (Poppins) | external |

## Project Structure

```
portfolio/
├── app/                        # Nuxt app directory (Nuxt 4 convention)
│   ├── app.vue                 # Root component (SEO, Vanta.js init, layout wrapper)
│   ├── app.config.ts           # Nuxt UI theme customization (sharp corners)
│   ├── error.vue               # Global error page (404 + generic)
│   ├── assets/
│   │   └── css/
│   │       └── main.css        # Tailwind 4 theme (custom colors, fonts, animations)
│   ├── components/             # 14 Vue SFCs
│   │   ├── BackgroundGradientHover.vue  # Mouse-tracking radial gradient background
│   │   ├── BorderGradientHover.vue      # Mouse-tracking radial gradient border
│   │   ├── MenuPoweredBy.vue            # "Powered by Nuxt" branding
│   │   ├── MenuProfile.vue             # Profile image with rotating border + name/badge
│   │   ├── MenuSocials.vue             # LinkedIn & GitHub links
│   │   ├── NavigationButton.vue        # Animated underline nav link
│   │   ├── ProjectCard.vue             # Project display with gradient hover effects
│   │   ├── ProjectGrid.vue             # Categorized project grid layout
│   │   ├── SectionTitle.vue            # Page section heading (h2)
│   │   ├── SkillCard.vue               # Skill display with icon + hover gradient
│   │   ├── SkillGrid.vue               # Responsive skill grid layout
│   │   ├── SubsectionTitle.vue         # Subsection heading (h3)
│   │   ├── TheMenu.vue                 # Sidebar menu (profile, nav, socials)
│   │   └── TheNavigation.vue           # Navigation bar with gradient tints
│   ├── composables/            # (empty — auto-imports used instead)
│   ├── layouts/
│   │   └── default.vue         # Main layout (sidebar + content card)
│   ├── pages/                  # File-based routing (4 pages)
│   │   ├── index.vue           # About Me — main skills + highlighted projects
│   │   ├── skills.vue          # Skills — categorized skill grid
│   │   ├── projects.vue        # Projects — filterable project grid
│   │   └── contact.vue         # Contact — form with reCAPTCHA + Google Maps
│   ├── plugins/
│   │   ├── analytics.client.ts # Vercel Analytics (client-only)
│   │   └── google-recaptcha.ts # reCAPTCHA v3 plugin registration
│   └── utils/
│       └── constants.js        # Navigation, skills, projects, and highlighted data
├── server/                     # Nitro server directory
│   ├── api/
│   │   └── send-mail.js        # POST /api/send-mail — validates reCAPTCHA, sends email
│   ├── utils/
│   │   └── validate-recaptcha.js  # reCAPTCHA token validation helper
│   └── tsconfig.json           # Server-specific TS config
├── public/                     # Static assets
│   ├── favicon.ico
│   ├── images/
│   │   └── profile.png         # Profile photo
│   └── js/
│       ├── three.r134.min.js   # Three.js (for Vanta.js)
│       └── vanta.waves.min.js  # Vanta.js Waves effect
├── nuxt.config.ts              # Nuxt configuration
├── eslint.config.mjs           # ESLint flat config
├── tsconfig.json               # TypeScript config (extends Nuxt)
├── package.json
├── package-lock.json
├── .env.example                # Required environment variables
├── .gitignore
├── LICENSE                     # MIT
└── README.md
```

## Architecture

**Pattern:** Component-based SPA with server-side rendering (SSR) via Nuxt 4's hybrid rendering model.

**Key Architectural Decisions:**

- **Nuxt 4 app directory** — all client code lives under `app/`, following the Nuxt 4 convention (migrated from Nuxt 3's root-level structure)
- **File-based routing** via `app/pages/` with fade out-in page transitions
- **Single layout** (`default.vue`) providing responsive sidebar + content card structure
- **Data-driven content** — all skills, projects, and navigation defined in `app/utils/constants.js` and auto-imported (no CMS or external data source)
- **Server API routes** via Nitro for backend functionality (email + reCAPTCHA validation)
- **Component composition** — layered gradient hover effects (BackgroundGradientHover + BorderGradientHover) composed into cards
- **Device-aware rendering** — Vanta.js background and mouse-tracking effects disabled on mobile/tablet via `@nuxtjs/device`
- **Dark-first design** — color mode defaults to dark, custom darkred palette with waveblack background

**State Management:** Local component state only (`ref`, `reactive`, `computed`). No global store (Pinia/Vuex). Content lives in constants.

**Design System:** Sharp-cornered aesthetic (`!rounded-none` on all Nuxt UI components via `app.config.ts`), darkred accent palette with 7 levels (#991b1b → #3D0D0D), Poppins font.

## Key Components

### Entry Points
- **`app/app.vue`** — Root component. Initializes Vanta.js wave background on desktop, sets global SEO meta (Open Graph), wraps content in `<UApp>` + `<NuxtLayout>`. Includes screen-reader-only `<h1>` for accessibility.
- **`app/layouts/default.vue`** — Default layout. Side-by-side sidebar + content card on desktop, stacked on mobile. Uses `useElementSize` for dynamic card height calculation. Integrates Vercel Speed Insights.

### Core UI Components
| Component | Responsibility |
|---|---|
| `TheMenu` | Sticky sidebar (desktop) / header (mobile). Composes MenuProfile, MenuSocials, TheNavigation, MenuPoweredBy. |
| `TheNavigation` | Navigation links with cycling darkred tints and decorative clip-path shapes. Fixed bottom bar on mobile. |
| `NavigationButton` | Animated underline link with active route detection. |
| `ProjectCard` | Project display with dual-layer gradient hover effects (border + background) via mouse tracking. |
| `SkillCard` | Skill icon card with gradient hover overlay and Iconify icons. |
| `BackgroundGradientHover` | Radial gradient that follows mouse cursor (background effect). Desktop-only. |
| `BorderGradientHover` | Radial gradient that follows mouse cursor (border glow effect). Desktop-only. |
| `SectionTitle` / `SubsectionTitle` | Styled heading components with darkred accent bars/gradients. |

### Data Layer
- **`app/utils/constants.js`** — Single source of truth for all displayable content: `NAVIGATION` (4 items), `SKILL_CATEGORIES` (4 categories, 24 skills), `PROJECT_CATEGORIES` (3 categories, 18 projects), `MAIN_SKILLS` (6 featured), `HIGHLIGHTED_PROJECTS` (4 featured).

### Server Components
| File | Responsibility |
|---|---|
| `server/api/send-mail.js` | POST endpoint — reads body, validates reCAPTCHA token, sends email via `useNodeMailer()` |
| `server/utils/validate-recaptcha.js` | Validates reCAPTCHA v3 token against Google API, requires score >= 0.5 |

## API / Routes

### Pages (File-Based Routing)
| Route | Page | Description |
|---|---|---|
| `/` | `index.vue` | About Me — bio, main skills preview, highlighted projects with "All Skills" / "All Projects" links |
| `/skills` | `skills.vue` | Full skills grid organized by category (Frontend, Backend, Databases, IDEs & Tools) |
| `/projects` | `projects.vue` | All projects with multi-select skill-based filtering via `USelectMenu` |
| `/contact` | `contact.vue` | Contact form (name, email, subject, message) with embedded Google Maps, reCAPTCHA v3, toast notifications |

### Server API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/send-mail` | Accepts `{ from, subject, text, token }`. Validates reCAPTCHA, sends email via SMTP, returns 200/400/500. |

## Dependencies

### Production
| Package | Version | Purpose |
|---|---|---|
| `@nuxt/ui` | ^4.4.0 | UI component library (Card, Button, Badge, Form, Input, Select, Textarea, Toast, Icon) |
| `@vueuse/core` | ^14.2.0 | Vue composables (breakpointsTailwind, useBreakpoints, useElementSize, useMouseInElement) |
| `@vercel/analytics` | ^1.6.1 | Vercel web analytics |
| `@vercel/speed-insights` | ^1.3.1 | Vercel performance monitoring |
| `vue-recaptcha-v3` | ^2.0.1 | Google reCAPTCHA v3 integration |
| `@iconify-json/hugeicons` | ^1.2.23 | Hugeicons icon set (Office, Java icons) |
| `@iconify-json/mdi` | ^1.2.3 | Material Design Icons (navigation, social, form icons) |
| `@iconify-json/simple-icons` | ^1.2.70 | Simple Icons (technology/brand logos for skills) |

### Development
| Package | Version | Purpose |
|---|---|---|
| `nuxt` | ^4.3.1 | Core framework |
| `@nuxt/eslint` | ^1.14.0 | ESLint integration with Nuxt-specific rules + stylistic |
| `eslint` | ^9.20.0 | Code linting (flat config) |
| `nuxt-nodemailer` | ^1.1.4 | Nodemailer integration for Nuxt server routes |
| `@nuxtjs/device` | ^4.0.0 | Device detection (mobile/tablet/desktop) |
| `@types/node` | ^22.13.0 | Node.js type definitions |

## Build & Deployment

### Scripts
| Command | Description |
|---|---|
| `npm run dev` | Start dev server (localhost:3030) |
| `npm run build` | Production build via Nuxt |
| `npm run generate` | Static site generation |
| `npm run preview` | Preview production build |
| `npm run postinstall` | `nuxt prepare` (auto-runs after install) |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |

### Deployment
- **Platform:** Vercel (inferred from `@vercel/analytics` and `@vercel/speed-insights`)
- **Domain:** zacholly.dev
- **No CI/CD config files** — uses Vercel's GitHub integration for automatic deployments
- **No Docker configuration**
- **Package manager:** npm (package-lock.json present)

## Environment & Configuration

### Configuration Files
| File | Purpose |
|---|---|
| `nuxt.config.ts` | Modules, auto-imports, app head, CSS, color mode, runtime config, dev server, ESLint stylistic, nodemailer SMTP |
| `app/app.config.ts` | Nuxt UI theme overrides — `!rounded-none` on Card, Badge, Button, Select, SelectMenu, Input, Textarea |
| `eslint.config.mjs` | ESLint flat config — tabs, semicolons, Vue template rules |
| `tsconfig.json` | Extends Nuxt-generated TypeScript config |
| `server/tsconfig.json` | Extends Nuxt-generated server TypeScript config |
| `.env.example` | Template for required environment variables |
| `.gitignore` | Excludes build outputs, node_modules, env files, IDE files |

### Required Environment Variables
| Variable | Context | Purpose |
|---|---|---|
| `NUXT_MAIL_SMTP` | Server | SMTP server hostname |
| `NUXT_MAIL_PORT` | Server | SMTP server port |
| `NUXT_MAIL_USERNAME` | Server | SMTP auth username (also used as email recipient) |
| `NUXT_MAIL_PASSWORD` | Server | SMTP auth password |
| `NUXT_RECAPTCHA_SITE_KEY` | Public | reCAPTCHA v3 site key (exposed to client via runtime config) |
| `NUXT_RECAPTCHA_SECRET_KEY` | Server | reCAPTCHA v3 secret key (server-only) |

### Key Configuration Choices
- **Color mode:** Dark preferred, no class suffix
- **Dev server:** localhost:3030
- **Font:** Poppins (Google Fonts, loaded via `<link>`)
- **Page transitions:** Fade out-in (0.15s)
- **Custom color palette:** `darkred` (#991b1b → #3D0D0D), `waveblack` (#121212)
- **VueUse auto-imports:** `breakpointsTailwind`, `useBreakpoints`, `useElementSize`, `useMouseInElement`

## Testing

No test framework, test files, or testing configuration were found in the project.

## Code Quality

### ESLint
- **Config:** Flat config (`eslint.config.mjs`) extending Nuxt's built-in ESLint preset via `withNuxt()`
- **Stylistic settings** (via `nuxt.config.ts`): Tabs, semicolons
- **Custom rules:**
  - `vue/max-attributes-per-line` — 2 single-line, 1 multi-line
  - `object-curly-spacing` — always
  - `vue/no-v-html` — disabled (v-html used in ProjectCard for HTML project summaries)
  - `@stylistic/indent` — tab
  - `@stylistic/no-tabs` — off
  - `@stylistic/semi` — always
  - `vue/html-indent` — tab

### TypeScript
- Configured via `tsconfig.json` extending Nuxt-generated config
- Server has its own `tsconfig.json` extending Nuxt's server config
- Plugins written in TypeScript (`.ts`); pages, components, server routes, and utils use JavaScript (`.js` / `.vue`)

### Formatter
No dedicated formatter (Prettier, etc.) — formatting enforced via ESLint stylistic rules.

## TODOs & Known Issues

No `TODO`, `FIXME`, `HACK`, or `XXX` comments were found in the codebase.
