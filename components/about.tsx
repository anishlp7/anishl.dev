"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"

const stats = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Components" },
  { value: 2, suffix: "+", label: "Open Source Projects" },
]

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (inView && value > 0) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" })
      return controls.stop
    }
  }, [inView, value, count])

  return (
    <motion.span>
      {value > 0 ? (
        <>
          <motion.span>{rounded}</motion.span>
          {suffix}
        </>
      ) : null}
    </motion.span>
  )
}

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
      >
        <h2 className="section-title">About</h2>
        <div className="section-title-bar" />
      </motion.div>

      <div className="mt-16 grid grid-cols-1 items-start gap-[60px] lg:grid-cols-[1.2fr_0.8fr]">
        {/* Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <div className="max-w-xl space-y-5 text-[1.05rem] leading-[1.8] text-muted">
            <p>
              Hi, I&apos;m Anish Lawrence — a self-taught Senior Frontend developer with a
              Master&apos;s in Computer Science and 7+ years building web and mobile
              applications.
            </p>
            <p>
              I work on <strong className="font-bold text-foreground">React</strong> and{" "}
              <strong className="font-bold text-foreground">TypeScript</strong> professionally, but my real passion
              is the React Native ecosystem. I&apos;m building{" "}
              <strong className="font-bold text-foreground">AniUI</strong> — an open source
              component library, design system, and AI-powered studio for mobile
              developers.
            </p>
            <p>
              I believe the React Native ecosystem deserves the same quality of
              tooling that the web has. That&apos;s what I&apos;m building.
            </p>
          </div>

          {/* Stats */}
          <div ref={ref} className="mt-10 grid grid-cols-3 gap-5">
            {stats.map(({ value, suffix, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-[rgba(0,0,0,0.1)] bg-[#f8f9fa] p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] dark:border-[rgba(255,255,255,0.1)] dark:bg-[#161616] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="text-[2.5rem] font-black leading-none text-[#0a0a0a] dark:text-white">
                  <AnimatedCounter value={value} suffix={suffix} inView={inView} />
                </div>
                <div className="mt-2 text-[0.85rem] font-medium text-[#6a6a6a] dark:text-[#9ca3af]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ x: 50, opacity: 0, rotateY: 45 }}
          whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.165, 0.84, 0.44, 1] }}
          className="relative flex justify-center"
          style={{ perspective: 1000 }}
        >
          <div className="relative h-[400px] w-full max-w-[320px] overflow-hidden rounded-[24px] shadow-[0_15px_50px_var(--color-card-shadow)] transition-all duration-500 hover:shadow-[0_25px_60px_var(--color-card-shadow-hover)]">
            <Image
              src="/avatar-2d.webp"
              alt="Anish Lawrence"
              fill
              className="object-cover"
            />
          </div>
          {/* Floating badges */}
          <div
            className="absolute -top-4 -right-4 rounded-full bg-foreground px-5 py-2.5 text-[0.85rem] font-bold text-background shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
            style={{ animation: "float 3s ease-in-out infinite" }}
          >
            React Native
          </div>
          <div
            className="absolute -bottom-3 -left-4 rounded-full bg-foreground px-5 py-2.5 text-[0.85rem] font-bold text-background shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
            style={{ animation: "float 3s ease-in-out infinite 1s" }}
          >
            TypeScript
          </div>
          <div
            className="absolute top-1/2 -right-6 rounded-full bg-accent px-5 py-2.5 text-[0.85rem] font-bold text-white shadow-[0_8px_20px_rgba(99,102,241,0.3)]"
            style={{ animation: "float 3s ease-in-out infinite 2s" }}
          >
            AniUI
          </div>
        </motion.div>
      </div>
    </section>
  )
}
