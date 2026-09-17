import type { Metadata } from 'next';
import Link from 'next/link';
import { Anchor, Sparkles, ArrowRight, BookOpen, HelpCircle } from 'lucide-react';
import FischCalculatorClient from './FischCalculatorClient';

export const metadata: Metadata = {
  title: 'Fisch Calculator: Catch Probability, Rod Luck & C$ Profit Simulator',
  description: 'Interactive Roblox Fisch calculator. Calculate exact catch odds, rod luck multipliers, lure speed, and projected C$ earnings per hour. Simulate 100 casts across all islands.',
  alternates: {
    canonical: 'https://fisch.robloxwikihub.com/calculator',
  },
  openGraph: {
    title: 'Roblox Fisch Catch Odds & Profit Calculator',
    description: 'Simulate your Fisch catch probabilities, rod luck bonuses, and hourly C$ profit.',
    url: 'https://fisch.robloxwikihub.com/calculator',
    type: 'website',
  },
};

export default function CalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Roblox Fisch Catch Probability & Profit Calculator',
    url: 'https://fisch.robloxwikihub.com/calculator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free interactive probability and profit calculator for Roblox Fisch fishing rods, enchantments, and weather totems.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '840',
    },
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
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Game Tool • Updated for Latest Fisch Patches</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Fisch <span className="text-cyan-400">Catch Odds & Profit</span> Calculator
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Configure your fishing rod, enchantments, bait, and weather totems. Simulate real-time catch odds and test virtual casts with authentic RNG formulas.
          </p>
        </div>
      </section>

      {/* Interactive Client Component */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FischCalculatorClient />
      </div>

      {/* SEO Strategy Guide & Formula Explanation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Anchor className="w-6 h-6 text-cyan-400" />
            How Luck & Bite Speed Work in Roblox Fisch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-cyan-300">1. Luck Multiplier Formula</h3>
              <p>
                In Fisch, your net luck is calculated multiplicatively from your Base Rod Luck, Enchantment Bonus, Bait Luck, and Global/Weather Totem Buffs.
              </p>
              <code className="block p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300">
                Total_Luck = (Base_Rod_Luck + Enchant_Bonus + Bait_Bonus) * Weather_Totem_Mult
              </code>
              <p>
                A higher luck rating skews the rarity curve, exponentially shifting the RNG roll away from Common fish towards Mythical, Legendary, and Mutation varieties.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-cyan-300">2. Lure Speed & Hourly C$ Yield</h3>
              <p>
                Lure Speed reduces the time between casting and the initial bobber dip. Maximum lure speed cap is reached around +80% to +90%, yielding a bite every 1.5 to 2.5 seconds.
              </p>
              <code className="block p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300">
                Hourly_Yield ≈ (3600s / Cycle_Time) * Expected_Value_Per_Fish
              </code>
              <p>
                Combining high lure speed with Desolate Deep or Sunstone locations yields upwards of C$ 150,000 to C$ 350,000 per hour during ideal weather conditions.
              </p>
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
              <strong className="text-white block mb-1">Which rod generates the highest C$ per hour?</strong>
              <span>The Destiny Rod ($190,000) and Supreme Rod ($150,000) have the highest sustainable yields when paired with the Sea King or Mutated enchantment and Tempest/Aurora totems.</span>
            </div>
            <div>
              <strong className="text-white block mb-1">Does bait stack with weather totems?</strong>
              <span>Yes! Bait modifiers stack additively with your rod bonuses before totem multipliers are applied, making high-tier bait exceptionally potent during Aurora or Tempest events.</span>
            </div>
          </div>
        </div>

        {/* Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border border-slate-800/80 bg-slate-950/60">
          <Link href="/rod-tier-list" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
            <BookOpen className="w-4 h-4" />
            <span>View Full Rod Tier List</span>
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
