import { ArrowRight, BadgeCheck, Home, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";

const HERO_MAIN = "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/3ab4dd082_generated_093efda2.png";
const HERO_INTERIOR = "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/e100cc4ec_generated_be17f913.png";
const HERO_EXTERIOR = "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/c461a20a7_generated_b8cfce79.png";

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
          <div className="absolute -right-6 -top-6 h-44 w-44 rounded-[2rem] bg-[#2f4a3d]" />
          <div className="absolute -bottom-6 -left-6 h-44 w-44 rounded-[2rem] bg-[#b86b3c]" />

          <div className="relative rounded-[2.5rem] bg-[#fffdf8] p-4 shadow-2xl ring-1 ring-stone-200">
            <div className="grid h-[560px] gap-4 overflow-hidden rounded-[2rem] sm:grid-cols-[1.25fr_0.75fr]">
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.7rem] sm:min-h-full">
                <img src={HERO_MAIN} alt="Maison rénovée et valorisée par BâtiReno’V17" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-2xl bg-[#fffdf8]/95 p-5 shadow-xl backdrop-blur">
                  <p className="text-3xl font-black text-[#1d1a16]">20+</p>
                  <p className="text-sm font-bold text-[#6f6a63]">ans de savoir-faire</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-[1.7rem]">
                  <img src={HERO_INTERIOR} alt="Rénovation intérieure et salle de bain" className="h-full min-h-[170px] w-full object-cover" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-[#fffdf8]/95 px-4 py-2 text-xs font-black uppercase tracking-wide text-[#2f4a3d] shadow-lg backdrop-blur">Intérieur</div>
                </div>
                <div className="relative overflow-hidden rounded-[1.7rem]">
                  <img src={HERO_EXTERIOR} alt="Aménagement extérieur pergola terrasse" className="h-full min-h-[170px] w-full object-cover" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-[#fffdf8]/95 px-4 py-2 text-xs font-black uppercase tracking-wide text-[#2f4a3d] shadow-lg backdrop-blur">Extérieur</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 left-8 hidden rounded-2xl bg-[#2f4a3d] p-5 text-white shadow-xl sm:block">
              <ShieldCheck className="mb-2 h-6 w-6 text-[#f4c8a8]" />
              <p className="text-sm font-black uppercase tracking-wide">Travaux assurés</p>
              <p className="text-sm text-white/70">RGE · décennale</p>
            </div>

            <div className="absolute -right-5 top-10 hidden rounded-2xl bg-[#fffdf8] p-4 shadow-xl ring-1 ring-stone-200 sm:block">
              <Sparkles className="mb-2 h-6 w-6 text-[#b86b3c]" />
              <p className="text-sm font-black text-[#1d1a16]">Habitat valorisé</p>
            </div>

            <div className="absolute right-8 bottom-8 hidden rounded-2xl bg-[#b86b3c] p-4 text-white shadow-xl md:block">
              <Home className="mb-2 h-6 w-6" />
              <p className="text-sm font-black uppercase tracking-wide">Devis gratuit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
