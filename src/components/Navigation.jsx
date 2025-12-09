import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navigation({ variant = 'landing' }) {
  const location = useLocation()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 border border-sovereign-emerald flex items-center justify-center group-hover:bg-sovereign-emerald transition-colors duration-300">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-sovereign-emerald group-hover:text-obsidian transition-colors duration-300" fill="currentColor">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19 8l-7 3.5L5 8l7-3.5zM4 9.5l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z"/>
            </svg>
          </div>
          <span className="text-xl font-semibold tracking-wider text-bone">SOVN</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {variant === 'landing' && (
            <>
              <a href="#manifesto" className="text-ash hover:text-bone transition-colors text-sm tracking-wide hover-underline">
                Manifesto
              </a>
              <a href="#how-it-works" className="text-ash hover:text-bone transition-colors text-sm tracking-wide hover-underline">
                Protocol
              </a>
              <a href="#artists" className="text-ash hover:text-bone transition-colors text-sm tracking-wide hover-underline">
                For Artists
              </a>
              <a href="#developers" className="text-ash hover:text-bone transition-colors text-sm tracking-wide hover-underline">
                For Developers
              </a>
            </>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          {variant === 'landing' ? (
            <>
              <Link
                to="/artist"
                className="hidden sm:block text-sm text-sovereign-emerald border border-sovereign-emerald px-4 py-2 hover:bg-sovereign-emerald hover:text-obsidian transition-all duration-300"
              >
                Artist Portal
              </Link>
              <Link
                to="/developer"
                className="text-sm text-electric-gold border border-electric-gold px-4 py-2 hover:bg-electric-gold hover:text-obsidian transition-all duration-300"
              >
                Developer API
              </Link>
            </>
          ) : (
            <Link
              to="/"
              className="text-sm text-ash hover:text-bone transition-colors"
            >
              Back to SOVN
            </Link>
          )}
        </div>
      </div>
    </motion.nav>
  )
}
