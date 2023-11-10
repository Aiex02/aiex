import '@/app/globals.css'
import { AboutMe } from "@/components/aboutMe/aboutMe";
import { Contact } from "@/components/contact/contact";
import { Hero } from "@/components/hero/hero";
import Timeline from '@/components/timeline/timeline';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Contact />
      <Timeline />
    </main>
  )
}
