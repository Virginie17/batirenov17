import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  image: string;
  title: string;
  subtitle: string;
  items: string[];
  link: string;
  reversed?: boolean;
};

export function ServiceCard({ image, title, subtitle, items, link, reversed = false }: ServiceCardProps) {
  return (
    <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div className={`group relative overflow-hidden ${reversed ? "lg:order-2" : ""}`}>
        <div className="absolute -left-3 -top-3 z-10 h-16 w-16 border-l-2 border-t-2 border-[#f97316]" />
        <img src={image} alt={title} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-80" />
      </div>

      <div className={reversed ? "lg:order-1" : ""}>
        <h3 className="mb-3 text-2xl font-black leading-tight text-neutral-900 sm:text-3xl">{title}</h3>
        <p className="mb-5 text-neutral-500">{subtitle}</p>
        <ul className="mb-6 space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
              <span className="mt-0.5 font-black text-[#f97316]">.</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link href={link} className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#f97316] transition-all duration-300 hover:gap-3 hover:text-[#ea580c]">
          Voir plus <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
