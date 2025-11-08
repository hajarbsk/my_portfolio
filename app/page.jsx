import { Navigation } from "@/components/navigation"
import { StarryBackground } from "@/components/starry-background"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { CompetitiveProgramming } from "@/components/competitive-programming"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <StarryBackground />
      <div className="relative z-10">
        <Navigation />
        <div id="home">
          <Hero />
        </div>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Contact />
      </div>
    </main>
  )
}
