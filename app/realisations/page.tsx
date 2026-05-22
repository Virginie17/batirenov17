import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

export const metadata = {
  title: "Réalisations menuiserie et rénovation en Charente-Maritime",
  description: "Découvrez les réalisations BâtiReno’V17 : menuiserie, salle de bain, terrasse, portail, toiture et rénovation autour de La Rochelle, Surgères et Bouhet.",
};

const projects = [
  {
    category: "Menuiserie",
    title: "Remplacement de menuiseries",
    city: "Secteur La Rochelle",
    image: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/623e82b99_generated_70137a0c.png",
    text: "Amélioration du confort, de l’isolation et de l’esthétique des ouvertures.",
  },
  {
    category: "Salle de bain",
    title: "Rénovation intérieure soignée",
    city: "Secteur Surgères",
    image: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/e100cc4ec_generated_be17f913.png",
    text: "Création d’un espace plus pratique, moderne et agréable au quotidien.",
  },
  {
    category: "Extérieur",
    title: "Aménagement terrasse et pergola",
    city: "Charente-Maritime",
    image: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/c461a20a7_generated_b8cfce79.png",
    text: "Valorisation de l’extérieur avec un espace confortable et durable.",
  },
  {
    category: "Portail & clôture",
    title: "Entrée de maison sécurisée",
    city: "Autour de Bouhet",
    image: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/704c491fe_generated_b36d3299.png",
    text: "Délimitation et sécurisation de la propriété avec une finition cohérente.",
  },
];

export default function RealisationsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#1d1a16]">
      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#b86b3c]/10 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Réalisations</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Des réalisations concrètes pour imaginer votre futur projet
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f6a63]">
            Menuiserie, rénovation intérieure, salle de bain, terrasse, portail ou toiture : découvrez les univers de travaux accompagnés par BâtiReno’V17 autour de Bouhet, Surgères et La Rochelle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Menuiserie", "Salle de bain", "Extérieur", "Toiture", "Portail"].map((tag) => (
              <span key={tag} className="rounded-full bg-[#fffdf8] px-4 py-2 text-sm font-black text-[#2f4a3d] ring-1 ring-stone-200">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-[2.5rem] bg-[#fffdf8] shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="overflow-hidden p-3">
                <img src={project.image} alt={project.title} className="h-80 w-full rounded-[2rem] object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 pt-4">
                <div className="mb-4 flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#f7f3ec] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#b86b3c]">{project.category}</span>
                  <span className="rounded-full bg-[#eef2ed] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#2f4a3d]">{project.city}</span>
                </div>
                <h2 className="text-2xl font-black text-[#1d1a16]">{project.title}</h2>
                <p className="mt-4 leading-8 text-[#6f6a63]">{project.text}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-black text-[#2f4a3d]"><BadgeCheck className="h-5 w-5 text-[#b86b3c]" /> Travaux soignés et accompagnement local</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#2f4a3d] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c8a8]">Votre projet</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-5xl">Vous souhaitez un résultat aussi soigné chez vous ?</h2>
          </div>
          <Link href="/contact" className="inline-flex w-fit items-center rounded-full bg-[#b86b3c] px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#9f5930]">
            Demander un devis <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
