import { motion } from 'framer-motion'

export default function About() {
  const badges = [
    'Web Design', 'UI/UX', 'Webflow', 'React', 'Next.js', 'Tailwind', 'Spline 3D', 'Framer Motion'
  ]

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">About</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I design and build playful, modern websites that feel alive. From crisp layouts and bold type to subtle
              moments of motion and 3D, I help brands stand out and ship fast. I partner with founders, agencies, and
              product teams to craft sites that convert and delight.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="font-medium text-white">Capabilities</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span key={b} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{b}</span>
                ))}
              </div>
              <p className="mt-5 text-sm text-slate-400">Based in Earth • Available worldwide • Remote-friendly</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
