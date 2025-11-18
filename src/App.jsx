import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(59,130,246,0.25),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} anthrowebs — All rights reserved.</p>
          <div className="text-sm text-slate-400">Based in Earth • Available worldwide</div>
        </div>
      </footer>
    </div>
  )
}

export default App