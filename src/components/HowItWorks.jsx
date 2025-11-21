import React from 'react'
import { Wallet, CheckCircle2, Users, Cpu } from 'lucide-react'

const steps = [
  { icon: Wallet, title: 'Set budget', desc: 'Define goals and pay-per-view cap.' },
  { icon: Users, title: 'Creators submit', desc: 'Brief goes live to our network.' },
  { icon: Cpu, title: 'AI verifies views', desc: 'Real-time fraud detection and deduping.' },
  { icon: CheckCircle2, title: 'Everyone gets paid', desc: 'Seamless payouts based on verified views.' }
]

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">How it works</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 pb-8 backdrop-blur">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
