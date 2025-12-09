import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ArtistDashboard from './pages/ArtistDashboard'
import DeveloperDashboard from './pages/DeveloperDashboard'

function App() {
  return (
    <>
      <div className="noise-overlay" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/artist/*" element={<ArtistDashboard />} />
        <Route path="/developer/*" element={<DeveloperDashboard />} />
      </Routes>
    </>
  )
}

export default App
