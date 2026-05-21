import { Award, CheckCircle2 } from "lucide-react";

const cards = [
  ["Entreprise locale", "Basée à Bouhet"],
  ["Devis gratuit", "Simple et transparent"],
  ["Travaux soignés", "Finitions propres"],
  ["Accompagnement", "Du conseil à la pose"],
];

export function Trust() {
  return (
    <>
      <section className="relative -mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] bg-white p-5 shadow-2xl md:grid-cols-4">
          {cards.map(([title, text]) => (
            <article key={title} className="rounded-[1.6rem] bg-[#faf7f1] p-6">
              <Award className="mb-4 h-7 w-7 text-[#f97316]" />
              <h3 className="font-black">{title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2.5rem] bg-[#15110d] p-8 text-white shadow-2xl lg:p-12">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#fb923c]">Pourquoi nous choisir</p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">Un interlocuteur unique pour avancer sereinement</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">Un accompagnement direct, un devis clair et un suivi sérieux pour vos travaux.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {["Certifié RGE", "Garantie décennale", "Conseils adaptés", "Suivi complet"].map((item) => (
              <article key={item} className="rounded-[2rem] bg-[#faf7f1] p-7">
                <CheckCircle2 className="mb-5 h-9 w-9 text-[#f97316]" />
                <h3 className="text-xl font-black">{item}</h3>
                <p className="mt-3 leading-7 text-zinc-600">Un repère de confiance pour préparer vos travaux avec clarté.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
