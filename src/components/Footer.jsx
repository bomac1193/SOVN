import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative py-24 bg-obsidian-light border-t border-obsidian-lighter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-sovereign-emerald flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-sovereign-emerald" fill="currentColor">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19 8l-7 3.5L5 8l7-3.5zM4 9.5l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z"/>
                </svg>
              </div>
              <span className="text-xl font-semibold tracking-wider text-bone">SOVN</span>
            </Link>
            <p className="text-ash max-w-sm leading-relaxed mb-6">
              The consent layer between human creativity and artificial intelligence.
              Your legacy. Your terms.
            </p>
            <p className="font-display text-lg text-sovereign-emerald italic">
              The protocol for the next century of sound.
            </p>
          </div>

          {/* Protocol */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-bone uppercase mb-6">Protocol</h4>
            <ul className="space-y-4">
              <li>
                <a href="#manifesto" className="text-ash hover:text-sovereign-emerald transition-colors hover-underline inline-block">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-ash hover:text-sovereign-emerald transition-colors hover-underline inline-block">
                  How It Works
                </a>
              </li>
              <li>
                <Link to="/artist" className="text-ash hover:text-sovereign-emerald transition-colors hover-underline inline-block">
                  Artist Portal
                </Link>
              </li>
              <li>
                <Link to="/developer" className="text-ash hover:text-sovereign-emerald transition-colors hover-underline inline-block">
                  Developer API
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-bone uppercase mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-ash hover:text-sovereign-emerald transition-colors hover-underline inline-block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-ash hover:text-sovereign-emerald transition-colors hover-underline inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-ash hover:text-sovereign-emerald transition-colors hover-underline inline-block">
                  Licensing Agreement
                </a>
              </li>
              <li>
                <a href="#" className="text-ash hover:text-sovereign-emerald transition-colors hover-underline inline-block">
                  API Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-obsidian-lighter flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ash text-sm">
            &copy; {new Date().getFullYear()} SOVN Protocol. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-sm text-ash">
              <span className="w-2 h-2 bg-sovereign-emerald pulse-glow" />
              Protocol Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
