import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 md:py-48 bg-obsidian-light">
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sovereign-emerald/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <FadeInSection>
          <div className="text-center mb-24">
            <span className="text-xs tracking-[0.4em] text-sovereign-emerald uppercase block mb-6">
              Declaration
            </span>
            <h2 className="font-display section-title text-5xl md:text-7xl text-bone italic">
              The Manifesto
            </h2>
          </div>
        </FadeInSection>

        {/* Manifesto Content */}
        <div className="space-y-16 md:space-y-24">
          {/* Opening */}
          <FadeInSection delay={0.1}>
            <div className="border-l-2 border-blood-red pl-8 md:pl-12">
              <p className="text-xl md:text-2xl text-bone leading-relaxed font-light">
                The old world took without asking.
              </p>
              <p className="text-lg md:text-xl text-ash leading-relaxed mt-6">
                AI scraped billions of songs, voices, and stems—no consent, no compensation, no control.
                Artists woke up to find their sound inside machines they never approved.
                Developers built empires on creativity they never paid for.
                The system was broken because it was never built.
              </p>
            </div>
          </FadeInSection>

          {/* The Fix */}
          <FadeInSection delay={0.2}>
            <div className="text-center py-12">
              <p className="font-display text-4xl md:text-5xl text-sovereign-emerald italic text-glow-emerald">
                SOVN is the fix.
              </p>
            </div>
          </FadeInSection>

          {/* Core Mission */}
          <FadeInSection delay={0.3}>
            <p className="text-xl md:text-2xl text-bone leading-relaxed font-light text-center">
              We are the consent layer between human creativity and artificial intelligence.
            </p>
            <p className="text-lg text-ash leading-relaxed mt-8 text-center">
              A global vault where artists upload their music, stems, and vocals—and set the terms for how AI can use them.
              Training allowed. Generation allowed. Or not at all.
              <span className="text-bone font-medium"> The artist decides. Forever.</span>
            </p>
          </FadeInSection>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 pt-12">
            <FadeInSection delay={0.4}>
              <div className="border border-sovereign-emerald/20 p-8 hover:border-sovereign-emerald/50 transition-colors duration-500">
                <span className="text-xs tracking-[0.3em] text-sovereign-emerald uppercase block mb-4">
                  For Creators
                </span>
                <h3 className="font-display text-2xl text-bone italic mb-4">Sovereignty</h3>
                <p className="text-ash leading-relaxed">
                  Your sound stays yours. Your legacy stays protected. Your revenue flows automatically when AI learns from what you made.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <div className="border border-electric-gold/20 p-8 hover:border-electric-gold/50 transition-colors duration-500">
                <span className="text-xs tracking-[0.3em] text-electric-gold uppercase block mb-4">
                  For Developers
                </span>
                <h3 className="font-display text-2xl text-bone italic mb-4">The Clean Path</h3>
                <p className="text-ash leading-relaxed">
                  One API. Legally cleared, consent-verified, high-quality audio data. No lawsuits. No gray zones. No guilt.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <div className="border border-bone/20 p-8 hover:border-bone/50 transition-colors duration-500">
                <span className="text-xs tracking-[0.3em] text-bone uppercase block mb-4">
                  For Industry
                </span>
                <h3 className="font-display text-2xl text-bone italic mb-4">The Standard</h3>
                <p className="text-ash leading-relaxed">
                  The infrastructure that major labels, independents, and AI companies align around. The protocol that makes ethical AI music possible at scale.
                </p>
              </div>
            </FadeInSection>
          </div>

          {/* Closing Statement */}
          <FadeInSection delay={0.7}>
            <div className="text-center pt-16 pb-8">
              <p className="text-lg text-ash mb-8">
                This is not a marketplace. This is not a tool.
              </p>
              <p className="text-xl md:text-2xl text-bone leading-relaxed font-light mb-16">
                This is the bridge where AI earns the right to your sound—or doesn't cross.
              </p>
              <div className="inline-block">
                <p className="font-display text-5xl md:text-6xl text-sovereign-emerald italic text-glow-emerald mb-4">
                  SOVN.
                </p>
                <p className="text-lg text-ash tracking-wide">
                  The protocol for the next century of sound.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sovereign-emerald/30 to-transparent" />
    </section>
  )
}
