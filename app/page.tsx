import { Phone, ShieldCheck, Hammer, MapPin, Star, Mail } from "lucide-react";

const services = [
  "Portes & fenêtres",
  "Volets roulants & battants",
  "Salle de bain",
  "Revêtements sols & murs",
  "Pergola, terrasse & store",
  "Portail & clôture",
  "Charpente, toiture & façade",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "BâtiReno’V17",
  url: "https://batirenov17.fr",
  telephone: "+33668008694",
  email: "c.vicq@outlook.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Chemin de la Loubrie",
    postalCode: "17540",
    addressLocality: "Bouhet",
    addressCountry: "FR",
  },
  areaServed: [
    "Bouhet",
    "Surgères",
    "La Rochelle",
    "Rochefort",
    "Charente-Maritime",
    "Vendée",
    "Deux-Sèvres",
  ],
  description:
    "Travaux de menuiserie, rénovation et aménagement intérieur/extérieur en Charente-Maritime.",
};

export default function Home() {
  return (
    <main className="bg-stone-50 text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              BâtiReno’V17 · Bouhet · Charente-Maritime
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Menuiserie, rénovation & aménagement près de La Rochelle
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              Portes, fenêtres, volets, pergolas, terrasses, salle de bain,
              portails, clôtures, toiture et façade. Des travaux soignés,
              durables et adaptés à votre maison.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+33668008694"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 font-bold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
              >
                <Phone className="mr-2 h-5 w-5" />
                Appeler maintenant
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-neutral-950"
              >
                Demander un devis gratuit
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["+20 ans de savoir-faire", "Certifié RGE", "Garantie décennale"].map(
                (item) => (
                  <div key={item} className="rounded-2xl bg-white/10 p-4">
                    <ShieldCheck className="mb-2 h-5 w-5 text-orange-400" />
                    <p className="text-sm font-semibold">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-4 shadow-2xl">
            <img
              src="/images/chantier-batirenov17.jpg"
              alt="Travaux de menuiserie et rénovation en Charente-Maritime"
              className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[520px]"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
            Nos prestations
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-5xl">
            Des solutions complètes pour valoriser votre habitat
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service}
                className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Hammer className="mb-5 h-8 w-8 text-orange-500" />
                <h3 className="text-xl font-black">{service}</h3>
                <p className="mt-3 text-neutral-600">
                  Travaux sur mesure, finitions soignées et conseils adaptés à
                  votre projet.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
                Réalisations
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Des avant / après qui rassurent vos futurs clients
              </h2>
              <p className="mt-5 text-lg text-neutral-600">
                Mettez ici les meilleures photos de chantiers : fenêtres,
                volets, terrasses, salles de bain, portails et rénovations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src="/images/avant.jpg"
                alt="Avant travaux BâtiReno’V17"
                className="h-72 w-full rounded-3xl object-cover"
              />
              <img
                src="/images/apres.jpg"
                alt="Après travaux BâtiReno’V17"
                className="h-72 w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <MapPin className="h-8 w-8 text-orange-400" />
          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Intervention autour de Bouhet, La Rochelle et Charente-Maritime
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-neutral-300">
            BâtiReno’V17 intervient dans un rayon d’environ 60 km autour de
            Bouhet : Surgères, La Rochelle, Rochefort, Aigrefeuille-d’Aunis,
            Marans, Périgny, Aytré et alentours.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-xl md:p-12">
          <Star className="h-8 w-8 text-orange-500" />
          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Vous avez un projet de travaux ?
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Contactez BâtiReno’V17 pour échanger sur votre projet et obtenir un
            devis gratuit.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+33668008694"
              className="rounded-full bg-orange-500 px-7 py-4 text-center font-bold text-white hover:bg-orange-600"
            >
              06 68 00 86 94
            </a>

            <a
              href="mailto:c.vicq@outlook.fr"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-7 py-4 font-bold hover:bg-neutral-100"
            >
              <Mail className="mr-2 h-5 w-5" />
              Envoyer un email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
