# 🏙️ Pekanbaru City — Interactive Website

An award-winning, Awwwards-level interactive city website for **Pekanbaru**, the capital of Riau Province, Indonesia. Built as a cinematic digital experience — not a government portal — to showcase the city's landmarks, culture, nightlife, and smart city vision.

![Preview](attached_assets/)

---

## ✨ Features

- **Cinematic Loading Screen** — Letters of "PEKANBARU" appear one by one with a glowing line and subtitle fade-in
- **Parallax Hero Section** — Massive typography with 3D depth layers over a city aerial backdrop
- **Scroll Storytelling** — Every scroll reveals something new: city stats, landmarks, culture, nightlife, smart city
- **Animated Counters** — Statistics count up from 0 on scroll (GSAP ScrollTrigger)
- **Horizontal Scroll Landmarks** — 6 iconic locations with 3D card tilt and hover zoom
- **Culture Section** — Malay ornament patterns, mask/reveal animations for traditional arts
- **Neon Night Section** — Dark immersive section with city glow effects
- **Smart City Section** — Three.js particle background + glassmorphism UI panels
- **Interactive Explore Grid** — Category-based location cards with animated hover reveals
- **Cinematic Contact** — Magnetic CTA button, glassmorphism form, aerial night backdrop
- **Custom Cursor** — Circular cursor that scales on interactive elements
- **Scroll Progress Indicator** — Thin amber line at the top of the page
- **Smooth Scrolling** — Powered by Lenis for a cinematic feel throughout

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Animation | GSAP + ScrollTrigger |
| Smooth Scroll | Lenis (@studio-freight/lenis) |
| 3D | Three.js + React Three Fiber + Drei |
| UI Components | shadcn/ui + Radix UI |
| Icons | Lucide React |
| Routing | Wouter |
| Fonts | Bebas Neue, Inter (Google Fonts) |

---

## 📁 Project Structure

```
src/
├── sections/
│   ├── LoadingScreen.tsx    # Letter-by-letter intro animation
│   ├── Hero.tsx             # Parallax hero with massive typography
│   ├── CityStats.tsx        # Animated counters on scroll
│   ├── Landmarks.tsx        # Horizontal scroll landmark cards
│   ├── Culture.tsx          # Malay culture with reveal animations
│   ├── NightCity.tsx        # Neon-inspired nightlife section
│   ├── SmartCity.tsx        # Three.js particles + glassmorphism
│   ├── Explore.tsx          # Interactive location grid
│   └── Contact.tsx          # Cinematic CTA + contact form
├── components/
│   ├── CustomCursor.tsx     # Global custom cursor
│   ├── ScrollProgress.tsx   # Scroll progress bar
│   └── ui/                  # shadcn/ui components
├── hooks/
│   ├── useLenis.ts          # Smooth scroll hook
│   ├── use-mobile.tsx       # Mobile detection
│   └── use-toast.ts         # Toast notifications
├── App.tsx                  # Root component, section orchestration
├── index.css                # Global theme, custom properties, fonts
└── main.tsx                 # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [pnpm](https://pnpm.io/) v8 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/username/pekanbaru-city.git
cd pekanbaru-city

# Install dependencies
pnpm install

# Start development server
pnpm --filter @workspace/pekanbaru run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
pnpm --filter @workspace/pekanbaru run build
```

---

## 🎨 Design System

### Color Palette

| Name | Value | Usage |
|------|-------|-------|
| Background | `#0a0a0a` | Page background |
| Gold | `#D4A853` | Primary accent, headings |
| Cyan | `#00D4FF` | Smart city accents |
| White | `#F5F0E8` | Body text |
| Surface | `rgba(255,255,255,0.05)` | Glassmorphism cards |

### Typography

- **Display / Hero** — [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) — bold, cinematic, architectural
- **Body / UI** — [Inter](https://fonts.google.com/specimen/Inter) — clean, modern, readable

---

## 📚 Learning Resources

Belajar teknologi yang digunakan di project ini:

| Teknologi | Resource |
|-----------|----------|
| React | [react.dev](https://react.dev) |
| TypeScript | [typescriptlang.org/docs](https://www.typescriptlang.org/docs/) |
| Tailwind CSS | [tailwindcss.com/docs](https://tailwindcss.com/docs) |
| Framer Motion | [framer.com/motion](https://www.framer.com/motion/) |
| GSAP | [gsap.com/docs](https://gsap.com/docs/v3/) |
| Lenis | [github.com/darkroomengineering/lenis](https://github.com/darkroomengineering/lenis) |
| Three.js | [threejs.org/docs](https://threejs.org/docs/) |
| React Three Fiber | [docs.pmnd.rs/react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) |
| shadcn/ui | [ui.shadcn.com](https://ui.shadcn.com/) |

---

## 🏛️ Landmarks Featured

1. **Masjid Raya An-Nur** — Grand mosque, architectural icon of Pekanbaru
2. **Soeman HS Library** — Modern knowledge hub and cultural landmark
3. **Pasar Bawah** — Historic marketplace in the heart of the city
4. **Alam Mayang** — Nature recreation park with lake views
5. **Lembah Sari** — Green valley park and urban retreat
6. **Kaca Mayang** — Entertainment and recreation complex

---

## 🌿 Culture Showcased

- **Zapin Dance** — Traditional Malay performing art
- **Rumah Adat** — Traditional Malay architecture
- **Tenun Siak** — Traditional handwoven textile
- **Pacu Jalur** — Traditional boat racing festival

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ for Pekanbaru — <em>The Capital of Opportunity</em>
</p>
