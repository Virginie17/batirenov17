import { AboutSection } from "./components/AboutSection";
import { ExteriorServices } from "./components/ExteriorServices";
import { Hero } from "./components/Hero";
import { InteriorServices } from "./components/InteriorServices";
import { Portfolio } from "./components/Portfolio";
import { Trust } from "./components/Trust";
import { ValueCards } from "./components/ValueCards";
import { ZoneIntervention } from "./components/ZoneIntervention";
import { zones } from "./components/site-data";

const jsonLd = {
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
    addressCountry: "FR",
  },
  areaServed: zones,
  description: "Entreprise de menuiserie, rénovation et aménagement intérieur et extérieur en Charente-Maritime.",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <AboutSection />
      <ValueCards />
      <Trust />
      <InteriorServices />
      <ExteriorServices />
      <Portfolio />
      <ZoneIntervention />
    </>
  );
}
