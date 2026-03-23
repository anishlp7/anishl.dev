export interface RoadmapPhase {
  id: number
  name: string
  status: "completed" | "in-progress" | "up-next" | "planned"
  label: string
  description: string
}

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: 1,
    name: "Core Library",
    status: "completed",
    label: "Completed",
    description:
      "50+ production-ready components built with NativeWind. Buttons, inputs, modals, navigation — everything you need to ship a React Native app fast.",
  },
  {
    id: 2,
    name: "Blocks & Charts",
    status: "in-progress",
    label: "In Progress",
    description:
      "Pre-built screen layouts and data visualization components. Authentication flows, dashboards, settings screens, and chart components out of the box.",
  },
  {
    id: 3,
    name: "Figma UI Kit",
    status: "planned",
    label: "Planned",
    description:
      "A complete Figma design kit that mirrors every AniUI component. Design and develop with the same system — pixel-perfect handoff.",
  },
  {
    id: 4,
    name: "Premium Blocks",
    status: "planned",
    label: "Planned",
    description:
      "Advanced, production-ready screen templates for common app patterns. E-commerce, social, fintech, and more — copy, paste, ship.",
  },
  {
    id: 5,
    name: "Figma Plugin",
    status: "planned",
    label: "Planned",
    description:
      "Export Figma designs directly to AniUI code. Select a frame, get clean React Native + NativeWind code instantly.",
  },
  {
    id: 6,
    name: "??? — Something Big",
    status: "planned",
    label: "The Dream",
    description:
      "Something big is coming. Stay tuned — this phase will change how mobile developers build apps. Follow the journey to find out.",
  },
]
