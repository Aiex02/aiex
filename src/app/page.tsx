
import { AboutMe } from "@/components/aboutMe/aboutMe";
import EmailForm from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="bg-zinc-800">
      <Hero />
      <AboutMe />
      <EmailForm />
      <Footer />
    </main>
  )
}
