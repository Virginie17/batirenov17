import { ServiceCard } from "./ServiceCard";

const services = [
  {
    image: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/623e82b99_generated_70137a0c.png",
    title: "Portes & Fenêtres",
    subtitle: "Sécurisez et isolez votre maison avec des menuiseries performantes et esthétiques.",
    items: ["Pose de portes d’entrée", "Installation de fenêtres double ou triple vitrage", "Remplacement de menuiseries vétustes", "Installation de baies coulissantes", "Travaux d’étanchéité et d’isolation"],
    link: "/portes-fenetres",
  },
  {
    image: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/cfac43ed6_generated_73dd9784.png",
    title: "Volets roulants & battants",
    subtitle: "Améliorez votre confort thermique et protégez vos ouvertures avec des volets sur mesure.",
    items: ["Pose de volets roulants", "Installation de volets battants", "Remplacement de volets existants", "Intégration domotique", "Réparation ou dépannage"],
    link: "/volets-battants",
  },
  {
    image: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/e100cc4ec_generated_be17f913.png",
    title: "Salle de bain",
    subtitle: "Donnez une seconde vie à votre salle d’eau avec une rénovation fonctionnelle et moderne.",
    items: ["Rénovation complète", "Pose de receveur et parois", "Meubles sur mesure", "Aménagement PMR", "Revêtement mural et sol"],
    link: "/salle-de-bain",
  },
  {
    image: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/c63fdd2b3_generated_e8a844e9.png",
    title: "Pose de revêtement vinyle à chaud et à froid",
    subtitle: "Embellissez vos sols et vos murs avec des revêtements durables et élégants.",
    items: ["Pose de carrelage", "Installation de parquets", "Sols vinyles et linoléum", "Préparation des supports", "Sols décoratifs"],
    link: "/revetement",
  },
];

export function InteriorServices() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">Nos Services</p>
          <h2 className="text-3xl font-black text-neutral-900 sm:text-4xl">Menuiserie intérieure</h2>
        </div>
        <div className="space-y-20">
          {services.map((service, index) => <ServiceCard key={service.link} {...service} reversed={index % 2 !== 0} />)}
        </div>
      </div>
    </section>
  );
}
