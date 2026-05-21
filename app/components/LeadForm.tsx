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
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    workType: "",
    message: "",
  });

  const update = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Demande de devis - ${form.workType || "Projet travaux"}`);
    const body = encodeURIComponent(
      `Nouvelle demande de devis depuis le site BâtiReno'V17\n\n` +
        `Nom : ${form.name}\n` +
        `Téléphone : ${form.phone}\n` +
        `Email : ${form.email}\n` +
        `Ville : ${form.city}\n` +
        `Type de travaux : ${form.workType}\n\n` +
        `Message :\n${form.message}\n`
    );

    window.location.href = `mailto:c.vicq@outlook.fr?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-neutral-200 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-neutral-800">Nom complet *</label>
          <input required value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-[#f97316]" placeholder="Votre nom" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-bold text-neutral-800">Téléphone *</label>
          <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-[#f97316]" placeholder="06 00 00 00 00" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-bold text-neutral-800">E-mail</label>
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-[#f97316]" placeholder="votre@email.fr" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-bold text-neutral-800">Ville *</label>
          <input required value={form.city} onChange={(e) => update("city", e.target.value)} className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-[#f97316]" placeholder="La Rochelle, Surgères..." />
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-neutral-800">Type de travaux *</label>
        <select required value={form.workType} onChange={(e) => update("workType", e.target.value)} className="w-full border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-[#f97316]">
          <option value="">Sélectionnez votre besoin</option>
          {workTypes.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-neutral-800">Décrivez votre projet *</label>
        <textarea required value={form.message} onChange={(e) => update("message", e.target.value)} rows={6} className="w-full resize-none border border-neutral-300 px-4 py-3 outline-none transition focus:border-[#f97316]" placeholder="Exemple : remplacement de 3 fenêtres, rénovation d'une salle de bain, pose d'un portail..." />
      </div>

      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#f97316] px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#ea580c] sm:w-auto">
        <Send className="h-4 w-4" />
        Envoyer ma demande de devis
      </button>

      <p className="mt-4 text-xs leading-6 text-neutral-500">
        En envoyant ce formulaire, votre messagerie s’ouvrira avec un e-mail déjà préparé. Vous pourrez le relire avant envoi.
      </p>
    </form>
  );
}
