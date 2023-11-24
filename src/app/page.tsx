
import { AboutMe } from "@/components/aboutMe/aboutMe";
import EmailForm from "@/components/contact/contact";
import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="bg-zinc-800">
      <Hero />
      <AboutMe />
      <Projects />
      <EmailForm />
    </main>
  )
}
