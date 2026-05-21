import { Mail, Phone } from "lucide-react";

export function ContactFooter() {
  return (
    <>
      <section className="bg-[#f97316] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">Devis gratuit</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-5xl">Vous avez un projet de rénovation ou d’aménagement ?</h2>
          </div>
          <a href="tel:+33668008694" className="inline-flex items-center rounded-full bg-[#15110d] px-8 py-4 font-black text-white transition hover:bg-white hover:text-[#15110d]"><Phone className="mr-2 h-5 w-5" />Appeler BâtiReno’V17</a>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#15110d] text-white shadow-2xl">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#fb923c]">Contact</p>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl">Demandez votre devis gratuit</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-300">Expliquez votre projet, votre secteur et vos besoins. BâtiReno’V17 vous répond pour organiser la suite.</p>
              <p className="mt-6 text-sm text-zinc-400">1 Chemin de la Loubrie, 17540 Bouhet</p>
            </div>
            <div className="space-y-4 self-center">
              <a href="tel:+33668008694" className="flex items-center justify-center rounded-full bg-[#f97316] px-7 py-4 font-black text-white transition hover:bg-[#ea580c]"><Phone className="mr-2 h-5 w-5" />06 68 00 86 94</a>
              <a href="mailto:c.vicq@outlook.fr" className="flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:bg-white hover:text-[#15110d]"><Mail className="mr-2 h-5 w-5" />Envoyer un email</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-zinc-600 md:flex-row md:items-center">
          <div><p className="font-black text-[#17130f]">BâtiReno’V17</p><p>Menuiserie, rénovation et aménagement en Charente-Maritime.</p></div>
          <div className="flex flex-col gap-2 md:text-right"><a href="tel:+33668008694" className="font-bold hover:text-[#f97316]">06 68 00 86 94</a><a href="mailto:c.vicq@outlook.fr" className="font-bold hover:text-[#f97316]">c.vicq@outlook.fr</a></div>
        </div>
      </footer>
    </>
  );
}
