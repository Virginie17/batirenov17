import { ContactFooter } from "./ContactFooter";
import { Header } from "./Header";

export function InnerPage({ title, eyebrow, text }: { title: string; eyebrow: string; text: string }) {
  return (
    <main className="min-h-screen bg-[#faf7f1] text-[#17130f]">
      <Header />
      <section className="relative bg-[#15110d] px-4 pb-20 pt-36 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.24),transparent_34%),linear-gradient(135deg,#15110d,#261a12)]" />
        <div className="relative mx-auto max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#fb923c]">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{text}</p>
          <a href="/contact" className="mt-9 inline-flex rounded-full bg-[#f97316] px-8 py-4 font-black text-white transition hover:bg-[#ea580c]">Demander un devis gratuit</a>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {["Conseil", "Pose soignée", "Suivi local"].map((item) => (
            <article key={item} className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black">{item}</h2>
              <p className="mt-4 leading-7 text-zinc-600">Un accompagnement clair pour un résultat propre, durable et adapté à votre habitat.</p>
            </article>
          ))}
        </div>
      </section>
      <ContactFooter />
    </main>
  );
}
