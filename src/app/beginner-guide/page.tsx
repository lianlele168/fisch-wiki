import type { Metadata } from 'next';
import { BookOpen, CheckCircle, ArrowRight, Zap, Target, ShieldCheck, Compass, DollarSign, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roblox Fisch Beginner Guide — Fast Leveling 1 to 50, Economy & Best Rods',
  description: 'Complete Roblox Fisch progression roadmap. Master early economy, fast level 1-50 routes, optimal rod upgrades, bait synergy, and secret endgame trench locations.',
  keywords: ['fisch beginner guide', 'fisch leveling guide', 'fisch fast exp', 'how to level up in fisch', 'fisch rod progression', 'fisch best bait']
};

export default function BeginnerGuidePage() {
  const roadmapSteps = [
    {
      step: '1',
      title: 'Day 1: Moosewood Starter Routine (Level 1 - 10)',
      focus: 'Early Cash Generation & Basic Gear',
      desc: 'When you first spawn at Moosewood Docks, do not immediately cast your Flimsy Rod into the ocean randomly. First, speak with the Angler NPC located near the bait shop to accept daily fish quotas. Fulfilling these early delivery quests gives a guaranteed $1,500 cash injection and accelerates you directly to Level 5. Sell every common fish (Moosewood Trout, Pond Perch) to the Merchant immediately. Save up your first $750 to buy the Fast Rod instead of hoarding money for mid-tier vanity items.',
      proTip: 'The Fast Rod gives a staggering +90% Lure Speed. This cuts down waiting time between bites by half, effectively doubling your hourly EXP output.'
    },
    {
      step: '2',
      title: 'Phase 2: Offshore Expedition to Roslit Bay (Level 11 - 25)',
      focus: 'Boat Travel & High-Value Catch Cycling',
      desc: 'Once you reach Level 10 and secure at least $1,200, head to the Shipwright on the west docks and purchase the basic Wooden Boat. Navigate southwest toward Roslit Bay. The waters surrounding Roslit feature volcanic basalt structures that spawn Obsidian Salmon and Magma Guppies. These fish yield 3x more cash and experience compared to the starter ponds of Moosewood. Fish near the coral reefs during clear weather to reel in Clownfish and Angelfish.',
      proTip: 'Watch out for sudden thunderstorm announcements in chat. When a storm hits Roslit, switch your bait to Squid or Seaweed to hook Rare Coral Sharks.'
    },
    {
      step: '3',
      title: 'Phase 3: Deep Trench & Enchantment Unlocks (Level 26 - 50)',
      focus: 'Lucky Rod, Sunstone Sanctuary & Relic Altar',
      desc: 'At Level 25+, upgrade to the Lucky Rod ($5,250 at Sunstone Island) or Steady Rod ($7,000 at Terrapin Island). Travel to Keep Sanctuary by discovering the hidden cavern behind the waterfall. Here, you will locate the ancient Enchant Relic altar. Use Enchant Relics gathered from treasure chests to roll for the Sea King or Hasty enchantments. Sea King grants a 30% fish size increase, scaling selling prices by an enormous 1.4x multiplier on all catches.',
      proTip: 'Never roll enchantments on starter rods. Only apply Enchant Relics to rods you plan to use for at least 20 levels, such as the Steady Rod or Destiny Rod.'
    },
    {
      step: '4',
      title: 'Endgame Mastery: Desolate Deep & Brine Pools (Level 50+)',
      focus: 'Abyssal Fishing, Diving Gear & Mythical Leviathans',
      desc: 'Reaching Level 50 unlocks access to the high-stakes oceanic abyss known as Desolate Deep. You must purchase Diving Gear ($3,000) and Oxygen Tanks from Moosewood prior to entering the submarine trench; otherwise, your character will drown within 10 seconds of submersion. In the Desolate Deep trench, cast into bioluminescent geysers to hunt for Abyssal Anglerfish ($4,200) and the elusive Bioluminescent Kraken ($14,200).',
      proTip: 'Equip the Rod of the Depths with Abyssal Enchantment to gain immunity to deep-water line drag and hook Mythical Serpents at triple the baseline rate.'
    }
  ];

  const rodOrder = [
    { name: 'Flimsy Rod', cost: 'Free (Starter)', stat: '0% Lure / 0% Luck', verdict: 'Replace within 15 minutes of gameplay.' },
    { name: 'Fast Rod', cost: '$750', stat: '+90% Lure Speed', verdict: 'Best early investment; doubles catch frequency.' },
    { name: 'Lucky Rod', cost: '$5,250', stat: '+60% Luck / -20% Lure', verdict: 'Crucial for targeting Rare and Legendary species.' },
    { name: 'Steady Rod', cost: '$7,000', stat: '+35% Resilience / +25% Control', verdict: 'Essential for heavy ocean predators that fight hard.' },
    { name: 'Destiny Rod', cost: '$18,000', stat: '+120% Luck / +15% Resilience', verdict: 'Best pre-endgame rod for farming Mythical sea bosses.' },
    { name: 'Rod of the Depths', cost: '$45,000 (Relic Craft)', stat: '+180% Deep Water Luck', verdict: 'Ultimate endgame gear for Abyssal Trenches.' },
  ];

  const faqs = [
    {
      q: 'How do I level up fast in Roblox Fisch from Level 1 to 20?',
      a: 'The quickest leveling method is to buy the Fast Rod for $750 at Moosewood Docks immediately. Complete the Angler NPC daily catch quests, then fish at Moosewood River during sunny weather using Bagel or Worm bait to sustain a constant 5-second bite cycle.'
    },
    {
      q: 'What is the best rod for making money (C$) in Fisch?',
      a: 'For mid-game economy farming, the Steady Rod equipped with the Sea King enchantment produces the highest reliable income. Sea King increases caught fish size by 30%, which mathematically multiplies the final sale price at the Merchant by 1.4x.'
    },
    {
      q: 'Where do I find the Enchantment Relic Altar?',
      a: 'The Relic Altar is located at Keep Sanctuary (Secret Island). Sail northeast from Moosewood until you find the towering stone arch, then enter the concealed cave entrance behind the crashing waterfall.'
    },
    {
      q: 'What gear is mandatory before entering Desolate Deep?',
      a: 'You must purchase Diving Gear for $3,000 and an Advanced Oxygen Tank from Moosewood Harbor. Entering the Desolate Deep trench without diving equipment results in fatal water pressure and drowning in 10 seconds.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
          <span>Official 2026 Progression Walkthrough</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox <span className="gradient-text-cyan">Fisch Beginner & Leveling Guide</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Master the complete progression roadmap of Roblox Fisch. Learn how to optimize early-game cash flow, transition across archipelagos from Moosewood to Desolate Deep, upgrade fishing rods systematically, and catch Mythical Leviathans.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Open Catch Odds & Profit Calculator</span>
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

      {/* 4-Phase Progression Roadmap */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Comprehensive 4-Stage Leveling Roadmap</h2>
          <p className="text-xs text-slate-400 mt-1">
            Follow this structured route to avoid wasting in-game currency and level up from 1 to 50 in record time.
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
          <h2 className="text-2xl font-extrabold text-white">Recommended Fishing Rod Upgrade Order</h2>
          <p className="text-xs text-slate-400 mt-1">
            Never waste money on intermediate rods that do not offer distinct multiplier advantages. Follow this tier sequence:
          </p>
        </div>

        <div className="glass-card rounded-2xl overflow-x-auto border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 uppercase text-[10px] font-bold text-slate-300 tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Rod Model</th>
                <th className="p-4">Purchase Cost</th>
                <th className="p-4">Key Attribute Modifiers</th>
                <th className="p-4">Strategic Verdict</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {rodOrder.map((rod) => (
                <tr key={rod.name} className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 font-bold text-white text-sm">{rod.name}</td>
                  <td className="p-4 font-mono font-bold text-amber-300">{rod.cost}</td>
                  <td className="p-4 text-cyan-300">{rod.stat}</td>
                  <td className="p-4 text-slate-300">{rod.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Advanced Bait Synergy Matrix */}
      <section className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-cyan-400" />
          <span>Bait Synergy & Weather Synchronization</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Fishing efficiency in Fisch depends directly on synchronizing bait choice with active oceanic weather systems. Using standard Worms during an oceanic Thunderstorm squanders the storm bonus. Instead, save Truffle Worms and Super Flakes for stormy evenings when the Megalodon Shark and Electric Eel spawn rates are amplified by 300%. Always carry a Tempest Totem ($2,000) in your inventory to trigger instant rainstorms when hunting weather-locked species.
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
    </div>
  );
}
