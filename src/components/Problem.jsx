import React from 'react'
import { ShieldAlert, Timer, Bug } from 'lucide-react'

export default function Problem() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-[#0a0a0f] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(168,85,247,0.15),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Traditional influencer marketing is broken</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Long negotiations. Upfront fees. Fake traffic. Campaigns that miss the cultural moment.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <Timer className="h-6 w-6 text-cyan-300" />
            <h3 className="mt-3 text-lg font-semibold">Slow to launch</h3>
            <p className="mt-1 text-sm text-white/70">Weeks of back-and-forth means you miss the trend while it’s hot.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <Bug className="h-6 w-6 text-purple-300" />
            <h3 className="mt-3 text-lg font-semibold">Bot traffic</h3>
            <p className="mt-1 text-sm text-white/70">Shady networks inflate numbers, you pay for views that aren’t real.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <ShieldAlert className="h-6 w-6 text-blue-300" />
            <h3 className="mt-3 text-lg font-semibold">Upfront risk</h3>
            <p className="mt-1 text-sm text-white/70">Pay large fees before seeing results and hope it performs.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
