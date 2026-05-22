const messages = [
  "Matériaux durables",
  "Finitions soignées",
  "Conseils clairs",
  "Intervention locale",
  "Devis gratuit",
  "Garantie décennale",
  "Certification RGE",
  "Plus de 20 ans d’expérience",
];

export function SignatureStrip() {
  const repeated = [...messages, ...messages];

  return (
    <section className="overflow-hidden border-y border-stone-200 bg-[#fffdf8] py-4">
      <div className="signature-scroll flex w-max items-center gap-6 whitespace-nowrap">
        {repeated.map((message, index) => (
          <div key={`${message}-${index}`} className="flex items-center gap-6 text-sm font-black uppercase tracking-[0.22em] text-[#2f4a3d]">
            <span>{message}</span>
            <span className="h-2 w-2 rounded-full bg-[#b86b3c]" />
          </div>
        ))}
      </div>
    </section>
  );
}
