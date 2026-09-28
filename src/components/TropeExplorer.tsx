import React, { useState } from 'react';
import { Flame, Crown, Heart, Shield, Lock, ChevronRight } from 'lucide-react';

interface Trope {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  storiesCount: number;
  highlightTitle: string;
  blurb: string;
  excerpt: string;
}

const TROPES: Trope[] = [
  {
    id: 'billionaire',
    name: 'Billionaire Romance',
    icon: Shield,
    storiesCount: 12,
    highlightTitle: 'Silent Possession',
    blurb: 'Ruthless empire builders and powerful protectors who would burn the world to ashes just to keep her safe in his arms.',
    excerpt: '“‘Anyone who looks at you like that again won’t see tomorrow,’ he whispered against my neck, his thumb tracing my jawline.”'
  },
  {
    id: 'enemies',
    name: 'Enemies to Lovers',
    icon: Flame,
    storiesCount: 14,
    highlightTitle: 'Wicked Surrender',
    blurb: 'Electric tension, fierce verbal sparring, and arrogant rivals whose bitter hatred melts into ravenous, undeniable desire.',
    excerpt: '“I hated him with every breath in my body. Until the heavy door locked behind us, and his fingers slid into my hair.”'
  },
  {
    id: 'second-chance',
    name: 'Second Chance',
    icon: Heart,
    storiesCount: 9,
    highlightTitle: 'Echoes of Midnight',
    blurb: 'The one who got away returns — older, more dangerous, and determined to prove their unfinished love was never truly over.',
    excerpt: '“Years couldn’t erase the way my name tasted on his lips. If anything, it only made his touch more devastating.”'
  },
  {
    id: 'friends',
    name: 'Friends to Lovers',
    icon: Lock,
    storiesCount: 8,
    highlightTitle: 'Crossing the Line',
    blurb: 'Years of innocent banter and stolen glances shatter into raw intimacy the moment an accidental touch goes a little too far.',
    excerpt: '“‘We can’t do this,’ I breathed against his lips. His hand gripped my waist tighter. ‘Tell me that again after I kiss you.’”'
  },
  {
    id: 'sweet',
    name: 'Sweet & Wholesome',
    icon: Crown,
    storiesCount: 7,
    highlightTitle: 'Written in the Stars',
    blurb: 'Heart-melting tenderness, deep emotional connection, and pure romantic devotion that leaves you sighing into your pillow.',
    excerpt: '“In a world full of fleeting moments, the way he looked at me felt like a promise written to last a lifetime.”'
  }
];

interface TropeExplorerProps {
  checkoutUrl: string;
}

export const TropeExplorer: React.FC<TropeExplorerProps> = ({ checkoutUrl }) => {
  const [activeTropeId, setActiveTropeId] = useState<string>('billionaire');
  const activeTrope = TROPES.find(t => t.id === activeTropeId) || TROPES[0];
  const Icon = activeTrope.icon;

  return (
    <div className="w-full bg-[#120509]/80 backdrop-blur-md rounded-2xl border border-rose-900/30 p-5 md:p-6 shadow-xl">
      <div className="text-center mb-5">
        <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
          Curated Inside The 50-Story Vault
        </span>
        <h3 className="font-serif-display text-2xl md:text-3xl text-white mt-1">
          Every Trope You Crave. All in One Place.
        </h3>
        <p className="text-xs text-rose-200/70 mt-1.5 max-w-md mx-auto">
          Tap below to peek inside the seductive subgenres waiting in your eBooks + Audiobooks collection.
        </p>
      </div>

      {/* Trope Selector Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none snap-x">
        {TROPES.map(trope => {
          const TropeIcon = trope.icon;
          const isActive = trope.id === activeTropeId;
          return (
            <button
              key={trope.id}
              onClick={() => setActiveTropeId(trope.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-[#991b1b] to-[#b91c1c] text-white shadow-md shadow-rose-950/80 border border-rose-500/40'
                  : 'bg-white/5 text-rose-200/70 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              <TropeIcon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-rose-400/80'}`} />
              <span>{trope.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-white/50'}`}>
                {trope.storiesCount}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Trope Spotlight Card */}
      <div className="mt-4 bg-[#1b070f] border border-rose-800/25 rounded-xl p-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#e11d48]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#3a0814] text-[#f43f5e] border border-rose-500/30">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-white font-medium text-base leading-tight">
                {activeTrope.name}
              </h4>
              <p className="text-[11px] text-[#d4af37]">
                {activeTrope.storiesCount} Complete eBooks + Full Audiobooks
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-rose-100/80 leading-relaxed mb-4">
          {activeTrope.blurb}
        </p>

        {/* Excerpt quote */}
        <div className="border-l-2 border-[#d4af37] pl-3 py-1.5 bg-black/30 rounded-r-lg mb-4">
          <p className="font-serif-romance text-sm md:text-base italic text-amber-100/90 leading-snug">
            {activeTrope.excerpt}
          </p>
        </div>

        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-rose-100 text-xs font-medium border border-rose-400/20 transition-all group"
        >
          <span>Unlock All {activeTrope.storiesCount} Stories in this Trope</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#d4af37]" />
        </a>
      </div>
    </div>
  );
};
