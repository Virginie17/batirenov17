export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site BâtiReno’V17.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] px-4 pb-20 pt-32 text-[#1d1a16] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-[2rem] bg-[#fffdf8] p-8 shadow-sm ring-1 ring-stone-200 sm:p-10">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Informations légales</p>
        <h1 className="text-4xl font-black sm:text-5xl">Mentions légales</h1>
        <div className="mt-8 space-y-8 leading-8 text-[#6f6a63]">
          <section><h2 className="mb-2 text-2xl font-black text-[#1d1a16]">Éditeur du site</h2><p>BâtiReno’V17<br />1 Chemin de la Loubrie, 17540 Bouhet<br />Téléphone : 06 68 00 86 94<br />E-mail : c.vicq@outlook.fr</p></section>
          <section><h2 className="mb-2 text-2xl font-black text-[#1d1a16]">Activité</h2><p>Entreprise de menuiserie, rénovation intérieure et extérieure, aménagement, toiture, façade, portail, clôture, pergola, terrasse, portes, fenêtres, volets et salle de bain.</p></section>
          <section><h2 className="mb-2 text-2xl font-black text-[#1d1a16]">Hébergement</h2><p>Site hébergé par Vercel Inc. Les informations précises d’hébergement peuvent être complétées selon le prestataire utilisé au moment de la mise en ligne définitive.</p></section>
          <section><h2 className="mb-2 text-2xl font-black text-[#1d1a16]">Propriété intellectuelle</h2><p>Les contenus du site, textes, visuels, structure et éléments graphiques sont protégés. Toute reproduction non autorisée est interdite.</p></section>
          <section><h2 className="mb-2 text-2xl font-black text-[#1d1a16]">Réalisation du site</h2><p>Site réalisé par <a href="https://virginieassistance.fr" className="font-bold text-[#b86b3c]">Virginie Assistance</a>.</p></section>
        </div>
      </section>
    </main>
  );
}
