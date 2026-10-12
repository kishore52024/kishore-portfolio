import { lazy, Suspense, useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Resume } from './components/Resume'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { LoadingScreen } from './components/LoadingScreen'

// Lazy-load heavy 3D scene to improve initial load
const Scene3D = lazy(() => import('./components/3d/Scene3D'))

function App() {
  const [loading, setLoading] = useState(true)
  const [webglSupported, setWebglSupported] = useState(true)

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) setWebglSupported(false)
    } catch {
      setWebglSupported(false)
    }

    // Minimum loading time for polish
    const timer = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen bg-navy-950 text-slate-100">
      {/* Background 3D scene — only on capable devices */}
      {webglSupported && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </div>
      )}

      {/* Atmospheric gradient overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950/80" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.06)_0%,_transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
