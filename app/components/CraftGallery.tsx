import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Menuiseries soignées",
    text: "Portes, fenêtres, volets et ouvertures pensées pour le confort, l’isolation et l’esthétique.",
    image: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/623e82b99_generated_70137a0c.png",
    href: "/portes-fenetres",
  },
  {
    title: "Intérieurs rénovés",
    text: "Salle de bain, revêtements, finitions et aménagements intérieurs avec un rendu propre et durable.",
    image: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/e100cc4ec_generated_be17f913.png",
    href: "/salle-de-bain",
  },
  {
    title: "Extérieurs valorisés",
    text: "Pergola, terrasse, portail, clôture, toiture et façade pour embellir et protéger votre maison.",
    image: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/c461a20a7_generated_b8cfce79.png",
    href: "/pergola-terrasse",
  },
];

export function CraftGallery() {
  return (
    <section className="bg-[#f7f3ec] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Savoir-faire</p>
          <h2 className="text-3xl font-black tracking-tight text-[#1d1a16] sm:text-5xl">
            Des travaux pensés pour durer et valoriser votre habitat
          </h2>
          <p className="mt-5 leading-8 text-[#6f6a63]">
            Un aperçu des univers de travaux accompagnés par BâtiReno’V17, avec une attention portée aux finitions, au confort et à la cohérence de votre maison.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.title} href={card.href} className="group overflow-hidden rounded-[2.5rem] bg-[#fffdf8] shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="overflow-hidden p-3">
                <img src={card.image} alt={card.title} className="h-72 w-full rounded-[2rem] object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 pt-4">
                <h3 className="text-2xl font-black text-[#1d1a16]">{card.title}</h3>
                <p className="mt-4 leading-8 text-[#6f6a63]">{card.text}</p>
                <span className="mt-6 inline-flex items-center text-sm font-black uppercase tracking-wide text-[#b86b3c]">
                  Découvrir <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
