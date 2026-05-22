import { Mail, MapPin, Phone, ShieldCheck, Timer, Wrench } from "lucide-react";
import { LeadForm } from "../components/LeadForm";

const assurances = [
  { icon: Timer, title: "Réponse rapide", text: "Votre demande est claire et directement exploitable." },
  { icon: ShieldCheck, title: "Devis gratuit", text: "Un premier échange sans engagement pour cadrer votre projet." },
  { icon: Wrench, title: "Conseil terrain", text: "Un artisan local vous oriente vers la solution adaptée." },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#1d1a16]">
      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#b86b3c]/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Contact</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">Demander un devis gratuit pour vos travaux</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f6a63]">Décrivez votre projet de menuiserie, rénovation ou aménagement. BâtiReno’V17 intervient autour de Bouhet, Surgères, La Rochelle et en Charente-Maritime.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:0668008694" className="inline-flex items-center gap-2 rounded-full bg-[#b86b3c] px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#9f5930]"><Phone className="h-4 w-4" /> Appeler maintenant</a>
            <a href="mailto:c.vicq@outlook.fr" className="inline-flex items-center gap-2 rounded-full border border-[#1d1a16]/15 bg-[#fffdf8] px-6 py-3 text-sm font-black uppercase tracking-wide text-[#1d1a16] transition hover:border-[#b86b3c] hover:text-[#b86b3c]"><Mail className="h-4 w-4" /> Envoyer un e-mail</a>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <div className="mb-8">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Demande de devis</p>
              <h2 className="text-3xl font-black text-[#1d1a16] sm:text-4xl">Expliquez votre besoin en quelques minutes</h2>
              <p className="mt-4 max-w-2xl leading-8 text-[#6f6a63]">Plus votre demande est précise, plus le retour sera rapide : ville, type de travaux, dimensions approximatives, urgence éventuelle et photos si vous en avez.</p>
            </div>
            <LeadForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-[#fffdf8] p-7 shadow-sm ring-1 ring-stone-200">
              <h3 className="text-2xl font-black text-[#1d1a16]">Coordonnées directes</h3>
              <div className="mt-6 space-y-5 text-[#6f6a63]">
                <div className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-[#b86b3c]" /><div><p className="font-black text-[#1d1a16]">Adresse</p><p>1 Chemin de la Loubrie, 17540 Bouhet</p></div></div>
                <div className="flex gap-3"><Phone className="mt-1 h-5 w-5 shrink-0 text-[#b86b3c]" /><div><p className="font-black text-[#1d1a16]">Téléphone</p><a href="tel:0668008694" className="hover:text-[#b86b3c]">06 68 00 86 94</a></div></div>
                <div className="flex gap-3"><Mail className="mt-1 h-5 w-5 shrink-0 text-[#b86b3c]" /><div><p className="font-black text-[#1d1a16]">E-mail</p><a href="mailto:c.vicq@outlook.fr" className="hover:text-[#b86b3c]">c.vicq@outlook.fr</a></div></div>
              </div>
            </div>

            <div className="grid gap-4">
              {assurances.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-[2rem] bg-[#2f4a3d] p-6 text-white">
                    <Icon className="mb-3 h-7 w-7 text-[#f4c8a8]" />
                    <h3 className="font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
