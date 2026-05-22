import Link from "next/link";
import { Quote } from "lucide-react";

export function ArtisanNote() {
  return (
    <section className="bg-[#fffdf8] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#2f4a3d] text-white shadow-2xl lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[320px] lg:min-h-full">
            <img
              src="https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/3ab4dd082_generated_093efda2.png"
              alt="Maison rénovée BâtiReno’V17"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2f4a3d]/50 to-[#2f4a3d]/10" />
          </div>

          <div className="p-8 sm:p-10 lg:p-14">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fffdf8] text-[#b86b3c]">
              <Quote className="h-8 w-8" />
            </div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c8a8]">Le mot de l’artisan</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Chaque chantier mérite une solution propre, durable et adaptée.
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/75">
              “Notre rôle est de vous conseiller avec clarté, de respecter votre maison et de réaliser des travaux soignés. L’objectif est simple : un résultat fiable, esthétique et pensé pour votre quotidien.”
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex justify-center rounded-full bg-[#b86b3c] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#9f5930]">
                Parler de mon projet
              </Link>
              <a href="tel:0668008694" className="inline-flex justify-center rounded-full bg-[#fffdf8] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-[#1d1a16]">
                Appeler maintenant
              </a>
            </div>
            <p className="mt-8 text-sm font-bold text-white/55">BâtiReno’V17 · Menuiserie & rénovation près de La Rochelle</p>
          </div>
        </div>
      </div>
    </section>
  );
}
