import Link from "next/link";
import { CheckCircle2, MapPin, Phone, Send } from "lucide-react";

type FAQ = { question: string; answer: string };

type ServiceLandingProps = {
  eyebrow: string;
  title: string;
  intro: string;
  benefits: string[];
  services: string[];
  image: string;
  faq: FAQ[];
};

export function ServiceLanding({ eyebrow, title, intro, benefits, services, image, faq }: ServiceLandingProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    provider: {
      "@type": "LocalBusiness",
      name: "BâtiReno’V17",
      telephone: "+33668008694",
      address: "1 Chemin de la Loubrie, 17540 Bouhet",
    },
    areaServed: ["Bouhet", "Surgères", "La Rochelle", "Rochefort", "Charente-Maritime"],
    description: intro,
  };

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#1d1a16]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden bg-[#f7f3ec] px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#b86b3c]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">{eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#1d1a16] sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f6a63]">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:0668008694" className="inline-flex items-center gap-2 rounded-full bg-[#b86b3c] px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#9f5930]"><Phone className="h-4 w-4" /> Appeler</a>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#1d1a16]/15 bg-[#fffdf8] px-6 py-3 text-sm font-black uppercase tracking-wide text-[#1d1a16] transition hover:border-[#b86b3c] hover:text-[#b86b3c]"><Send className="h-4 w-4" /> Demander un devis</Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#fffdf8] p-4 shadow-xl ring-1 ring-stone-200">
            <img src={image} alt={title} className="h-[360px] w-full rounded-[2rem] object-cover sm:h-[470px]" />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-[2rem] bg-[#2f4a3d] p-8 text-white lg:sticky lg:top-28 lg:h-fit">
            <h2 className="text-2xl font-black">Devis gratuit</h2>
            <p className="mt-4 leading-7 text-white/70">Expliquez votre projet, votre ville et vos contraintes. BâtiReno’V17 vous recontacte pour vous conseiller.</p>
            <div className="mt-6 space-y-3">
              <a href="tel:0668008694" className="flex items-center justify-center gap-2 rounded-full bg-[#fffdf8] px-5 py-3 font-black text-[#1d1a16]"><Phone className="h-4 w-4" />06 68 00 86 94</a>
              <Link href="/contact" className="flex items-center justify-center gap-2 rounded-full bg-[#b86b3c] px-5 py-3 font-black text-white"><Send className="h-4 w-4" />Formulaire devis</Link>
            </div>
            <div className="mt-6 flex gap-3 text-sm text-white/65"><MapPin className="h-5 w-5 shrink-0 text-[#f4c8a8]" />Bouhet, Surgères, La Rochelle et Charente-Maritime</div>
          </aside>

          <div className="space-y-8">
            <section className="rounded-[2rem] bg-[#fffdf8] p-8 shadow-sm ring-1 ring-stone-200">
              <h2 className="text-3xl font-black text-[#1d1a16]">Pourquoi faire appel à BâtiReno’V17 ?</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => <div key={benefit} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#b86b3c]" /><p className="text-[#6f6a63]">{benefit}</p></div>)}
              </div>
            </section>

            <section className="rounded-[2rem] bg-[#fffdf8] p-8 shadow-sm ring-1 ring-stone-200">
              <h2 className="text-3xl font-black text-[#1d1a16]">Prestations réalisées</h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {services.map((item) => <li key={item} className="rounded-2xl border border-stone-200 bg-[#f7f3ec] p-4 font-bold text-[#1d1a16]">{item}</li>)}
              </ul>
            </section>

            <section className="rounded-[2rem] bg-[#fffdf8] p-8 shadow-sm ring-1 ring-stone-200">
              <h2 className="text-3xl font-black text-[#1d1a16]">Questions fréquentes</h2>
              <div className="mt-8 space-y-5">
                {faq.map((item) => <article key={item.question} className="border-b border-stone-200 pb-5"><h3 className="font-black text-[#1d1a16]">{item.question}</h3><p className="mt-2 leading-7 text-[#6f6a63]">{item.answer}</p></article>)}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
