import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hex-pattern overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-sovereign-emerald/5 via-transparent to-electric-gold/5" />

      {/* Animated Accent Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-sovereign-emerald/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-electric-gold/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Protocol Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-sovereign-emerald/30 mb-12"
        >
          <span className="w-2 h-2 bg-sovereign-emerald pulse-glow" />
          <span className="text-xs tracking-[0.3em] text-sovereign-emerald uppercase">Protocol Active</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-title font-display text-7xl md:text-9xl font-normal text-bone mb-8 tracking-tight"
        >
          SOVN
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-ash font-light mb-4 tracking-wide"
        >
          Your legacy. Your terms.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-display text-2xl md:text-3xl text-sovereign-emerald italic mb-16"
        >
          The protocol for the next century of sound.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link to="/artist" className="btn-sovereign text-sm">
            Enter as Artist
          </Link>
          <Link to="/developer" className="btn-sovereign btn-gold text-sm">
            Access the API
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <a href="#manifesto" className="flex flex-col items-center gap-2 text-ash hover:text-sovereign-emerald transition-colors">
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
