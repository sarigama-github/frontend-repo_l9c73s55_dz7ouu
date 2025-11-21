import React from 'react'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Problem from './components/Problem'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
            <a href="#" className="flex items-center gap-2 font-semibold">
              <span className="h-3 w-3 rounded-full bg-cyan-400"></span>
              <span>ForeverMedia</span>
            </a>
            <div className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#how" className="hover:text-white">How It Works</a>
              <a href="#apply" className="rounded-lg bg-white/5 px-3 py-1.5 text-white hover:bg-white/10">Request Access</a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <SocialProof />
        <div id="features">
          <Problem />
          <Features />
        </div>
        <div id="how">
          <HowItWorks />
        </div>
        <Testimonials />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/70 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} ForeverMedia — Performance Creator Network
      </footer>
    </div>
  )
}

export default App
