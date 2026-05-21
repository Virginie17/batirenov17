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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBg = scrolled ? "bg-black/95 shadow-lg backdrop-blur-md" : "bg-transparent";

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${navBg}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center">
            <span className="text-lg font-black tracking-tight text-white lg:text-xl">
              Bâti<span className="text-[#f97316]">Reno’V</span> 17
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <Link href="/" className="px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white/90 transition-colors hover:text-white">
              Accueil
            </Link>

            <div className="relative" onMouseEnter={() => setIntDropdown(true)} onMouseLeave={() => setIntDropdown(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white/90 transition-colors hover:text-white">
                Menuiserie Intérieure <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {intDropdown && (
                <div className="absolute left-0 top-full min-w-[220px] rounded-b-lg bg-black/95 py-2 shadow-xl backdrop-blur-md">
                  {interiorLinks.map((link) => (
                    <Link key={link.to} href={link.to} className="block px-5 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setExtDropdown(true)} onMouseLeave={() => setExtDropdown(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white/90 transition-colors hover:text-white">
                Menuiserie Extérieure <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {extDropdown && (
                <div className="absolute left-0 top-full min-w-[240px] rounded-b-lg bg-black/95 py-2 shadow-xl backdrop-blur-md">
                  {exteriorLinks.map((link) => (
                    <Link key={link.to} href={link.to} className="block px-5 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/realisations" className="px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white/90 transition-colors hover:text-white">
              Nos Réalisations
            </Link>

            <Link href="/contact" className="ml-2 border border-white/80 px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black">
              Nous Contacter
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-white lg:hidden" aria-label="Ouvrir le menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-md lg:hidden">
          <div className="space-y-1 px-4 py-4">
            <Link href="/" className="block py-3 text-sm font-semibold uppercase tracking-wider text-white">Accueil</Link>
            <div className="border-t border-white/10 pt-2">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#f97316]">Menuiserie Intérieure</p>
              {interiorLinks.map((link) => <Link key={link.to} href={link.to} className="block py-2 pl-4 text-sm text-white/80">{link.label}</Link>)}
            </div>
            <div className="border-t border-white/10 pt-2">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#f97316]">Menuiserie Extérieure</p>
              {exteriorLinks.map((link) => <Link key={link.to} href={link.to} className="block py-2 pl-4 text-sm text-white/80">{link.label}</Link>)}
            </div>
            <Link href="/realisations" className="block border-t border-white/10 py-3 text-sm font-semibold uppercase tracking-wider text-white">Nos Réalisations</Link>
            <Link href="/contact" className="block border-t border-white/10 py-3 text-sm font-semibold uppercase tracking-wider text-white">Nous Contacter</Link>
            <a href="tel:0668008694" className="flex items-center gap-2 border-t border-white/10 py-3 font-bold text-[#f97316]"><Phone className="h-4 w-4" />06 68 00 86 94</a>
          </div>
        </div>
      )}
    </nav>
  );
}
