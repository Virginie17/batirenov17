import {
  Award,
  Bath,
  Building2,
  CheckCircle2,
  ChevronRight,
  Fence,
  Hammer,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Trees,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Portes & fenêtres",
    text: "Menuiseries intérieures et extérieures, remplacement, rénovation et amélioration de l’isolation.",
  },
  {
    icon: ShieldCheck,
    title: "Volets roulants & battants",
    text: "Pose et rénovation de volets adaptés à votre maison, vos usages et votre confort quotidien.",
  },
  {
    icon: Bath,
    title: "Salle de bain",
    text: "Création et rénovation de salles de bain fonctionnelles, modernes et faciles à vivre.",
  },
  {
    icon: Hammer,
    title: "Revêtements sols & murs",
    text: "Pose de revêtements, finitions propres et solutions adaptées à chaque pièce de votre habitat.",
  },
  {
    icon: Trees,
    title: "Pergola, terrasse & store",
    text: "Aménagement extérieur pour profiter pleinement de vos espaces de vie autour de la maison.",
  },
  {
    icon: Fence,
    title: "Portail & clôture",
    text: "Solutions extérieures esthétiques et durables pour sécuriser et valoriser votre propriété.",
  },
];

const trustItems = [
  "+20 ans de savoir-faire",
  "Entreprise certifiée RGE",
  "Garantie décennale",
  "Accompagnement avant, pendant et après travaux",
];

const zones = [
  "Bouhet",
  "Surgères",
  "La Rochelle",
  "Rochefort",
  "Aigrefeuille-d’Aunis",
  "Marans",
  "Aytré",
  "Périgny",
  "Charente-Maritime",
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
  areaServed: zones,
  description:
    "Travaux de menuiserie, rénovation et aménagement intérieur/extérieur en Charente-Maritime.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#151515]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#101010]/95 text-white shadow-xl backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f97316] text-white shadow-lg shadow-orange-500/30">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight">BâtiReno’V17</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-400">
                Menuiserie · Rénovation
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-zinc-200 lg:flex">
            <a href="#prestations" className="transition hover:text-[#fb923c]">
              Prestations
            </a>
            <a href="#realisations" className="transition hover:text-[#fb923c]">
              Réalisations
            </a>
            <a href="#zone" className="transition hover:text-[#fb923c]">
              Zone
            </a>
            <a href="#contact" className="transition hover:text-[#fb923c]">
              Contact
            </a>
          </nav>

          <a
            href="tel:+33668008694"
            className="hidden rounded-full bg-[#f97316] px-5 py-3 text-sm font-black text-white transition hover:bg-[#ea580c] sm:inline-flex"
          >
            Appeler
          </a>

          <Menu className="h-7 w-7 lg:hidden" />
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#101010] pt-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.28),transparent_34%),linear-gradient(135deg,#101010,#1d1d1d_55%,#111111)]" />
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#f7f4ef] to-transparent" />

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#f97316]/40 bg-[#f97316]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#fb923c]">
              Bouhet · La Rochelle · Charente-Maritime
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Menuiserie, rénovation & aménagement près de La Rochelle
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              BâtiReno’V17 accompagne vos projets de portes, fenêtres, volets,
              pergolas, terrasses, salles de bain, portails, clôtures, toiture
              et façade avec sérieux, proximité et savoir-faire.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+33668008694"
                className="inline-flex items-center justify-center rounded-full bg-[#f97316] px-7 py-4 font-black text-white shadow-xl shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-[#ea580c]"
              >
                <Phone className="mr-2 h-5 w-5" />
                Appeler maintenant
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 font-black text-white transition hover:bg-white hover:text-[#101010]"
              >
                Demander un devis gratuit
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                >
                  <CheckCircle2 className="mb-2 h-5 w-5 text-[#fb923c]" />
                  <p className="text-sm font-bold text-zinc-100">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#f97316]/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <img
                src="/images/chantier-batirenov17.jpg"
                alt="Travaux de menuiserie et rénovation en Charente-Maritime"
                className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[520px]"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-[#101010]/85 p-5 shadow-xl backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#fb923c]">
                  Devis gratuit
                </p>
                <p className="mt-1 text-lg font-black">
                  Un interlocuteur local pour vos travaux
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-10 px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl gap-4 rounded-[2rem] bg-white p-5 shadow-2xl md:grid-cols-4">
          {[
            ["Entreprise locale", "Basée à Bouhet"],
            ["Devis gratuit", "Réponse claire"],
            ["Travaux soignés", "Finitions propres"],
            ["Suivi complet", "Avant, pendant, après"],
          ].map(([title, text]) => (
            <article key={title} className="rounded-3xl bg-[#f7f4ef] p-6">
              <Award className="mb-4 h-7 w-7 text-[#f97316]" />
              <h3 className="font-black">{title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="prestations" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">
            Nos prestations
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-5xl">
            Des solutions complètes pour valoriser votre habitat
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            Une approche artisanale, des conseils adaptés et des finitions
            soignées pour chaque projet intérieur ou extérieur.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f97316] transition group-hover:bg-[#f97316] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="realisations" className="bg-[#101010] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#fb923c]">
              Réalisations
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Des avant / après qui rassurent les futurs clients
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Les photos de chantiers sont essentielles pour montrer la qualité
              des finitions, la transformation et le sérieux de l’entreprise.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src="/images/avant.jpg"
              alt="Avant rénovation BâtiReno’V17"
              className="h-72 w-full rounded-[2rem] object-cover"
            />
            <img
              src="/images/apres.jpg"
              alt="Après rénovation BâtiReno’V17"
              className="h-72 w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="zone" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MapPin className="h-9 w-9 text-[#f97316]" />
          <h2 className="mt-4 max-w-4xl text-3xl font-black sm:text-5xl">
            Intervention autour de Bouhet, La Rochelle et en Charente-Maritime
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            BâtiReno’V17 intervient dans un rayon d’environ 60 km autour de
            Bouhet pour vos projets de menuiserie, rénovation et aménagement.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {zones.map((zone) => (
              <span
                key={zone}
                className="rounded-full bg-[#f7f4ef] px-5 py-3 text-sm font-bold text-zinc-700"
              >
                {zone}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#101010] text-white shadow-2xl">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#fb923c]">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                Vous avez un projet de travaux ?
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                Contactez BâtiReno’V17 pour échanger sur votre projet et obtenir
                un devis gratuit.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+33668008694"
                className="flex items-center justify-center rounded-full bg-[#f97316] px-7 py-4 font-black text-white transition hover:bg-[#ea580c]"
              >
                <Phone className="mr-2 h-5 w-5" />
                06 68 00 86 94
              </a>
              <a
                href="mailto:c.vicq@outlook.fr"
                className="flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:bg-white hover:text-[#101010]"
              >
                <Mail className="mr-2 h-5 w-5" />
                Envoyer un email
              </a>
              <p className="text-center text-sm text-zinc-400">
                1 Chemin de la Loubrie, 17540 Bouhet
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
