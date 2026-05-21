import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

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
    <article className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`}>
      <div className="relative">
        <div className="absolute -left-3 -top-3 h-full w-full border-2 border-[#f97316]" />
        <img src={image} alt={title} className="relative z-10 h-[340px] w-full object-cover shadow-xl sm:h-[430px]" />
      </div>

      <div>
        <h3 className="text-2xl font-black text-neutral-900 sm:text-3xl">{title}</h3>
        <p className="mt-4 text-lg leading-8 text-neutral-600">{subtitle}</p>
        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-neutral-700">
              <Check className="mt-1 h-5 w-5 shrink-0 text-[#f97316]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link href={link} className="mt-8 inline-flex items-center gap-2 bg-[#f97316] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#ea580c]">
          En savoir plus <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
