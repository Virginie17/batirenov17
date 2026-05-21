import { Heart, PiggyBank, Sparkles, ThermometerSun } from "lucide-react";

const values = [
  { icon: Sparkles, title: "Belle", desc: "Des finitions esthétiques et soignées" },
  { icon: ThermometerSun, title: "Confortable", desc: "Une isolation thermique optimale" },
  { icon: PiggyBank, title: "Économique", desc: "Des économies d’énergie durables" },
  { icon: Heart, title: "Saine", desc: "Un habitat sain et bien ventilé" },
];

export function ValueCards() {
  return (
    <section className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Votre <span className="text-[#f97316]">MAISON</span> valorisée
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="group border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <Icon className="mx-auto mb-4 h-10 w-10 text-[#f97316] transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-lg font-black">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
