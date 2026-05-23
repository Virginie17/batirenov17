import { AboutSection } from "./components/AboutSection";
import { Hero } from "./components/Hero";
import { LocalBusinessSchema } from "./components/LocalBusinessSchema";
import { Portfolio } from "./components/Portfolio";
import { ProjectSteps } from "./components/ProjectSteps";
import { ServicesShowcase } from "./components/ServicesShowcase";
import { SocialProof } from "./components/SocialProof";
import { ZoneIntervention } from "./components/ZoneIntervention";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <ServicesShowcase />
      <Portfolio />
      <ProjectSteps />
      <AboutSection />
      <SocialProof />
      <ZoneIntervention />
    </>
  );
}
