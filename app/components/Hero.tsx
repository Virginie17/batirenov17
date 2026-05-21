import { ArrowRight, Phone, Sparkles, Star, Wrench } from "lucide-react";
import { stats } from "./site-data";

export function Hero() {
  return (
    <section id="accueil" className="relative bg-[#15110d] pt-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.25),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(251,146,60,0.18),transparent_28%),linear-gradient(135deg,#15110d,#261a12_50%,#100d0a)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#faf7f1] to-transparent" />

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-orange-200 backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#fb923c]" />
            Bouhet · La Rochelle · Charente-Maritime
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            Vos travaux de rénovation avec un artisan local de confiance
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Menuiserie, volets, salle de bain, terrasse, pergola, portail et rénovation intérieure/extérieure : BâtiReno’V17 accompagne vos projets avec conseil, proximité et finitions soignées.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#f97316] px-8 py-4 font-black text-white shadow-xl shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-[#ea580c]">
              Demander un devis gratuit <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="tel:+33668008694" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 font-black text-white backdrop-blur transition hover:bg-white hover:text-[#15110d]">
              <Phone className="mr-2 h-5 w-5" /> Appeler maintenant
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
            {stats.map(([number, label]) => (
              <article key={label} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-black text-[#fb923c]">{number}</p>
                <p className="mt-1 text-sm font-bold text-zinc-200">{label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-[3rem] bg-orange-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            <img src="/images/chantier-batirenov17.jpg" alt="Chantier BâtiReno’V17" className="h-[420px] w-full rounded-[2rem] object-cover sm:h-[560px]" />
            <div className="absolute left-8 right-8 top-8 rounded-3xl border border-white/15 bg-[#15110d]/80 p-5 shadow-2xl backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#fb923c]">Artisan local</p>
              <p className="mt-2 text-2xl font-black">Travaux suivis, propres et durables</p>
            </div>
            <div className="absolute bottom-8 left-8 right-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4 text-[#17130f] shadow-xl"><Star className="mb-2 h-5 w-5 fill-[#f97316] text-[#f97316]" /><p className="font-black">Conseil personnalisé</p></div>
              <div className="rounded-2xl bg-[#f97316] p-4 text-white shadow-xl"><Wrench className="mb-2 h-5 w-5" /><p className="font-black">Devis clair</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
