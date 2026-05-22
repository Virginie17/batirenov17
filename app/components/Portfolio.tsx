"use client";

import { useState } from "react";
import { Award, Clock, GripVertical, Users, Wrench } from "lucide-react";

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

function BeforeAfterSlider({ avant, apres }: { avant: string; apres: string }) {
  const [position, setPosition] = useState(50);

  return (
    <div className="premium-card rounded-[2rem] bg-[#fffdf8] p-3 shadow-sm ring-1 ring-stone-200">
      <div className="relative h-80 overflow-hidden rounded-[1.5rem] sm:h-96">
        <img src={apres} alt="Après rénovation" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img src={avant} alt="Avant rénovation" className="h-full w-full max-w-none object-cover" style={{ width: `${10000 / position}%` }} />
        </div>

        <div className="absolute left-4 top-4 rounded-full bg-[#fffdf8]/95 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#2f4a3d] shadow-lg backdrop-blur">Avant</div>
        <div className="absolute right-4 top-4 rounded-full bg-[#b86b3c]/95 px-4 py-2 text-xs font-black uppercase tracking-widest text-white shadow-lg backdrop-blur">Après</div>

        <div className="absolute inset-y-0 z-10 w-0.5 bg-[#fffdf8] shadow-xl" style={{ left: `${position}%` }}>
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#fffdf8] text-[#b86b3c] shadow-xl ring-1 ring-stone-200">
            <GripVertical className="h-6 w-6" />
          </div>
        </div>

        <input
          aria-label="Comparer avant et après"
          type="range"
          min="10"
          max="90"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-3 text-center text-xs font-bold uppercase tracking-wide text-[#6f6a63]">Glissez pour comparer</p>
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
          <p className="mt-5 leading-8 text-[#6f6a63]">Comparez les images pour mieux visualiser le résultat après intervention.</p>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {comparisons.map((comparison) => <BeforeAfterSlider key={comparison.avant} {...comparison} />)}
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article key={stat.label} className="premium-card rounded-[1.5rem] bg-[#fffdf8] p-6 text-center shadow-sm ring-1 ring-stone-200">
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
