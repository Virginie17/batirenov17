import { Building2, Menu } from "lucide-react";

const nav = [
  ["Accueil", "/"],
  ["Réalisations", "/realisations"],
  ["Portes & fenêtres", "/portes-fenetres"],
  ["Volets", "/volets-battants"],
  ["Salle de bain", "/salle-de-bain"],
  ["Contact", "/contact"],
];

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-neutral-200 bg-white/95 text-neutral-900 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center bg-[#b8743b] text-white"><Building2 className="h-6 w-6" /></div>
          <div><p className="text-xl font-bold tracking-tight">BâtiReno’V17</p><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-500">Menuiserie · Rénovation</p></div>
        </a>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-neutral-700 xl:flex">
          {nav.map(([label, href]) => <a key={href} href={href} className="transition hover:text-[#b8743b]">{label}</a>)}
        </nav>
        <a href="tel:+33668008694" className="hidden bg-[#b8743b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9a5c2a] sm:inline-flex">06 68 00 86 94</a>
        <Menu className="h-7 w-7 text-neutral-900 xl:hidden" />
      </div>
    </header>
  );
}
