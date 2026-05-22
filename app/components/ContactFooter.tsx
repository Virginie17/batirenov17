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
    <footer className="bg-[#2f4a3d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-[2.5rem] bg-[#fffdf8] p-8 text-[#1d1a16] shadow-xl sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Devis gratuit</p>
            <h2 className="max-w-2xl text-3xl font-black sm:text-4xl">Parlons de votre projet de rénovation</h2>
          </div>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[#b86b3c] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#9f5930] lg:mt-0">Demander un devis</Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-black">Bâti<span className="text-[#f4c8a8]">Reno’V</span> 17</h3>
            <p className="text-sm leading-7 text-white/65">Votre expert en menuiserie sur mesure proche de La Rochelle. Plus de 20 ans de savoir-faire artisanal.</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-widest text-[#f4c8a8]">Nos Services</h4>
            <ul className="space-y-2 text-sm text-white/65">
              {services.map(([label, href]) => <li key={href}><Link href={href} className="transition-colors hover:text-white">{label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-widest text-[#f4c8a8]">Contact</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f4c8a8]" />1 Chemin de la Loubrie, 17540 Bouhet</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-[#f4c8a8]" /><a href="tel:0668008694" className="transition-colors hover:text-white">06 68 00 86 94</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-[#f4c8a8]" /><a href="mailto:c.vicq@outlook.fr" className="transition-colors hover:text-white">c.vicq@outlook.fr</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-widest text-[#f4c8a8]">Certifications</h4>
            <p className="mb-4 text-sm leading-7 text-white/65">Entreprise certifiée RGE avec garantie décennale.</p>
            <div className="flex gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-xs font-black text-[#f4c8a8]">RGE</div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-xs font-black text-[#f4c8a8]">10 ans</div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/45">© {year} BâtiReno’V 17 — Tous droits réservés</div>
      </div>
    </footer>
  );
}
