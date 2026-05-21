import type { Metadata } from "next";
import { ContactFooter } from "./components/ContactFooter";
import { Header } from "./components/Header";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import "./globals.css";

const siteUrl = "https://batirenov17.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BâtiReno’V17 | Menuiserie et rénovation près de La Rochelle",
    template: "%s | BâtiReno’V17",
  },
  description: "Menuiserie et rénovation autour de Bouhet, Surgères, La Rochelle et en Charente-Maritime : portes, fenêtres, volets, salle de bain, pergola, portail, clôture, toiture et façade.",
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "BâtiReno’V17",
    title: "BâtiReno’V17 | Menuiserie et rénovation près de La Rochelle",
    description: "Artisan menuisier RGE pour vos travaux de menuiserie et rénovation en Charente-Maritime.",
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
