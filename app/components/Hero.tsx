import { ChevronDown, Phone, Send } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/c72190de5_generated_481b5044.png";

export function Hero() {
  return (
    <section id="accueil" className="relative flex h-screen min-h-[600px] items-center justify-start overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="BâtiReno’V17 menuiserie" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="mb-2 font-black text-white">
            <span className="text-5xl sm:text-6xl lg:text-7xl">Bâti</span>
            <span className="text-5xl text-[#f97316] sm:text-6xl lg:text-7xl">Reno’V</span>
            <span className="text-5xl sm:text-6xl lg:text-7xl"> 17</span>
          </h1>

          <div className="mb-6 h-1 w-24 bg-[#f97316]" />

          <h2 className="mb-8 text-xl font-medium leading-snug text-white/90 sm:text-2xl lg:text-3xl">
            Votre expert en menuiserie sur mesure proche de La Rochelle
          </h2>

          <div className="flex flex-wrap gap-4">
            <a href="tel:0668008694" className="inline-flex items-center gap-2 border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition hover:bg-white/20">
              <Phone className="h-4 w-4" />
              06 68 00 86 94
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#f97316] px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-[#ea580c]">
              <Send className="h-4 w-4" />
              Contactez-nous !
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
        <ChevronDown className="h-8 w-8" />
      </div>

      <div className="absolute bottom-6 left-6 flex gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-[10px] font-bold text-[#f97316] backdrop-blur-sm">RGE</div>
        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-[10px] font-bold text-[#f97316] backdrop-blur-sm">10A</div>
      </div>
    </section>
  );
}
