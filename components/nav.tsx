"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Github } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Open Source", href: "#opensource" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ["home", "aniui", "projects", "about", "skills", "roadmap", "opensource", "contact"]
      const scrollPos = window.scrollY + 120

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const { offsetTop, offsetHeight } = el
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace("#", ""))
    if (el) {
      const top = el.offsetTop - 80
      window.scrollTo({ top, behavior: "smooth" })
    }
    setMobileOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-background/98 shadow-[0_4px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          : "bg-background/90 backdrop-blur-xl"
      }`}
      style={{
        borderBottom: "1px solid var(--color-border)",
        padding: scrolled ? "15px 5%" : "20px 5%",
      }}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("home") }}
          className="group flex flex-shrink-0 items-center gap-3.5 transition-transform duration-300 hover:translate-x-1"
        >
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-foreground text-background text-sm font-black tracking-tighter shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:rotate-[5deg] group-hover:scale-105">
            AL
          </div>
          <div className="hidden sm:block">
            <div className="text-[1rem] font-bold leading-none text-foreground">
              Anish Lawrence
            </div>
            <div className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[1px] text-muted-light">
              Senior Frontend Developer & Open Source Builder
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.165, 0.84, 0.44, 1] }}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
              className={`relative rounded-lg px-4 py-2 text-[0.9rem] font-semibold transition-all duration-300 hover:bg-foreground/[0.03] hover:text-foreground ${
                activeSection === link.href.replace("#", "")
                  ? "text-foreground"
                  : "text-muted"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 bg-foreground transition-all duration-300 ${
                  activeSection === link.href.replace("#", "") ? "w-[24px]" : "w-0"
                }`}
              />
            </motion.a>
          ))}
          <div className="ml-2 flex items-center gap-1.5 border-l border-border pl-3">
            <a
              href="https://github.com/anishlp7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-[17px] w-[17px]" />
            </a>
            <a
              href="https://twitter.com/anishl"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
              aria-label="Twitter"
            >
              <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-[5px] rounded-lg bg-foreground p-2.5"
            aria-label="Toggle menu"
          >
            <span className={`h-[2.5px] w-6 rounded-full bg-background transition-all duration-300 ${mobileOpen ? "translate-y-[7.5px] rotate-45" : ""}`} />
            <span className={`h-[2.5px] w-6 rounded-full bg-background transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-[2.5px] w-6 rounded-full bg-background transition-all duration-300 ${mobileOpen ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[75%] max-w-[320px] bg-background/98 backdrop-blur-xl shadow-[-5px_0_30px_rgba(0,0,0,0.1)] transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-6 px-10 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)" }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
            className={`w-full text-center rounded-lg px-5 py-3.5 text-[1.1rem] font-semibold transition-all duration-300 ${
              activeSection === link.href.replace("#", "")
                ? "text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {link.name}
          </a>
        ))}
        <div className="mt-6 flex items-center gap-5">
          <a href="https://github.com/anishlp7" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://twitter.com/anishl" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </motion.header>
  )
}
