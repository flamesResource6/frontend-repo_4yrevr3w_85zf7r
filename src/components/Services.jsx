export default function Services() {
  const services = [
    {
      title: 'Brand & Web Design',
      desc: 'Playful yet clean visual identity and responsive design systems.',
    },
    {
      title: 'Interactive Dev',
      desc: 'React, Next.js, Webflow and 3D integrations with performance in mind.',
    },
    {
      title: 'Motion & 3D',
      desc: 'Subtle micro‑interactions, hero animations, and Spline/ThreeJS scenes.',
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Services</h2>
          <p className="mt-2 text-slate-300">Everything you need for a standout web presence.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
