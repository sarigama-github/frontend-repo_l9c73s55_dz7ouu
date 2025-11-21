import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for mood (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.25),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.25),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
          <Sparkles className="h-4 w-4 text-cyan-400" />
          <span className="text-xs font-medium tracking-wide text-cyan-200">Performance-Based Creator Marketing</span>
        </div>

        <h1 className="max-w-4xl bg-gradient-to-br from-white via-white to-cyan-200 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-6xl md:text-7xl">
          Viral Creator Campaigns
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          Connect your brand with a battle-tested network of video creators. Pay only for verified views. No bots. No risk.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#apply" className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgb(59,130,246,0.4)] transition-transform hover:scale-[1.02]">
            Start a Campaign
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#apply" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
            Join as Creator
          </a>
        </div>

        {/* Sub copy */}
        <p className="mt-6 text-xs text-white/60">For brands, games, and music artists who want real, viral UGC at scale</p>
      </div>
    </section>
  )
}
