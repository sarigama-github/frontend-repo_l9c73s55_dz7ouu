import React from 'react'

const quotes = [
  {
    quote: 'Our game launch hit 120M views in a week. Paying only for verified views changed our strategy.',
    name: 'Maya K.',
    title: 'Sr. Marketing Manager, AAA Game Studio'
  },
  {
    quote: 'The speed is unreal — brief to live content in under 24 hours.',
    name: 'Jordan P.',
    title: 'Head of Growth, D2C Brand'
  },
  {
    quote: 'Finally, an antidote to bot farms. Clean, trustworthy metrics.',
    name: 'Alex R.',
    title: 'Digital Marketing Lead, Music Label'
  }
]

export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#0a0a0f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Loved by growth teams</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <blockquote key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 backdrop-blur">
              <p className="">“{q.quote}”</p>
              <footer className="mt-4 text-white/60">— {q.name}, {q.title}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
