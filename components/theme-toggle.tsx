"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg border-2 border-foreground/10 p-2.5 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:text-foreground"
      aria-label="Toggle theme"
    >
      <Sun className="hidden h-[18px] w-[18px] dark:block" />
      <Moon className="block h-[18px] w-[18px] dark:hidden" />
    </button>
  )
}
