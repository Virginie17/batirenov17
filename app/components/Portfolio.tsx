"use client";

import { useState } from "react";
import { Award, Clock, Users, Wrench } from "lucide-react";

const comparisons = [
  {
    avant: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/a60a0d19d_generated_0210365b.png",
    apres: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/0111d278d_generated_c608d4d3.png",
  },
  {
    avant: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/1518bafb0_generated_232dc42a.png",
    apres: "https://media.base44.com/images/public/6a0f16530220e820fd17fa7a/05fca8d8b_generated_5d2a628a.png",
  },
];

const stats = [
  { icon: Award, label: "Qualité de travail" },
  { icon: Users, label: "Satisfaction client" },
  { icon: Clock, label: "Disponible" },
  { icon: Wrench, label: "Expérience" },
];

function BeforeAfterCard({ avant, apres }: { avant: string; apres: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-[#fffdf8] p-3 shadow-sm ring-1 ring-stone-200" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="relative overflow-hidden rounded-[1.5rem]">
        <img src={hovered ? apres : avant} alt={hovered ? "Après rénovation" : "Avant rénovation"} className="h-72 w-full object-cover transition-all duration-500 group-hover:scale-105" />
        <div className="absolute bottom-4 left-4 rounded-full bg-[#fffdf8]/95 px-4 py-2 shadow-lg backdrop-blur">
          <span className={`text-xs font-black uppercase tracking-widest ${hovered ? "text-[#b86b3c]" : "text-[#2f4a3d]"}`}>{hovered ? "Après" : "Avant"}</span>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="realisations" className="bg-[#f7f3ec] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b86b3c]">Réalisations</p>
          <h2 className="text-3xl font-black text-[#1d1a16] sm:text-5xl">Des transformations visibles, propres et rassurantes</h2>
          <p className="mt-5 leading-8 text-[#6f6a63]">Survolez les images pour découvrir le résultat après intervention.</p>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {comparisons.map((comparison) => <BeforeAfterCard key={comparison.avant} {...comparison} />)}
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article key={stat.label} className="rounded-[1.5rem] bg-[#fffdf8] p-6 text-center shadow-sm ring-1 ring-stone-200">
                <Icon className="mx-auto mb-3 h-8 w-8 text-[#b86b3c]" />
                <p className="text-sm font-black text-[#1d1a16]">{stat.label}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
