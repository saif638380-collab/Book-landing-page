/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Heart,
  BookOpen,
  Headphones,
  Zap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Star,
  Smartphone,
  ChevronDown
} from 'lucide-react';
import { TropeExplorer } from './components/TropeExplorer';
import { StickyBottomCTA } from './components/StickyBottomCTA';

// The official Digistore24 checkout redirect link:
export const CHECKOUT_URL = "https://www.checkout-ds24.com/redir/630712/saif219569dafa/";

export default function App() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpen(prev => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-[#080306] text-[#F9F4EE] relative selection:bg-[#991B1B] selection:text-white overflow-x-hidden">
      {/* Subtle Ambient Background Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#4c0516]/20 rounded-full blur-[140px] pointer-events-none animate-candle-glow" />
      <div className="fixed bottom-0 right-0 w-80 h-80 bg-[#800e2b]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container - Mobile-First Optimized Direct-Response Sales Funnel */}
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 pt-3 pb-24 sm:pb-28">

        {/* Minimalist Top Funnel Bar */}
        <div className="flex items-center justify-between py-3 border-b border-rose-950/60 mb-6 text-xs text-rose-200/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="font-serif-romance text-sm font-semibold tracking-wide text-white uppercase">
              Emma's Romance Vault
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#d4af37] font-medium">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            <span>Curated by Emma</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Sensual, High-Converting Hook & Seductive Headline)     */}
        {/* ========================================================================= */}
        <section className="text-center pt-2 pb-8 sm:pb-12">
          {/* Seductive Urgency / Teaser Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a0711] border border-rose-900/40 text-[11px] text-rose-300 font-medium mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Curated by Emma • 50 eBooks + 50 Full Audiobooks</span>
          </div>

          {/* Sexy, Emotionally Hooked Headline */}
          <h1 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-4 text-balance">
            50 Stories of Filthy Chemistry, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-rose-200 via-rose-100 to-[#d4af37] bg-clip-text text-transparent">
              Forbidden Heat & Obsessive Desire.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-rose-100/90 font-normal leading-relaxed max-w-md mx-auto mb-6 text-balance">
            Slip between the sheets and surrender to every dark craving. <br className="hidden sm:inline" />
            50 full-length spicy romance novels + 50 whispered audiobooks — <br className="hidden sm:inline" />
            ready to leave you aching, soaked, and wide awake until 3 a.m.
          </p>

          {/* Visual Hero Product Mockup */}
          <div className="relative my-6 rounded-2xl overflow-hidden shadow-[0_15px_60px_rgba(153,27,27,0.35)] border border-rose-900/50 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#080306] via-transparent to-transparent opacity-40 z-10 pointer-events-none" />
            <img
              src="/src/assets/images/hero_product_bundle_1790573599770.jpg"
              alt="50 Romance Stories Complete Collection Mockup by Emma"
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Badge for Digital Package */}
            <div className="absolute top-3 right-3 z-20 px-3 py-1 bg-black/75 backdrop-blur-md rounded-full border border-[#d4af37]/40 text-[11px] text-[#f5d77f] font-medium flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              <span>Emma's 50-Story Vault</span>
            </div>
          </div>

          {/* Strong Primary CTA Link */}
          <div className="pt-2">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#991b1b] via-[#e11d48] to-[#be123c] text-white font-bold text-base sm:text-lg tracking-wide shadow-2xl shadow-rose-950/80 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 animate-subtle-pulse cursor-pointer text-center"
            >
              <span>GET INSTANT ACCESS</span>
              <Heart className="w-5 h-5 fill-white shrink-0" />
            </a>

            {/* Under Button Assurance */}
            <p className="text-xs text-rose-200/70 mt-3 font-medium flex items-center justify-center flex-wrap gap-2">
              <span>Instant Digital Access</span>
              <span>•</span>
              <span>eBooks + Audiobooks</span>
              <span>•</span>
              <span className="text-[#d4af37]">60-Day Money-Back Guarantee</span>
            </p>
          </div>

          {/* Reader Proof Banner */}
          <div className="mt-6 pt-5 border-t border-rose-950/40 flex items-center justify-center gap-4 text-xs text-rose-200/80">
            <div className="flex -space-x-2">
              <span className="w-6 h-6 rounded-full bg-rose-900 border border-white/20 flex items-center justify-center text-[10px] font-bold">A</span>
              <span className="w-6 h-6 rounded-full bg-amber-900 border border-white/20 flex items-center justify-center text-[10px] font-bold">M</span>
              <span className="w-6 h-6 rounded-full bg-red-950 border border-white/20 flex items-center justify-center text-[10px] font-bold">S</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white ml-1">4.97 / 5</span>
              <span className="text-white/40">·</span>
              <span className="text-rose-200/70">14,800+ Late-Night Readers with Emma</span>
            </div>
          </div>
        </section>

        {/* Intimate Personal Note From Emma */}
        <div className="my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#1a0610] to-[#0f0309] border border-rose-900/40 relative shadow-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#991b1b] to-[#f43f5e] p-0.5 shrink-0 shadow-md">
              <div className="w-full h-full rounded-full bg-[#200712] flex items-center justify-center text-white font-serif-display text-sm font-bold">
                E
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">A Note From Emma</p>
              <p className="text-sm font-medium text-white/95">“I created the vault I always craved…”</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed italic font-serif-romance text-base sm:text-lg">
            “Hey babe, I’m Emma. If you’re anything like me, you’ve spent way too many nights clutching your pillow because fictional men ruined your standards forever. I put together this 50-story eBook and audiobook vault so you never have to search for that intoxicating, pulse-hammering tension again. It’s all here. Turn the lights down, plug your headphones in, and enjoy every single chapter.”
          </p>
          <div className="mt-3 flex items-center justify-between text-xs text-rose-300/70 border-t border-white/5 pt-2">
            <span className="font-serif-romance text-sm italic text-[#d4af37]">— Love, Emma ❤️</span>
            <span className="text-[10px] text-white/40">Curator & Late-Night Romance Lover</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. EMOTIONAL HOOK SECTION (Intense, Seductive Late-Night Chemistry)      */}
        {/* ========================================================================= */}
        <section className="my-10 py-8 px-5 sm:px-8 rounded-3xl bg-gradient-to-b from-[#1b060f]/90 to-[#0e0307]/90 border border-rose-900/35 relative overflow-hidden">
          {/* Subtle velvet vignette */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#be123c]/10 rounded-full blur-3xl pointer-events-none" />

          <p className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold text-center mb-2">
            The Late-Night Escape
          </p>

          <h2 className="font-serif-display text-2xl sm:text-3xl text-white font-bold text-center leading-snug mb-6 text-balance">
            “For the nights when ordinary love just isn’t enough…”
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-rose-100/90 leading-relaxed font-serif-romance text-lg sm:text-xl italic">
            <p className="border-l-2 border-[#d4af37] pl-4 py-1.5">
              The breathless moment when arrogant eyes lock across a candlelit room — and you both know there is no turning back.
            </p>
            <p className="border-l-2 border-rose-600/60 pl-4 py-1.5">
              The electric tremor of rough knuckles tilting your chin up in the dark, and a low, velvet voice murmuring: <em>“You really think you can run from this?”</em>
            </p>
            <p className="border-l-2 border-rose-600/60 pl-4 py-1.5">
              Ruthless billionaires who would burn dynasties to ashes just to keep her safe. Fiery rivals whose bitter hatred collapses into desperate, hungry surrender against locked doors.
            </p>
            <p className="border-l-2 border-[#d4af37] pl-4 py-1.5 text-white font-medium">
              Read every whispered word on your screen, or close your eyes, put your headphones on, and let an intimate voice narrate every sigh directly into your ear.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. WHAT YOU GET (50 eBooks + 50 Audiobooks)                              */}
        {/* ========================================================================= */}
        <section className="my-12">
          <div className="text-center mb-6">
            <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
              The Mega Reading & Listening Bundle
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-white font-bold mt-1">
              What You Get
            </h2>
            <p className="text-xs sm:text-sm text-rose-200/70 mt-1 max-w-sm mx-auto">
              50 complete romance novels and their corresponding full audiobooks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Item 1: 50 Romance eBooks */}
            <div className="p-5 rounded-2xl bg-[#14050b] border border-rose-900/30 flex items-start gap-4 transition-all hover:border-rose-700/50 hover:bg-[#1a070f]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#991b1b] to-[#be123c] flex items-center justify-center text-white shrink-0 shadow-lg shadow-rose-950/60">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-serif-display text-lg font-semibold leading-tight">
                  50 Romance eBooks
                </h3>
                <p className="text-xs text-rose-200/70 mt-1.5 leading-relaxed">
                  Full-length romance novels provided in universal <strong>PDF and ePub</strong> formats. Compatible with Kindle, smartphones, tablets, and e-readers.
                </p>
              </div>
            </div>

            {/* Item 2: 50 Full Audiobooks */}
            <div className="p-5 rounded-2xl bg-[#14050b] border border-rose-900/30 flex items-start gap-4 transition-all hover:border-rose-700/50 hover:bg-[#1a070f]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#92400e] flex items-center justify-center text-black shrink-0 shadow-lg shadow-amber-950/60">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-serif-display text-lg font-semibold leading-tight">
                  50 Full Audiobooks
                </h3>
                <p className="text-xs text-rose-200/70 mt-1.5 leading-relaxed">
                  Every single novel accompanied by its complete <strong>MP3 audiobook</strong>. Listen in bed, on your commute, at the gym, or in the bath.
                </p>
              </div>
            </div>

            {/* Item 3: Read & Listen Flexibility */}
            <div className="p-5 rounded-2xl bg-[#14050b] border border-rose-900/30 flex items-start gap-4 transition-all hover:border-rose-700/50 hover:bg-[#1a070f]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#be123c] to-[#7f1d1d] flex items-center justify-center text-white shrink-0 shadow-lg shadow-rose-950/60">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-serif-display text-lg font-semibold leading-tight">
                  Enjoy It Your Way
                </h3>
                <p className="text-xs text-rose-200/70 mt-1.5 leading-relaxed">
                  Read at your own pace when you have time to relax, or listen hands-free on the go. Having both formats gives you total freedom.
                </p>
              </div>
            </div>

            {/* Item 4: Instant Digital Delivery */}
            <div className="p-5 rounded-2xl bg-[#14050b] border border-rose-900/30 flex items-start gap-4 transition-all hover:border-rose-700/50 hover:bg-[#1a070f]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e11d48] to-[#991b1b] flex items-center justify-center text-white shrink-0 shadow-lg shadow-rose-950/60">
                <Zap className="w-6 h-6 fill-white" />
              </div>
              <div>
                <h3 className="text-white font-serif-display text-lg font-semibold leading-tight">
                  Instant Digital Access
                </h3>
                <p className="text-xs text-rose-200/70 mt-1.5 leading-relaxed">
                  100% digital product. No physical shipping delays. Your access link is delivered electronically immediately upon completing your order.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. PRODUCT SECTION                                                        */}
        {/* ========================================================================= */}
        <section className="my-12 pt-4 pb-6">
          <div className="text-center mb-6">
            <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
              Emma's Private Vault is Open
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-white font-bold mt-1 text-balance">
              Emma's Ultimate Bedtime Obsession Is Ready.
            </h2>
            <p className="text-sm text-rose-100/80 mt-2 max-w-md mx-auto leading-relaxed">
              Read it with the lights low. Listen with your eyes closed. Why settle for just one book when Emma has handpicked a private treasury of fifty?
            </p>
          </div>

          {/* Large Prominent Product Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(185,28,28,0.4)] border border-rose-800/40 mb-6 group">
            <img
              src="/src/assets/images/Gemini_Generated_Image_2ige5t2ige5t2ige.jpeg"
              alt="50 Romance Collection Showcase"
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080306] via-transparent to-transparent opacity-30 pointer-events-none" />
          </div>

          {/* Device & Format Compatibility Chips */}
          <div className="bg-[#120509] border border-rose-900/30 rounded-2xl p-4 mb-6">
            <p className="text-center text-xs text-[#d4af37] font-semibold uppercase tracking-wider mb-3">
              Read & Listen On Any Device
            </p>
            <div className="grid grid-cols-4 gap-2 text-center text-xs text-rose-100/80">
              <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center gap-1">
                <Smartphone className="w-4 h-4 text-rose-400" />
                <span className="text-[11px]">ePub & PDF</span>
              </div>
              <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center gap-1">
                <BookOpen className="w-4 h-4 text-rose-400" />
                <span className="text-[11px]">Kindle & Kobo</span>
              </div>
              <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center gap-1">
                <Headphones className="w-4 h-4 text-rose-400" />
                <span className="text-[11px]">MP3 Audio</span>
              </div>
              <div className="p-2 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center gap-1">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span className="text-[11px]">Offline Play</span>
              </div>
            </div>
          </div>

          {/* Mid-Funnel CTA Link */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#991b1b] via-[#e11d48] to-[#be123c] text-white font-bold text-base sm:text-lg tracking-wide shadow-xl shadow-rose-950/80 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <span>YES, I WANT THE COLLECTION</span>
            <Heart className="w-5 h-5 fill-white shrink-0" />
          </a>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE TROPES PREVIEW (Subgenres from user product)                  */}
        {/* ========================================================================= */}
        <section className="my-10">
          <TropeExplorer checkoutUrl={CHECKOUT_URL} />
        </section>

        {/* ========================================================================= */}
        {/* 5. DESIRE / EMOTIONAL SECTION                                             */}
        {/* ========================================================================= */}
        <section className="my-12 rounded-3xl overflow-hidden relative border border-rose-900/40 shadow-2xl">
          {/* Seductive cinematic background */}
          <div className="relative min-h-[460px] sm:min-h-[500px] flex items-end">
            <img
              src="/src/assets/images/emotional_cinematic_couple_1790573626249.jpg"
              alt="Cinematic romantic couple in tender intimate embrace"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Measured Scrim for WCAG readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080306] via-[#100308]/90 to-black/40" />

            {/* Seductive Copy Content */}
            <div className="relative z-10 p-6 sm:p-8 text-center sm:text-left space-y-4">
              <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold inline-block">
                Pure Emotional Intensity
              </span>

              <h2 className="font-serif-display text-3xl sm:text-4xl text-white font-bold leading-tight">
                “Some stories are read. Others are felt.”
              </h2>

              <p className="font-serif-romance text-lg sm:text-xl text-rose-100/95 italic leading-relaxed">
                It’s the hesitation before his first touch. The breathless tension of two people fighting an attraction neither of them can survive without.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-rose-200/85 leading-relaxed pt-2">
                <p>
                  <strong>Unfiltered chemistry.</strong> The exhilarating pull of enemies who can’t stop looking at each other, or the dangerous allure of a billionaire protector who claims what is his.
                </p>
                <p>
                  <strong>Late-night reading & listening.</strong> That delicious feeling of telling yourself <em>“just one more chapter”</em> at 2:00 AM, knowing full well you won’t close your eyes until the sun comes up.
                </p>
                <p>
                  <strong>Getting truly lost.</strong> Fifty separate journeys of desire, tension, vulnerability, and devotion that stay with you long after the final chapter ends.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-rose-400/40 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all text-center"
                >
                  <span>Experience These Stories Tonight</span>
                  <ArrowRight className="w-4 h-4 text-[#d4af37] shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* VAULT PACKAGE & ACCESS DETAILS (Zero Prices, 60-Day Guarantee)           */}
        {/* ========================================================================= */}
        <section className="my-12 p-6 sm:p-8 rounded-3xl bg-[#14050b] border-2 border-[#d4af37]/40 shadow-2xl relative">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b45309] text-black text-xs font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
            Direct Instant Access
          </div>

          <div className="text-center pt-2 mb-6">
            <h3 className="font-serif-display text-2xl sm:text-3xl text-white font-bold">
              Unlock All 50 Stories Right Now
            </h3>
            <p className="text-xs text-rose-200/70 mt-1">
              One-time purchase • No monthly subscriptions • Lifetime personal ownership
            </p>
          </div>

          {/* Access Feature List (Zero price) */}
          <div className="space-y-3 mb-6 divide-y divide-white/5 text-xs sm:text-sm">
            <div className="flex items-center justify-between pt-2">
              <span className="flex items-center gap-2 text-rose-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>50 Complete Full-Length Romance eBooks (PDF & ePub)</span>
              </span>
              <span className="text-[#d4af37] font-medium text-[11px] uppercase tracking-wide">Included</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="flex items-center gap-2 text-rose-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>50 Corresponding Full Audiobooks (MP3)</span>
              </span>
              <span className="text-[#d4af37] font-medium text-[11px] uppercase tracking-wide">Included</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="flex items-center gap-2 text-rose-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lifetime Offline Access on Any Device</span>
              </span>
              <span className="text-emerald-400 font-medium text-[11px] uppercase tracking-wide">Unlimited</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="flex items-center gap-2 text-rose-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant Digital Delivery to Your Inbox</span>
              </span>
              <span className="text-emerald-400 font-medium text-[11px] uppercase tracking-wide">Instant</span>
            </div>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#991b1b] via-[#e11d48] to-[#be123c] text-white font-bold text-base sm:text-lg tracking-wide shadow-2xl shadow-rose-950/80 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer text-center"
          >
            <span>CLAIM YOUR 50 STORIES</span>
            <Heart className="w-5 h-5 fill-white shrink-0" />
          </a>

          {/* 60-Day Guarantee Seal */}
          <div className="mt-5 pt-4 border-t border-white/10 flex items-start gap-3 text-xs text-rose-200/80">
            <ShieldCheck className="w-7 h-7 text-[#d4af37] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Emma's 60-Day Money-Back Guarantee:</strong> Your purchase is backed by my personal 60-Day Guarantee. If you don't completely fall head over heels for these stories and audiobooks, you can request a swift refund within the 60-day period. No questions asked.
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS (Directly from Product Brief)                 */}
        {/* ========================================================================= */}
        <section className="my-10">
          <div className="text-center mb-5">
            <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
              Everything You Need to Know
            </span>
            <h3 className="font-serif-display text-2xl text-white font-semibold mt-1">
              Common Questions
            </h3>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm">
            {[
              {
                q: "What is included in the bundle?",
                a: "The bundle includes Emma's handpicked collection of 50 romance eBooks and 50 corresponding full audiobooks in one complete digital collection."
              },
              {
                q: "What ebook and audiobook formats are included?",
                a: "The eBooks are provided in universal PDF and ePub formats. The audiobooks are provided as high-quality MP3 files compatible with all phones, tablets, and computers."
              },
              {
                q: "Can I read and listen on my smartphone, tablet, or Kindle?",
                a: "Yes! PDF and ePub files can be used on compatible smartphones, tablets, computers, and e-readers. The MP3 audiobooks can be played on virtually any device that supports audio playback."
              },
              {
                q: "How will I receive my files?",
                a: "After your purchase is completed, you will receive immediate digital access to your downloadable files electronically. No physical products or CDs will be shipped."
              },
              {
                q: "Is this a monthly subscription?",
                a: "No. This is a one-time purchase. There are zero monthly charges, zero recurring membership fees, and zero hidden costs."
              },
              {
                q: "What is the refund policy?",
                a: "Your purchase is fully covered by Emma's 60-Day Money-Back Guarantee. You have two full months to explore the collection risk-free."
              }
            ].map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#14050b] border border-rose-900/30 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 text-white font-medium hover:text-rose-200 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#d4af37] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-rose-200/80 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. FINAL CTA                                                              */}
        {/* ========================================================================= */}
        <section className="my-14 text-center pt-8 pb-10 px-5 sm:px-8 rounded-3xl bg-gradient-to-b from-[#240713] via-[#16040c] to-[#090205] border-2 border-rose-800/50 relative overflow-hidden shadow-[0_25px_80px_rgba(225,29,72,0.25)]">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#d4af37] via-[#e11d48] to-[#d4af37]" />
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#e11d48]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Headline */}
          <h2 className="font-serif-display text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
            Ready to Lose Sleep Tonight?
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-rose-100/90 font-normal max-w-md mx-auto mb-6">
            50 romance eBooks + 50 full audiobooks curated by Emma. Instant digital download.
          </p>

          {/* Large CTA Button */}
          <div className="max-w-md mx-auto">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#991b1b] via-[#e11d48] to-[#be123c] text-white font-bold text-lg sm:text-xl tracking-wide shadow-2xl shadow-rose-950/90 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 animate-subtle-pulse cursor-pointer text-center"
            >
              <span>GET INSTANT ACCESS</span>
              <Heart className="w-6 h-6 fill-white shrink-0" />
            </a>

            {/* Small line below */}
            <p className="text-xs text-rose-200/80 font-serif-romance text-base italic mt-3">
              Start your first story in less than 60 seconds.
            </p>
          </div>
        </section>

        {/* Quiet Direct-Response Footer */}
        <footer className="pt-6 pb-12 border-t border-rose-950/40 text-center text-xs text-white/50 space-y-2">
          <p className="font-serif-romance text-sm text-rose-200/70">
            50 Romance eBooks + Audiobooks • Curated with Love by Emma
          </p>
          <div className="flex items-center justify-center gap-3 text-[11px] text-white/40">
            <span>Instant Digital Download</span>
            <span>·</span>
            <span>256-Bit SSL Encrypted</span>
            <span>·</span>
            <span>Emma's 60-Day Guarantee</span>
          </div>
        </footer>

      </div>

      {/* Sticky Bottom CTA for Mobile Thumb Conversion (Cap < 15% viewport height) */}
      <StickyBottomCTA checkoutUrl={CHECKOUT_URL} />
    </div>
  );
}
