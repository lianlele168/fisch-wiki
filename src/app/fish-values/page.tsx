import type { Metadata } from 'next';
import { DollarSign, Search, Filter } from 'lucide-react';
import { FISH_VALUES } from '@/data/wikiData';

export const metadata: Metadata = {
  alternates: {
    canonical: '/fish-values',
  },

  title: 'Roblox Fisch Fish Values List — Prices & Rarities',
  description: 'Full Roblox Fisch fish price list and rarity values. Find base selling prices, preferred weather, and spawn locations for all species.',
  keywords: ['fisch values list', 'fisch fish values', 'roblox fisch fish prices', 'fisch fish rarity']
};

export default function FishValuesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold">
          <DollarSign className="w-4 h-4" />
          <span>Market Prices & Spawn Conditions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox <span className="gradient-text-gold">Fish Values & Price List</span>
        </h1>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          Calculate your total catch earnings before selling to the Merchant. Prices scale higher based on fish weight and Sea King enchantments.
        </p>
      </div>

      {/* Fish Values Table */}
      <section className="space-y-4">
        <div className="glass-card rounded-2xl overflow-x-auto border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 uppercase text-[10px] font-bold text-slate-300 tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Fish Species</th>
                <th className="p-4">Rarity</th>
                <th className="p-4">Base Sale Price</th>
                <th className="p-4">Preferred Weather</th>
                <th className="p-4">Best Season</th>
                <th className="p-4">Catch Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              {FISH_VALUES.map((fish) => (
                <tr key={fish.name} className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 font-bold text-white text-sm">{fish.name}</td>
                  <td className="p-4">
                    <span className={`px-2 py-0.5 text-[10px] font-black rounded ${
                      fish.rarity === 'Mythical' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' :
                      fish.rarity === 'Legendary' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
                      fish.rarity === 'Rare' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' :
                      'bg-slate-800 text-slate-300'
                    }`}>
                      {fish.rarity}
                    </span>
                  </td>
                  <td className="p-4 font-mono font-bold text-amber-300 text-sm">{fish.basePrice}</td>
                  <td className="p-4 text-cyan-300">{fish.preferredWeather}</td>
                  <td className="p-4 text-emerald-400">{fish.preferredSeason}</td>
                  <td className="p-4 text-slate-400">{fish.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
