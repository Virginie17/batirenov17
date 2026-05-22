"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

const interiorLinks = [
  { label: "Portes & Fenêtres", to: "/portes-fenetres" },
  { label: "Volets & Battants", to: "/volets-battants" },
  { label: "Salle de Bain", to: "/salle-de-bain" },
  { label: "Revêtement", to: "/revetement" },
];

const exteriorLinks = [
  { label: "Pergola, Terrasse & Store", to: "/pergola-terrasse" },
  { label: "Portail & Clôture", to: "/portail-cloture" },
  { label: "Charpente & Toiture", to: "/charpente-toiture" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [intDropdown, setIntDropdown] = useState(false);
  const [extDropdown, setExtDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const navStyle = scrolled
    ? "border-stone-200 bg-[#fffdf8]/95 shadow-sm backdrop-blur-xl"
    : "border-transparent bg-[#fffdf8]/80 backdrop-blur-md";

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${navStyle}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2f4a3d] text-sm font-black text-white">BR</span>
            <span className="text-lg font-black tracking-tight text-[#1d1a16] lg:text-xl">
              Bâti<span className="text-[#b86b3c]">Reno’V</span> 17
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <Link href="/" className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#1d1a16]/75 transition-colors hover:text-[#1d1a16]">Accueil</Link>

            <div className="relative" onMouseEnter={() => setIntDropdown(true)} onMouseLeave={() => setIntDropdown(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#1d1a16]/75 transition-colors hover:text-[#1d1a16]">
                Intérieur <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {intDropdown && (
                <div className="absolute left-0 top-full min-w-[230px] rounded-2xl border border-stone-200 bg-[#fffdf8] p-2 shadow-xl">
                  {interiorLinks.map((link) => <Link key={link.to} href={link.to} className="block rounded-xl px-4 py-3 text-sm font-semibold text-stone-600 hover:bg-[#f7f3ec] hover:text-[#1d1a16]">{link.label}</Link>)}
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setExtDropdown(true)} onMouseLeave={() => setExtDropdown(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#1d1a16]/75 transition-colors hover:text-[#1d1a16]">
                Extérieur <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {extDropdown && (
                <div className="absolute left-0 top-full min-w-[250px] rounded-2xl border border-stone-200 bg-[#fffdf8] p-2 shadow-xl">
                  {exteriorLinks.map((link) => <Link key={link.to} href={link.to} className="block rounded-xl px-4 py-3 text-sm font-semibold text-stone-600 hover:bg-[#f7f3ec] hover:text-[#1d1a16]">{link.label}</Link>)}
                </div>
              )}
            </div>

            <Link href="/realisations" className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#1d1a16]/75 transition-colors hover:text-[#1d1a16]">Réalisations</Link>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="tel:0668008694" className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-sm font-black text-[#1d1a16] transition hover:border-[#b86b3c] hover:text-[#b86b3c]"><Phone className="h-4 w-4" />06 68 00 86 94</a>
            <Link href="/contact" className="rounded-full bg-[#b86b3c] px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#9f5930]">Devis gratuit</Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-full border border-stone-200 p-2 text-[#1d1a16] lg:hidden" aria-label="Ouvrir le menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-stone-200 bg-[#fffdf8] shadow-xl lg:hidden">
          <div className="space-y-2 px-4 py-5">
            <Link href="/" className="block py-3 text-sm font-black uppercase tracking-wider text-[#1d1a16]">Accueil</Link>
            <p className="pt-3 text-xs font-black uppercase tracking-widest text-[#b86b3c]">Menuiserie intérieure</p>
            {interiorLinks.map((link) => <Link key={link.to} href={link.to} className="block py-2 pl-4 text-sm font-semibold text-stone-600">{link.label}</Link>)}
            <p className="border-t border-stone-200 pt-4 text-xs font-black uppercase tracking-widest text-[#b86b3c]">Menuiserie extérieure</p>
            {exteriorLinks.map((link) => <Link key={link.to} href={link.to} className="block py-2 pl-4 text-sm font-semibold text-stone-600">{link.label}</Link>)}
            <Link href="/realisations" className="block border-t border-stone-200 py-3 text-sm font-black uppercase tracking-wider text-[#1d1a16]">Réalisations</Link>
            <Link href="/contact" className="block rounded-full bg-[#b86b3c] px-5 py-3 text-center text-sm font-black uppercase tracking-wide text-white">Demander un devis</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
