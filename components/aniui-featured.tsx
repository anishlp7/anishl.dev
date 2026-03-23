"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Star, Download, Package } from "lucide-react"

interface AniUIFeaturedProps {
  stars: number
  downloads: number
}

export function AniUIFeatured({ stars, downloads }: AniUIFeaturedProps) {
  return (
    <section id="aniui" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
        className="rounded-[24px] border border-accent/20 bg-card p-10 sm:p-12 shadow-[0_15px_50px_rgba(99,102,241,0.08)] dark:shadow-[0_15px_50px_rgba(99,102,241,0.05)]"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-accent/10 text-accent font-bold text-base shadow-[0_4px_15px_rgba(99,102,241,0.15)]">
              Ani
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">AniUI</h2>
              <p className="text-[0.95rem] text-muted">
                React Native UI Library & Ecosystem
              </p>
            </div>
          </div>
          <span className="rounded-full border border-border bg-foreground/[0.04] px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[1px] text-muted dark:bg-foreground/[0.08]">
            Open Source
          </span>
        </div>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.8] text-muted">
          The missing design system for React Native. Components, blocks, charts,
          Figma kit, and an AI-powered studio — everything a mobile developer
          needs in one ecosystem.
        </p>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap gap-4">
          {[
            { icon: Package, label: "50+ Components" },
            { icon: Star, label: stars > 0 ? `${stars} Stars` : "GitHub Stars" },
            { icon: null, label: "Expo" },
            { icon: Download, label: downloads > 0 ? `${downloads.toLocaleString()} downloads` : "npm" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-[10px] border border-border bg-foreground/[0.03] px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_var(--color-card-shadow)] dark:bg-foreground/[0.06]"
            >
              {Icon && <Icon className="h-[18px] w-[18px] text-muted-light" />}
              <span className="text-[0.9rem] font-semibold">{label}</span>
            </div>
          ))}
        </div>

        {/* Phase Progress */}
        <div className="mt-10">
          <div className="flex items-center gap-4">
            <span className="text-[0.8rem] font-bold uppercase tracking-[1px] text-muted-light">
              Current Phase
            </span>
            <span className="rounded-full bg-accent/10 px-3.5 py-1 text-[0.8rem] font-semibold text-accent">
              Phase 2 — Blocks & Charts
            </span>
          </div>
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-foreground/[0.06]">
            <div className="relative h-full w-2/6 rounded-full bg-accent">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{ animation: "shimmer 2s infinite" }} />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-5">
          <a
            href="https://github.com/anishlp7/aniui"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-[10px] bg-foreground px-[38px] py-4 text-base font-semibold text-background shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-400 hover:-translate-y-[3px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
            style={{ transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)" }}
          >
            View Docs
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
          <a
            href="https://github.com/anishlp7/aniui"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-[10px] border-2 border-foreground bg-transparent px-[38px] py-4 text-base font-semibold text-foreground transition-all duration-400 hover:-translate-y-[3px] hover:bg-foreground/[0.03]"
            style={{ transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)" }}
          >
            GitHub
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
