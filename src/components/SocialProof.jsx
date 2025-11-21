import React from 'react'

const logos = [
  { name: 'HyperX', src: 'https://dummyimage.com/120x40/ffffff/000000&text=HyperX' },
  { name: 'Riot', src: 'https://dummyimage.com/100x40/ffffff/000000&text=Riot' },
  { name: 'Sony', src: 'https://dummyimage.com/100x40/ffffff/000000&text=Sony' },
  { name: 'EA', src: 'https://dummyimage.com/80x40/ffffff/000000&text=EA' },
  { name: 'Spotify', src: 'https://dummyimage.com/120x40/ffffff/000000&text=Spotify' },
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

        <div className="mt-10 grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <img src={logo.src} alt={logo.name} className="h-6 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
