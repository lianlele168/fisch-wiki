import type { Metadata } from 'next';
import { Trophy, ShieldCheck } from 'lucide-react';
import { RODS_DATA, VERIFIED_EXTRA_RODS, DATA_SOURCE_NOTE, type RodItem } from '@/data/wikiData';

export const metadata: Metadata = {
  alternates: {
    canonical: '/rod-tier-list',
  },

  title: 'Roblox Fisch Rod Stats & Tier List — All 20 Verified Rods',
  description: 'Complete Roblox Fisch fishing rod stat table with verified Lure Speed, Luck, Control, Resilience, Max Kg and prices for 20 rods. Includes Destiny Rod (45% Lure / 250% Luck) and the free Magma Rod quest.',
  keywords: ['fisch rod tier list', 'best rod in fisch', 'fisch destiny rod', 'fisch magma rod free', 'roblox fisch rods']
};

export default function RodTierListPage() {
  const tiers: Array<RodItem['tier']> = ['S+', 'S', 'A', 'B', 'F'];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-xs font-semibold">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span>Verified Stat Table • {RODS_DATA.length} Rods</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox <span className="gradient-text-cyan">Fisch Rod Stats &amp; Tier List</span>
        </h1>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          Every rod below has its Lure Speed, Luck, Control, Resilience, Max Kg and price transcribed from the official Fisch Wiki (fischipedia.org). Two corrections to watch for: the Destiny Rod has 45% Lure Speed (not 70%), and the Magma Rod is a free quest reward, not a C$25,000 purchase. We removed rods we could not verify rather than guessing their stats.
        </p>
        <div className="flex items-start gap-2 bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 text-[11px] text-slate-400 text-left">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-slate-300">How tiers work:</strong> the tier badge is our own editorial shortcut, derived mechanically from the verified Luck stat (S+ ≥ 200%, S ≥ 90%, A ≥ 40%, B ≥ 0%, F &lt; 0%). It is not official game data — always compare the full stat table below before buying.
          </span>
        </div>
      </div>

      {/* Tier Groups */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white">Rods Grouped by Luck Tier</h2>
        <div className="space-y-4">
          {tiers.map((t) => {
            const rodsInTier = RODS_DATA.filter((r) => r.tier === t);
            if (rodsInTier.length === 0) return null;

            const badgeBg =
              t === 'S+' ? 'bg-purple-600 text-white' :
              t === 'S' ? 'bg-cyan-500 text-slate-950' :
              t === 'A' ? 'bg-emerald-500 text-slate-950' :
              t === 'B' ? 'bg-slate-700 text-slate-200' :
              'bg-rose-600 text-white';

            return (
              <div key={t} className="glass-card rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center text-xl font-black shrink-0 ${badgeBg} shadow-lg`}>
                  {t}
                  <span className="text-[9px] font-semibold opacity-80">Luck tier</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 w-full">
                  {rodsInTier.map((rod) => (
                    <div key={rod.name} className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-white text-sm">{rod.name}</span>
                        <span className="text-xs font-mono text-amber-300 whitespace-nowrap">{rod.price}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="text-emerald-400 font-semibold">Lure: {rod.lureSpeed}</span>
                        <span className="text-cyan-300 font-semibold">Luck: {rod.luck}</span>
                        <span className="text-slate-400">Max: {rod.maxKg}</span>
                      </div>
                      <p className="text-[11px] text-slate-400">{rod.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Full Stat Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white">Full Fishing Rod Attribute Table</h2>
        <p className="text-xs text-slate-400">
          All five stat lines, prices and vendor locations below come straight from fischipedia.org/wiki/Rods plus the dedicated Destiny Rod and Magma Rod pages (September 2026).
        </p>
        <div className="glass-card rounded-2xl overflow-x-auto border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 uppercase text-[10px] font-bold text-slate-300 tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Luck Tier</th>
                <th className="p-4">Rod Name</th>
                <th className="p-4">Price</th>
                <th className="p-4">Lure Speed</th>
                <th className="p-4">Luck</th>
                <th className="p-4">Control</th>
                <th className="p-4">Resilience</th>
                <th className="p-4">Max Kg</th>
                <th className="p-4">How to Get</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {RODS_DATA.map((rod) => (
                <tr key={rod.name} className="hover:bg-slate-900/50 transition-colors align-top">
                  <td className="p-4">
                    <span className="px-2 py-0.5 text-[10px] font-black rounded bg-slate-800 text-cyan-300 border border-slate-700">
                      {rod.tier}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-white whitespace-nowrap">{rod.name}</td>
                  <td className="p-4 font-mono text-amber-300 whitespace-nowrap">{rod.price}</td>
                  <td className="p-4 text-emerald-400 font-semibold">{rod.lureSpeed}</td>
                  <td className="p-4 text-cyan-300 font-semibold">{rod.luck}</td>
                  <td className="p-4 text-slate-300">{rod.control}</td>
                  <td className="p-4 text-slate-300">{rod.resilience}</td>
                  <td className="p-4 text-slate-400 whitespace-nowrap">{rod.maxKg}</td>
                  <td className="p-4 text-slate-400">{rod.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Other verified rods (price/location only) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-extrabold text-white">Other Verified High-End Rods</h2>
        <p className="text-xs text-slate-400">
          These rods are confirmed to exist with the price and acquisition method below, but we have not transcribed their full stat lines yet — so they are listed here instead of in the table above.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VERIFIED_EXTRA_RODS.map((rod) => (
            <div key={rod.name} className="glass-card p-4 rounded-xl space-y-1.5">
              <span className="font-bold text-white text-sm block">{rod.name}</span>
              <span className="text-xs font-mono text-amber-300 block">{rod.price}</span>
              <span className="text-[11px] text-slate-400 block">{rod.location}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Source note */}
      <section className="glass-card p-5 rounded-2xl border border-slate-800">
        <p className="text-[11px] text-slate-400 leading-relaxed">{DATA_SOURCE_NOTE}</p>
      </section>
    </div>
  );
}
