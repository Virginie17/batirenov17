import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const services = [
  ["Portes & Fenêtres", "/portes-fenetres"],
  ["Volets & Battants", "/volets-battants"],
  ["Salle de Bain", "/salle-de-bain"],
  ["Pergola & Terrasse", "/pergola-terrasse"],
  ["Portail & Clôture", "/portail-cloture"],
  ["Charpente & Toiture", "/charpente-toiture"],
];

export function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-black">
              Bâti<span className="text-[#f97316]">Reno’V</span> 17
            </h3>
            <p className="text-sm leading-7 text-white/60">
              Votre expert en menuiserie sur mesure proche de La Rochelle. Plus de 20 ans de savoir-faire artisanal.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#f97316]">Nos Services</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {services.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-white">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#f97316]">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f97316]" />
                1 Chem. de la Loubrie, 17540 Bouhet
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#f97316]" />
                <a href="tel:0668008694" className="transition-colors hover:text-white">06 68 00 86 94</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#f97316]" />
                <a href="mailto:c.vicq@outlook.fr" className="transition-colors hover:text-white">c.vicq@outlook.fr</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#f97316]">Certifications</h4>
            <p className="mb-3 text-sm text-white/60">Entreprise certifiée RGE avec garantie décennale.</p>
            <div className="flex gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 text-xs font-black text-[#f97316]">RGE</div>
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 text-xs font-black text-[#f97316]">10 ans</div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          © {year} BâtiReno’V 17 — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
