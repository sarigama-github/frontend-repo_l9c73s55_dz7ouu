import React, { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    // In a real app, post to backend. For now, simulate success.
    await new Promise((r) => setTimeout(r, 900))
    setStatus('success')
    e.currentTarget.reset()
  }

  return (
    <section id="apply" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Request access</h2>
          <p className="mt-2 text-white/70">Brands and creators — apply to join the next drop.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-white/70">I am a</label>
              <select name="type" required className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white outline-none ring-0 focus:border-cyan-400">
                <option value="brand">Brand / Music Artist</option>
                <option value="creator">Creator / Influencer</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Name</label>
              <input required name="name" className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white outline-none focus:border-cyan-400" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <input required type="email" name="email" className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white outline-none focus:border-cyan-400" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-white/70">What are you looking to launch?</label>
              <textarea name="message" rows="4" className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white outline-none focus:border-cyan-400" placeholder="e.g., TikTok UGC campaign for game launch, $50k budget" />
            </div>
          </div>

          <button type="submit" disabled={status==='submitting'} className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgb(59,130,246,0.4)] disabled:opacity-60">
            {status === 'submitting' ? 'Sending…' : status === 'success' ? 'Request received — we’ll be in touch!' : 'Apply for Access'}
          </button>
        </form>
      </div>
    </section>
  )
}
