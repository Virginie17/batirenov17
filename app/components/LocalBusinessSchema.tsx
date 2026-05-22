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
      streetAddress: "1 Chemin de la Loubrie",
      postalCode: "17540",
      addressLocality: "Bouhet",
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      address: "1 Chemin de la Loubrie, 17540 Bouhet, France",
    },
    areaServed: [
      "Bouhet",
      "Surgères",
      "La Rochelle",
      "Rochefort",
      "Aigrefeuille-d'Aunis",
      "Marans",
      "Charente-Maritime",
      "Deux-Sèvres",
      "Vendée",
    ],
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:30",
      },
    ],
    description:
      "Entreprise de menuiserie et rénovation autour de Bouhet, Surgères et La Rochelle : portes, fenêtres, volets, salle de bain, pergola, terrasse, portail, clôture, toiture et façade.",
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pose de portes et fenêtres" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pose de volets" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation de salle de bain" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pergola, terrasse et store" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portail et clôture" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Charpente, toiture et façade" } },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
