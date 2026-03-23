"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Rocket } from "lucide-react"
import { roadmapPhases, type RoadmapPhase } from "@/lib/data/roadmap"

const statusStyles: Record<string, string> = {
  completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "in-progress": "bg-accent/10 text-accent",
  "up-next": "bg-foreground/[0.06] text-foreground",
  planned: "bg-foreground/[0.04] text-muted-light",
}

export function Roadmap() {
  const [expanded, setExpanded] = useState<number | null>(2)

  return (
    <section id="roadmap" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <h2 className="section-title">What I&apos;m building</h2>
        <p className="section-subtitle">AniUI roadmap</p>
        <div className="section-title-bar" />
      </motion.div>

      <div className="mt-16 space-y-4">
        {roadmapPhases.map((phase, i) => (
          <RoadmapItem
            key={phase.id}
            phase={phase}
            index={i}
            isExpanded={expanded === phase.id}
            onToggle={() =>
              setExpanded(expanded === phase.id ? null : phase.id)
            }
          />
        ))}
      </div>

      {/* Goal Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
        className="mt-16 relative overflow-hidden rounded-[24px] p-12 sm:p-14 text-center"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
          boxShadow: "0 15px 50px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Animated bg */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute top-[20%] left-[30%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)]" style={{ animation: "float 10s ease-in-out infinite" }} />
          <div className="absolute bottom-[20%] right-[20%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.15),transparent_70%)]" style={{ animation: "float 8s ease-in-out infinite 2s" }} />
        </div>

        <div className="relative z-10">
          <div className="text-4xl mb-4" style={{ animation: "float 2s ease-in-out infinite" }}>
            <Rocket className="mx-auto h-12 w-12 text-white" />
          </div>
          <h3 className="text-[2rem] font-extrabold text-white sm:text-[2.3rem]">
            The Vision
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-[1.1rem] leading-[1.7] text-white/85">
            Build the most complete React Native ecosystem — from components to
            something no one has built yet. Everything mobile developers need.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {["Components", "Blocks", "Charts", "Figma Kit", "???"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-[10px] border border-white/15 bg-white/10 px-6 py-3 text-[0.9rem] font-semibold text-white backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function RoadmapItem({
  phase,
  index,
  isExpanded,
  onToggle,
}: {
  phase: RoadmapPhase
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.165, 0.84, 0.44, 1] }}
      className="premium-card overflow-hidden !rounded-2xl"
      style={{ transform: isExpanded ? "translateY(-4px)" : undefined }}
    >
      {/* Top accent bar */}
      <div
        className="h-[3px] transition-opacity duration-300"
        style={{
          background: phase.status === "in-progress"
            ? "linear-gradient(90deg, #6366f1, #818cf8)"
            : "linear-gradient(90deg, var(--color-foreground), transparent)",
          opacity: isExpanded ? 1 : 0,
        }}
      />

      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 sm:p-7 text-left transition-colors hover:bg-foreground/[0.02]"
      >
        <div className="flex items-center gap-5">
          <span className="text-[1rem] font-bold text-muted-light/50">
            {String(phase.id).padStart(2, "0")}
          </span>
          <span className="text-[1.1rem] font-bold">{phase.name}</span>
          <span
            className={`rounded-full px-3.5 py-1 text-[0.75rem] font-semibold ${
              statusStyles[phase.status] || ""
            }`}
          >
            {phase.label}
          </span>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-light transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <div className="border-t border-border px-6 pb-6 pt-5 sm:px-7 sm:pb-7">
              <p className="text-[0.95rem] leading-[1.7] text-muted">
                {phase.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
