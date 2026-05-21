import { ContactFooter } from "../components/ContactFooter";
import { Header } from "../components/Header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf7f1] text-[#17130f]">
      <Header />
      <section className="bg-[#15110d] px-4 pb-20 pt-36 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#fb923c]">Contact</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Demander un devis gratuit</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">Contactez BâtiReno’V17 pour votre projet de menuiserie, rénovation ou aménagement en Charente-Maritime.</p>
        </div>
      </section>
      <ContactFooter />
    </main>
  );
}
