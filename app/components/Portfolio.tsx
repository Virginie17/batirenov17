import { ChevronRight } from "lucide-react";

export function Portfolio() {
  return (
    <section id="realisations" className="bg-[#15110d] py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#fb923c]">Réalisations</p>
          <h2 className="mt-4 text-3xl font-black sm:text-5xl">Des chantiers qui inspirent confiance</h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">Présentez vos avant/après, menuiseries, salles de bain, terrasses et aménagements extérieurs.</p>
          <a href="#contact" className="mt-8 inline-flex items-center rounded-full bg-[#f97316] px-7 py-4 font-black text-white transition hover:bg-[#ea580c]">
            Demander un devis <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <img src="/images/avant.jpg" alt="Avant rénovation" className="h-80 w-full rounded-[2rem] object-cover" />
          <img src="/images/apres.jpg" alt="Après rénovation" className="h-80 w-full rounded-[2rem] object-cover" />
        </div>
      </div>
    </section>
  );
}
