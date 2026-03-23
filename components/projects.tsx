"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { projects } from "@/lib/data/projects"

const categoryColors: Record<string, string> = {
  "REACT NATIVE": "text-accent bg-accent/10",
  WEB: "text-emerald-600 bg-emerald-500/10 dark:text-emerald-400",
  "AI-ML": "text-purple-600 bg-purple-500/10 dark:text-purple-400",
}

export function Projects() {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I&apos;ve built</p>
        <div className="section-title-bar" />
      </motion.div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))" }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.165, 0.84, 0.44, 1] }}
            className="premium-card group relative flex flex-col overflow-hidden"
          >
            {/* Image */}
            {project.image && (
              <div className="relative aspect-video w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e2e8f0 100%)" }}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
                />
                {/* Category badge overlay */}
                <div className="absolute top-5 right-5">
                  <span
                    className={`rounded-[20px] bg-background/95 backdrop-blur-[10px] px-3.5 py-1.5 text-[0.75rem] font-semibold uppercase tracking-wider shadow-sm ${
                      categoryColors[project.category] || ""
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="flex flex-1 flex-col p-[30px]">
              {/* Category + badge */}
              <div className="mb-3 flex items-center gap-2.5 flex-wrap">
                <span
                  className={`rounded-[20px] px-3.5 py-1.5 text-[0.75rem] font-semibold uppercase tracking-wider ${
                    categoryColors[project.category] || ""
                  }`}
                >
                  {project.category}
                </span>
                {project.badge && (
                  <span className="rounded-[20px] bg-foreground/[0.06] px-3.5 py-1.5 text-[0.75rem] font-semibold uppercase tracking-wider text-foreground">
                    {project.badge}
                  </span>
                )}
              </div>

              <h3 className="text-[1.5rem] font-bold tracking-[-0.3px]">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-[0.95rem] leading-[1.7] text-muted">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border bg-foreground/[0.03] px-3.5 py-1.5 text-[0.8rem] font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background dark:bg-foreground/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.href && (
                <div className="mt-5 border-t border-border pt-5">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-[0.95rem] font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4 opacity-0 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
