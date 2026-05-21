import { MapPin } from "lucide-react";
import { steps, zones } from "./site-data";

export function ProcessZone() {
  return (
    <>
      <section id="methode" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">Méthode</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black sm:text-5xl">Un parcours simple pour passer de l’idée au chantier</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step} className="rounded-[2rem] bg-white p-7 shadow-sm">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#f97316] text-xl font-black text-white">{index + 1}</div>
                <h3 className="text-xl font-black">{step}</h3>
                <p className="mt-3 leading-7 text-zinc-600">Une étape claire pour comprendre, planifier et réaliser votre projet.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="zone" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MapPin className="h-10 w-10 text-[#f97316]" />
          <h2 className="mt-5 max-w-4xl text-3xl font-black sm:text-5xl">Intervention autour de Bouhet, La Rochelle et en Charente-Maritime</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {zones.map((zone) => <span key={zone} className="rounded-full bg-[#faf7f1] px-5 py-3 text-sm font-bold text-zinc-700 ring-1 ring-zinc-200">{zone}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
