export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            BâtiReno’V17 · Bouhet · Charente-Maritime
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Menuiserie, rénovation et aménagement sur mesure près de La Rochelle
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            Portes, fenêtres, volets, pergolas, terrasses, salles de bain,
            portails, clôtures, toiture et façade. Un accompagnement sérieux,
            local et soigné pour valoriser durablement votre maison.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+33668008694"
              className="rounded-full bg-orange-500 px-7 py-4 text-center font-semibold text-white hover:bg-orange-600"
            >
              Appeler maintenant
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/30 px-7 py-4 text-center font-semibold text-white hover:bg-white hover:text-neutral-950"
            >
              Demander un devis gratuit
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-neutral-300 sm:grid-cols-3">
            <span>✓ +20 ans de savoir-faire</span>
            <span>✓ Certifié RGE</span>
            <span>✓ Garantie décennale</span>
          </div>
        </div>

        <div className="rounded-3xl bg-white/10 p-4 shadow-2xl">
          <img
            src="/images/realisation-menuiserie.jpg"
            alt="Réalisation de menuiserie et rénovation par BâtiReno’V17 en Charente-Maritime"
            className="h-[520px] w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}