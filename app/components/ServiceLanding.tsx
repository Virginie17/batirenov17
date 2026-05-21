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
      address: "1 Chem. de la Loubrie, 17540 Bouhet",
    },
    areaServed: ["Bouhet", "Surgères", "La Rochelle", "Rochefort", "Charente-Maritime"],
    description: intro,
  };

  return (
    <main className="min-h-screen bg-[#faf7f1] text-[#17130f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative bg-neutral-950 px-4 pb-20 pt-36 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:0668008694" className="inline-flex items-center gap-2 bg-[#f97316] px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#ea580c]"><Phone className="h-4 w-4" /> Appeler</a>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white/20"><Send className="h-4 w-4" /> Demander un devis</Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-2xl bg-neutral-950 p-8 text-white lg:sticky lg:top-28 lg:h-fit">
            <h2 className="text-2xl font-black">Devis gratuit</h2>
            <p className="mt-4 leading-7 text-white/70">Expliquez votre projet, votre ville et vos contraintes. BâtiReno’V17 vous recontacte pour vous conseiller.</p>
            <div className="mt-6 space-y-3">
              <a href="tel:0668008694" className="flex items-center justify-center gap-2 bg-[#f97316] px-5 py-3 font-black text-white"><Phone className="h-4 w-4" />06 68 00 86 94</a>
              <Link href="/contact" className="flex items-center justify-center gap-2 border border-white/20 px-5 py-3 font-black text-white"><Send className="h-4 w-4" />Formulaire devis</Link>
            </div>
            <div className="mt-6 flex gap-3 text-sm text-white/60"><MapPin className="h-5 w-5 shrink-0 text-[#f97316]" />Bouhet, Surgères, La Rochelle et Charente-Maritime</div>
          </aside>

          <div className="space-y-12">
            <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-neutral-200">
              <h2 className="text-3xl font-black">Pourquoi faire appel à BâtiReno’V17 ?</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => <div key={benefit} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f97316]" /><p className="text-neutral-700">{benefit}</p></div>)}
              </div>
            </section>

            <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-neutral-200">
              <h2 className="text-3xl font-black">Prestations réalisées</h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {services.map((item) => <li key={item} className="border border-neutral-200 bg-[#faf7f1] p-4 font-semibold text-neutral-800">{item}</li>)}
              </ul>
            </section>

            <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-neutral-200">
              <h2 className="text-3xl font-black">Questions fréquentes</h2>
              <div className="mt-8 space-y-5">
                {faq.map((item) => <article key={item.question} className="border-b border-neutral-200 pb-5"><h3 className="font-black text-neutral-900">{item.question}</h3><p className="mt-2 leading-7 text-neutral-600">{item.answer}</p></article>)}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
