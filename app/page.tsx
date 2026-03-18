import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Demo from "@/components/Demo"
import Benefits from "@/components/Benefits"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Demo />
      <Benefits />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}