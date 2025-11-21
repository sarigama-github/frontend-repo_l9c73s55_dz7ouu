import React from 'react'

// Using Simple Icons CDN with native brand colors
// List of supported brands: https://simpleicons.org/
const logos = [
  { name: 'Spotify', slug: 'spotify' },
  { name: 'Riot Games', slug: 'riotgames' },
  { name: 'Sony', slug: 'sony' },
  { name: 'Electronic Arts', slug: 'ea' },
  { name: 'HyperX', slug: 'hyperx' },
]

export default function SocialProof() {
  return (
    <section className="relative w-full bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur md:grid-cols-3">
          <div className="text-2xl font-extrabold text-cyan-300">$2M+ Paid to Creators</div>
          <div className="text-2xl font-extrabold text-purple-300">40B+ Organic Views</div>
          <div className="text-2xl font-extrabold text-blue-300">Trusted by Top Brands</div>
        </div>

        <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo.slug} className="flex items-center justify-center">
              <img
                src={`https://cdn.simpleicons.org/${logo.slug}`}
                alt={`${logo.name} logo`}
                className="h-7 w-auto opacity-95 transition-all duration-300 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
