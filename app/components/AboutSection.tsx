const HOUSE_IMG = "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/3ab4dd082_generated_093efda2.png";

export function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">BâtiReno’V17</p>
            <h2 className="mb-6 text-3xl font-black leading-tight text-[#17130f] sm:text-4xl">
              Une entreprise de plus de 10 ans d’ancienneté et un savoir-faire de plus de 20 ans
            </h2>
            <p className="mb-4 leading-8 text-zinc-600">
              <strong className="text-zinc-800">BâtiReno’V17 accompagne les particuliers dans leurs projets de rénovation et d’aménagement</strong>, en menuiserie intérieure comme extérieure. Basée près de Surgères, à proximité de La Rochelle, notre entreprise met son <strong className="text-zinc-800">savoir-faire artisanal</strong> au service de votre confort, de votre sécurité et de l’esthétique de votre habitat.
            </p>
            <p className="mb-8 leading-8 text-zinc-600">
              <strong className="text-zinc-800">Portes, fenêtres, volets, portails, pergolas…</strong> chaque réalisation est pensée sur mesure, avec exigence et souci du détail. Faites appel à un <strong className="text-zinc-800">menuisier expérimenté, certifié RGE</strong>, pour des travaux durables et soignés.
            </p>
            <a href="/contact" className="inline-flex items-center bg-[#f97316] px-7 py-3.5 text-sm font-black tracking-wide text-white transition hover:bg-[#ea580c]">
              Nous contacter
            </a>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border-2 border-[#f97316]" />
            <img src={HOUSE_IMG} alt="Maison rénovée avec bardage" className="relative z-10 h-auto w-full object-cover shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
