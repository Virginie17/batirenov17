import { ServiceLanding } from "../components/ServiceLanding";

export const metadata = {
  title: "Charpente, toiture et façade près de La Rochelle | BâtiReno’V17",
  description: "Travaux de charpente, toiture, nettoyage, démoussage, traitement et façade autour de Bouhet, Surgères, La Rochelle et en Charente-Maritime.",
};

export default function CharpenteToiturePage() {
  return (
    <ServiceLanding
      eyebrow="Toiture"
      title="Charpente, toiture et façade près de La Rochelle"
      intro="BâtiReno’V17 intervient pour préserver, entretenir et valoriser votre maison grâce à des travaux de charpente, toiture, nettoyage, traitement et façade adaptés à votre habitat."
      image="https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/3c895c38b_generated_801ae1cf.png"
      benefits={["Protection durable de l’habitat", "Nettoyage et entretien préventif", "Conseils sur l’état de la toiture", "Intervention locale autour de Bouhet et La Rochelle"]}
      services={["Nettoyage de toiture", "Démoussage", "Traitement hydrofuge", "Traitement de charpente", "Révision d’étanchéité", "Entretien de façade"]}
      faq={[{ question: "Pourquoi entretenir sa toiture ?", answer: "Un entretien régulier aide à limiter les dégradations, les mousses et les problèmes d’étanchéité." }, { question: "Traitez-vous les charpentes ?", answer: "Oui, un traitement peut être proposé selon l’état de la charpente et les besoins constatés." }, { question: "Intervenez-vous en Charente-Maritime ?", answer: "Oui, BâtiReno’V17 intervient autour de Bouhet, Surgères, La Rochelle et dans le secteur selon le projet." }]}
    />
  );
}
