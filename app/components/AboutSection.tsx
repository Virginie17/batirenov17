const HOUSE_IMG = "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/3ab4dd082_generated_093efda2.png";

export function AboutSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#b8743b]">BâtiReno’V17</p>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
              Un artisan local pour des travaux soignés, durables et bien conseillés
            </h2>
            <p className="mb-5 leading-8 text-neutral-600">
              Basée à Bouhet, près de Surgères et La Rochelle, BâtiReno’V17 accompagne les particuliers pour leurs travaux de menuiserie, rénovation intérieure et aménagement extérieur.
            </p>
            <p className="mb-8 leading-8 text-neutral-600">
              L’objectif : vous proposer une solution claire, adaptée à votre maison, avec des finitions propres et un interlocuteur de proximité.
            </p>
            <div className="flex flex-wrap gap-3">
              {["20+ ans d’expérience", "RGE", "Garantie décennale"].map((item) => (
                <span key={item} className="rounded-full bg-[#f7f3ec] px-4 py-2 text-sm font-bold text-[#2f4a3d] ring-1 ring-stone-200">
                  {item}
                </span>
              ))}
            </div>
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
