import { Building2, Menu } from "lucide-react";

const nav = [
  ["Prestations", "#prestations"],
  ["Réalisations", "#realisations"],
  ["Méthode", "#methode"],
  ["Secteur", "#zone"],
  ["Contact", "#contact"],
];

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#15110d]/90 text-white shadow-2xl backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#accueil" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f97316] to-[#c2410c] shadow-lg shadow-orange-500/30">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xl font-black tracking-tight">BâtiReno’V17</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-orange-200/80">Menuiserie · Rénovation</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-bold text-zinc-200 lg:flex">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-[#fb923c]">{label}</a>
          ))}
        </nav>

        <a href="tel:+33668008694" className="hidden rounded-full bg-[#f97316] px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-[#ea580c] sm:inline-flex">
          06 68 00 86 94
        </a>

        <Menu className="h-7 w-7 lg:hidden" />
      </div>
    </header>
  );
}
