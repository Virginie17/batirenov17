import Link from "next/link";
import { ArrowRight, ClipboardList, MessagesSquare, Ruler } from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    title: "1. Vous expliquez votre besoin",
    text: "Vous décrivez votre projet, votre ville, vos contraintes et vos priorités : confort, isolation, esthétique ou sécurité.",
  },
  {
    icon: Ruler,
    title: "2. Nous vous conseillons",
    text: "BâtiReno’V17 vous oriente vers une solution adaptée à votre maison, à votre usage et à votre budget.",
  },
  {
    icon: ClipboardList,
    title: "3. Vous recevez un devis clair",
    text: "Vous obtenez une proposition lisible pour avancer sereinement, sans engagement et avec un interlocuteur local.",
  },
];

export function ProjectSteps() {
  return (
    <section className="bg-[#fffdf8] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Méthode simple</p>
            <h2 className="max-w-3xl text-3xl font-black tracking-tight text-[#1d1a16] sm:text-5xl">
              Votre projet avance en 3 étapes claires
            </h2>
          </div>
          <Link href="/contact" className="inline-flex w-fit items-center rounded-full bg-[#b86b3c] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#9f5930]">
            Démarrer ma demande <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="group rounded-[2rem] bg-[#f7f3ec] p-8 shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2f4a3d] text-[#f4c8a8] transition group-hover:bg-[#b86b3c] group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black text-[#1d1a16]">{step.title}</h3>
                <p className="mt-4 leading-8 text-[#6f6a63]">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
