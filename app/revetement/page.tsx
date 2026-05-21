import { ServiceLanding } from "../components/ServiceLanding";

export const metadata = {
  title: "Pose de revêtement sol et mur près de La Rochelle | BâtiReno’V17",
  description: "Pose de revêtements sols et murs, vinyle, parquet, carrelage et finitions intérieures autour de Bouhet, Surgères, La Rochelle et en Charente-Maritime.",
};

export default function RevetementPage() {
  return (
    <ServiceLanding
      eyebrow="Revêtements"
      title="Pose de revêtements sols et murs près de La Rochelle"
      intro="BâtiReno’V17 réalise la pose de revêtements sols et murs pour moderniser vos pièces, améliorer les finitions et donner un nouveau style à votre intérieur."
      image="https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/c63fdd2b3_generated_e8a844e9.png"
      benefits={["Rendu intérieur plus propre et moderne", "Supports préparés avant la pose", "Solutions adaptées à chaque pièce", "Conseils sur les matériaux et finitions"]}
      services={["Sol vinyle", "Parquet flottant", "Carrelage", "Faïence murale", "Préparation des supports", "Finitions intérieures"]}
      faq={[{ question: "Posez-vous du vinyle et du parquet ?", answer: "Oui, selon le projet, plusieurs solutions peuvent être envisagées : vinyle, parquet, carrelage ou faïence." }, { question: "Préparez-vous les supports avant la pose ?", answer: "Oui, la préparation du support est essentielle pour obtenir un résultat durable et propre." }, { question: "Intervenez-vous pour une seule pièce ?", answer: "Oui, l’intervention peut concerner une pièce unique ou un projet plus global." }]}
    />
  );
}
