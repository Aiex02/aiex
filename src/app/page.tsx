import '@/app/globals.css'
import { AboutMe } from "@/components/aboutMe/aboutMe";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  )
}
