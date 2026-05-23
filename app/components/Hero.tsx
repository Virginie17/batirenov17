import { ArrowRight, Home, MapPin, MessageCircle, Phone } from "lucide-react";

const HERO_MAIN = "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/3ab4dd082_generated_093efda2.png";
const HERO_INTERIOR = "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/e100cc4ec_generated_be17f913.png";
const HERO_EXTERIOR = "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/c461a20a7_generated_b8cfce79.png";

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-[#f7f3ec] px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
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
            Un artisan de proximité pour vos portes, fenêtres, volets, salle de bain, pergola, terrasse, portail, clôture, toiture et façade.
          </p>

          <div className="mt-7 grid max-w-2xl gap-3 rounded-[2rem] bg-[#fffdf8] p-4 shadow-sm ring-1 ring-stone-200 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#f7f3ec] p-4">
              <p className="text-2xl font-black text-[#1d1a16]">20+</p>
              <p className="text-xs font-bold uppercase tracking-wide text-[#6f6a63]">ans d’expérience</p>
            </div>
            <div className="rounded-2xl bg-[#f7f3ec] p-4">
              <p className="text-2xl font-black text-[#1d1a16]">60 km</p>
              <p className="text-xs font-bold uppercase tracking-wide text-[#6f6a63]">zone d’intervention</p>
            </div>
            <div className="rounded-2xl bg-[#f7f3ec] p-4">
              <p className="text-2xl font-black text-[#1d1a16]">RGE</p>
              <p className="text-xs font-bold uppercase tracking-wide text-[#6f6a63]">travaux assurés</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#b86b3c] px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-[#b86b3c]/20 transition hover:-translate-y-0.5 hover:bg-[#9f5930]">
              Obtenir mon estimation <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="tel:0668008694" className="inline-flex items-center justify-center rounded-full border border-[#1d1a16]/15 bg-[#fffdf8] px-8 py-4 text-sm font-black uppercase tracking-wide text-[#1d1a16] transition hover:border-[#b86b3c] hover:text-[#b86b3c]">
              <Phone className="mr-2 h-5 w-5" /> Appeler
            </a>
            <a href="https://wa.me/33668008694?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20un%20projet%20de%20r%C3%A9novation." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-[#2f4a3d]/20 bg-[#2f4a3d] px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#243a30]">
              <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 h-44 w-44 rounded-[2rem] bg-[#2f4a3d]" />
          <div className="absolute -bottom-6 -left-6 h-44 w-44 rounded-[2rem] bg-[#b86b3c]" />

          <div className="relative rounded-[2.5rem] bg-[#fffdf8] p-4 shadow-2xl ring-1 ring-stone-200">
            <div className="grid h-[560px] gap-4 overflow-hidden rounded-[2rem] sm:grid-cols-[1.25fr_0.75fr]">
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.7rem] sm:min-h-full">
                <img src={HERO_MAIN} alt="Maison rénovée et valorisée par BâtiReno’V17" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
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

            <div className="absolute right-8 bottom-8 hidden rounded-2xl bg-[#b86b3c] p-4 text-white shadow-xl md:block">
              <Home className="mb-2 h-6 w-6" />
              <p className="text-sm font-black uppercase tracking-wide">Projet sur mesure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
