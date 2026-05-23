import { FileText, MessageCircle, Phone } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[#1d1a16]/95 p-3 shadow-2xl backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:0668008694"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-3 text-xs font-black uppercase tracking-wide text-[#1d1a16]"
        >
          <Phone className="h-4 w-4" />
          Appel
        </a>
        <a
          href="https://wa.me/33668008694?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20un%20projet%20de%20r%C3%A9novation."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#2f4a3d] px-3 py-3 text-xs font-black uppercase tracking-wide text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#b86b3c] px-3 py-3 text-xs font-black uppercase tracking-wide text-white"
        >
          <FileText className="h-4 w-4" />
          Devis
        </a>
      </div>
    </div>
  );
}
