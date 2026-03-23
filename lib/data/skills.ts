export interface SkillGroup {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Senior Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Vue.js",
      "HTML",
      "CSS",
      "Tailwind",
    ],
  },
  {
    category: "Mobile",
    skills: ["React Native", "Expo", "NativeWind", "EAS"],
  },
  {
    category: "UI Libraries",
    skills: ["shadcn/ui", "Ant Design", "Radix UI", "PrimeReact", "Material UI"],
  },
  {
    category: "Tools",
    skills: ["Git", "Figma", "VS Code", "Cursor", "Claude Code"],
  },
]
