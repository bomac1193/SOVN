import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Upload, Shield, Zap, Code, Search, Key } from 'lucide-react'

function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

const artistSteps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Add your tracks, stems, and vocals to the SOVN vault. Lossless quality preserved."
  },
  {
    icon: Shield,
    title: "Set Terms",
    description: "Define AI permissions: training allowed, generation allowed, or neither. You control the access."
  },
  {
    icon: Zap,
    title: "Earn",
    description: "Automatic payouts when your sound is licensed. Transparent, instant, sovereign."
  }
]

const developerSteps = [
  {
    icon: Search,
    title: "Browse",
    description: "Access the vault. Filter by genre, mood, BPM, type. Every asset is consent-verified."
  },
  {
    icon: Key,
    title: "License",
    description: "One click to license. Clear terms, clear pricing. No legal gray zones."
  },
  {
    icon: Code,
    title: "Build",
    description: "Integrate via REST API. High-quality audio data for training and generation. Clean."
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 md:py-48 bg-obsidian grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-24">
            <span className="text-xs tracking-[0.4em] text-sovereign-emerald uppercase block mb-6">
              The Protocol
            </span>
            <h2 className="font-display section-title text-5xl md:text-7xl text-bone italic mb-6">
              How SOVN Works
            </h2>
            <p className="text-lg text-ash max-w-2xl mx-auto">
              Two paths. One standard. The consent layer that connects human creativity to artificial intelligence.
            </p>
          </div>
        </FadeInSection>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Artists Path */}
          <div id="artists">
            <FadeInSection delay={0.1}>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 border border-sovereign-emerald flex items-center justify-center">
                  <div className="w-3 h-3 bg-sovereign-emerald" />
                </div>
                <div>
                  <span className="text-xs tracking-[0.3em] text-sovereign-emerald uppercase block">Path One</span>
                  <h3 className="text-2xl text-bone font-semibold">For Artists</h3>
                </div>
              </div>
            </FadeInSection>

            <div className="space-y-8">
              {artistSteps.map((step, index) => (
                <FadeInSection key={step.title} delay={0.2 + index * 0.1}>
                  <div className="group flex gap-6 p-6 border border-obsidian-lighter hover:border-sovereign-emerald/50 transition-all duration-500">
                    <div className="flex-shrink-0 w-12 h-12 border border-sovereign-emerald/30 flex items-center justify-center group-hover:bg-sovereign-emerald/10 transition-colors duration-500">
                      <step.icon className="w-5 h-5 text-sovereign-emerald" />
                    </div>
                    <div>
                      <span className="text-xs text-ash tracking-wider mb-1 block">0{index + 1}</span>
                      <h4 className="text-xl text-bone font-medium mb-2">{step.title}</h4>
                      <p className="text-ash leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={0.5}>
              <div className="mt-12">
                <a href="/artist" className="btn-sovereign text-sm inline-block">
                  Enter Artist Portal
                </a>
              </div>
            </FadeInSection>
          </div>

          {/* Developers Path */}
          <div id="developers">
            <FadeInSection delay={0.2}>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 border border-electric-gold flex items-center justify-center">
                  <div className="w-3 h-3 bg-electric-gold" />
                </div>
                <div>
                  <span className="text-xs tracking-[0.3em] text-electric-gold uppercase block">Path Two</span>
                  <h3 className="text-2xl text-bone font-semibold">For Developers</h3>
                </div>
              </div>
            </FadeInSection>

            <div className="space-y-8">
              {developerSteps.map((step, index) => (
                <FadeInSection key={step.title} delay={0.3 + index * 0.1}>
                  <div className="group flex gap-6 p-6 border border-obsidian-lighter hover:border-electric-gold/50 transition-all duration-500">
                    <div className="flex-shrink-0 w-12 h-12 border border-electric-gold/30 flex items-center justify-center group-hover:bg-electric-gold/10 transition-colors duration-500">
                      <step.icon className="w-5 h-5 text-electric-gold" />
                    </div>
                    <div>
                      <span className="text-xs text-ash tracking-wider mb-1 block">0{index + 1}</span>
                      <h4 className="text-xl text-bone font-medium mb-2">{step.title}</h4>
                      <p className="text-ash leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={0.6}>
              <div className="mt-12">
                <a href="/developer" className="btn-sovereign btn-gold text-sm inline-block">
                  Access Developer API
                </a>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}
