import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";

const services = [
  ["Portes & Fenêtres", "/portes-fenetres"],
  ["Volets & Battants", "/volets-battants"],
  ["Salle de Bain", "/salle-de-bain"],
  ["Pergola & Terrasse", "/pergola-terrasse"],
  ["Portail & Clôture", "/portail-cloture"],
  ["Charpente & Toiture", "/charpente-toiture"],
];

const legalLinks = [
  ["Mentions légales", "/mentions-legales"],
  ["Politique de confidentialité", "/politique-confidentialite"],
  ["Gestion des cookies", "/cookies"],
];

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></svg>;
}

export function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2f4a3d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-[2.5rem] bg-[#fffdf8] p-8 text-[#1d1a16] shadow-xl sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Devis gratuit</p>
            <h2 className="max-w-2xl text-3xl font-black sm:text-4xl">Parlons de votre projet de rénovation</h2>
            <p className="mt-3 max-w-2xl text-sm font-semibold text-[#6f6a63]">Expliquez votre besoin, envoyez une photo si vous en avez une, et recevez un premier retour clair.</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <a href="tel:0668008694" className="inline-flex rounded-full border border-[#1d1a16]/15 px-7 py-3.5 text-sm font-black uppercase tracking-wide text-[#1d1a16] transition hover:border-[#b86b3c] hover:text-[#b86b3c]">Appeler</a>
            <Link href="/contact" className="inline-flex rounded-full bg-[#b86b3c] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#9f5930]">Demander un devis</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className="mb-4 text-2xl font-black">Bâti<span className="text-[#f4c8a8]">Reno’V</span> 17</h3>
            <p className="text-sm leading-7 text-white/65">Votre expert en menuiserie sur mesure proche de La Rochelle. Plus de 20 ans de savoir-faire artisanal.</p>
            <div className="mt-4 rounded-2xl bg-white/10 p-4">
              <div className="mb-2 flex gap-1 text-[#f4c8a8]">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm font-black">Entreprise locale RGE</p>
              <p className="text-xs text-white/60">Avis Google à connecter dès que la fiche est finalisée.</p>
            </div>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Facebook BâtiReno’V17" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#f4c8a8] transition hover:bg-white/15 hover:text-white"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram BâtiReno’V17" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#f4c8a8] transition hover:bg-white/15 hover:text-white"><InstagramIcon /></a>
            </div>
          </div>

          <div><h4 className="mb-4 text-sm font-black uppercase tracking-widest text-[#f4c8a8]">Nos Services</h4><ul className="space-y-2 text-sm text-white/65">{services.map(([label, href]) => <li key={href}><Link href={href} className="transition-colors hover:text-white">{label}</Link></li>)}</ul></div>

          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-widest text-[#f4c8a8]">Contact</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f4c8a8]" />1 Chemin de la Loubrie, 17540 Bouhet</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-[#f4c8a8]" /><a href="tel:0668008694" className="transition-colors hover:text-white">06 68 00 86 94</a></li>
              <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 shrink-0 text-[#f4c8a8]" /><a href="https://wa.me/33668008694?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20un%20projet%20de%20r%C3%A9novation." target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Écrire sur WhatsApp</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-[#f4c8a8]" /><a href="mailto:c.vicq@outlook.fr" className="transition-colors hover:text-white">c.vicq@outlook.fr</a></li>
            </ul>
          </div>

          <div><h4 className="mb-4 text-sm font-black uppercase tracking-widest text-[#f4c8a8]">Certifications</h4><p className="mb-4 text-sm leading-7 text-white/65">Entreprise certifiée RGE avec garantie décennale.</p><div className="flex gap-3"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-xs font-black text-[#f4c8a8]">RGE</div><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-xs font-black text-[#f4c8a8]">10 ans</div></div></div>

          <div><h4 className="mb-4 text-sm font-black uppercase tracking-widest text-[#f4c8a8]">Informations légales</h4><ul className="space-y-2 text-sm text-white/65">{legalLinks.map(([label, href]) => <li key={href}><Link href={href} className="transition-colors hover:text-white">{label}</Link></li>)}</ul></div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs leading-6 text-white/45">
          <p>© {year} BâtiReno’V 17 — Tous droits réservés</p>
          <p>Site réalisé par <a href="https://virginieassistance.fr" target="_blank" rel="noopener noreferrer" className="font-bold text-[#f4c8a8] transition hover:text-white">Virginie Assistance</a></p>
        </div>
      </div>
    </footer>
  );
}
