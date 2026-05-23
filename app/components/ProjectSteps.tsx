import Link from "next/link";
import { ArrowRight, ClipboardList, MessagesSquare, Ruler } from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    title: "1. Vous expliquez le projet",
    text: "Travaux souhaités, ville, photos si vous en avez.",
  },
  {
    icon: Ruler,
    title: "2. Vous êtes conseillé",
    text: "Une solution adaptée à votre maison et à votre budget.",
  },
  {
    icon: ClipboardList,
    title: "3. Vous recevez le devis",
    text: "Une proposition claire pour décider sereinement.",
  },
];

export function ProjectSteps() {
  return (
    <section className="bg-[#fffdf8] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Méthode</p>
            <h2 className="max-w-3xl text-3xl font-black tracking-tight text-[#1d1a16] sm:text-5xl">
              Un projet simple à lancer
            </h2>
          </div>
          <Link href="/contact" className="inline-flex w-fit items-center rounded-full bg-[#b86b3c] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#9f5930]">
            Démarrer ma demande <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-[2rem] bg-[#f7f3ec] p-7 shadow-sm ring-1 ring-stone-200">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2f4a3d] text-[#f4c8a8]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black text-[#1d1a16]">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#6f6a63]">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
