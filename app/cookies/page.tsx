export const metadata = {
  title: "Gestion des cookies",
  description: "Informations sur les cookies du site BâtiReno’V17.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] px-4 pb-20 pt-32 text-[#1d1a16] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-[2rem] bg-[#fffdf8] p-8 shadow-sm ring-1 ring-stone-200 sm:p-10">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Cookies</p>
        <h1 className="text-4xl font-black sm:text-5xl">Gestion des cookies</h1>
        <div className="mt-8 space-y-8 leading-8 text-[#6f6a63]">
          <section><h2 className="mb-2 text-2xl font-black text-[#1d1a16]">Utilisation des cookies</h2><p>Le site peut utiliser des cookies nécessaires au bon fonctionnement de la navigation et, le cas échéant, des outils de mesure d’audience si ceux-ci sont configurés.</p></section>
          <section><h2 className="mb-2 text-2xl font-black text-[#1d1a16]">Cookies strictement nécessaires</h2><p>Ces cookies permettent le fonctionnement technique du site et ne nécessitent pas de consentement lorsqu’ils sont indispensables.</p></section>
          <section><h2 className="mb-2 text-2xl font-black text-[#1d1a16]">Mesure d’audience</h2><p>Si un outil d’analyse est ajouté, les visiteurs devront être informés et, si nécessaire, donner leur consentement selon la configuration utilisée.</p></section>
          <section><h2 className="mb-2 text-2xl font-black text-[#1d1a16]">Gestion du consentement</h2><p>Vous pouvez configurer ou supprimer les cookies depuis les paramètres de votre navigateur. Une bannière de consentement pourra être ajoutée si des cookies non essentiels sont utilisés.</p></section>
        </div>
      </section>
    </main>
  );
}
