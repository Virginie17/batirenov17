import { services } from "./site-data";

export function Services() {
  return (
    <section id="prestations" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">Prestations</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">Rénover, protéger et valoriser votre maison</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#fff1e8] text-[#f97316]"><Icon className="h-8 w-8" /></div>
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="mt-4 leading-7 text-zinc-600">{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
