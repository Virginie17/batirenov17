import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "BâtiReno’V17 | Menuiserie, rénovation et aménagement près de La Rochelle",
  description:
    "BâtiReno’V17 réalise vos travaux de menuiserie, rénovation intérieure et extérieure, portes, fenêtres, volets, pergolas, terrasses, salle de bain, portail, clôture, toiture et façade en Charente-Maritime.",
  alternates: {
    canonical: "https://batirenov17.fr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}