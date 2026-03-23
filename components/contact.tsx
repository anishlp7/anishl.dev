"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"

const socials = [
  {
    icon: Github,
    href: "https://github.com/anishlp7",
    label: "GitHub",
  },
  {
    icon: () => (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "https://twitter.com/anishl",
    label: "Twitter",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/anish-l-434ba4139/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:anishlp7@gmail.com",
    label: "Email",
  },
]

export function Contact() {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
        className="text-center"
      >
        <h2 className="section-title mx-auto inline-block">Get in touch</h2>
        <div className="section-title-bar mx-auto" />

        <motion.a
          href="mailto:anishlp7@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 inline-block text-[1.2rem] font-medium text-muted transition-colors duration-300 hover:text-foreground"
        >
          anishlp7@gmail.com
        </motion.a>

        {/* Social Links */}
        <div className="mt-8 flex items-center justify-center gap-5">
          {socials.map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="group relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-card text-muted shadow-[0_4px_20px_var(--color-card-shadow)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_var(--color-card-shadow-hover)]"
              style={{ transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)" }}
              aria-label={label}
            >
              {/* Hover bg circle */}
              <span className="absolute inset-0 rounded-full bg-foreground scale-0 transition-transform duration-300 group-hover:scale-100" />
              <span className="relative z-10 transition-all duration-300 group-hover:text-background">
                <Icon className="h-6 w-6" />
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* CTA Box */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
        className="relative mt-20 overflow-hidden rounded-[20px] px-10 py-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #2a2a2a 100%)" }}
      >
        {/* Animated bg */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute top-[30%] left-[20%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_70%)]" style={{ animation: "float 8s ease-in-out infinite" }} />
          <div className="absolute bottom-[20%] right-[30%] h-[150px] w-[150px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.2),transparent_70%)]" style={{ animation: "float 6s ease-in-out infinite 2s" }} />
        </div>

        <div className="relative z-10">
          <h3 className="text-[2rem] font-extrabold text-white">
            Interested in AniUI?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-[1.1rem] text-white/85">
            Star it on GitHub and follow the journey
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-5">
            <a
              href="https://github.com/anishlp7/aniui"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-[10px] bg-white px-8 py-4 text-base font-semibold text-[#0a0a0a] shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)]"
            >
              Star on GitHub
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com/anishlp7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-[10px] border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-[3px] hover:bg-white/10"
            >
              Follow Me
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-12 border-t border-border pt-8 text-center">
        <p className="text-[0.9rem] text-muted-light">
          Built by Anish Lawrence
        </p>
      </div>
    </section>
  )
}
