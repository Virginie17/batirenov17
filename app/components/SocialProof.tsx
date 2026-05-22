import Link from "next/link";
import { Award, BadgeCheck, ShieldCheck, Star, ThumbsUp } from "lucide-react";

const reviews = [
  { name: "Client particulier", city: "Secteur La Rochelle", text: "Travail sérieux, échanges clairs et chantier propre. Une entreprise locale rassurante pour des travaux de rénovation." },
  { name: "Client particulier", city: "Secteur Surgères", text: "Bon accompagnement du début à la fin, avec des conseils utiles pour choisir la solution la plus adaptée." },
  { name: "Client particulier", city: "Charente-Maritime", text: "Intervention soignée, résultat propre et conforme aux attentes. Le contact direct avec l’artisan est un vrai plus." },
];

const proofs = [
  { icon: BadgeCheck, label: "Entreprise certifiée RGE" },
  { icon: ShieldCheck, label: "Garantie décennale" },
  { icon: Award, label: "Plus de 20 ans de savoir-faire" },
  { icon: ThumbsUp, label: "Accompagnement de proximité" },
];

export function SocialProof() {
  return (
    <section className="bg-[#fffdf8] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Ils nous font confiance</p>
          <h2 className="text-3xl font-black text-[#1d1a16] sm:text-5xl">Des garanties concrètes pour avancer sereinement</h2>
          <p className="mt-5 leading-8 text-[#6f6a63]">Expérience, garanties, proximité et qualité de suivi sont au cœur de l’accompagnement BâtiReno’V17.</p>
        </div>

        <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {proofs.map((proof) => {
            const Icon = proof.icon;
            return (
              <article key={proof.label} className="rounded-[2rem] bg-[#f7f3ec] p-6 text-center shadow-sm ring-1 ring-stone-200">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fffdf8] text-[#b86b3c]">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-wide text-[#1d1a16]">{proof.label}</h3>
              </article>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.city} className="rounded-[2rem] bg-[#fffdf8] p-7 shadow-sm ring-1 ring-stone-200">
              <div className="mb-4 flex gap-1 text-[#b86b3c]">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="leading-8 text-[#6f6a63]">“{review.text}”</p>
              <div className="mt-6 border-t border-stone-200 pt-4">
                <p className="font-black text-[#1d1a16]">{review.name}</p>
                <p className="text-sm text-[#6f6a63]">{review.city}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2.5rem] bg-[#2f4a3d] p-8 text-center text-white sm:p-10">
          <h3 className="text-2xl font-black sm:text-3xl">Vous voulez être rassuré avant de lancer vos travaux ?</h3>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">Demandez un premier échange gratuit pour expliquer votre projet et obtenir un retour clair sur les solutions possibles.</p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="tel:0668008694" className="inline-flex items-center justify-center rounded-full bg-[#fffdf8] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-[#1d1a16]">Appeler maintenant</a>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#b86b3c] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-white">Demander un devis gratuit</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
