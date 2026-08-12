import type { Metadata } from 'next';
import { ShieldAlert, Trophy, DollarSign, Zap, Compass, Star } from 'lucide-react';
import { RODS_DATA, RodItem } from '@/data/wikiData';

export const metadata: Metadata = {
  title: 'Roblox Fisch Rod Tier List (August 2026) — Best Rods Ranked',
  description: 'Complete Roblox Fisch Fishing Rod Tier List. Compare Supreme Rod, Destiny Rod, Magma Rod, and Carbon Rod prices, lure speeds, and luck stats.',
  keywords: ['fisch rod tier list', 'best rod in fisch', 'fisch supreme rod', 'fisch magma rod', 'roblox fisch rods']
};

export default function RodTierListPage() {
  const tiers: Array<RodItem['tier']> = ['S+', 'S', 'A', 'F'];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-xs font-semibold">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span>Stat Comparisons & Rankings</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox <span className="gradient-text-cyan">Fisch Rod Tier List</span>
        </h1>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          Choosing the right fishing rod determines your catch rate and maximum fish weight. Below is our comprehensive tier ranking based on Lure Speed, Luck multiplier, and lava/night resilience.
        </p>
      </div>

      {/* Tier List Visual Display */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white">Tier List Visual Breakdown</h2>
        <div className="space-y-4">
          {tiers.map((t) => {
            const rodsInTier = RODS_DATA.filter((r) => r.tier === t);
            if (rodsInTier.length === 0) return null;

            const badgeBg =
              t === 'S+' ? 'bg-purple-600 text-white' :
              t === 'S' ? 'bg-cyan-500 text-slate-950' :
              t === 'A' ? 'bg-emerald-500 text-slate-950' :
              'bg-slate-700 text-slate-200';

            return (
              <div key={t} className="glass-card rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-black shrink-0 ${badgeBg} shadow-lg`}>
                  {t}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 w-full">
                  {rodsInTier.map((rod) => (
                    <div key={rod.name} className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm">{rod.name}</span>
                        <span className="text-xs font-mono text-amber-300">{rod.price}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-emerald-400 font-semibold">Speed: {rod.lureSpeed}</span>
                        <span className="text-cyan-300 font-semibold">Luck: {rod.luck}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2">{rod.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Stat Comparison Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white">Full Fishing Rod Attribute Table</h2>
        <div className="glass-card rounded-2xl overflow-x-auto border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 uppercase text-[10px] font-bold text-slate-300 tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Tier</th>
                <th className="p-4">Rod Name</th>
                <th className="p-4">Price</th>
                <th className="p-4">Lure Speed</th>
                <th className="p-4">Luck Multiplier</th>
                <th className="p-4">Max Weight</th>
                <th className="p-4">Vendor Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {RODS_DATA.map((rod) => (
                <tr key={rod.name} className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4">
                    <span className="px-2 py-0.5 text-[10px] font-black rounded bg-slate-800 text-cyan-300 border border-slate-700">
                      {rod.tier}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-white">{rod.name}</td>
                  <td className="p-4 font-mono text-amber-300">{rod.price}</td>
                  <td className="p-4 text-emerald-400 font-semibold">{rod.lureSpeed}</td>
                  <td className="p-4 text-cyan-300 font-semibold">{rod.luck}</td>
                  <td className="p-4 text-slate-400">{rod.maxKg}</td>
                  <td className="p-4 text-slate-400">{rod.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
