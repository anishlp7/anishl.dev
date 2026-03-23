"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Star, Code2 } from "lucide-react"

const repos = [
  {
    name: "AniUI",
    description:
      "The missing design system for React Native. 50+ components, blocks, charts, and more.",
    tech: ["React Native", "Expo", "TypeScript", "NativeWind"],
    href: "https://github.com/anishlp7/aniui",
    featured: true,
  },
  {
    name: "anishl.dev",
    description:
      "My personal site — built with Next.js 14, Tailwind CSS, and Framer Motion. Fully open source.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    href: "https://github.com/anishlp7/anishl.dev",
  },
]

export function OpenSource() {
  return (
    <section id="opensource" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <h2 className="section-title">Open Source</h2>
        <p className="section-subtitle">Building in public</p>
        <div className="section-title-bar" />
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {repos.map((repo, i) => (
          <motion.a
            key={repo.name}
            href={repo.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.165, 0.84, 0.44, 1] }}
            className={`premium-card group relative flex flex-col p-8 ${
              repo.featured ? "border-accent/20 shadow-[0_8px_30px_rgba(99,102,241,0.06)]" : ""
            }`}
          >
            {/* Top accent bar on hover */}
            <div
              className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px] transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                repo.featured
                  ? "bg-gradient-to-r from-accent to-accent/50"
                  : "bg-gradient-to-r from-foreground to-transparent"
              }`}
            />

            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Code2 className={`h-5 w-5 ${repo.featured ? "text-accent" : "text-muted-light"}`} />
                <h3 className="text-[1.25rem] font-bold">{repo.name}</h3>
                {repo.featured && (
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[0.7rem] font-semibold text-accent">
                    Featured
                  </span>
                )}
              </div>
              <ExternalLink className="h-4 w-4 text-muted-light opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            <p className="mt-4 flex-1 text-[0.95rem] leading-[1.7] text-muted">
              {repo.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {repo.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-border bg-foreground/[0.03] px-3 py-1 text-[0.8rem] font-medium text-muted transition-all duration-300 group-hover:border-foreground/15 dark:bg-foreground/[0.06]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-[0.85rem] font-semibold text-muted-light transition-colors duration-300 group-hover:text-foreground">
              <Github className="h-4 w-4" />
              View on GitHub
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
