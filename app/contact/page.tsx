import { Mail, MapPin, Phone, ShieldCheck, Timer, Wrench } from "lucide-react";
import { LeadForm } from "../components/LeadForm";

const assurances = [
  { icon: Timer, title: "Réponse rapide", text: "Votre demande est claire et directement exploitable." },
  { icon: ShieldCheck, title: "Devis gratuit", text: "Un premier échange sans engagement pour cadrer votre projet." },
  { icon: Wrench, title: "Conseil terrain", text: "Un artisan local vous oriente vers la solution adaptée." },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf7f1] text-[#17130f]">
      <section className="relative bg-[#15110d] px-4 pb-20 pt-36 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.24),transparent_34%),linear-gradient(135deg,#15110d,#261a12)]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#fb923c]">Contact</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Demander un devis gratuit pour vos travaux</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Décrivez votre projet de menuiserie, rénovation ou aménagement. BâtiReno’V17 intervient autour de Bouhet, Surgères, La Rochelle et en Charente-Maritime.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:0668008694" className="inline-flex items-center gap-2 bg-[#f97316] px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#ea580c]"><Phone className="h-4 w-4" /> Appeler maintenant</a>
            <a href="mailto:c.vicq@outlook.fr" className="inline-flex items-center gap-2 border border-white/30 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white/20"><Mail className="h-4 w-4" /> Envoyer un e-mail</a>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <div className="mb-8">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">Demande de devis</p>
              <h2 className="text-3xl font-black text-neutral-900 sm:text-4xl">Expliquez votre besoin en quelques minutes</h2>
              <p className="mt-4 max-w-2xl leading-8 text-neutral-600">Plus votre demande est précise, plus le retour sera rapide : ville, type de travaux, dimensions approximatives, urgence éventuelle et photos si vous en avez.</p>
            </div>
            <LeadForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-neutral-200">
              <h3 className="text-2xl font-black text-neutral-900">Coordonnées directes</h3>
              <div className="mt-6 space-y-5 text-neutral-700">
                <div className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-[#f97316]" /><div><p className="font-bold">Adresse</p><p>1 Chem. de la Loubrie, 17540 Bouhet</p></div></div>
                <div className="flex gap-3"><Phone className="mt-1 h-5 w-5 shrink-0 text-[#f97316]" /><div><p className="font-bold">Téléphone</p><a href="tel:0668008694" className="hover:text-[#f97316]">06 68 00 86 94</a></div></div>
                <div className="flex gap-3"><Mail className="mt-1 h-5 w-5 shrink-0 text-[#f97316]" /><div><p className="font-bold">E-mail</p><a href="mailto:c.vicq@outlook.fr" className="hover:text-[#f97316]">c.vicq@outlook.fr</a></div></div>
              </div>
            </div>

            <div className="grid gap-4">
              {assurances.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-2xl bg-neutral-950 p-6 text-white">
                    <Icon className="mb-3 h-7 w-7 text-[#f97316]" />
                    <h3 className="font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>
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
