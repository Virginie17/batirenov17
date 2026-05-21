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
    <div className="group relative cursor-pointer overflow-hidden" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img src={hovered ? apres : avant} alt={hovered ? "Après rénovation" : "Avant rénovation"} className="h-64 w-full object-cover transition-all duration-500 sm:h-72" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <span className={`text-sm font-black uppercase tracking-widest ${hovered ? "text-[#f97316]" : "text-white/80"}`}>
          {hovered ? "Après" : "Avant"}
        </span>
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="realisations" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-black text-neutral-900 sm:text-4xl">
            Nos réalisations de travaux de menuiserie <span className="text-[#f97316]">avant / après</span>
          </h2>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {comparisons.map((comparison) => (
            <div key={comparison.avant}>
              <BeforeAfterCard {...comparison} />
              <p className="mt-2 text-center text-xs text-neutral-400">Survolez pour voir le résultat</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article key={stat.label} className="bg-neutral-950 p-6 text-center text-white">
                <Icon className="mx-auto mb-3 h-8 w-8 text-[#f97316]" />
                <p className="text-sm font-bold">{stat.label}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
