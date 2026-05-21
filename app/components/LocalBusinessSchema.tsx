export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "BâtiReno’V17",
    url: "https://batirenov17.fr",
    telephone: "+33668008694",
    email: "c.vicq@outlook.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Chem. de la Loubrie",
      postalCode: "17540",
      addressLocality: "Bouhet",
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    areaServed: ["Bouhet", "Surgères", "La Rochelle", "Rochefort", "Charente-Maritime", "Deux-Sèvres", "Vendée"],
    priceRange: "€€",
    description: "Entreprise de menuiserie et rénovation autour de Bouhet, Surgères et La Rochelle.",
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pose de portes et fenêtres" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pose de volets" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation de salle de bain" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pergola, terrasse et store" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portail et clôture" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Charpente, toiture et façade" } }
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
