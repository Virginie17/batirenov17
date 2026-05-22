import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ZoneIntervention() {
  return (
    <section id="zone" className="bg-[#f7f3ec] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div className="rounded-[2.5rem] bg-[#fffdf8] p-8 shadow-sm ring-1 ring-stone-200 lg:p-10">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Secteur d’intervention</p>
            <h2 className="mb-6 text-3xl font-black text-[#1d1a16] sm:text-5xl">Notre zone d’intervention</h2>
            <p className="mb-6 leading-8 text-[#6f6a63]">
              <strong className="text-[#1d1a16]">Situés à Bouhet, nous intervenons dans un rayon d’environ 60 km autour</strong>, couvrant une large partie de la Charente-Maritime, du sud des Deux-Sèvres et de la Vendée.
            </p>
            <p className="mb-8 leading-8 text-[#6f6a63]">
              Nous nous déplaçons directement chez vous pour évaluer vos besoins et vous proposer des solutions adaptées à votre maison.
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#b86b3c]" /><div><p className="text-sm font-bold text-[#6f6a63]">Adresse</p><p className="text-[#1d1a16]">1 Chemin de la Loubrie, 17540 Bouhet</p></div></div>
              <div className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#b86b3c]" /><div><p className="text-sm font-bold text-[#6f6a63]">Téléphone</p><a href="tel:0668008694" className="font-bold text-[#1d1a16] transition hover:text-[#b86b3c]">06 68 00 86 94</a></div></div>
              <div className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#b86b3c]" /><div><p className="text-sm font-bold text-[#6f6a63]">E-mail</p><a href="mailto:c.vicq@outlook.fr" className="font-bold text-[#1d1a16] transition hover:text-[#b86b3c]">c.vicq@outlook.fr</a></div></div>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#b86b3c] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#9f5930]">
              <Send className="h-4 w-4" /> Contactez-nous
            </Link>
          </div>

          <div className="h-80 w-full overflow-hidden rounded-[2.5rem] bg-[#fffdf8] p-3 shadow-sm ring-1 ring-stone-200 lg:h-[520px]">
            <iframe title="Zone d’intervention BâtiReno’V 17" src="https://www.openstreetmap.org/export/embed.html?bbox=-1.3%2C45.9%2C-0.4%2C46.5&layer=mapnik&marker=46.1474%2C-0.8786" className="h-full w-full rounded-[2rem] border-0" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
