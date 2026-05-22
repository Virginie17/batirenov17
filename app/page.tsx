import { AboutSection } from "./components/AboutSection";
import { Hero } from "./components/Hero";
import { LocalBusinessSchema } from "./components/LocalBusinessSchema";
import { Portfolio } from "./components/Portfolio";
import { ServicesShowcase } from "./components/ServicesShowcase";
import { SocialProof } from "./components/SocialProof";
import { ValueCards } from "./components/ValueCards";
import { ZoneIntervention } from "./components/ZoneIntervention";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <AboutSection />
      <ValueCards />
      <ServicesShowcase />
      <Portfolio />
      <SocialProof />
      <ZoneIntervention />
    </>
  );
}
