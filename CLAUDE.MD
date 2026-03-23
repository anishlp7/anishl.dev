# anishl.dev — Personal Site & Indie Builder Portfolio

## Who I Am
- Name: Anish Lawrence
- Identity: Senior Frontend Developer & Open Source Builder
- Location: India
- Day job: Senior Frontend developer (web applications) — do NOT mention company names anywhere
- Side mission: Building AniUI — React Native component library & ecosystem
- GitHub: github.com/anishl
- Email: aniship7@gmail.com

## What This Site Is
This is my personal brand site at anishl.dev.
It is NOT a job-seeking portfolio. It is an indie builder identity site.
The primary goal is: showcase AniUI + establish me as a serious open source builder in the React Native ecosystem.
Secondary goal: show I'm a strong Senior Frontend developer without looking like I'm job hunting.

---

## Tech Stack
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS + shadcn/ui
- Animations: Framer Motion
- Deployment: Vercel
- Repo: public/open source on GitHub (MIT license)

---

## Design System

### Personality
Clean, minimal, confident. Not flashy. Developer-aesthetic.
Think: linear.app, vercel.com, rauchg.com — not a typical "hire me" portfolio.

### Colors
- Background: white (#ffffff) in light mode, near-black (#0a0a0a) in dark mode
- Text: #111111 light / #f0f0f0 dark
- Accent: #6366f1 (indigo) — used sparingly for AniUI branding only
- Borders: very subtle, 1px, low opacity
- No gradients. No glow effects. Flat and clean.

### Typography
- Font: Geist Sans (Vercel's font — fits the aesthetic perfectly)
- Headings: font-weight 500, NOT 700/800 (avoid the generic bold portfolio look)
- Body: 15-16px, line-height 1.7, color secondary
- No ALL CAPS sections except very small labels

### Components
- Buttons: outlined style, subtle hover — not heavy solid blacks everywhere
- Cards: 1px border, border-radius 12px, white bg, no heavy shadows
- Badges/pills: small, minimal, font-size 12px
- Skill tags: simple pills — NO percentage bars

### What NOT to do
- No hero animations that delay content
- No typing/typewriter effects
- No percentage skill bars (they look made up)
- No "Available for Hire" badge
- No "Let's build something amazing together" generic copy
- No emoji in section headings
- No dark dramatic hero backgrounds
- No confetti or particle effects

---

## Site Structure

### Pages / Sections (single page with smooth scroll)

1. **Nav**
2. **Hero**
3. **AniUI Featured** (most important section after hero)
4. **Projects**
5. **About**
6. **Skills**
7. **Contact**

No "Experience" section. No resume download.
No "Work Experience" timeline showing employer projects.

---

## Section Specs

### 1. Nav
```
Left:  [AL logo mark]  Anish Lawrence
                       Senior Frontend Developer & Open Source Builder

Right: Home  About  Projects  Skills  Roadmap  [GitHub icon]  [Twitter/X icon]
```
- No "Contact" button in nav — too job-seeker
- Add GitHub + Twitter/X icon links instead
- Sticky, minimal, 1px bottom border on scroll only
- Logo tagline: "Senior Frontend Developer & Open Source Builder" — exactly this, nothing else

---

### 2. Hero
```
[small badge] → Building AniUI — React Native UI Library  (links to AniUI docs)

Senior Frontend Developer
& Open Source
Builder

Building tools for the React Native ecosystem.
Creator of AniUI — components, blocks, and studio
for mobile developers. 7+ years in React & TypeScript.

[View AniUI →]   [GitHub ↗]

STACK   React   TypeScript   React Native   Expo   NativeWind   Next.js

                                        [3D avatar — keep from current site]
```

**Rules:**
- Badge links directly to AniUI repo/docs
- "View AniUI →" is the PRIMARY CTA — not "Get in Touch"
- Keep the 3D avatar — it's unique and memorable
- Stack pills: add React Native, Expo, NativeWind — remove shadcn/ui from hero
- No "View Resume" button

---

### 3. AniUI Featured Section
This is the most important section. Treat it like a product card, not a project card.

```
┌─────────────────────────────────────────────────────────┐
│  [Ani logo]  AniUI                        [Open Source] │
│              React Native UI Library & Ecosystem         │
│                                                         │
│  The missing design system for React Native.            │
│  Components, blocks, charts, Figma kit, and an          │
│  AI-powered studio — everything a mobile developer      │
│  needs in one ecosystem.                                │
│                                                         │
│  [50+ Components]  [★ GitHub Stars]  [Expo]  [npm]     │
│                                                         │
│  [View Docs →]   [GitHub ↗]                            │
└─────────────────────────────────────────────────────────┘
```

**Rules:**
- GitHub star count pulled live from GitHub API
- npm download count pulled live from npm API
- Show current phase: "Phase 1 — Core Library" with a subtle progress indicator
- Border: 1px indigo (#6366f1) at low opacity — subtle accent to make it stand out
- This section should feel like a mini product landing, not just a project card

---

### 4. Projects Section
Title: "Projects"
Subtitle: "Things I've built"

**Show these (in order):**
1. AniUI — already has its own featured section above, show as a card here too with "Featured" badge
2. [Your other RN side projects]
3. Clothing Store (e-commerce — good technical project)
4. Any AI/ML projects

**Remove:**
- Portfolio V2 and V3 — showing old portfolios as featured work looks weak
- Any project that exposes employer work

**Card format:**
```
[screenshot or mockup]
[category badge: REACT NATIVE / WEB / AI-ML]
Project Name
One line description
[tag] [tag] [tag]
View Project →
```

---

### 5. About Section
Short. 3 paragraphs max. No bullet point lists.

**Keep:**
- Self-taught engineer story
- Master's in Computer Science
- Passion for React Native ecosystem
- Building in public / open source mission

**Remove:**
- Any mention of Workato, DeepConverse, or any employer name
- "Enterprise Experience" highlight
- Stats: "4+ companies worked" — remove this specific stat

**Keep these stats:**
- 7+ Years Experience
- 50+ Components (AniUI)
- Open Source

**Suggested copy (edit as needed):**
```
Hi, I'm Anish Lawrence — a self-taught Senior Frontend developer
with a Master's in Computer Science and 7+ years building
web and mobile applications.

I work on React and TypeScript professionally, but my real
passion is the React Native ecosystem. I'm building AniUI —
an open source component library, design system, and
AI-powered studio for mobile developers.

I believe the React Native ecosystem deserves the same quality
of tooling that the web has. That's what I'm building.
```

---

### 6. Skills Section
Title: "Skills"
NO percentage bars. NO proficiency numbers.

**Format: grouped pills**
```
Senior Frontend         React  TypeScript  JavaScript  Next.js  HTML  CSS  Tailwind
Mobile           React Native  Expo  NativeWind  EAS
UI Libraries     shadcn/ui  Ant Design  Radix UI
Tools            Git  Figma  VS Code  Cursor
Currently Learning   Swift  Kotlin
```

Keep the filter tabs (All / Senior Frontend / Mobile / Tools) — that interaction is good.
Just remove the % bars and cards. Simple pills per category.

---

### 7. Roadmap Section (keep this — it's unique)
Title: "What I'm building"
Show the AniUI roadmap phases — use the roadmap we already built.

```
Phase 1  Core Library          [In Progress]
Phase 2  Blocks & Charts       [Up Next]
Phase 3  Figma UI Kit          [Planned]
Phase 4  Premium Blocks        [Planned]
Phase 5  Figma Plugin          [Planned]
Phase 6  AniUI Studio          [The Dream]
```

Clicking each phase expands it with details.
This section alone makes you stand out from every other developer portfolio.

---

### 8. Contact Section
Keep it minimal.

```
Get in touch

anishlp7@gmail.com
[GitHub]  [Twitter/X]  [LinkedIn]
```

**Remove:**
- WhatsApp number (don't put personal phone on public site)
- Facebook
- "Ready to start a project?" freelance CTA
- "I'm available for freelance" copy

**Replace footer CTA with:**
```
Interested in AniUI? Star it on GitHub →
```

---

## What to Remove from Current Site Entirely
- [ ] "Available for Hire" badge
- [ ] "View Resume" button
- [ ] Work Experience / Employment timeline section
- [ ] All employer project details (Workato Go, Chrome Extension, AgentX, Org Chart Builder)
- [ ] Company names (Workato Inc., DeepConverse Inc.)
- [ ] "4+ Companies Worked" stat
- [ ] Skill percentage bars
- [ ] Portfolio V2 / V3 as featured projects
- [ ] WhatsApp number from public contact
- [ ] Facebook social link
- [ ] "Available for freelance work" copy anywhere
- [ ] "Have a Project in Mind?" section

---

## What to Add
- [ ] AniUI featured product section (new — most important)
- [ ] Live GitHub star count via API
- [ ] Live npm download count via API
- [ ] React Native + Expo + NativeWind in skills
- [ ] Roadmap section showing AniUI phases
- [ ] Twitter/X link (build in public presence)
- [ ] Open Graph meta tags with AniUI branding
- [ ] "Built by Anish" footer linking back here from AniUI docs

---

## SEO & Meta
```
title: "Anish Lawrence — Senior Frontend Developer & Open Source Builder"
description: "Building AniUI — the React Native component library and ecosystem. Senior Frontend developer, open source builder, based in India."
og:image: custom image showing AniUI + your avatar
twitter:card: summary_large_image
```

---

## Tone & Copy Rules
- Never say "available for hire" or "available for freelance"
- Never mention employer names
- Always lead with AniUI when describing yourself
- Use "builder" not "developer" in identity statements
- Short sentences. No fluff. Developer-to-developer tone.
- Think: if Guillermo Rauch or Evan Bacon landed on this page, would they think "this person builds things" or "this person wants a job"?

---

## File Structure
```
anishl.dev/
├── app/
│   ├── page.tsx          # single page, all sections
│   ├── layout.tsx        # meta, fonts, og tags
│   └── globals.css
├── components/
│   ├── nav.tsx
│   ├── hero.tsx
│   ├── aniui-featured.tsx   # NEW — most important
│   ├── projects.tsx
│   ├── about.tsx
│   ├── skills.tsx
│   ├── roadmap.tsx          # NEW
│   └── contact.tsx
├── lib/
│   └── github.ts         # fetch star count from GitHub API
├── public/
│   ├── avatar-3d.png     # keep your 3D avatar
│   └── og-image.png
├── CLAUDE.md             # this file
└── README.md
```

---

## GitHub API Integration
Fetch AniUI star count at build time (ISR, revalidate every hour):
```typescript
// lib/github.ts
export async function getAniUIStars() {
  const res = await fetch('https://api.github.com/repos/anishlp7/aniui', {
    next: { revalidate: 3600 }
  })
  const data = await res.json()
  return data.stargazers_count ?? 0
}
```

---

## npm API Integration
```typescript
// lib/npm.ts
export async function getAniUIDownloads() {
  const res = await fetch('https://api.npmjs.org/downloads/point/last-month/aniui', {
    next: { revalidate: 3600 }
  })
  const data = await res.json()
  return data.downloads ?? 0
}
```

---

## Important Notes for Claude
- This site's purpose is indie builder identity, NOT job seeking
- AniUI is the hero of this site, not Anish's employment history
- Every section should reinforce: "this person builds things in the RN ecosystem"
- When suggesting copy, keep it short, direct, and developer-toned
- When suggesting components, match the clean minimal aesthetic — no heavy UI
- The 3D avatar is a key brand element — always keep it in the hero
- Dark mode must work perfectly — this audience (developers) uses dark mode