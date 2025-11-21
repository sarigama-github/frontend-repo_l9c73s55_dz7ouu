import React, { useState } from 'react'

// Brand logos using Simple Icons. For dark backgrounds, some brands default to black; we override
// those with visible colors and add a matching glow on hover.
const logos = [
  { name: 'Spotify', slug: 'spotify', color: '1DB954', glow: '#1DB95480' },
  { name: 'Riot Games', slug: 'riotgames', color: null, glow: '#D3293680' },
  // Sony defaults to black; force white for visibility and give it a cool blue glow
  { name: 'Sony', slug: 'sony', color: 'FFFFFF', glow: '#60A5FA80' },
  // Electronic Arts also trends black; use a visible red accent for dark mode
  { name: 'Electronic Arts', slug: 'ea', color: 'EA1D2D', glow: '#EA1D2D80' },
  { name: 'HyperX', slug: 'hyperx', color: null, glow: '#E01F3D80' },
]

export default function SocialProof() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="relative w-full bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur md:grid-cols-3">
          <div className="text-2xl font-extrabold text-cyan-300">$2M+ Paid to Creators</div>
          <div className="text-2xl font-extrabold text-purple-300">40B+ Organic Views</div>
          <div className="text-2xl font-extrabold text-blue-300">Trusted by Top Brands</div>
        </div>

        <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((logo, i) => {
            const src = `https://cdn.simpleicons.org/${logo.slug}${logo.color ? `/${logo.color}` : ''}`
            return (
              <div
                key={logo.slug}
                className="flex items-center justify-center rounded-lg transition-transform duration-300"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ boxShadow: hovered === i ? `0 0 24px ${logo.glow}` : 'none' }}
              >
                <img
                  src={src}
                  alt={`${logo.name} logo`}
                  className="h-8 w-auto opacity-95 transition-all duration-300 hover:opacity-100 md:h-9 lg:h-10"
                  loading="lazy"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
