"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"

const stackItems = [
  "React",
  "TypeScript",
  "React Native",
  "Expo",
  "NativeWind",
  "Next.js",
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  const imageX = useTransform(springX, [-0.5, 0.5], [-30, 30])
  const imageY = useTransform(springY, [-0.5, 0.5], [-30, 30])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-visible"
      style={{ padding: "120px 5% 80px" }}
    >
      {/* Subtle radial bg */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.015)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-[60px] lg:grid-cols-[1.2fr_1fr] lg:gap-[100px]">
        {/* Text Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* AniUI Badge */}
          <motion.a
            href="https://github.com/anishlp7/aniui"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-foreground/[0.04] px-4 py-1.5 text-[0.8rem] font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/[0.08] dark:bg-foreground/[0.08]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
            Building AniUI — React Native UI Library
          </motion.a>

          {/* Title */}
          <motion.h1
            className="text-[2.5rem] font-black leading-[1] tracking-tight sm:text-[3.2rem] lg:text-[4rem]"
            style={{ perspective: 1000 }}
          >
            <motion.span
              className="block mb-2.5 text-foreground"
              initial={{ y: 100, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              style={{ transformOrigin: "top center" }}
            >
              Senior Frontend Developer
            </motion.span>
            <motion.span
              className="block"
              initial={{ y: 100, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              style={{
                transformOrigin: "top center",
                background: "linear-gradient(135deg, var(--color-foreground) 0%, var(--color-muted) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              & Open Source Builder
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="mt-8 max-w-[600px] text-[1.15rem] leading-[1.8] text-muted"
          >
            Building tools for the React Native ecosystem. Creator of{" "}
            <strong className="font-bold text-foreground">AniUI</strong> —
            components, blocks, and studio for mobile developers.{" "}
            <strong className="font-bold text-foreground">7+ years</strong> in React & TypeScript.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="https://github.com/anishlp7/aniui"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-[10px] bg-foreground px-[38px] py-4 text-base font-semibold text-background shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-400 hover:-translate-y-[3px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
              style={{ transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)" }}
            >
              View AniUI
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a
              href="https://github.com/anishlp7"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-[10px] border-2 border-foreground bg-transparent px-[38px] py-4 text-base font-semibold text-foreground transition-all duration-400 hover:-translate-y-[3px] hover:bg-foreground/[0.03]"
              style={{ transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)" }}
            >
              <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              GitHub
            </a>
          </motion.div>

          {/* Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 flex items-center gap-5 flex-wrap"
          >
            <span className="text-[0.85rem] font-bold uppercase tracking-[1px] text-muted-light">
              Stack
            </span>
            <div className="flex flex-wrap gap-3">
              {stackItems.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1 + i * 0.05 }}
                  className="rounded-lg bg-foreground/[0.04] px-[18px] py-2 text-[0.85rem] font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background dark:bg-foreground/[0.08]"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3D Avatar */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          style={{ x: imageX, y: imageY }}
          className="relative flex items-center justify-center order-first lg:order-last"
        >
          <div className="relative w-[340px] h-[460px] sm:w-[380px] sm:h-[500px] lg:w-[600px] lg:h-[750px]">
            <Image
              src="/avatar-3d.webp"
              alt="Anish Lawrence"
              fill
              priority
              className="object-contain transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 flex flex-col items-center gap-3"
        style={{ animation: "bounce-scroll 2s ease-in-out infinite" }}
      >
        <span className="text-[0.75rem] font-bold uppercase tracking-[2px] text-muted-light">
          Scroll
        </span>
        <div className="h-10 w-0.5 rounded-full bg-gradient-to-b from-foreground to-transparent" />
      </div>
    </section>
  )
}
