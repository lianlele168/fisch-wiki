import type { Metadata } from 'next';
import Link from 'next/link';
import { Anchor, Sparkles, ArrowRight, BookOpen, HelpCircle, ShieldCheck } from 'lucide-react';
import FischCalculatorClient from './FischCalculatorClient';

export const metadata: Metadata = {
  title: 'Fisch Calculator: Rod Stats & C$ Profit Estimator',
  description: 'Interactive Roblox Fisch calculator built on verified rod stats and fish prices. Estimate bite time, casts per hour, and projected C$ earnings per hour. Bonuses are clearly-labelled model estimates.',
  alternates: {
    canonical: 'https://fisch.robloxwikihub.com/calculator',
  },
  openGraph: {
    title: 'Roblox Fisch Profit Estimator',
    description: 'Estimate your Fisch hourly C$ yield from verified rod stats and fish prices.',
    url: 'https://fisch.robloxwikihub.com/calculator',
    type: 'website',
  },
};

export default function CalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Roblox Fisch Profit Estimator',
    url: 'https://fisch.robloxwikihub.com/calculator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free profit estimator for Roblox Fisch built on rod stats and fish prices verified against the official Fisch Wiki. Bonus percentages and drop rates are model estimates, clearly labelled.',
  };

  return (
    <div className="space-y-12 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Built on Sourced Data • Model Estimates Clearly Labelled</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Fisch <span className="text-cyan-400">Profit Estimator</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Pick any of the 20 verified rods and any fish with a documented average price, then estimate your casts per hour and C$ per hour. Rod stats and fish prices are real; the bonus sliders and bite-time model are estimates and marked as such.
          </p>
        </div>
      </section>

      {/* Interactive Client Component */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FischCalculatorClient />
      </div>

      {/* Formula Explanation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Anchor className="w-6 h-6 text-cyan-400" />
            How the Estimate Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-cyan-300">1. Inputs</h3>
              <p>
                Rod Lure Speed and Luck percentages come straight from the official Fisch Wiki rod tables, and fish values come from the official fish tables — including corrections like the Destiny Rod&apos;s 45% Lure Speed and the free Magma Rod quest.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-cyan-300">2. Estimated Model</h3>
              <p>
                The extra luck/lure bonuses, bite-time curve and rarity mix are our own modelling assumptions, labelled in the tool. Use them to compare rods relative to each other, not as promises of exact in-game behaviour.
              </p>
              <code className="block p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300">
                Hourly_Yield ≈ (3600s / Cycle_Time) × Fish_Avg_Value
              </code>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <strong className="text-white block mb-1">Which rod has the highest verified Luck?</strong>
              <span>Merlin&apos;s Staff (254% Luck, C$800,000 from the Merlin NPC on Sunstone Island), followed by the Destiny Rod (250% Luck, C$190,000 from NPC Caleia at The Arch, requiring 350+ Bestiary fish discoveries).</span>
            </div>
            <div>
              <strong className="text-white block mb-1">Is there a genuinely free high-value rod?</strong>
              <span>Yes — the Magma Rod is free. Catch one Pufferfish for the Orc NPC at Roslit Bay and the quest reward is yours. It has 55% Luck, can fish in lava pools, and applies the 3x-value Ember mutation 35% of the time.</span>
            </div>
          </div>
        </div>

        {/* Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-slate-800/80 bg-slate-950/60">
          <Link href="/rod-tier-list" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
            <BookOpen className="w-4 h-4" />
            <span>View Full Rod Stat Table</span>
          </Link>
          <Link href="/codes" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300">
            <span>Claim Latest Active Fisch Codes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
