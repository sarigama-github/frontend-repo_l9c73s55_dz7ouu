import React, { useEffect, useMemo, useRef, useState } from 'react'

// Extended brand list (no duplicates). Colors chosen for dark mode visibility where needed.
const logos = [
  { name: 'Spotify', slug: 'spotify', color: '1DB954', glow: '#1DB954', intensity: 1.0 },
  { name: 'YouTube', slug: 'youtube', color: 'FF0000', glow: '#FF0000', intensity: 1.0 },
  { name: 'TikTok', slug: 'tiktok', color: 'FFFFFF', glow: '#25F4EE', intensity: 0.9 },
  { name: 'Instagram', slug: 'instagram', color: 'E4405F', glow: '#E4405F', intensity: 0.9 },
  { name: 'Twitch', slug: 'twitch', color: '9146FF', glow: '#9146FF', intensity: 1.0 },
  { name: 'Discord', slug: 'discord', color: '5865F2', glow: '#5865F2', intensity: 0.9 },
  { name: 'Sony', slug: 'sony', color: 'FFFFFF', glow: '#60A5FA', intensity: 0.8 },
  { name: 'Electronic Arts', slug: 'ea', color: 'EA1D2D', glow: '#EA1D2D', intensity: 1.0 },
  { name: 'PlayStation', slug: 'playstation', color: '003791', glow: '#3B82F6', intensity: 0.9 },
  { name: 'Xbox', slug: 'xbox', color: '107C10', glow: '#22C55E', intensity: 0.9 },
  { name: 'Netflix', slug: 'netflix', color: 'E50914', glow: '#E50914', intensity: 1.0 },
  { name: 'Amazon', slug: 'amazon', color: 'FF9900', glow: '#FF9900', intensity: 0.9 },
  { name: 'Apple', slug: 'apple', color: 'FFFFFF', glow: '#60A5FA', intensity: 0.7 },
  { name: 'Nike', slug: 'nike', color: 'FFFFFF', glow: '#A855F7', intensity: 0.8 },
  { name: 'Adidas', slug: 'adidas', color: 'FFFFFF', glow: '#60A5FA', intensity: 0.8 },
  { name: 'Coca-Cola', slug: 'cocacola', color: 'F40009', glow: '#F40009', intensity: 0.9 },
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

  const list = useMemo(() => [...logos], []) // no duplication

  // Smooth ping-pong marquee without duplicates
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const xRef = useRef(0)
  const dirRef = useRef(-1) // -1 left, 1 right
  const rafRef = useRef(0)

  useEffect(() => {
    function animate() {
      if (paused) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }
      const container = containerRef.current
      const track = trackRef.current
      if (!container || !track) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }
      const cW = container.clientWidth
      const tW = track.scrollWidth
      const maxLeft = Math.min(0, cW - tW) // negative value or 0 if track <= container

      // choose speed relative to viewport
      const speed = Math.max(30, Math.min(80, cW / 10)) // px/s
      const dt = 1 / 60 // approx
      let x = xRef.current + dirRef.current * (speed * dt)

      if (x <= maxLeft) {
        x = maxLeft
        dirRef.current = 1
      } else if (x >= 0) {
        x = 0
        dirRef.current = -1
      }

      xRef.current = x
      track.style.transform = `translate3d(${x}px, 0, 0)`
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [paused])

  return (
    <section className="relative w-full bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur md:grid-cols-3">
          <div className="text-2xl font-extrabold text-cyan-300">$2M+ Paid to Creators</div>
          <div className="text-2xl font-extrabold text-purple-300">40B+ Organic Views</div>
          <div className="text-2xl font-extrabold text-blue-300">Trusted by Top Brands</div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-end gap-2">
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

        {/* Marquee row (no duplicates, ping-pong motion) */}
        <div
          ref={containerRef}
          className="mt-8 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div ref={trackRef} className="flex min-w-max items-center gap-10 pr-10 will-change-transform">
            {list.map((logo, i) => {
              const isHovered = hovered === i

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
                  key={`${logo.slug}-${i}`}
                  className="group flex items-center justify-center transition-transform duration-300"
                  onMouseEnter={() => setHovered(i)}
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
        </div>
      </div>
    </section>
  )
}
