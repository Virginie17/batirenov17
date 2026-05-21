import { ServiceLanding } from "../components/ServiceLanding";

export const metadata = {
  title: "Rénovation salle de bain près de La Rochelle | BâtiReno’V17",
  description: "Rénovation de salle de bain, douche, revêtements, meubles et aménagement PMR autour de Bouhet, Surgères, La Rochelle et en Charente-Maritime.",
};

export default function SalleDeBainPage() {
  return (
    <ServiceLanding
      eyebrow="Salle de bain"
      title="Rénovation de salle de bain près de La Rochelle"
      intro="BâtiReno’V17 vous accompagne dans la création ou la rénovation de votre salle de bain pour obtenir un espace plus pratique, moderne, confortable et adapté à votre quotidien."
      image="https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/e100cc4ec_generated_be17f913.png"
      benefits={["Salle de bain plus fonctionnelle", "Finitions propres et durables", "Solutions adaptées aux besoins du foyer", "Conseils pour optimiser l’espace"]}
      services={["Rénovation complète", "Douche et paroi vitrée", "Meubles de salle de bain", "Revêtement mural", "Revêtement de sol", "Aménagement PMR"]}
      faq={[{ question: "Pouvez-vous rénover une petite salle de bain ?", answer: "Oui, l’aménagement est étudié pour optimiser l’espace et améliorer le confort d’usage." }, { question: "Proposez-vous des solutions PMR ?", answer: "Oui, selon les besoins, des aménagements peuvent être proposés pour faciliter l’accès et sécuriser l’espace." }, { question: "Le devis est-il gratuit ?", answer: "Oui, vous pouvez demander un devis gratuit pour votre projet de salle de bain." }]}
    />
  );
}
