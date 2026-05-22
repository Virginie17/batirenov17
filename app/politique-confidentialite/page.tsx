export const metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site BâtiReno’V17.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] px-4 pb-20 pt-32 text-[#1d1a16] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-[2rem] bg-[#fffdf8] p-8 shadow-sm ring-1 ring-stone-200 sm:p-10">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">RGPD</p>
        <h1 className="text-4xl font-black sm:text-5xl">Politique de confidentialité</h1>
        <div className="mt-8 space-y-8 leading-8 text-[#6f6a63]">
          <section><h2 className="mb-2 text-2xl font-black text-[#1d1a16]">Données collectées</h2><p>Le site peut collecter les données transmises volontairement via les liens de contact ou de demande de devis : nom, téléphone, adresse e-mail, ville, type de projet et message.</p></section>
          <section><h2 className="mb-2 text-2xl font-black text-[#1d1a16]">Finalité</h2><p>Ces données sont utilisées uniquement pour répondre aux demandes de contact, établir un échange commercial ou préparer un devis.</p></section>
          <section><h2 className="mb-2 text-2xl font-black text-[#1d1a16]">Durée de conservation</h2><p>Les données sont conservées pendant la durée nécessaire au traitement de la demande et au suivi commercial raisonnable.</p></section>
          <section><h2 className="mb-2 text-2xl font-black text-[#1d1a16]">Vos droits</h2><p>Conformément au RGPD, vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à : c.vicq@outlook.fr.</p></section>
          <section><h2 className="mb-2 text-2xl font-black text-[#1d1a16]">Partage des données</h2><p>Les données ne sont pas vendues à des tiers. Elles sont utilisées uniquement par BâtiReno’V17 pour traiter les demandes reçues.</p></section>
        </div>
      </section>
    </main>
  );
}
