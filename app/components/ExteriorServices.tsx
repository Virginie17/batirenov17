import { ServiceCard } from "./ServiceCard";

const services = [
  {
    image: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/c461a20a7_generated_b8cfce79.png",
    title: "Pergola, Terrasse & Store",
    subtitle: "Créez un espace extérieur agréable et ombragé, à vivre toute l’année.",
    items: ["Pose de pergola bioclimatique", "Installation de stores bannes", "Terrasse bois ou composite", "Création d’auvent", "Éclairage intégré"],
    link: "/pergola-terrasse",
  },
  {
    image: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/704c491fe_generated_b36d3299.png",
    title: "Portail & Clôture",
    subtitle: "Sécurisez et valorisez l’entrée de votre maison avec un portail et une clôture adaptés.",
    items: ["Portail coulissant ou battant", "Clôture aluminium, bois ou PVC", "Installation de portillons", "Motorisation et interphonie", "Remplacement d’anciennes installations"],
    link: "/portail-cloture",
  },
  {
    image: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/3c895c38b_generated_801ae1cf.png",
    title: "Charpente, Toiture & Façade",
    subtitle: "Protégez durablement votre habitat avec un traitement et un nettoyage professionnel.",
    items: ["Nettoyage de toiture", "Démoussage et protection", "Traitement de charpente", "Révision de liteaux", "Étanchéité et tuiles"],
    link: "/charpente-toiture",
  },
];

export function ExteriorServices() {
  return (
    <section className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">Nos Services</p>
          <h2 className="text-3xl font-black text-neutral-900 sm:text-4xl">Menuiserie extérieure</h2>
        </div>
        <div className="space-y-20">
          {services.map((service, index) => <ServiceCard key={service.link} {...service} reversed={index % 2 !== 0} />)}
        </div>
      </div>
    </section>
  );
}
