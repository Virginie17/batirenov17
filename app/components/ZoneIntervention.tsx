import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ZoneIntervention() {
  return (
    <section id="zone" className="bg-neutral-950 py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-black sm:text-4xl">Notre zone d’intervention</h2>
            <p className="mb-6 leading-8 text-white/70">
              <strong className="text-white">Situés à Bouhet, nous intervenons dans un rayon d’environ 60 km autour</strong>, couvrant une large partie de la Charente-Maritime, du sud des Deux-Sèvres et de la Vendée.
            </p>
            <p className="mb-8 leading-8 text-white/70">
              Que vous soyez un <strong className="text-white">particulier ou un professionnel, nous nous déplaçons directement chez vous</strong> pour évaluer vos besoins et vous proposer des solutions adaptées !
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#f97316]" />
                <div><p className="text-sm text-white/50">Adresse</p><p>1 Chem. de la Loubrie 17540 Bouhet</p></div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#f97316]" />
                <div><p className="text-sm text-white/50">Téléphone</p><a href="tel:0668008694" className="transition hover:text-[#f97316]">06 68 00 86 94</a></div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#f97316]" />
                <div><p className="text-sm text-white/50">E-mail</p><a href="mailto:c.vicq@outlook.fr" className="transition hover:text-[#f97316]">c.vicq@outlook.fr</a></div>
              </div>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#f97316] px-7 py-3.5 text-sm font-bold tracking-wide text-white transition hover:bg-[#ea580c]">
              <Send className="h-4 w-4" /> Contactez-nous !
            </Link>
          </div>

          <div className="h-80 w-full overflow-hidden bg-neutral-800 lg:h-[450px]">
            <iframe title="Zone d’intervention BâtiReno’V 17" src="https://www.openstreetmap.org/export/embed.html?bbox=-1.3%2C45.9%2C-0.4%2C46.5&layer=mapnik&marker=46.1474%2C-0.8786" className="h-full w-full border-0" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
