import { AboutSection } from "./components/AboutSection";
import { ArtisanNote } from "./components/ArtisanNote";
import { CraftGallery } from "./components/CraftGallery";
import { Hero } from "./components/Hero";
import { LocalBusinessSchema } from "./components/LocalBusinessSchema";
import { Portfolio } from "./components/Portfolio";
import { ProjectSteps } from "./components/ProjectSteps";
import { ServicesShowcase } from "./components/ServicesShowcase";
import { SignatureStrip } from "./components/SignatureStrip";
import { SocialProof } from "./components/SocialProof";
import { ValueCards } from "./components/ValueCards";
import { ZoneIntervention } from "./components/ZoneIntervention";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <SignatureStrip />
      <ProjectSteps />
      <AboutSection />
      <ValueCards />
      <ServicesShowcase />
      <CraftGallery />
      <Portfolio />
      <ArtisanNote />
      <SocialProof />
      <ZoneIntervention />
    </>
  );
}
