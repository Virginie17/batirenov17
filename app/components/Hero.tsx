import { ArrowRight, Phone, Star, Wrench } from "lucide-react";
import { stats } from "./site-data";

const HERO_IMG = "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/3ab4dd082_generated_093efda2.png";

export function Hero() {
  return (
    <section id="accueil" className="relative bg-[#f5f1eb] pt-24 text-neutral-900">
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-[#b8743b]">Bouhet · La Rochelle · Charente-Maritime</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Menuiserie, rénovation & aménagement en Charente-Maritime
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            BâtiReno’V17 accompagne les particuliers dans leurs travaux de portes, fenêtres, volets, salle de bain, pergola, terrasse, portail et clôture avec exigence et savoir-faire artisanal.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="/contact" className="inline-flex items-center justify-center bg-[#b8743b] px-8 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-[#9a5c2a]">
              Demander un devis <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="tel:+33668008694" className="inline-flex items-center justify-center border border-neutral-900 px-8 py-4 text-sm font-semibold tracking-wide text-neutral-900 transition hover:bg-neutral-900 hover:text-white">
              <Phone className="mr-2 h-5 w-5" /> Appeler maintenant
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {stats.map(([number, label]) => (
              <article key={label} className="border border-neutral-200 bg-white p-5 shadow-sm">
                <p className="text-3xl font-bold text-[#b8743b]">{number}</p>
                <p className="mt-1 text-sm font-semibold text-neutral-600">{label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full border-2 border-[#b8743b]" />
          <img src={HERO_IMG} alt="Maison rénovée BâtiReno’V17" className="relative z-10 h-[520px] w-full object-cover shadow-xl" />
          <div className="absolute bottom-6 left-6 z-20 bg-white p-5 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#b8743b]">Artisan local</p>
            <p className="mt-1 font-bold text-neutral-900">Travaux soignés et durables</p>
          </div>
          <div className="absolute right-6 top-6 z-20 bg-[#b8743b] p-4 text-white shadow-xl">
            <Star className="mb-2 h-5 w-5" />
            <p className="text-sm font-bold">Certifié RGE</p>
          </div>
          <div className="absolute bottom-6 right-6 z-20 hidden bg-neutral-900 p-4 text-white shadow-xl sm:block">
            <Wrench className="mb-2 h-5 w-5" />
            <p className="text-sm font-bold">Devis gratuit</p>
          </div>
        </div>
      </div>
    </section>
  );
}
