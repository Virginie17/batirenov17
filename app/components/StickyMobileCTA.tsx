import { FileText, Phone } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-neutral-950/95 p-3 shadow-2xl backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href="tel:0668008694"
          className="inline-flex items-center justify-center gap-2 bg-white px-4 py-3 text-sm font-black uppercase tracking-wide text-neutral-950"
        >
          <Phone className="h-4 w-4" />
          Appeler
        </a>
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-[#f97316] px-4 py-3 text-sm font-black uppercase tracking-wide text-white"
        >
          <FileText className="h-4 w-4" />
          Devis gratuit
        </a>
      </div>
    </div>
  );
}
