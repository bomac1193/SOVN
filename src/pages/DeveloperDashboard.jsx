import { useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Search,
  Key,
  FileText,
  BarChart3,
  Menu,
  X,
  Filter,
  Play,
  Download,
  Copy,
  Check,
  ChevronRight,
  Music,
  Layers,
  Mic
} from 'lucide-react'

// Sidebar Component
function Sidebar({ isOpen, setIsOpen }) {
  const navItems = [
    { path: '/developer/browse', icon: Search, label: 'Browse Audio' },
    { path: '/developer/licenses', icon: FileText, label: 'My Licenses' },
    { path: '/developer/api-keys', icon: Key, label: 'API Keys' },
    { path: '/developer/usage', icon: BarChart3, label: 'Usage Reports' },
    { path: '/developer/docs', icon: FileText, label: 'Documentation' },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/80 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-obsidian-light border-r border-obsidian-lighter z-50 transform transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-obsidian-lighter">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-electric-gold flex items-center justify-center">
                <div className="w-2 h-2 bg-electric-gold" />
              </div>
              <div>
                <span className="text-bone font-semibold">SOVN</span>
                <span className="text-xs text-electric-gold block">Developer API</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-ash hover:text-bone"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? 'bg-electric-gold/10 border-l-2 border-electric-gold text-electric-gold'
                    : 'text-ash hover:text-bone hover:bg-obsidian-lighter border-l-2 border-transparent'
                }`
              }
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* API Status */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-obsidian p-4 border border-obsidian-lighter">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-electric-gold pulse-glow" />
              <span className="text-xs text-ash">API Status</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-ash">Requests Today</span>
                <span className="text-bone">2,847</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ash">Rate Limit</span>
                <span className="text-bone">10K/hr</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ash">Licensed Tracks</span>
                <span className="text-electric-gold">156</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

// Browse Page
function BrowsePage() {
  const [selectedType, setSelectedType] = useState('all')

  const tracks = [
    { id: 1, title: "Midnight Protocol", artist: "NKIRU", genre: "Electronic", bpm: 128, type: "track", mood: "Dark", training: true, generation: true, price: 50 },
    { id: 2, title: "Sovereign State (Drums)", artist: "KWAME", genre: "Hip Hop", bpm: 92, type: "stems", mood: "Hard", training: true, generation: false, price: 35 },
    { id: 3, title: "Neural Dawn", artist: "AURA", genre: "Ambient", bpm: 85, type: "track", mood: "Ethereal", training: true, generation: true, price: 75 },
    { id: 4, title: "Future Primitive (Vocals)", artist: "ZOLA", genre: "Afrobeats", bpm: 110, type: "vocals", mood: "Energetic", training: true, generation: true, price: 100 },
    { id: 5, title: "Consent Machine", artist: "CIPHER", genre: "Electronic", bpm: 140, type: "track", mood: "Aggressive", training: true, generation: false, price: 50 },
    { id: 6, title: "Digital Roots (Bass)", artist: "OSUN", genre: "Afrobeats", bpm: 105, type: "stems", mood: "Groovy", training: true, generation: true, price: 40 },
  ]

  const types = [
    { id: 'all', label: 'All', icon: Music },
    { id: 'track', label: 'Tracks', icon: Music },
    { id: 'stems', label: 'Stems', icon: Layers },
    { id: 'vocals', label: 'Vocals', icon: Mic },
  ]

  const filteredTracks = selectedType === 'all'
    ? tracks
    : tracks.filter(t => t.type === selectedType)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-bone mb-2">Browse Licensed Audio</h1>
        <p className="text-ash">Consent-verified, high-quality audio data for AI training and generation.</p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[300px]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ash" />
            <input
              type="text"
              className="input-sovereign pl-12"
              placeholder="Search by title, artist, genre..."
            />
          </div>
        </div>
        <select className="input-sovereign max-w-[150px]">
          <option>All Genres</option>
          <option>Electronic</option>
          <option>Hip Hop</option>
          <option>Afrobeats</option>
          <option>Ambient</option>
          <option>Jazz</option>
        </select>
        <select className="input-sovereign max-w-[150px]">
          <option>All Moods</option>
          <option>Dark</option>
          <option>Ethereal</option>
          <option>Energetic</option>
          <option>Aggressive</option>
        </select>
        <select className="input-sovereign max-w-[150px]">
          <option>Any BPM</option>
          <option>60-90 BPM</option>
          <option>90-120 BPM</option>
          <option>120-150 BPM</option>
          <option>150+ BPM</option>
        </select>
      </div>

      {/* Type Filter Pills */}
      <div className="flex gap-2">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`flex items-center gap-2 px-4 py-2 border transition-all duration-200 ${
              selectedType === type.id
                ? 'border-electric-gold bg-electric-gold/10 text-electric-gold'
                : 'border-obsidian-lighter text-ash hover:border-electric-gold/50'
            }`}
          >
            <type.icon className="w-4 h-4" />
            <span className="text-sm">{type.label}</span>
          </button>
        ))}
      </div>

      {/* Results Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTracks.map((track) => (
          <div
            key={track.id}
            className="group bg-obsidian-light border border-obsidian-lighter hover:border-electric-gold/50 transition-all duration-300"
          >
            {/* Track Visual */}
            <div className="aspect-video bg-obsidian relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-gold/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 bg-electric-gold/20 border border-electric-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-5 h-5 text-electric-gold ml-1" />
                </button>
              </div>
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 text-xs ${
                  track.type === 'track' ? 'bg-electric-gold/20 text-electric-gold' :
                  track.type === 'stems' ? 'bg-sovereign-emerald/20 text-sovereign-emerald' :
                  'bg-blood-red/20 text-blood-red'
                }`}>
                  {track.type}
                </span>
              </div>
              <div className="absolute top-3 right-3 flex gap-1">
                {track.training && (
                  <span className="px-2 py-1 text-xs bg-sovereign-emerald/20 text-sovereign-emerald">T</span>
                )}
                {track.generation && (
                  <span className="px-2 py-1 text-xs bg-electric-gold/20 text-electric-gold">G</span>
                )}
              </div>
            </div>

            {/* Track Info */}
            <div className="p-4">
              <h3 className="text-bone font-medium mb-1 truncate">{track.title}</h3>
              <p className="text-ash text-sm mb-3">{track.artist}</p>
              <div className="flex items-center justify-between text-xs text-ash mb-4">
                <span>{track.genre}</span>
                <span>{track.bpm} BPM</span>
                <span>{track.mood}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-electric-gold font-semibold">${track.price}</span>
                <button className="px-4 py-2 bg-electric-gold/10 border border-electric-gold text-electric-gold text-sm hover:bg-electric-gold hover:text-obsidian transition-all duration-200">
                  License
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// My Licenses Page
function LicensesPage() {
  const licenses = [
    { id: 1, title: "Midnight Protocol", artist: "NKIRU", licensed: "2025-01-05", expires: "2026-01-05", type: "Standard", training: true, generation: true },
    { id: 2, title: "Neural Dawn", artist: "AURA", licensed: "2025-01-02", expires: "2026-01-02", type: "Premium", training: true, generation: true },
    { id: 3, title: "Sovereign State (Drums)", artist: "KWAME", licensed: "2024-12-15", expires: "2025-12-15", type: "Standard", training: true, generation: false },
    { id: 4, title: "Future Primitive (Vocals)", artist: "ZOLA", licensed: "2024-12-10", expires: "2025-12-10", type: "Enterprise", training: true, generation: true },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-bone mb-2">My Licenses</h1>
        <p className="text-ash">Manage your licensed audio assets.</p>
      </div>

      {/* License Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">Total Licenses</span>
          <span className="text-3xl text-bone font-semibold">156</span>
        </div>
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">Training Enabled</span>
          <span className="text-3xl text-sovereign-emerald font-semibold">142</span>
        </div>
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">Generation Enabled</span>
          <span className="text-3xl text-electric-gold font-semibold">89</span>
        </div>
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">Expiring Soon</span>
          <span className="text-3xl text-blood-red font-semibold">3</span>
        </div>
      </div>

      {/* License List */}
      <div className="border border-obsidian-lighter">
        <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-obsidian-lighter text-xs text-ash uppercase tracking-wider">
          <div className="col-span-4">Asset</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-2">Permissions</div>
          <div className="col-span-2">Licensed</div>
          <div className="col-span-2">Expires</div>
        </div>
        {licenses.map((license) => (
          <div key={license.id} className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-obsidian-lighter hover:bg-obsidian-lighter/50 transition-colors group">
            <div className="col-span-4">
              <p className="text-bone">{license.title}</p>
              <p className="text-ash text-sm">{license.artist}</p>
            </div>
            <div className="col-span-2 flex items-center">
              <span className={`px-2 py-1 text-xs ${
                license.type === 'Enterprise' ? 'bg-electric-gold/10 text-electric-gold' :
                license.type === 'Premium' ? 'bg-sovereign-emerald/10 text-sovereign-emerald' :
                'bg-ash/10 text-ash'
              }`}>
                {license.type}
              </span>
            </div>
            <div className="col-span-2 flex items-center gap-2">
              {license.training && (
                <span className="px-2 py-1 text-xs bg-sovereign-emerald/10 text-sovereign-emerald" title="Training Allowed">T</span>
              )}
              {license.generation && (
                <span className="px-2 py-1 text-xs bg-electric-gold/10 text-electric-gold" title="Generation Allowed">G</span>
              )}
            </div>
            <div className="col-span-2 flex items-center text-ash text-sm">{license.licensed}</div>
            <div className="col-span-2 flex items-center justify-between text-ash text-sm">
              <span>{license.expires}</span>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Download className="w-4 h-4 text-electric-gold" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// API Keys Page
function ApiKeysPage() {
  const [copied, setCopied] = useState(null)

  const keys = [
    { id: 1, name: "Production", key: "sovn_live_sk_1a2b3c4d5e6f7g8h9i0j", created: "2024-11-15", lastUsed: "2 hours ago", status: "active" },
    { id: 2, name: "Development", key: "sovn_test_sk_9z8y7x6w5v4u3t2s1r0q", created: "2024-12-01", lastUsed: "5 days ago", status: "active" },
    { id: 3, name: "Staging", key: "sovn_test_sk_a1b2c3d4e5f6g7h8i9j0", created: "2024-12-20", lastUsed: "Never", status: "inactive" },
  ]

  const handleCopy = (id, key) => {
    navigator.clipboard.writeText(key)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-bone mb-2">API Keys</h1>
          <p className="text-ash">Manage your API authentication keys.</p>
        </div>
        <button className="btn-sovereign btn-gold text-sm">
          Generate New Key
        </button>
      </div>

      {/* Keys List */}
      <div className="space-y-4">
        {keys.map((apiKey) => (
          <div key={apiKey.id} className="bg-obsidian-light border border-obsidian-lighter p-6 hover:border-electric-gold/30 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-bone font-medium">{apiKey.name}</h3>
                  <span className={`px-2 py-0.5 text-xs ${
                    apiKey.status === 'active'
                      ? 'bg-sovereign-emerald/10 text-sovereign-emerald'
                      : 'bg-ash/10 text-ash'
                  }`}>
                    {apiKey.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-sm text-ash font-mono bg-obsidian px-3 py-1.5">
                    {apiKey.key.slice(0, 20)}...{apiKey.key.slice(-4)}
                  </code>
                  <button
                    onClick={() => handleCopy(apiKey.id, apiKey.key)}
                    className="p-2 hover:bg-obsidian-lighter transition-colors"
                  >
                    {copied === apiKey.id ? (
                      <Check className="w-4 h-4 text-sovereign-emerald" />
                    ) : (
                      <Copy className="w-4 h-4 text-ash" />
                    )}
                  </button>
                </div>
              </div>
              <button className="text-blood-red text-sm hover:underline">Revoke</button>
            </div>
            <div className="flex gap-6 text-sm text-ash">
              <span>Created: {apiKey.created}</span>
              <span>Last used: {apiKey.lastUsed}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Security Note */}
      <div className="bg-blood-red/5 border border-blood-red/20 p-6">
        <h4 className="text-blood-red font-medium mb-2">Security Notice</h4>
        <p className="text-ash text-sm">
          Keep your API keys secure. Never expose them in client-side code or public repositories.
          Rotate keys periodically and revoke any that may have been compromised.
        </p>
      </div>
    </div>
  )
}

// Usage Reports Page
function UsageReportsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-bone mb-2">Usage Reports</h1>
        <p className="text-ash">Monitor your API usage and consumption.</p>
      </div>

      {/* Usage Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">Requests Today</span>
          <span className="text-3xl text-bone font-semibold">2,847</span>
          <span className="text-sovereign-emerald text-sm ml-2">+18%</span>
        </div>
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">This Month</span>
          <span className="text-3xl text-bone font-semibold">89.2K</span>
        </div>
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">Audio Downloaded</span>
          <span className="text-3xl text-bone font-semibold">42.8 GB</span>
        </div>
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">Avg Latency</span>
          <span className="text-3xl text-sovereign-emerald font-semibold">124ms</span>
        </div>
      </div>

      {/* Usage Chart Placeholder */}
      <div className="bg-obsidian-light border border-obsidian-lighter p-8">
        <h3 className="text-lg text-bone mb-6">API Requests (Last 30 Days)</h3>
        <div className="h-64 flex items-end justify-between gap-2">
          {Array.from({ length: 30 }, (_, i) => {
            const height = Math.random() * 80 + 20
            return (
              <div
                key={i}
                className="flex-1 bg-electric-gold/20 hover:bg-electric-gold/40 transition-colors"
                style={{ height: `${height}%` }}
              />
            )
          })}
        </div>
        <div className="flex justify-between text-xs text-ash mt-4">
          <span>30 days ago</span>
          <span>Today</span>
        </div>
      </div>

      {/* Endpoint Breakdown */}
      <div className="bg-obsidian-light border border-obsidian-lighter">
        <div className="px-6 py-4 border-b border-obsidian-lighter">
          <h3 className="text-lg text-bone">Endpoint Breakdown</h3>
        </div>
        <div className="divide-y divide-obsidian-lighter">
          {[
            { endpoint: '/v1/audio/search', calls: 45230, percentage: 42 },
            { endpoint: '/v1/audio/download', calls: 28420, percentage: 26 },
            { endpoint: '/v1/audio/metadata', calls: 18920, percentage: 18 },
            { endpoint: '/v1/licenses/verify', calls: 15340, percentage: 14 },
          ].map((item) => (
            <div key={item.endpoint} className="px-6 py-4">
              <div className="flex items-center justify-between mb-2">
                <code className="text-sm text-bone font-mono">{item.endpoint}</code>
                <span className="text-ash text-sm">{item.calls.toLocaleString()} calls</span>
              </div>
              <div className="w-full h-2 bg-obsidian">
                <div
                  className="h-full bg-electric-gold"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Documentation Page
function DocsPage() {
  const [copied, setCopied] = useState(null)

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const codeExamples = {
    search: `curl -X GET "https://api.sovn.io/v1/audio/search" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "genre": "electronic",
    "bpm_min": 120,
    "bpm_max": 140,
    "type": "stems",
    "training_allowed": true
  }'`,
    download: `curl -X GET "https://api.sovn.io/v1/audio/{asset_id}/download" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -o "track.wav"`,
    license: `curl -X POST "https://api.sovn.io/v1/licenses" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "asset_id": "asset_123abc",
    "license_type": "standard",
    "usage": ["training", "generation"]
  }'`,
    verify: `curl -X GET "https://api.sovn.io/v1/licenses/{license_id}/verify" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-bone mb-2">API Documentation</h1>
        <p className="text-ash">Everything you need to integrate SOVN into your AI pipeline.</p>
      </div>

      {/* Quick Start */}
      <div className="bg-obsidian-light border border-electric-gold/30 p-8">
        <h3 className="text-xl text-bone mb-4">Quick Start</h3>
        <p className="text-ash mb-6">
          The SOVN API provides RESTful endpoints for searching, licensing, and downloading
          consent-verified audio data. All requests require authentication via API key.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-ash">Base URL:</span>
          <code className="text-electric-gold font-mono bg-obsidian px-3 py-1.5">
            https://api.sovn.io/v1
          </code>
        </div>
      </div>

      {/* Endpoints */}
      <div className="space-y-6">
        <h3 className="text-xl text-bone">Endpoints</h3>

        {/* Search */}
        <div className="bg-obsidian-light border border-obsidian-lighter">
          <div className="px-6 py-4 border-b border-obsidian-lighter flex items-center gap-4">
            <span className="px-2 py-1 bg-sovereign-emerald/20 text-sovereign-emerald text-xs font-mono">GET</span>
            <code className="text-bone font-mono">/audio/search</code>
            <span className="text-ash text-sm ml-auto">Search and filter audio assets</span>
          </div>
          <div className="p-6">
            <h4 className="text-sm text-ash uppercase tracking-wider mb-4">Parameters</h4>
            <div className="space-y-3 mb-6">
              {[
                { name: 'genre', type: 'string', desc: 'Filter by genre (electronic, hiphop, afrobeats, etc.)' },
                { name: 'type', type: 'string', desc: 'Asset type: track, stems, vocals' },
                { name: 'bpm_min / bpm_max', type: 'integer', desc: 'BPM range filter' },
                { name: 'training_allowed', type: 'boolean', desc: 'Filter by training permission' },
                { name: 'generation_allowed', type: 'boolean', desc: 'Filter by generation permission' },
              ].map((param) => (
                <div key={param.name} className="flex items-start gap-4">
                  <code className="text-electric-gold font-mono text-sm min-w-[160px]">{param.name}</code>
                  <span className="text-ash text-xs bg-obsidian px-2 py-0.5">{param.type}</span>
                  <span className="text-ash text-sm">{param.desc}</span>
                </div>
              ))}
            </div>
            <div className="relative">
              <pre className="bg-obsidian p-4 text-sm text-ash font-mono overflow-x-auto">
                {codeExamples.search}
              </pre>
              <button
                onClick={() => handleCopy('search', codeExamples.search)}
                className="absolute top-4 right-4 p-2 hover:bg-obsidian-lighter transition-colors"
              >
                {copied === 'search' ? (
                  <Check className="w-4 h-4 text-sovereign-emerald" />
                ) : (
                  <Copy className="w-4 h-4 text-ash" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Download */}
        <div className="bg-obsidian-light border border-obsidian-lighter">
          <div className="px-6 py-4 border-b border-obsidian-lighter flex items-center gap-4">
            <span className="px-2 py-1 bg-sovereign-emerald/20 text-sovereign-emerald text-xs font-mono">GET</span>
            <code className="text-bone font-mono">/audio/{'{asset_id}'}/download</code>
            <span className="text-ash text-sm ml-auto">Download licensed audio file</span>
          </div>
          <div className="p-6">
            <div className="relative">
              <pre className="bg-obsidian p-4 text-sm text-ash font-mono overflow-x-auto">
                {codeExamples.download}
              </pre>
              <button
                onClick={() => handleCopy('download', codeExamples.download)}
                className="absolute top-4 right-4 p-2 hover:bg-obsidian-lighter transition-colors"
              >
                {copied === 'download' ? (
                  <Check className="w-4 h-4 text-sovereign-emerald" />
                ) : (
                  <Copy className="w-4 h-4 text-ash" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* License */}
        <div className="bg-obsidian-light border border-obsidian-lighter">
          <div className="px-6 py-4 border-b border-obsidian-lighter flex items-center gap-4">
            <span className="px-2 py-1 bg-electric-gold/20 text-electric-gold text-xs font-mono">POST</span>
            <code className="text-bone font-mono">/licenses</code>
            <span className="text-ash text-sm ml-auto">Create a new license for an asset</span>
          </div>
          <div className="p-6">
            <div className="relative">
              <pre className="bg-obsidian p-4 text-sm text-ash font-mono overflow-x-auto">
                {codeExamples.license}
              </pre>
              <button
                onClick={() => handleCopy('license', codeExamples.license)}
                className="absolute top-4 right-4 p-2 hover:bg-obsidian-lighter transition-colors"
              >
                {copied === 'license' ? (
                  <Check className="w-4 h-4 text-sovereign-emerald" />
                ) : (
                  <Copy className="w-4 h-4 text-ash" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Verify */}
        <div className="bg-obsidian-light border border-obsidian-lighter">
          <div className="px-6 py-4 border-b border-obsidian-lighter flex items-center gap-4">
            <span className="px-2 py-1 bg-sovereign-emerald/20 text-sovereign-emerald text-xs font-mono">GET</span>
            <code className="text-bone font-mono">/licenses/{'{license_id}'}/verify</code>
            <span className="text-ash text-sm ml-auto">Verify license validity and permissions</span>
          </div>
          <div className="p-6">
            <div className="relative">
              <pre className="bg-obsidian p-4 text-sm text-ash font-mono overflow-x-auto">
                {codeExamples.verify}
              </pre>
              <button
                onClick={() => handleCopy('verify', codeExamples.verify)}
                className="absolute top-4 right-4 p-2 hover:bg-obsidian-lighter transition-colors"
              >
                {copied === 'verify' ? (
                  <Check className="w-4 h-4 text-sovereign-emerald" />
                ) : (
                  <Copy className="w-4 h-4 text-ash" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Response Format */}
      <div className="bg-obsidian-light border border-obsidian-lighter p-6">
        <h3 className="text-lg text-bone mb-4">Response Format</h3>
        <p className="text-ash text-sm mb-4">All responses are returned as JSON with the following structure:</p>
        <pre className="bg-obsidian p-4 text-sm text-ash font-mono overflow-x-auto">
{`{
  "success": true,
  "data": { ... },
  "meta": {
    "request_id": "req_abc123",
    "timestamp": "2025-01-09T12:00:00Z"
  }
}`}
        </pre>
      </div>

      {/* Rate Limits */}
      <div className="bg-obsidian-light border border-obsidian-lighter p-6">
        <h3 className="text-lg text-bone mb-4">Rate Limits</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <span className="text-xs text-ash uppercase tracking-wider block mb-2">Standard</span>
            <span className="text-2xl text-bone font-semibold">1,000</span>
            <span className="text-ash text-sm block">requests/hour</span>
          </div>
          <div>
            <span className="text-xs text-ash uppercase tracking-wider block mb-2">Premium</span>
            <span className="text-2xl text-sovereign-emerald font-semibold">10,000</span>
            <span className="text-ash text-sm block">requests/hour</span>
          </div>
          <div>
            <span className="text-xs text-ash uppercase tracking-wider block mb-2">Enterprise</span>
            <span className="text-2xl text-electric-gold font-semibold">Unlimited</span>
            <span className="text-ash text-sm block">custom SLA</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Dashboard Layout
export default function DeveloperDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-obsidian">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-obsidian/80 backdrop-blur-sm border-b border-obsidian-lighter px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-ash hover:text-bone"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-4 ml-auto">
              <span className="flex items-center gap-2 text-sm text-ash">
                <span className="w-2 h-2 bg-electric-gold pulse-glow" />
                API Connected
              </span>
              <div className="w-8 h-8 bg-electric-gold/20 border border-electric-gold flex items-center justify-center text-electric-gold text-sm font-medium">
                D
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 md:p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/developer/browse" replace />} />
              <Route path="browse" element={<BrowsePage />} />
              <Route path="licenses" element={<LicensesPage />} />
              <Route path="api-keys" element={<ApiKeysPage />} />
              <Route path="usage" element={<UsageReportsPage />} />
              <Route path="docs" element={<DocsPage />} />
            </Routes>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
