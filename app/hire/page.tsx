import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { Hire } from "@/components/hire"
import { getAniUIStars } from "@/lib/github"

export const metadata: Metadata = {
  title: "Hire Anish Lawrence — Senior Frontend & React Native Developer",
  description:
    "Senior Frontend Developer with 8 years React + TypeScript experience. Creator of AniUI. Building web and mobile applications for clients globally.",
  openGraph: {
    title: "Hire Anish Lawrence — Senior Frontend & React Native Developer",
    description:
      "Senior Frontend Developer with 8 years React + TypeScript experience. Creator of AniUI. Building web and mobile applications for clients globally.",
    type: "website",
    url: "https://anishl.dev/hire",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Anish Lawrence — Senior Frontend & React Native Developer",
    description:
      "Senior Frontend Developer with 8 years React + TypeScript experience. Creator of AniUI.",
  },
}

export default async function HirePage() {
  const stars = await getAniUIStars()

  return (
    <>
      <Nav />
      <Hire stars={stars} />
    </>
  )
}
