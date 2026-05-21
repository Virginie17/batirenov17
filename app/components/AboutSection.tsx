const HOUSE_IMG = "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/3ab4dd082_generated_093efda2.png";

export function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#b8743b]">BâtiReno’V17</p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">Une entreprise de plus de 10 ans d’ancienneté et un savoir-faire de plus de 20 ans</h2>
            <p className="mb-4 leading-8 text-neutral-600"><strong className="text-neutral-800">BâtiReno’V17 accompagne les particuliers dans leurs projets de rénovation et d’aménagement</strong>, en menuiserie intérieure comme extérieure. Basée près de Surgères, à proximité de La Rochelle, notre entreprise met son <strong className="text-neutral-800">savoir-faire artisanal</strong> au service de votre confort, de votre sécurité et de l’esthétique de votre habitat.</p>
            <p className="mb-8 leading-8 text-neutral-600"><strong className="text-neutral-800">Portes, fenêtres, volets, portails, pergolas…</strong> chaque réalisation est pensée sur mesure, avec exigence et souci du détail. Faites appel à un <strong className="text-neutral-800">menuisier expérimenté, certifié RGE</strong>, pour des travaux durables et soignés.</p>
            <a href="/contact" className="inline-flex items-center bg-[#b8743b] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-[#9a5c2a]">Nous contacter</a>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border-2 border-[#b8743b]" />
            <img src={HOUSE_IMG} alt="Maison rénovée avec bardage" className="relative z-10 h-auto w-full object-cover shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
