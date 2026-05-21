import type { Metadata } from "next";
import { ContactFooter } from "./components/ContactFooter";
import { Header } from "./components/Header";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import "./globals.css";

export const metadata: Metadata = {
  title: "BâtiReno’V17 | Menuiserie, rénovation et aménagement près de La Rochelle",
  description: "BâtiReno’V17 réalise vos travaux de menuiserie, rénovation intérieure et extérieure, portes, fenêtres, volets, pergolas, terrasses, salle de bain, portail, clôture, toiture et façade en Charente-Maritime.",
  alternates: {
    canonical: "https://batirenov17.fr",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="flex min-h-screen flex-col pb-20 md:pb-0">
          <Header />
          <main className="flex-1">{children}</main>
          <ContactFooter />
          <StickyMobileCTA />
        </div>
      </body>
    </html>
  );
}
