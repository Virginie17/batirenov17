import { ServiceLanding } from "../components/ServiceLanding";

export const metadata = {
  title: "Pose volets roulants et battants près de La Rochelle | BâtiReno’V17",
  description: "Pose, remplacement et rénovation de volets roulants ou battants autour de Bouhet, Surgères, La Rochelle et en Charente-Maritime.",
};

export default function VoletsBattantsPage() {
  return (
    <ServiceLanding
      eyebrow="Volets"
      title="Pose de volets roulants et battants près de La Rochelle"
      intro="BâtiReno’V17 installe et remplace vos volets roulants ou battants pour améliorer le confort thermique, l’occultation, la sécurité et l’esthétique de votre maison."
      image="https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/cfac43ed6_generated_73dd9784.png"
      benefits={["Confort thermique renforcé", "Meilleure sécurité des ouvertures", "Solutions manuelles ou motorisées", "Pose adaptée à l’existant"]}
      services={["Volets roulants", "Volets battants", "Motorisation", "Remplacement de volets", "Réparation et dépannage", "Conseils matériaux et finitions"]}
      faq={[{ question: "Posez-vous des volets motorisés ?", answer: "Oui, selon la configuration de votre maison, une solution motorisée ou manuelle peut être proposée." }, { question: "Pouvez-vous remplacer des volets anciens ?", answer: "Oui, BâtiReno’V17 peut remplacer des volets existants pour améliorer le confort et l’esthétique." }, { question: "Dans quelles communes intervenez-vous ?", answer: "L’entreprise intervient autour de Bouhet, Surgères, La Rochelle et plus largement en Charente-Maritime." }]}
    />
  );
}
