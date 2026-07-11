"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Mail,
  Globe,
  Smartphone,
  Layers,
  Hammer,
  Blocks,
  Zap,
  ShieldCheck,
  Clock,
  Check,
  Github,
  Linkedin,
  Star,
  ExternalLink,
  ChevronDown,
  PhoneCall,
  ClipboardList,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react"

const CALENDLY_URL = "https://calendly.com/anishlp7/30min"
const EMAIL = "hi@anishl.dev"

const ease = [0.165, 0.84, 0.44, 1] as const

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
}

// ── Section 2 data ───────────────────────────────────────────
const buildCards = [
  {
    icon: Globe,
    title: "Web Applications",
    points: [
      "React, Next.js, TypeScript",
      "Scalable frontend architecture",
      "Performance optimization",
      "shadcn/ui design systems",
      "Dashboards & SaaS applications",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    points: [
      "React Native + Expo",
      "AniUI component system (I built it)",
      "iOS + Android",
      "App Store + Play Store deployment",
      "NativeWind + Uniwind",
    ],
  },
  {
    icon: Layers,
    title: "Full Product — Web + Mobile",
    points: [
      "One developer for both platforms",
      "Consistent design system across web & mobile",
      "Faster delivery than hiring two developers",
      "AniUI (mobile) + shadcn/ui (web)",
    ],
    highlight: true,
  },
]

// ── Section 3 data ───────────────────────────────────────────
const whyPoints = [
  {
    icon: Hammer,
    title: "I built the tools I work with",
    body: "Creator of AniUI — a 93+ component React Native library. I know RN deeper than most developers because I built the design system for it.",
  },
  {
    icon: Blocks,
    title: "Web + Mobile in one",
    body: "8 years React + TypeScript on web. React Native for mobile. One developer, one vision, one consistent product.",
  },
  {
    icon: Zap,
    title: "I ship fast",
    body: "Using AniUI for mobile and shadcn/ui for web means I'm not building from scratch. Auth flow in 2 days. Full app UI in 1–2 weeks.",
  },
  {
    icon: ShieldCheck,
    title: "Senior level quality",
    body: "Clean code, strict TypeScript, tested, documented. Not a junior pretending to be senior — 8 years of real production experience.",
  },
]

// ── Process data ─────────────────────────────────────────────
const processSteps = [
  {
    icon: PhoneCall,
    title: "Discovery call",
    duration: "~30 min",
    body: "We talk through what you're building, the scope, timeline, and goals. No pressure — I'll tell you honestly if I'm the right fit.",
  },
  {
    icon: ClipboardList,
    title: "Proposal & plan",
    duration: "1–2 days",
    body: "You get a clear proposal: fixed scope, milestones, timeline, and a quote. No surprises once we start.",
  },
  {
    icon: PenTool,
    title: "Design & setup",
    duration: "Week 1",
    body: "I set up the architecture and design foundation, working from your Figma or references. I default to AniUI for mobile and shadcn/ui for web — I built AniUI, so I know it deeply — but I'm comfortable adapting to whatever your project already uses: Gluestack, React Native Reusables, Ant Design, or your existing stack.",
  },
  {
    icon: Code2,
    title: "Build — in slices",
    duration: "Ongoing",
    body: "I ship in working increments with regular check-ins, so you see progress every week and issues get caught early — never a big-bang reveal at the end.",
  },
  {
    icon: Rocket,
    title: "Launch & handover",
    duration: "Final week",
    body: "App Store / Play Store submission or production deploy, clean documented code, and a proper handover. Optional retainer if you want me to keep shipping.",
  },
]

// ── Section 4 data ───────────────────────────────────────────
const stackGroups = [
  {
    category: "Frontend Web",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Zustand", "React Query"],
  },
  {
    category: "Mobile",
    skills: ["React Native", "Expo", "AniUI", "NativeWind", "Uniwind", "EAS", "Expo Router"],
  },
  {
    category: "Backend (basic)",
    skills: ["Supabase", "Firebase", "REST APIs", "Node.js basics"],
  },
  {
    category: "Tools",
    skills: ["Git", "Figma", "VS Code", "Cursor", "Claude Code"],
  },
]

// ── Section 5 data ───────────────────────────────────────────
const services = [
  {
    name: "Hourly",
    best: "Ongoing work, bug fixes, feature additions",
    rate: "Custom hourly rate",
    note: "Billed weekly, no minimum commitment",
  },
  {
    name: "Project Based",
    best: "New apps, MVPs, complete features",
    rate: "Fixed project quote",
    note: "Scope and timeline agreed upfront",
    highlight: true,
  },
  {
    name: "Retainer",
    best: "Startups needing a dedicated senior developer",
    rate: "Monthly retainer",
    note: "Dedicated hours, priority response, ongoing development",
  },
]

// ── Section 8 data ───────────────────────────────────────────
const faqs = [
  {
    q: "Do you work with international clients?",
    a: "Yes — I work with clients globally. I'm based in India (IST) and comfortable working async with teams across timezones.",
  },
  {
    q: "What's your typical project timeline?",
    a: "It depends on scope. A simple feature takes days. An MVP takes 2–6 weeks. We nail this down during the discovery call.",
  },
  {
    q: "Do you work on existing codebases?",
    a: "Yes — both greenfield projects and existing codebases. I'm comfortable jumping into legacy code.",
  },
  {
    q: "Can you handle both design and development?",
    a: "I'm a developer first. I work best when design direction is provided (Figma files, references). I can make UI decisions, but I'm not a designer.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, happy to sign NDAs for client projects.",
  },
  {
    q: "What if I'm not happy with the work?",
    a: "I work iteratively with regular check-ins. Issues are caught early, not at delivery.",
  },
]

interface HireProps {
  stars: number
}

export function Hire({ stars }: HireProps) {
  return (
    <main className="overflow-x-hidden pt-24">
      <HireHero />
      <WhatIBuild />
      <WhyMe />
      <Process />
      <TechStack />
      <Services />
      <FeaturedProjects stars={stars} />
      <Availability />
      <Faq />
      <FinalCta />
    </main>
  )
}

// ── 1. Hero ──────────────────────────────────────────────────
function HireHero() {
  return (
    <section className="section-container !py-20 sm:!py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-[0.8rem] font-semibold text-emerald-600 dark:text-emerald-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Currently available for freelance work
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mx-auto mt-8 max-w-2xl text-[2.4rem] font-black leading-[1.05] tracking-tight sm:text-[3.4rem]"
        >
          I build complete products —{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--color-foreground) 0%, var(--color-muted) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            web and mobile
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mx-auto mt-7 max-w-xl text-[1.1rem] leading-[1.8] text-muted"
        >
          8 years React + TypeScript. Creator of{" "}
          <strong className="font-bold text-foreground">AniUI</strong> — React
          Native&apos;s most complete component library. Most clients need both web
          and mobile. I&apos;m one of the few developers who does both exceptionally
          well.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-[10px] bg-foreground px-9 py-4 text-base font-semibold text-background shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
            style={{ transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)" }}
          >
            Book a Call
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2.5 rounded-[10px] border-2 border-foreground bg-transparent px-9 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:-translate-y-[3px] hover:bg-foreground/[0.03]"
            style={{ transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)" }}
          >
            <Mail className="h-5 w-5" />
            Send an Email
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-[0.85rem] font-medium text-muted-light"
        >
          Trusted by companies across India and globally
        </motion.p>
      </div>
    </section>
  )
}

// ── 2. What I Build ──────────────────────────────────────────
function WhatIBuild() {
  return (
    <section className="section-container !pt-0">
      <motion.div {...fadeUp} transition={{ duration: 0.9, ease }}>
        <h2 className="section-title">What I can build for you</h2>
        <div className="section-title-bar" />
      </motion.div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {buildCards.map((card, i) => (
          <motion.div
            key={card.title}
            {...fadeUp}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            className={`premium-card flex flex-col p-8 ${
              card.highlight ? "!border-accent/30" : ""
            }`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-[14px] ${
                card.highlight
                  ? "bg-accent/10 text-accent"
                  : "bg-foreground/[0.05] text-foreground dark:bg-foreground/[0.08]"
              }`}
            >
              <card.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-[1.25rem] font-bold tracking-tight">
              {card.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {card.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[0.95rem] leading-[1.6] text-muted">
                  <Check className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── 3. Why Me ────────────────────────────────────────────────
function WhyMe() {
  return (
    <section className="section-container !pt-0">
      <motion.div {...fadeUp} transition={{ duration: 0.9, ease }}>
        <h2 className="section-title">Why work with me</h2>
        <div className="section-title-bar" />
      </motion.div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {whyPoints.map((point, i) => (
          <motion.div
            key={point.title}
            {...fadeUp}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            className="flex gap-5 rounded-[20px] border border-border bg-card p-7 shadow-[0_8px_30px_var(--color-card-shadow)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_var(--color-card-shadow-hover)]"
            style={{ transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)" }}
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[12px] bg-accent/10 text-accent">
              <point.icon className="h-[22px] w-[22px]" />
            </div>
            <div>
              <h3 className="text-[1.1rem] font-bold tracking-tight">{point.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-[1.7] text-muted">{point.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── Process ──────────────────────────────────────────────────
function Process() {
  return (
    <section className="section-container !pt-0">
      <motion.div {...fadeUp} transition={{ duration: 0.9, ease }}>
        <h2 className="section-title">How we&apos;ll work together</h2>
        <p className="section-subtitle">From first call to launch</p>
        <div className="section-title-bar" />
      </motion.div>

      <div className="relative mt-14">
        {/* Vertical connecting line */}
        <div className="absolute left-[22px] top-2 bottom-2 w-px bg-border sm:left-[26px]" />

        <div className="space-y-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="relative flex gap-6"
            >
              {/* Number + icon node */}
              <div className="relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-accent/20 bg-card text-accent shadow-[0_4px_15px_var(--color-card-shadow)] sm:h-[52px] sm:w-[52px]">
                <step.icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
              </div>

              <div className="flex-1 pt-1.5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[0.8rem] font-bold text-muted-light/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[1.15rem] font-bold tracking-tight">{step.title}</h3>
                  <span className="rounded-full bg-foreground/[0.05] px-3 py-1 text-[0.72rem] font-semibold text-muted dark:bg-foreground/[0.08]">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-2.5 max-w-2xl text-[0.95rem] leading-[1.7] text-muted">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-12">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-[0.95rem] font-semibold text-accent transition-colors hover:text-foreground"
        >
          It all starts with a call
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  )
}

// ── 4. Tech Stack ────────────────────────────────────────────
function TechStack() {
  return (
    <section className="section-container !pt-0">
      <motion.div {...fadeUp} transition={{ duration: 0.9, ease }}>
        <h2 className="section-title">My stack</h2>
        <div className="section-title-bar" />
      </motion.div>

      <div className="mt-14 space-y-9">
        {stackGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            {...fadeUp}
            transition={{ duration: 0.6, delay: gi * 0.08, ease }}
          >
            <h3 className="mb-4 text-[0.85rem] font-bold uppercase tracking-[1.5px] text-muted-light">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-border bg-foreground/[0.03] px-5 py-2.5 text-[0.9rem] font-medium text-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-background hover:shadow-[0_8px_20px_var(--color-card-shadow)] dark:bg-foreground/[0.06]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── 5. Services & Pricing ────────────────────────────────────
function Services() {
  return (
    <section className="section-container !pt-0">
      <motion.div {...fadeUp} transition={{ duration: 0.9, ease }}>
        <h2 className="section-title">Services</h2>
        <div className="section-title-bar" />
      </motion.div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.name}
            {...fadeUp}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            className={`relative flex flex-col rounded-[20px] border bg-card p-8 shadow-[0_8px_30px_var(--color-card-shadow)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_var(--color-card-shadow-hover)] ${
              service.highlight
                ? "border-accent/40 lg:scale-[1.03]"
                : "border-border"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)" }}
          >
            {service.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[0.7rem] font-bold uppercase tracking-[1px] text-white shadow-[0_4px_15px_rgba(99,102,241,0.35)]">
                Most Popular
              </span>
            )}
            <h3 className="text-[1.3rem] font-bold tracking-tight">{service.name}</h3>
            <p className="mt-3 text-[0.9rem] leading-[1.6] text-muted-light">
              <span className="font-semibold text-muted">Best for:</span> {service.best}
            </p>
            <div className="mt-6 text-[1.05rem] font-bold text-accent">{service.rate}</div>
            {service.note && (
              <p className="mt-2 text-[0.85rem] leading-[1.6] text-muted-light">{service.note}</p>
            )}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3.5 text-[0.95rem] font-semibold transition-all duration-300 ${
                service.highlight
                  ? "bg-foreground text-background hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  : "border-2 border-foreground text-foreground hover:-translate-y-[2px] hover:bg-foreground/[0.03]"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)" }}
            >
              Book a Call
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        ))}
      </div>

      <motion.p
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 text-center text-[0.85rem] text-muted-light"
      >
        Every project is different — you&apos;ll get a clear, tailored quote after a quick discovery call.
      </motion.p>
    </section>
  )
}

// ── 6. Featured Projects ─────────────────────────────────────
function FeaturedProjects({ stars }: { stars: number }) {
  const projects = [
    {
      name: "AniUI",
      description: "React Native UI library. 93+ components, 1000+ tests. Open source.",
      tags: ["React Native", "TypeScript", "Expo"],
      links: [
        { label: "View on GitHub", href: "https://github.com/anishlp7/aniui", icon: Github },
        { label: "View Docs", href: "https://github.com/anishlp7/aniui", icon: ExternalLink },
      ],
      stat: stars > 0 ? `★ ${stars} on GitHub` : undefined,
      highlight: true,
    },
    {
      name: "Uncover Us",
      description: "React Native card game app for iOS + Android. Built entirely with AniUI.",
      tags: ["React Native", "Expo", "AniUI"],
      links: [
        {
          label: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.anish.anonyfess.uncoverus",
          icon: ExternalLink,
        },
      ],
    },
    {
      name: "anishl.dev",
      description: "This site — my personal brand site. Next.js + Tailwind. Open source.",
      tags: ["Next.js", "Tailwind", "TypeScript"],
      links: [
        { label: "View Site", href: "https://anishl.dev", icon: ExternalLink },
        { label: "GitHub", href: "https://github.com/anishlp7/anishl.dev", icon: Github },
      ],
    },
  ]

  return (
    <section className="section-container !pt-0">
      <motion.div {...fadeUp} transition={{ duration: 0.9, ease }}>
        <h2 className="section-title">Things I&apos;ve shipped</h2>
        <div className="section-title-bar" />
      </motion.div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            {...fadeUp}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            className={`premium-card flex flex-col p-8 ${
              project.highlight ? "!border-accent/30 lg:col-span-1" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[1.3rem] font-bold tracking-tight">{project.name}</h3>
              {project.stat && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[0.75rem] font-semibold text-accent">
                  <Star className="h-3.5 w-3.5" />
                  {stars}
                </span>
              )}
            </div>
            <p className="mt-3 flex-1 text-[0.95rem] leading-[1.7] text-muted">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-border bg-foreground/[0.03] px-3 py-1.5 text-[0.8rem] font-medium text-muted dark:bg-foreground/[0.06]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-5">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-foreground transition-colors hover:text-accent"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── 7. Availability ──────────────────────────────────────────
function Availability() {
  return (
    <section className="section-container !pt-0">
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.8, ease }}
        className="rounded-[24px] border border-border bg-card p-10 sm:p-12 shadow-[0_8px_30px_var(--color-card-shadow)]"
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <h2 className="text-[1.6rem] font-bold tracking-tight sm:text-[1.9rem]">
            Current availability
          </h2>
        </div>
        <p className="mt-5 max-w-xl text-[1.05rem] leading-[1.8] text-muted">
          I take on a limited number of freelance projects to ensure quality.
          Currently accepting:
        </p>
        <ul className="mt-5 space-y-3">
          {["Project based work", "Retainer clients", "Short term consulting"].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-[1rem] font-medium text-foreground">
              <ArrowRight className="h-[18px] w-[18px] text-accent" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-foreground/[0.03] px-5 py-2.5 text-[0.9rem] font-semibold text-muted dark:bg-foreground/[0.06]">
          <Clock className="h-[18px] w-[18px] text-muted-light" />
          Response time: within 24 hours
        </div>
      </motion.div>
    </section>
  )
}

// ── 8. FAQ ───────────────────────────────────────────────────
function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section-container !pt-0">
      <motion.div {...fadeUp} transition={{ duration: 0.9, ease }}>
        <h2 className="section-title">Common questions</h2>
        <div className="section-title-bar" />
      </motion.div>

      <div className="mt-14 space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={faq.q}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.06, ease }}
            className="premium-card overflow-hidden !rounded-2xl"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-foreground/[0.02]"
            >
              <span className="text-[1.05rem] font-semibold">{faq.q}</span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-muted-light transition-transform duration-300 ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease }}
                >
                  <p className="border-t border-border px-6 pb-6 pt-5 text-[0.95rem] leading-[1.7] text-muted">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ── 9. Final CTA ─────────────────────────────────────────────
function FinalCta() {
  return (
    <section className="section-container !pt-0">
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.8, ease }}
        className="relative overflow-hidden rounded-[24px] px-8 py-14 text-center sm:px-12 sm:py-16"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
          boxShadow: "0 15px 50px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute top-[20%] left-[30%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)]" style={{ animation: "float 10s ease-in-out infinite" }} />
          <div className="absolute bottom-[20%] right-[20%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.15),transparent_70%)]" style={{ animation: "float 8s ease-in-out infinite 2s" }} />
        </div>

        <div className="relative z-10">
          <h2 className="text-[2rem] font-extrabold text-white sm:text-[2.4rem]">
            Ready to build something?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[1.1rem] leading-[1.7] text-white/85">
            Let&apos;s talk about your project. I&apos;ll get back to you within 24 hours.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-[10px] bg-white px-8 py-4 text-base font-semibold text-[#0a0a0a] shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)]"
            >
              Book a Discovery Call
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2.5 rounded-[10px] border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-[3px] hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
              {EMAIL}
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5">
            {[
              { icon: Github, href: "https://github.com/anishlp7", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/anish-l-434ba4139/", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
            <a
              href="https://twitter.com/anishl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 border-t border-border pt-8 text-center">
        <p className="text-[0.9rem] text-muted-light">Built by Anish Lawrence</p>
      </div>
    </section>
  )
}
