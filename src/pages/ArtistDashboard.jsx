import { useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Upload,
  Music,
  Settings,
  DollarSign,
  Activity,
  Menu,
  X,
  ChevronRight,
  FileAudio,
  Layers,
  Mic
} from 'lucide-react'
import Navigation from '../components/Navigation'

// Sidebar Component
function Sidebar({ isOpen, setIsOpen }) {
  const navItems = [
    { path: '/artist/upload', icon: Upload, label: 'Upload' },
    { path: '/artist/library', icon: Music, label: 'Library' },
    { path: '/artist/permissions', icon: Settings, label: 'Permissions' },
    { path: '/artist/payouts', icon: DollarSign, label: 'Payouts' },
    { path: '/artist/usage', icon: Activity, label: 'Usage Logs' },
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
              <div className="w-8 h-8 border border-sovereign-emerald flex items-center justify-center">
                <div className="w-2 h-2 bg-sovereign-emerald" />
              </div>
              <div>
                <span className="text-bone font-semibold">SOVN</span>
                <span className="text-xs text-sovereign-emerald block">Artist Portal</span>
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
                    ? 'bg-sovereign-emerald/10 border-l-2 border-sovereign-emerald text-sovereign-emerald'
                    : 'text-ash hover:text-bone hover:bg-obsidian-lighter border-l-2 border-transparent'
                }`
              }
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Stats Card */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-obsidian p-4 border border-obsidian-lighter">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-sovereign-emerald pulse-glow" />
              <span className="text-xs text-ash">Vault Status</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-ash">Tracks</span>
                <span className="text-bone">24</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ash">Stems</span>
                <span className="text-bone">156</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ash">Licensed</span>
                <span className="text-sovereign-emerald">18</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

// Upload Page
function UploadPage() {
  const [uploadType, setUploadType] = useState('track')
  const [dragActive, setDragActive] = useState(false)

  const uploadTypes = [
    { id: 'track', icon: FileAudio, label: 'Full Track' },
    { id: 'stems', icon: Layers, label: 'Stems' },
    { id: 'vocals', icon: Mic, label: 'Vocals' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-bone mb-2">Upload to Vault</h1>
        <p className="text-ash">Add your audio assets to the SOVN protocol.</p>
      </div>

      {/* Upload Type Selection */}
      <div className="grid grid-cols-3 gap-4">
        {uploadTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setUploadType(type.id)}
            className={`p-6 border transition-all duration-300 ${
              uploadType === type.id
                ? 'border-sovereign-emerald bg-sovereign-emerald/5'
                : 'border-obsidian-lighter hover:border-sovereign-emerald/50'
            }`}
          >
            <type.icon className={`w-6 h-6 mb-3 ${
              uploadType === type.id ? 'text-sovereign-emerald' : 'text-ash'
            }`} />
            <span className={`text-sm ${
              uploadType === type.id ? 'text-bone' : 'text-ash'
            }`}>
              {type.label}
            </span>
          </button>
        ))}
      </div>

      {/* Drop Zone */}
      <div
        onDragEnter={() => setDragActive(true)}
        onDragLeave={() => setDragActive(false)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => setDragActive(false)}
        className={`border-2 border-dashed p-16 text-center transition-all duration-300 ${
          dragActive
            ? 'border-sovereign-emerald bg-sovereign-emerald/5'
            : 'border-obsidian-lighter hover:border-sovereign-emerald/50'
        }`}
      >
        <Upload className="w-12 h-12 text-ash mx-auto mb-4" />
        <p className="text-bone mb-2">Drag and drop your files here</p>
        <p className="text-ash text-sm mb-6">WAV, FLAC, AIFF up to 500MB</p>
        <button className="btn-sovereign text-sm">
          Browse Files
        </button>
      </div>

      {/* Metadata Form */}
      <div className="bg-obsidian-light border border-obsidian-lighter p-6">
        <h3 className="text-lg text-bone mb-6">Track Metadata</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-ash mb-2">Track Title</label>
            <input type="text" className="input-sovereign" placeholder="Enter track title" />
          </div>
          <div>
            <label className="block text-sm text-ash mb-2">Artist Name</label>
            <input type="text" className="input-sovereign" placeholder="Your artist name" />
          </div>
          <div>
            <label className="block text-sm text-ash mb-2">Genre</label>
            <select className="input-sovereign">
              <option>Select genre</option>
              <option>Electronic</option>
              <option>Hip Hop</option>
              <option>R&B / Soul</option>
              <option>Afrobeats</option>
              <option>Jazz</option>
              <option>Classical</option>
              <option>Rock</option>
              <option>Pop</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-ash mb-2">BPM</label>
            <input type="number" className="input-sovereign" placeholder="120" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-ash mb-2">Description</label>
            <textarea className="input-sovereign h-24 resize-none" placeholder="Describe your track..."></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

// Library Page
function LibraryPage() {
  const tracks = [
    { id: 1, title: "Midnight Protocol", genre: "Electronic", bpm: 128, status: "licensed", licenses: 12 },
    { id: 2, title: "Sovereign State", genre: "Hip Hop", bpm: 92, status: "available", licenses: 0 },
    { id: 3, title: "Neural Dawn", genre: "Ambient", bpm: 85, status: "licensed", licenses: 8 },
    { id: 4, title: "Future Primitive", genre: "Afrobeats", bpm: 110, status: "available", licenses: 0 },
    { id: 5, title: "Consent Machine", genre: "Electronic", bpm: 140, status: "licensed", licenses: 23 },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-bone mb-2">Your Library</h1>
          <p className="text-ash">All your uploaded audio assets.</p>
        </div>
        <button className="btn-sovereign text-sm">
          <Upload className="w-4 h-4 inline mr-2" />
          Upload New
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <input type="text" className="input-sovereign max-w-xs" placeholder="Search tracks..." />
        <select className="input-sovereign max-w-[150px]">
          <option>All Types</option>
          <option>Tracks</option>
          <option>Stems</option>
          <option>Vocals</option>
        </select>
        <select className="input-sovereign max-w-[150px]">
          <option>All Status</option>
          <option>Licensed</option>
          <option>Available</option>
        </select>
      </div>

      {/* Track List */}
      <div className="border border-obsidian-lighter">
        <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-obsidian-lighter text-xs text-ash uppercase tracking-wider">
          <div className="col-span-5">Title</div>
          <div className="col-span-2">Genre</div>
          <div className="col-span-1">BPM</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Licenses</div>
        </div>
        {tracks.map((track) => (
          <div key={track.id} className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-obsidian-lighter hover:bg-obsidian-lighter/50 transition-colors cursor-pointer group">
            <div className="col-span-5 flex items-center gap-3">
              <div className="w-10 h-10 bg-obsidian border border-obsidian-lighter flex items-center justify-center group-hover:border-sovereign-emerald transition-colors">
                <Music className="w-4 h-4 text-ash" />
              </div>
              <span className="text-bone">{track.title}</span>
            </div>
            <div className="col-span-2 flex items-center text-ash">{track.genre}</div>
            <div className="col-span-1 flex items-center text-ash">{track.bpm}</div>
            <div className="col-span-2 flex items-center">
              <span className={`px-2 py-1 text-xs ${
                track.status === 'licensed'
                  ? 'bg-sovereign-emerald/10 text-sovereign-emerald'
                  : 'bg-ash/10 text-ash'
              }`}>
                {track.status}
              </span>
            </div>
            <div className="col-span-2 flex items-center justify-between text-ash">
              <span>{track.licenses}</span>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Permissions Page
function PermissionsPage() {
  const [trainingAllowed, setTrainingAllowed] = useState(true)
  const [generationAllowed, setGenerationAllowed] = useState(false)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-bone mb-2">AI Permissions</h1>
        <p className="text-ash">Control how AI can interact with your audio.</p>
      </div>

      {/* Global Settings */}
      <div className="bg-obsidian-light border border-obsidian-lighter p-8">
        <h3 className="text-lg text-bone mb-6">Global Default Permissions</h3>
        <p className="text-ash mb-8 text-sm">These settings apply to all new uploads. You can override per-track.</p>

        <div className="space-y-8">
          {/* Training Permission */}
          <div className="flex items-start justify-between gap-8 pb-8 border-b border-obsidian-lighter">
            <div>
              <h4 className="text-bone font-medium mb-2">AI Training</h4>
              <p className="text-ash text-sm max-w-lg">
                Allow AI models to learn from your audio. Models will be trained on your sound characteristics,
                patterns, and style without generating direct copies.
              </p>
            </div>
            <button
              onClick={() => setTrainingAllowed(!trainingAllowed)}
              className={`toggle-sovereign flex-shrink-0 ${trainingAllowed ? 'active' : ''}`}
            />
          </div>

          {/* Generation Permission */}
          <div className="flex items-start justify-between gap-8 pb-8 border-b border-obsidian-lighter">
            <div>
              <h4 className="text-bone font-medium mb-2">AI Generation</h4>
              <p className="text-ash text-sm max-w-lg">
                Allow AI systems to generate new audio that may be stylistically similar to your work.
                This includes voice cloning, style transfer, and sample generation.
              </p>
            </div>
            <button
              onClick={() => setGenerationAllowed(!generationAllowed)}
              className={`toggle-sovereign flex-shrink-0 ${generationAllowed ? 'active' : ''}`}
            />
          </div>

          {/* Pricing Tiers */}
          <div>
            <h4 className="text-bone font-medium mb-4">Licensing Price Tiers</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-obsidian-lighter">
                <span className="text-xs text-ash uppercase tracking-wider block mb-2">Standard</span>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl text-bone">$</span>
                  <input
                    type="number"
                    className="bg-transparent text-3xl text-bone font-semibold w-20 outline-none border-b border-obsidian-lighter focus:border-sovereign-emerald"
                    defaultValue="50"
                  />
                </div>
                <p className="text-ash text-xs">Per track, non-exclusive</p>
              </div>
              <div className="p-6 border border-sovereign-emerald/50 bg-sovereign-emerald/5">
                <span className="text-xs text-sovereign-emerald uppercase tracking-wider block mb-2">Premium</span>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl text-bone">$</span>
                  <input
                    type="number"
                    className="bg-transparent text-3xl text-bone font-semibold w-20 outline-none border-b border-sovereign-emerald focus:border-sovereign-emerald"
                    defaultValue="200"
                  />
                </div>
                <p className="text-ash text-xs">Per track, limited exclusivity</p>
              </div>
              <div className="p-6 border border-electric-gold/50 bg-electric-gold/5">
                <span className="text-xs text-electric-gold uppercase tracking-wider block mb-2">Enterprise</span>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl text-bone">$</span>
                  <input
                    type="number"
                    className="bg-transparent text-3xl text-bone font-semibold w-20 outline-none border-b border-electric-gold focus:border-electric-gold"
                    defaultValue="1000"
                  />
                </div>
                <p className="text-ash text-xs">Full exclusivity, custom terms</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="btn-sovereign text-sm">
        Save Permissions
      </button>
    </div>
  )
}

// Payouts Page
function PayoutsPage() {
  const payouts = [
    { id: 1, date: "2025-01-08", track: "Midnight Protocol", amount: 200, type: "Training License" },
    { id: 2, date: "2025-01-05", track: "Neural Dawn", amount: 50, type: "Standard License" },
    { id: 3, date: "2025-01-02", track: "Consent Machine", amount: 1000, type: "Enterprise License" },
    { id: 4, date: "2024-12-28", track: "Midnight Protocol", amount: 50, type: "Standard License" },
    { id: 5, date: "2024-12-20", track: "Future Primitive", amount: 200, type: "Premium License" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-bone mb-2">Payouts</h1>
        <p className="text-ash">Track your earnings from licensed audio.</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">Total Earned</span>
          <span className="text-3xl text-sovereign-emerald font-semibold">$4,280</span>
        </div>
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">This Month</span>
          <span className="text-3xl text-bone font-semibold">$1,250</span>
        </div>
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">Pending</span>
          <span className="text-3xl text-electric-gold font-semibold">$340</span>
        </div>
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">Total Licenses</span>
          <span className="text-3xl text-bone font-semibold">43</span>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-obsidian-light border border-obsidian-lighter">
        <div className="px-6 py-4 border-b border-obsidian-lighter">
          <h3 className="text-lg text-bone">Transaction History</h3>
        </div>
        <div className="divide-y divide-obsidian-lighter">
          {payouts.map((payout) => (
            <div key={payout.id} className="flex items-center justify-between px-6 py-4 hover:bg-obsidian-lighter/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-obsidian border border-sovereign-emerald/30 flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-sovereign-emerald" />
                </div>
                <div>
                  <p className="text-bone">{payout.track}</p>
                  <p className="text-ash text-sm">{payout.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sovereign-emerald font-semibold">+${payout.amount}</p>
                <p className="text-ash text-sm">{payout.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Usage Logs Page
function UsagePage() {
  const logs = [
    { id: 1, time: "2 hours ago", action: "Training Access", track: "Midnight Protocol", developer: "NeuralSound AI", api_calls: 1240 },
    { id: 2, time: "5 hours ago", action: "Generation Access", track: "Consent Machine", developer: "AudioGen Labs", api_calls: 89 },
    { id: 3, time: "1 day ago", action: "Training Access", track: "Neural Dawn", developer: "SynthAI Corp", api_calls: 3420 },
    { id: 4, time: "2 days ago", action: "Download", track: "Future Primitive", developer: "MusicML Inc", api_calls: 1 },
    { id: 5, time: "3 days ago", action: "Training Access", track: "Midnight Protocol", developer: "NeuralSound AI", api_calls: 2100 },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-bone mb-2">Usage Logs</h1>
        <p className="text-ash">Monitor how your audio is being accessed.</p>
      </div>

      {/* Usage Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">Total API Calls</span>
          <span className="text-3xl text-bone font-semibold">24.5K</span>
          <span className="text-sovereign-emerald text-sm ml-2">+12% this week</span>
        </div>
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">Active Developers</span>
          <span className="text-3xl text-bone font-semibold">8</span>
        </div>
        <div className="bg-obsidian-light border border-obsidian-lighter p-6">
          <span className="text-xs text-ash uppercase tracking-wider block mb-2">Most Accessed</span>
          <span className="text-xl text-bone">Midnight Protocol</span>
        </div>
      </div>

      {/* Log Table */}
      <div className="border border-obsidian-lighter">
        <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-obsidian-lighter text-xs text-ash uppercase tracking-wider">
          <div className="col-span-2">Time</div>
          <div className="col-span-2">Action</div>
          <div className="col-span-3">Track</div>
          <div className="col-span-3">Developer</div>
          <div className="col-span-2">API Calls</div>
        </div>
        {logs.map((log) => (
          <div key={log.id} className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-obsidian-lighter hover:bg-obsidian-lighter/50 transition-colors">
            <div className="col-span-2 text-ash text-sm">{log.time}</div>
            <div className="col-span-2">
              <span className={`px-2 py-1 text-xs ${
                log.action === 'Training Access'
                  ? 'bg-sovereign-emerald/10 text-sovereign-emerald'
                  : log.action === 'Generation Access'
                  ? 'bg-electric-gold/10 text-electric-gold'
                  : 'bg-ash/10 text-ash'
              }`}>
                {log.action}
              </span>
            </div>
            <div className="col-span-3 text-bone">{log.track}</div>
            <div className="col-span-3 text-ash">{log.developer}</div>
            <div className="col-span-2 text-ash">{log.api_calls.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Main Dashboard Layout
export default function ArtistDashboard() {
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
                <span className="w-2 h-2 bg-sovereign-emerald pulse-glow" />
                Vault Synced
              </span>
              <div className="w-8 h-8 bg-sovereign-emerald/20 border border-sovereign-emerald flex items-center justify-center text-sovereign-emerald text-sm font-medium">
                A
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
              <Route path="/" element={<Navigate to="/artist/upload" replace />} />
              <Route path="upload" element={<UploadPage />} />
              <Route path="library" element={<LibraryPage />} />
              <Route path="permissions" element={<PermissionsPage />} />
              <Route path="payouts" element={<PayoutsPage />} />
              <Route path="usage" element={<UsagePage />} />
            </Routes>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
