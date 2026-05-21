import { AboutSection } from "./components/AboutSection";
import { ContactFooter } from "./components/ContactFooter";
import { ExteriorServices } from "./components/ExteriorServices";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InteriorServices } from "./components/InteriorServices";
import { Portfolio } from "./components/Portfolio";
import { ProcessZone } from "./components/ProcessZone";
import { Trust } from "./components/Trust";
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
    <main className="min-h-screen overflow-hidden bg-[#faf7f1] text-[#17130f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Hero />
      <AboutSection />
      <Trust />
      <InteriorServices />
      <ExteriorServices />
      <Portfolio />
      <ProcessZone />
      <ContactFooter />
    </main>
  );
}
