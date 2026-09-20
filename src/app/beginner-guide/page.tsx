import type { Metadata } from 'next';
import { BookOpen, ArrowRight, Zap, Target, Compass, DollarSign, HelpCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';
import { DATA_SOURCE_NOTE } from '@/data/wikiData';

export const metadata: Metadata = {
  alternates: {
    canonical: '/beginner-guide',
  },

  title: 'Roblox Fisch Beginner Guide — Rod Progression With Stats',
  description: 'Roblox Fisch progression roadmap built on verified data: which rod to buy at every stage, the free Magma Rod quest at Roslit Bay, and how to unlock the Destiny Rod at The Arch.',
  keywords: ['fisch beginner guide', 'fisch leveling guide', 'fisch rod progression', 'fisch magma rod quest', 'fisch destiny rod unlock', 'fisch best early rod']
};

export default function BeginnerGuidePage() {
  const roadmapSteps = [
    {
      step: '1',
      title: 'Stage 1: Start at Moosewood (Free Rod)',
      focus: 'Learn the minigame with the Flimsy Rod',
      desc: 'Every account spawns with the Flimsy Rod — 0% bonuses and a 10.4kg limit. That is fine: Moosewood is the starter hub and hosts the main rod shop selling the Training Rod (C$300), Plastic Rod (C$750), Carbon Rod (C$2,000), Long Rod (C$3,000), Fast Rod (C$4,000) and Lucky Rod (C$4,500). Note that the Training Rod actually carries a -70% Luck penalty, so the Plastic or Carbon Rod are the better early buys for finding rares. Sell everything you catch at the merchant and save your C$.'
      ,
      proTip: 'The Lucky Rod (C$4,500, 177% Luck) is the best early rarity hunter in the entire verified rod table — its Luck-per-C$ ratio beats rods costing ten times as much.'
    },
    {
      step: '2',
      title: 'Stage 2: Sail to Roslit Bay for the Free Magma Rod',
      focus: 'Zero-cost power spike via the Orc quest',
      desc: 'Roslit Bay is the first big destination: it sells the Steady Rod (C$7,000), Fortune Rod (C$11,000) and Rapid Rod (C$12,000), but the real prize is free. Find the Orc NPC and catch one Pufferfish to complete his quest — the Magma Rod is your reward at no cost. It has 45% Lure Speed, 55% Luck, 0.15 Control, can fish in lava pools, and applies the Ember mutation 35% of the time for 3x sale value.'
      ,
      proTip: 'Because every Ember-mutated catch sells for 3x, the free Magma Rod often out-earns paid rods at this stage of the game.'
    },
    {
      step: '3',
      title: 'Stage 3: Expand Across the Map (C$12,000 - C$30,000)',
      focus: 'Frog Rod, Magnet Rod, Nocturnal Rod, Arctic Rod, Coral Rod',
      desc: 'With steady income, branch out: the Frog Rod (C$12,000, 100% Luck, 0.15 Control) at Mushgrove Swamp requires 50% Bestiary completion, the Magnet Rod (C$15,000) at Terrapin Island pulls up items instead of fish, the Nocturnal Rod (C$15,000, 90% Luck) is sold at Vertigo, the Arctic Rod (C$25,000) at Northern Summit, and the Coral Rod (C$30,000) at Coral Bastion — again gated behind 50% Bestiary completion. Filling your Bestiary is therefore itself a progression task that unlocks gear.'
      ,
      proTip: 'Fish the verified Common spots first (Ocean species like Sardine and Haddock at C$132-170 per kg) to build C$ while gradually filling Bestiary entries.'
    },
    {
      step: '4',
      title: 'Stage 4: Endgame Rods (C$100,000+)',
      focus: 'Trident Rod, Rod Of The Depths, Destiny Rod, Merlin\'s Staff',
      desc: 'The endgame ladder is clear in the verified data: the Trident Rod (C$150,000, 150% Luck) at Desolate Deep, the Rod Of The Depths (C$750,000, 75% Lure / 130% Luck) at The Depths, the Destiny Rod (C$190,000, 250% Luck, 0.2 Control) sold by NPC Caleia at The Arch — which requires 350+ Bestiary fish discoveries — and finally Merlin\'s Staff (C$800,000, 254% Luck, no weight limit) from the Merlin NPC on Sunstone Island. Other verified endgame targets include the Kings Rod (C$100,000, Keepers Altar), Poseidon Rod (C$450,000) and Zeus Rod (C$500,000) at Atlantis, and Heaven\'s Rod (C$800,000) at Glacial Grotto.'
      ,
      proTip: 'Because the Destiny Rod needs 350+ Bestiary discoveries, keep filling your Bestiary from day one — the unlock is progress-based, not cash-based.'
    }
  ];

  const rodOrder = [
    { name: 'Flimsy Rod', cost: 'Free (starter)', stat: '0% Lure / 0% Luck / 10.4kg', verdict: 'Replace as soon as you can afford a shop rod.' },
    { name: 'Fast Rod', cost: 'C$4,000', stat: '70% Lure / 10% Luck', verdict: 'Fastest early bite rate — good for volume fishing and leveling.' },
    { name: 'Lucky Rod', cost: 'C$4,500', stat: '20% Lure / 177% Luck', verdict: 'Best early rarity hunter; unbeatable Luck per C$.' },
    { name: 'Magma Rod', cost: 'Free (Orc quest)', stat: '45% Lure / 55% Luck / Ember 3x mutation', verdict: 'Mandatory free pickup at Roslit Bay — catch one Pufferfish.' },
    { name: 'Fortune Rod', cost: 'C$11,000', stat: '30% Lure / 200% Luck / 3,000kg', verdict: 'Strongest mid-game rod with no negative stats.' },
    { name: 'Destiny Rod', cost: 'C$190,000', stat: '45% Lure / 250% Luck / 0.2 Control', verdict: 'Best purchasable all-rounder; needs 350+ Bestiary discoveries.' },
    { name: "Merlin's Staff", cost: 'C$800,000', stat: '80% Lure / 254% Luck / no max kg', verdict: 'The verified endgame ceiling for Luck.' },
  ];

  const faqs = [
    {
      q: 'What is the fastest way to progress early in Roblox Fisch?',
      a: 'Buy volume-friendly rods at Moosewood (Fast Rod, 70% Lure Speed, C$4,000) and fish the verified Ocean commons — Sardine (C$170/kg), Anchovy (C$166.67/kg) and Haddock (C$132/kg) all sell well per kg. Fast bites plus decent per-kg prices beat chasing rares with a weak rod.'
    },
    {
      q: 'How do I get the free Magma Rod in Fisch?',
      a: 'Travel to Roslit Bay, find the Orc NPC, and catch one Pufferfish to finish his quest. The Magma Rod is the reward — free. It has 55% Luck, can fish in lava pools, and rolls the 3x-value Ember mutation 35% of the time.'
    },
    {
      q: 'How do I unlock the Destiny Rod?',
      a: 'The Destiny Rod is sold by the NPC Caleia at The Arch for C$190,000, and she requires 350+ Bestiary fish discoveries before you can buy it. It is not a quest reward. Stats: 45% Lure Speed, 250% Luck, 0.2 Control, 10% Resilience, 177,777kg max weight.'
    },
    {
      q: 'Why do the fish prices on this site differ from other guides?',
      a: 'Because every price here is transcribed from the official Fisch Wiki fish tables (September 2026), and where the source does not document a single-catch average we write "Not documented" instead of inventing a number. Several popular guides list fish and prices that do not exist in the game.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',

    author: {
      '@type': 'Person',
      name: 'Hlele',
      jobTitle: 'Editor'
    },
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-xs font-semibold">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>Progression Walkthrough • Sourced Data Edition</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox <span className="gradient-text-cyan">Fisch Beginner &amp; Rod Progression Guide</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          A progression roadmap where every price, stat and location is verified against the official Fisch Wiki (September 2026). You will learn which rod to buy at each stage, how to get the Magma Rod for free, and how to work toward the Destiny Rod — with no invented numbers anywhere on this page.
        </p>

        {/* E-E-A-T Author & Data Verification Card */}
        <AuthorCard
          authorName="Hlele"
          role="Editor"
          experience="AI-assisted research, human-reviewed"
          patchVersion="Sources last checked September 2026"
          editorialNote="All rod stats, fish prices and locations on this page are cross-checked against multiple sources including fischipedia.org (the official Fisch Wiki). Unverifiable claims from our old version — including fake coordinates and nonexistent fish — have been deleted, and anything we could not confirm is explicitly labeled."
        />

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Open Profit Estimator</span>
          </Link>
          <Link
            href="/codes"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 text-slate-200 font-bold rounded-xl text-xs hover:bg-slate-700 transition-colors"
          >
            <DollarSign className="w-3.5 h-3.5 text-amber-400" />
            <span>Claim Free Active Codes</span>
          </Link>
        </div>
      </div>

      {/* Hero Gameplay Screenshot Banner */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/60 aspect-video max-w-4xl mx-auto">
        <img
          src="/images/fisch-gameplay.webp"
          alt="Roblox Fisch Moosewood Dock Fishing Gameplay and Mythic Rod Setup"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 sm:p-6 flex items-center justify-between">
          <div className="text-xs sm:text-sm text-slate-200 font-medium">
            <span className="text-cyan-400 font-bold">Fig 1.1</span> — Moosewood, the starter island where every account begins
          </div>
        </div>
      </div>

      {/* 4-Stage Progression Roadmap */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white">4-Stage Rod Progression Roadmap</h2>
          <p className="text-xs text-slate-400 mt-1">
            Every rod named below appears in the official rod table with the exact price and stats quoted here.
          </p>
        </div>

        <div className="space-y-6">
          {roadmapSteps.map((s) => (
            <div key={s.step} className="glass-card p-6 sm:p-8 rounded-2xl space-y-4 border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-extrabold text-xl shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  <span className="text-xs text-cyan-400 font-medium">{s.focus}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{s.desc}</p>
              <div className="bg-cyan-950/40 border border-cyan-800/40 rounded-xl p-3.5 text-xs text-cyan-200 flex items-start gap-2.5">
                <Target className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-cyan-300">Pro Tip: </span>
                  <span>{s.proTip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rod Progression Path */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Recommended Rod Upgrade Order</h2>
          <p className="text-xs text-slate-400 mt-1">
            Each row uses verified prices and stats — nothing here is estimated.
          </p>
        </div>

        {/* Rod Showcase Screenshot */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/60 aspect-video max-w-4xl mx-auto">
          <img
            src="/images/fisch-mythic-rod.webp"
            alt="Roblox Fisch Mythic Leviathan Grasp and Endgame Rod Arsenal Showcase"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 sm:p-6 flex items-center justify-between">
            <div className="text-xs sm:text-sm text-slate-200 font-medium">
              <span className="text-cyan-400 font-bold">Fig 1.2</span> — Endgame rod arsenal showcase
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl overflow-x-auto border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 uppercase text-[10px] font-bold text-slate-300 tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Rod Model</th>
                <th className="p-4">Cost (verified)</th>
                <th className="p-4">Key Stats</th>
                <th className="p-4">Strategic Verdict</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {rodOrder.map((rod) => (
                <tr key={rod.name} className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 font-bold text-white text-sm whitespace-nowrap">{rod.name}</td>
                  <td className="p-4 font-mono font-bold text-amber-300 whitespace-nowrap">{rod.cost}</td>
                  <td className="p-4 text-cyan-300">{rod.stat}</td>
                  <td className="p-4 text-slate-300">{rod.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Honest money-making section */}
      <section className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-cyan-400" />
          <span>How Money Actually Works in Fisch</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Sale prices are quoted per kg and as a single-catch average in the official fish tables. For reliable early income, fish the verified Ocean commons: Shrimp and Mussel (C$250/kg each), Sardine (C$170/kg) and Anchovy (C$166.67/kg) are the strongest per-kg earners we have verified. For mutation value, the free Magma Rod&apos;s Ember mutation triples the sale value of 35% of your catches. For big single catches, the verified Mythical tier includes the Great White Shark (avg C$10,507), Whale Shark (avg C$10,227.5) and Colossal Squid (avg C$6,771.9), all found in the Ocean. Actual sale prices in game scale with the weight and mutations of your individual catch, so treat the averages as baselines.
        </p>
      </section>

      {/* FAQ Section with Schema */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-cyan-400" />
          <span>Frequently Asked Questions (Fisch FAQ)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="glass-card p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">{f.q}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Source note */}
      <section className="glass-card p-5 rounded-2xl border border-slate-800">
        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-400 leading-relaxed">{DATA_SOURCE_NOTE}</p>
        </div>
      </section>
    </div>
  );
}
