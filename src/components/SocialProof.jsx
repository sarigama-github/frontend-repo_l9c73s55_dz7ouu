import React, { useMemo, useState } from 'react'

// Brand logos using Simple Icons. For dark backgrounds, some brands default to black; we override
// those with visible colors. We also add an outline-following glow with CSS drop-shadow.
const logos = [
  { name: 'Spotify', slug: 'spotify', color: '1DB954', glow: '#1DB954', intensity: 1.0 },
  { name: 'Riot Games', slug: 'riotgames', color: null, glow: '#D32936', intensity: 0.9 },
  // Sony defaults to black; force white for visibility and give it a cool blue glow
  { name: 'Sony', slug: 'sony', color: 'FFFFFF', glow: '#60A5FA', intensity: 0.8 },
  // Electronic Arts also trends black; use a visible red accent for dark mode
  { name: 'Electronic Arts', slug: 'ea', color: 'EA1D2D', glow: '#EA1D2D', intensity: 1.0 },
  { name: 'HyperX', slug: 'hyperx', color: null, glow: '#E01F3D', intensity: 1.0 },
]

function hexToRgb(hex) {
  const clean = hex.replace('#', '')
  const bigint = parseInt(clean, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return { r, g, b }
}

function rgba(hex, a) {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export default function SocialProof() {
  const [hovered, setHovered] = useState(null)
  const [colorMode, setColorMode] = useState('native') // 'native' | 'mono'
  const [paused, setPaused] = useState(false)

  const monoColor = '#6EE7F9' // neon cyan for monochrome mode glows

  const marqueeList = useMemo(() => [...logos, ...logos, ...logos], [])

  return (
    <section className="relative w-full bg-black py-12 text-white">
      {/* Local keyframes for marquee */}
      <style>{`
        @keyframes fm-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur md:grid-cols-3">
          <div className="text-2xl font-extrabold text-cyan-300">$2M+ Paid to Creators</div>
          <div className="text-2xl font-extrabold text-purple-300">40B+ Organic Views</div>
          <div className="text-2xl font-extrabold text-blue-300">Trusted by Top Brands</div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-end gap-2">
          <button
            onClick={() => setColorMode('native')}
            className={`rounded-full px-3 py-1 text-sm transition ${
              colorMode === 'native'
                ? 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/40'
                : 'bg-white/5 text-white/70 hover:text-white'
            }`}
          >
            Native colors
          </button>
          <button
            onClick={() => setColorMode('mono')}
            className={`rounded-full px-3 py-1 text-sm transition ${
              colorMode === 'mono'
                ? 'bg-purple-500/20 text-purple-300 ring-1 ring-purple-400/40'
                : 'bg-white/5 text-white/70 hover:text-white'
            }`}
          >
            Monochrome
          </button>
        </div>

        {/* Marquee row */}
        <div
          className="mt-8 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex min-w-max items-center gap-10"
            style={{
              width: '200%',
              animation: 'fm-marquee 25s linear infinite',
              animationPlayState: paused ? 'paused' : 'running',
            }}
          >
            {/* Render two halves identical for seamless loop */}
            {[0, 1].map((half) => (
              <div key={half} className="flex min-w-max items-center gap-10 pr-10">
                {marqueeList.map((logo, i) => {
                  const isHovered = hovered === `${half}-${i}`

                  const src = `https://cdn.simpleicons.org/${logo.slug}${
                    colorMode === 'native' ? (logo.color ? `/${logo.color}` : '') : '/FFFFFF'
                  }`

                  const baseGlow = colorMode === 'native' ? logo.glow : monoColor
                  const intensity = logo.intensity ?? 1

                  const filter = isHovered
                    ? [
                        `drop-shadow(0 0 4px ${rgba(baseGlow, 0.25 * intensity)})`,
                        `drop-shadow(0 0 10px ${rgba(baseGlow, 0.35 * intensity)})`,
                        `drop-shadow(0 0 18px ${rgba(baseGlow, 0.5 * intensity)})`,
                      ].join(' ')
                    : 'drop-shadow(0 0 0px transparent)'

                  return (
                    <div
                      key={`${logo.slug}-${half}-${i}`}
                      className="group flex items-center justify-center transition-transform duration-300"
                      onMouseEnter={() => setHovered(`${half}-${i}`)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <img
                        src={src}
                        alt={`${logo.name} logo`}
                        className="h-8 w-auto opacity-95 transition-all duration-300 hover:opacity-100 md:h-9 lg:h-10"
                        style={{ filter }}
                        loading="lazy"
                      />
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
