import Link from "next/link";
import { ArrowRight, Bath, Fence, Hammer, Home, ShieldCheck, Trees, Wrench } from "lucide-react";

const interior = [
  { icon: Home, title: "Portes & fenêtres", text: "Isolation, sécurité et esthétique pour vos ouvertures.", href: "/portes-fenetres" },
  { icon: ShieldCheck, title: "Volets", text: "Volets roulants ou battants, manuels ou motorisés.", href: "/volets-battants" },
  { icon: Bath, title: "Salle de bain", text: "Rénovation fonctionnelle, moderne et durable.", href: "/salle-de-bain" },
  { icon: Hammer, title: "Revêtements", text: "Sols, murs, finitions et modernisation intérieure.", href: "/revetement" },
];

const exterior = [
  { icon: Trees, title: "Pergola & terrasse", text: "Espaces extérieurs agréables et valorisants.", href: "/pergola-terrasse" },
  { icon: Fence, title: "Portail & clôture", text: "Sécurité, délimitation et esthétique extérieure.", href: "/portail-cloture" },
  { icon: Wrench, title: "Toiture & façade", text: "Entretien, protection et valorisation de l’habitat.", href: "/charpente-toiture" },
];

function ServiceCard({ service }: { service: (typeof interior)[number] }) {
  const Icon = service.icon;
  return (
    <Link href={service.href} className="group rounded-[2rem] bg-[#fffdf8] p-7 shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7f3ec] text-[#b86b3c] transition group-hover:bg-[#b86b3c] group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-black text-[#1d1a16]">{service.title}</h3>
      <p className="mt-3 leading-7 text-[#6f6a63]">{service.text}</p>
      <span className="mt-5 inline-flex items-center text-sm font-black uppercase tracking-wide text-[#b86b3c]">
        Voir le service <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function ServicesShowcase() {
  return (
    <section className="bg-[#fffdf8] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Prestations</p>
            <h2 className="max-w-3xl text-3xl font-black tracking-tight text-[#1d1a16] sm:text-5xl">Une rénovation claire, soignée et pensée pour votre maison</h2>
          </div>
          <p className="max-w-md leading-8 text-[#6f6a63]">Des prestations intérieures et extérieures regroupées simplement pour vous aider à identifier rapidement le bon besoin.</p>
        </div>

        <div className="rounded-[2.5rem] bg-[#f7f3ec] p-5 sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-black text-[#1d1a16]">Menuiserie intérieure</h3>
            <span className="hidden rounded-full bg-[#fffdf8] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#2f4a3d] sm:inline-flex">Confort & isolation</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {interior.map((service) => <ServiceCard key={service.href} service={service} />)}
          </div>
        </div>

        <div className="mt-8 rounded-[2.5rem] bg-[#eef2ed] p-5 sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-black text-[#1d1a16]">Menuiserie extérieure</h3>
            <span className="hidden rounded-full bg-[#fffdf8] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#2f4a3d] sm:inline-flex">Protection & valorisation</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {exterior.map((service) => <ServiceCard key={service.href} service={service} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
