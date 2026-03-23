export interface Project {
  id: number
  name: string
  description: string
  category: "REACT NATIVE" | "WEB" | "AI-ML"
  badge?: string
  tech: string[]
  image?: string
  href?: string
  github?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    name: "AniUI",
    description:
      "The missing design system for React Native. Components, blocks, charts, and an AI-powered studio for mobile developers.",
    category: "REACT NATIVE",
    badge: "Featured",
    tech: ["React Native", "Expo", "TypeScript", "NativeWind"],
    image: "/projects/aniui.webp",
    href: "https://github.com/anishlp7/aniui",
    github: "https://github.com/anishlp7/aniui",
    featured: true,
  },
  {
    id: 2,
    name: "anishl.dev",
    description:
      "Personal brand site — built with Next.js 14, Tailwind CSS, and Framer Motion. Fully open source. You're looking at it.",
    category: "WEB",
    badge: "Open Source",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/projects/anishl.webp",
    href: "https://anishl.dev",
    github: "https://github.com/anishlp7/anishl.dev",
  },
  {
    id: 3,
    name: "Uncover Us",
    description:
      "Interactive card game with 6,000+ questions and dares across 8 levels — designed to spark deep connections and break the ice.",
    category: "REACT NATIVE",
    badge: "Live on Play Store",
    tech: ["React Native", "Expo", "TypeScript", "NativeWind"],
    image: "/projects/uncoverus.webp",
    href: "https://play.google.com/store/apps/details?id=com.anish.anonyfess.uncoverus",
  },
  {
    id: 4,
    name: "Collega",
    description:
      "Location-based professional networking for remote workers. Find and meet colleagues nearby — turn digital coworkers into real-world connections.",
    category: "REACT NATIVE",
    badge: "In Development",
    tech: ["React Native", "Expo", "TypeScript", "NativeWind"],
  },
  {
    id: 5,
    name: "Roamly",
    description:
      "Travel networking app for nomads and travelers. Sync up with people on similar itineraries — the social layer of the physical world.",
    category: "REACT NATIVE",
    badge: "In Development",
    tech: ["React Native", "Expo", "TypeScript", "NativeWind"],
  },
  {
    id: 6,
    name: "Clothing Store",
    description:
      "Full-stack e-commerce platform with shopping cart, payment integration, and user authentication.",
    category: "WEB",
    badge: "E-Commerce",
    tech: ["React", "Redux", "Firebase", "Stripe"],
    image: "/projects/em.webp",
    href: "https://em-clothing-live.herokuapp.com/",
  },
  {
    id: 7,
    name: "Smart Brain",
    description:
      "AI-powered face detection application using Clarifai API with user authentication and image processing.",
    category: "AI-ML",
    tech: ["React", "Node.js", "PostgreSQL", "Clarifai API"],
    image: "/projects/smartbrain.webp",
    github: "https://github.com/anishlp7/Face-Recognition-Front-End",
  },
]
