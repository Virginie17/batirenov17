const HOUSE_IMG = "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/3ab4dd082_generated_093efda2.png";

export function AboutSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#b8743b]">BâtiReno’V17</p>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
              Un accompagnement clair, du premier échange à la fin du chantier
            </h2>
            <p className="mb-5 leading-8 text-neutral-600">
              Basée à Bouhet, BâtiReno’V17 accompagne les particuliers autour de Surgères et La Rochelle pour leurs travaux de menuiserie, rénovation intérieure et aménagement extérieur.
            </p>
            <p className="leading-8 text-neutral-600">
              Ici, pas de discours compliqué : vous expliquez votre besoin, l’artisan vous conseille, puis vous avancez avec une solution adaptée à votre maison.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-[#b8743b]" />
            <img src={HOUSE_IMG} alt="Maison rénovée avec bardage" className="relative z-10 h-auto w-full rounded-[2rem] object-cover shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
