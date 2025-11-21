import React from 'react'
import { BadgeDollarSign, BrainCircuit, Rocket } from 'lucide-react'

const features = [
  {
    icon: BadgeDollarSign,
    title: 'Pay-Per-View pricing',
    desc: 'Only pay for real, verified views. Zero upfront fees. Predictable ROI.'
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Fraud Detection',
    desc: 'Advanced models flag anomalies and block bots across platforms.'
  },
  {
    icon: Rocket,
    title: 'Launch in Hours, not Weeks',
    desc: 'Spin up a campaign, match with creators, and go live the same day.'
  }
]

export default function Features() {
  return (
    <section className="relative w-full bg-[#0a0a0f] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">The Solution</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Data-driven creator campaigns built for speed, scale, and trust.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:bg-white/[0.09]">
              <Icon className="h-7 w-7 text-cyan-300" />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
