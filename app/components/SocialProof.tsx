import Link from "next/link";
import { BadgeCheck, MapPin, ShieldCheck, Star } from "lucide-react";

const proofs = [
  { icon: ShieldCheck, label: "Garantie décennale" },
  { icon: BadgeCheck, label: "Certification RGE" },
  { icon: Star, label: "Avis Google à venir" },
];

export function SocialProof() {
  return (
    <section className="bg-[#fffdf8] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Confiance</p>
            <h2 className="text-3xl font-black text-[#1d1a16] sm:text-4xl">Les garanties avant de vous engager</h2>
            <p className="mt-5 leading-8 text-[#6f6a63]">
              Les informations essentielles sont regroupées ici pour vérifier rapidement le sérieux de l’entreprise avant de demander un devis.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex justify-center rounded-full bg-[#b86b3c] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#9f5930]">
                Demander un devis
              </Link>
              <a href="https://www.google.com/maps/search/?api=1&query=1%20Chemin%20de%20la%20Loubrie%2017540%20Bouhet" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-full border border-[#2f4a3d]/20 px-7 py-3.5 text-sm font-black uppercase tracking-wide text-[#2f4a3d] transition hover:border-[#b86b3c] hover:text-[#b86b3c]">
                <MapPin className="mr-2 h-4 w-4" /> Itinéraire
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {proofs.map((proof) => {
              const Icon = proof.icon;
              return (
                <article key={proof.label} className="rounded-[2rem] bg-[#f7f3ec] p-6 text-center shadow-sm ring-1 ring-stone-200">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fffdf8] text-[#b86b3c]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-wide text-[#1d1a16]">{proof.label}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
