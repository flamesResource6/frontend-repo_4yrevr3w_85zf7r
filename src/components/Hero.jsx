import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.8),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance projects
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Web designer crafting playful, modern, interactive experiences
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-300">
              I blend motion, 3D and clean UI to build memorable brand sites and product pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20">
                View selected work
              </a>
              <a href="#contact" className="inline-flex items-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15">
                Start a project
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[420px] sm:h-[520px] lg:h-[560px] xl:h-[600px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-white/10">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
