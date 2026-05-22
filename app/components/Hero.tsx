import { ArrowRight, BadgeCheck, MapPin, Phone, ShieldCheck } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/c72190de5_generated_481b5044.png";

const proofs = ["Certifié RGE", "Garantie décennale", "Intervention 60 km autour de Bouhet"];

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-[#f7f3ec] px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#b86b3c]/10 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-[#2f4a3d]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b86b3c]/20 bg-[#fffdf8] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#b86b3c] shadow-sm">
            <MapPin className="h-4 w-4" />
            Bouhet · Surgères · La Rochelle
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-[#1d1a16] sm:text-6xl lg:text-7xl">
            Menuiserie & rénovation sur mesure près de La Rochelle
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#6f6a63] sm:text-xl">
            Portes, fenêtres, volets, salle de bain, pergola, terrasse, portail et toiture : BâtiReno’V17 accompagne vos travaux avec plus de 20 ans de savoir-faire artisanal.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#b86b3c] px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-[#b86b3c]/20 transition hover:-translate-y-0.5 hover:bg-[#9f5930]">
              Demander un devis gratuit <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="tel:0668008694" className="inline-flex items-center justify-center rounded-full border border-[#1d1a16]/15 bg-[#fffdf8] px-8 py-4 text-sm font-black uppercase tracking-wide text-[#1d1a16] transition hover:border-[#b86b3c] hover:text-[#b86b3c]">
              <Phone className="mr-2 h-5 w-5" /> 06 68 00 86 94
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {proofs.map((proof) => (
              <span key={proof} className="inline-flex items-center gap-2 rounded-full bg-[#fffdf8] px-4 py-2 text-sm font-bold text-[#2f4a3d] shadow-sm ring-1 ring-stone-200">
                <BadgeCheck className="h-4 w-4 text-[#b86b3c]" />
                {proof}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-5 -top-5 h-40 w-40 rounded-[2rem] bg-[#2f4a3d]" />
          <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-[2rem] bg-[#b86b3c]" />
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#fffdf8] p-4 shadow-2xl ring-1 ring-stone-200">
            <img src={HERO_IMG} alt="Maison rénovée par BâtiReno’V17 près de La Rochelle" className="h-[430px] w-full rounded-[2rem] object-cover sm:h-[560px]" />
            <div className="absolute left-8 top-8 rounded-2xl bg-[#fffdf8]/95 p-5 shadow-xl backdrop-blur">
              <p className="text-3xl font-black text-[#1d1a16]">20+</p>
              <p className="text-sm font-bold text-[#6f6a63]">ans de savoir-faire</p>
            </div>
            <div className="absolute bottom-8 right-8 rounded-2xl bg-[#2f4a3d] p-5 text-white shadow-xl">
              <ShieldCheck className="mb-2 h-6 w-6 text-[#f4c8a8]" />
              <p className="text-sm font-black uppercase tracking-wide">Travaux assurés</p>
              <p className="text-sm text-white/70">RGE · décennale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
