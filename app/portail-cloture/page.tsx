import { ServiceLanding } from "../components/ServiceLanding";

export const metadata = {
  title: "Pose portail et clôture près de La Rochelle | BâtiReno’V17",
  description: "Pose de portail, clôture, portillon, motorisation et interphonie autour de Bouhet, Surgères, La Rochelle et en Charente-Maritime.",
};

export default function PortailCloturePage() {
  return (
    <ServiceLanding
      eyebrow="Extérieur"
      title="Pose de portail et clôture près de La Rochelle"
      intro="BâtiReno’V17 vous accompagne pour sécuriser, délimiter et valoriser l’entrée de votre maison avec un portail, une clôture ou un portillon adapté à votre terrain."
      image="https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/704c491fe_generated_b36d3299.png"
      benefits={["Entrée de maison sécurisée", "Meilleure délimitation du terrain", "Solutions manuelles ou motorisées", "Finitions adaptées au style de votre habitat"]}
      services={["Portail coulissant", "Portail battant", "Clôture aluminium", "Clôture bois ou PVC", "Portillon", "Motorisation et interphonie"]}
      faq={[{ question: "Posez-vous des portails motorisés ?", answer: "Oui, selon la configuration du terrain et de l’accès, une motorisation peut être proposée." }, { question: "Pouvez-vous remplacer une ancienne clôture ?", answer: "Oui, l’entreprise peut intervenir pour déposer et remplacer une installation existante." }, { question: "Le devis portail ou clôture est-il gratuit ?", answer: "Oui, vous pouvez demander un devis gratuit afin d’évaluer votre projet." }]}
    />
  );
}
