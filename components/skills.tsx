"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { skillGroups } from "@/lib/data/skills"

const filters = ["All", "Senior Frontend", "Mobile", "UI Libraries", "Tools"]

export function Skills() {
  const [active, setActive] = useState("All")

  const filtered =
    active === "All"
      ? skillGroups
      : skillGroups.filter((g) => g.category === active)

  const totalCount = filtered.reduce((sum, g) => sum + g.skills.length, 0)

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <h2 className="section-title">Skills</h2>
        <div className="section-title-bar" />
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12 flex flex-wrap justify-center gap-3"
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-7 py-2.5 text-[0.9rem] font-semibold transition-all duration-300 ${
              active === f
                ? "bg-foreground text-background shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
                : "border-2 border-foreground/10 text-muted hover:border-foreground/30 hover:text-foreground"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)" }}
          >
            {f}
            <span className="ml-2 inline-flex items-center justify-center rounded-full bg-foreground/10 px-2 py-0.5 text-[0.7rem]">
              {f === "All"
                ? skillGroups.reduce((s, g) => s + g.skills.length, 0)
                : skillGroups.find((g) => g.category === f)?.skills.length || 0}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Skill Groups */}
      <div className="mt-14 space-y-10">
        {filtered.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.08, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <h3 className="mb-4 text-[0.85rem] font-bold uppercase tracking-[1.5px] text-muted-light">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gi * 0.08 + si * 0.03 }}
                  className="rounded-xl border border-border bg-foreground/[0.03] px-5 py-2.5 text-[0.9rem] font-medium text-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-background hover:shadow-[0_8px_20px_var(--color-card-shadow)] dark:bg-foreground/[0.06]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
