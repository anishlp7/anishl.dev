import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { AniUIFeatured } from "@/components/aniui-featured"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Roadmap } from "@/components/roadmap"
import { OpenSource } from "@/components/opensource"
import { Contact } from "@/components/contact"
import { getAniUIStars } from "@/lib/github"
import { getAniUIDownloads } from "@/lib/npm"

export default async function Home() {
  const [stars, downloads] = await Promise.all([
    getAniUIStars(),
    getAniUIDownloads(),
  ])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AniUIFeatured stars={stars} downloads={downloads} />
        <Projects />
        <About />
        <Skills />
        <Roadmap />
        <OpenSource />
        <Contact />
      </main>
    </>
  )
}
