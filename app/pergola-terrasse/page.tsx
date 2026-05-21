import { ServiceLanding } from "../components/ServiceLanding";

export const metadata = {
  title: "Pergola, terrasse et store près de La Rochelle | BâtiReno’V17",
  description: "Pose de pergola, terrasse bois ou composite, store banne et aménagement extérieur autour de Bouhet, Surgères, La Rochelle et en Charente-Maritime.",
};

export default function PergolaTerrassePage() {
  return (
    <ServiceLanding
      eyebrow="Extérieur"
      title="Pergola, terrasse et store près de La Rochelle"
      intro="BâtiReno’V17 aménage vos extérieurs pour créer un espace agréable, ombragé et fonctionnel autour de votre maison : pergola, terrasse, store, auvent et solutions sur mesure."
      image="https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/c461a20a7_generated_b8cfce79.png"
      benefits={["Espace extérieur plus agréable", "Valorisation de votre maison", "Solutions adaptées à l’exposition", "Conseils sur les matériaux et finitions"]}
      services={["Pergola bioclimatique", "Terrasse bois", "Terrasse composite", "Store banne", "Auvent", "Éclairage extérieur"]}
      faq={[{ question: "Quel type de terrasse choisir ?", answer: "Le choix dépend de l’usage, du style recherché, de l’entretien souhaité et de l’exposition de votre extérieur." }, { question: "Posez-vous des stores motorisés ?", answer: "Oui, selon le projet, une solution motorisée peut être envisagée pour plus de confort." }, { question: "Intervenez-vous autour de La Rochelle ?", answer: "Oui, BâtiReno’V17 intervient autour de Bouhet, Surgères, La Rochelle et en Charente-Maritime." }]}
    />
  );
}
