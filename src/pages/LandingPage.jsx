import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Manifesto from '../components/Manifesto'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Navigation variant="landing" />
      <Hero />
      <Manifesto />
      <HowItWorks />
      <Footer />
    </main>
  )
}
