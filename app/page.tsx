import { AboutSection } from "./components/AboutSection";
import { ExteriorServices } from "./components/ExteriorServices";
import { Hero } from "./components/Hero";
import { InteriorServices } from "./components/InteriorServices";
import { LocalBusinessSchema } from "./components/LocalBusinessSchema";
import { Portfolio } from "./components/Portfolio";
import { SocialProof } from "./components/SocialProof";
import { Trust } from "./components/Trust";
import { ValueCards } from "./components/ValueCards";
import { ZoneIntervention } from "./components/ZoneIntervention";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <AboutSection />
      <ValueCards />
      <Trust />
      <InteriorServices />
      <ExteriorServices />
      <Portfolio />
      <SocialProof />
      <ZoneIntervention />
    </>
  );
}
