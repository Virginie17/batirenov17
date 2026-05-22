import { Heart, PiggyBank, Sparkles, ThermometerSun } from "lucide-react";

const values = [
  { icon: Sparkles, title: "Belle", desc: "Des finitions esthétiques et soignées" },
  { icon: ThermometerSun, title: "Confortable", desc: "Une isolation thermique optimale" },
  { icon: PiggyBank, title: "Économique", desc: "Des économies d’énergie durables" },
  { icon: Heart, title: "Saine", desc: "Un habitat sain et bien ventilé" },
];

export function ValueCards() {
  return (
    <section className="bg-[#2f4a3d] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#f4c8a8]">Habitat valorisé</p>
          <h2 className="text-3xl font-black sm:text-4xl">
            Votre <span className="text-[#f4c8a8]">maison</span> gagne en confort et en valeur
          </h2>
          <p className="mt-5 leading-8 text-white/70">Une rénovation réussie doit être belle, confortable, durable et adaptée à votre quotidien.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="group rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fffdf8] text-[#b86b3c] transition-transform group-hover:scale-105">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-lg font-black">{item.title}</h3>
                <p className="text-sm leading-6 text-white/65">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
