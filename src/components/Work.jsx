export default function Work() {
  const projects = [
    {
      title: 'Playful SaaS Landing',
      tag: 'UI/UX • Webflow • 3D',
      img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Modern Agency Site',
      tag: 'Next.js • Animation • Art Direction',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Interactive Portfolio',
      tag: 'React • ThreeJS • Motion',
      img: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected work</h2>
          <a href="#" className="text-sm text-slate-300 hover:text-white">See all projects →</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[16/11] overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.tag}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
