"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Consent = "accepted" | "refused";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("batirenov17_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const saveConsent = (value: Consent) => {
    localStorage.setItem("batirenov17_cookie_consent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-20 z-[70] px-4 pb-4 md:bottom-0">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-stone-200 bg-[#fffdf8] p-5 text-[#1d1a16] shadow-2xl sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b86b3c]">Cookies</p>
          <p className="mt-2 text-sm leading-6 text-[#6f6a63]">
            Ce site peut utiliser des cookies nécessaires à son fonctionnement et, si configuré plus tard, des cookies de mesure d’audience comme Google Analytics ou Meta Pixel. Vous pouvez accepter ou refuser les cookies non essentiels.
          </p>
          <Link href="/cookies" className="mt-2 inline-flex text-sm font-black text-[#b86b3c] hover:text-[#9f5930]">En savoir plus</Link>
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:mt-0 sm:min-w-[260px] sm:flex-row">
          <button onClick={() => saveConsent("refused")} className="rounded-full border border-stone-300 px-5 py-3 text-sm font-black uppercase tracking-wide text-[#1d1a16] transition hover:border-[#b86b3c] hover:text-[#b86b3c]">Refuser</button>
          <button onClick={() => saveConsent("accepted")} className="rounded-full bg-[#b86b3c] px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#9f5930]">Accepter</button>
        </div>
      </div>
    </div>
  );
}
