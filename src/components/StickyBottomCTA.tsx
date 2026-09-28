import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface StickyBottomCTAProps {
  checkoutUrl: string;
}

export const StickyBottomCTA: React.FC<StickyBottomCTAProps> = ({ checkoutUrl }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show once user has scrolled past initial hero decision point
      if (window.scrollY > 380) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 bg-gradient-to-t from-[#080306] via-[#0f0408]/95 to-transparent backdrop-blur-md border-t border-rose-950/60 max-h-[14vh] transition-all animate-fadeIn">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="min-w-0 hidden xs:block">
          <div className="flex items-center gap-1.5 text-[11px] text-[#d4af37] font-semibold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            <span>Emma's Romance Vault</span>
          </div>
          <p className="text-xs text-rose-200/80 truncate">50 eBooks + 50 Audiobooks</p>
        </div>

        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 xs:flex-none flex items-center justify-center gap-2 py-3 px-5 sm:px-6 rounded-2xl bg-gradient-to-r from-[#991b1b] via-[#e11d48] to-[#be123c] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-rose-950/80 hover:brightness-110 active:scale-95 transition-all whitespace-nowrap cursor-pointer text-center"
        >
          <span>GET INSTANT ACCESS</span>
          <Heart className="w-4 h-4 fill-white shrink-0" />
        </a>
      </div>
    </div>
  );
};
