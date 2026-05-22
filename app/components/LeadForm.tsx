"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const workTypes = [
  "Portes & fenêtres",
  "Volets roulants ou battants",
  "Salle de bain",
  "Revêtement sols ou murs",
  "Pergola, terrasse ou store",
  "Portail ou clôture",
  "Charpente, toiture ou façade",
  "Autre projet",
];

export function LeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", workType: "", message: "" });
  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Demande de devis - ${form.workType || "Projet travaux"}`);
    const body = encodeURIComponent(
      `Nouvelle demande de devis depuis le site BâtiReno'V17\n\n` +
        `Nom : ${form.name}\nTéléphone : ${form.phone}\nEmail : ${form.email}\nVille : ${form.city}\nType de travaux : ${form.workType}\n\nMessage :\n${form.message}\n`
    );
    window.location.href = `mailto:c.vicq@outlook.fr?subject=${subject}&body=${body}`;
  };

  const inputClass = "w-full rounded-2xl border border-stone-200 bg-[#fffdf8] px-4 py-3 text-[#1d1a16] outline-none transition focus:border-[#b86b3c] focus:ring-4 focus:ring-[#b86b3c]/10";
  const labelClass = "mb-2 block text-sm font-black text-[#1d1a16]";

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-[#fffdf8] p-6 shadow-xl ring-1 ring-stone-200 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label className={labelClass}>Nom complet *</label><input required value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} placeholder="Votre nom" /></div>
        <div><label className={labelClass}>Téléphone *</label><input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} placeholder="06 00 00 00 00" /></div>
        <div><label className={labelClass}>E-mail</label><input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} placeholder="votre@email.fr" /></div>
        <div><label className={labelClass}>Ville *</label><input required value={form.city} onChange={(e) => update("city", e.target.value)} className={inputClass} placeholder="La Rochelle, Surgères..." /></div>
      </div>

      <div className="mt-5"><label className={labelClass}>Type de travaux *</label><select required value={form.workType} onChange={(e) => update("workType", e.target.value)} className={inputClass}><option value="">Sélectionnez votre besoin</option>{workTypes.map((type) => <option key={type} value={type}>{type}</option>)}</select></div>
      <div className="mt-5"><label className={labelClass}>Décrivez votre projet *</label><textarea required value={form.message} onChange={(e) => update("message", e.target.value)} rows={6} className={`${inputClass} resize-none`} placeholder="Exemple : remplacement de 3 fenêtres, rénovation d'une salle de bain, pose d'un portail..." /></div>

      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#b86b3c] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#9f5930] sm:w-auto">
        <Send className="h-4 w-4" /> Envoyer ma demande de devis
      </button>
      <p className="mt-4 text-xs leading-6 text-[#6f6a63]">En envoyant ce formulaire, votre messagerie s’ouvrira avec un e-mail déjà préparé. Vous pourrez le relire avant envoi.</p>
    </form>
  );
}
