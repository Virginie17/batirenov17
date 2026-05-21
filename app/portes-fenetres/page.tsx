import { ServiceLanding } from "../components/ServiceLanding";

export const metadata = {
  title: "Pose portes et fenêtres près de La Rochelle | BâtiReno’V17",
  description: "Pose et remplacement de portes, fenêtres, baies vitrées et menuiseries autour de Bouhet, Surgères, La Rochelle et en Charente-Maritime.",
};

export default function PortesFenetresPage() {
  return (
    <ServiceLanding
      eyebrow="Menuiseries"
      title="Pose de portes et fenêtres près de La Rochelle"
      intro="BâtiReno’V17 vous accompagne pour la pose et le remplacement de portes, fenêtres, baies vitrées et menuiseries afin d’améliorer l’isolation, la sécurité et l’esthétique de votre habitat."
      image="https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/623e82b99_generated_70137a0c.png"
      benefits={["Meilleure isolation thermique et phonique", "Menuiseries adaptées à votre maison", "Conseils sur les matériaux : aluminium, PVC ou bois", "Pose soignée par un artisan local"]}
      services={["Porte d’entrée", "Fenêtre double vitrage", "Baie coulissante", "Remplacement de menuiseries", "Étanchéité et isolation", "Dépose d’anciennes ouvertures"]}
      faq={[{ question: "Intervenez-vous autour de La Rochelle ?", answer: "Oui, BâtiReno’V17 intervient autour de Bouhet, Surgères, La Rochelle, Rochefort et en Charente-Maritime selon le projet." }, { question: "Le devis est-il gratuit ?", answer: "Oui, le premier échange et la demande de devis sont gratuits afin d’évaluer votre besoin." }, { question: "Pouvez-vous remplacer d’anciennes fenêtres ?", answer: "Oui, l’entreprise peut vous accompagner pour remplacer des menuiseries vétustes et améliorer le confort du logement." }]}
    />
  );
}
