import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function submit(e) {
    e.preventDefault()
    setStatus('Thanks! I will reply within 24 hours.')
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s build something</h2>
          <p className="mt-2 text-slate-300">Tell me about your project — timeline, goals, and budget.</p>
        </div>

        <form onSubmit={submit} className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Your name" className="h-12 rounded-xl bg-white/10 px-4 text-white placeholder:text-slate-400 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500" />
            <input required type="email" placeholder="Email" className="h-12 rounded-xl bg-white/10 px-4 text-white placeholder:text-slate-400 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500" />
          </div>
          <input placeholder="Company / brand (optional)" className="h-12 rounded-xl bg-white/10 px-4 text-white placeholder:text-slate-400 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500" />
          <textarea required rows="5" placeholder="What are we building?" className="rounded-xl bg-white/10 p-4 text-white placeholder:text-slate-400 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500" />
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20">Send request</button>
            <span className="text-sm text-emerald-300">{status}</span>
          </div>
        </form>

        <p className="mt-6 text-sm text-slate-400">Prefer email? hello@anthrowebs.com</p>
      </div>
    </section>
  )
}
