import type { Metadata } from 'next';
import { DollarSign, ShieldCheck } from 'lucide-react';
import { FISH_VALUES, DATA_SOURCE_NOTE } from '@/data/wikiData';

export const metadata: Metadata = {
  alternates: {
    canonical: '/fish-values',
  },

  title: 'Roblox Fisch Fish Values List — Verified C$/kg & Average Prices',
  description: 'Verified Roblox Fisch fish price list: 37 species with C$ per kg and average single-catch value, covering Common, Legendary and Mythical rarities from the official Fisch Wiki.',
  keywords: ['fisch values list', 'fisch fish values', 'roblox fisch fish prices', 'fisch c per kg', 'fisch mythical fish prices']
};

export default function FishValuesPage() {
  const mythical = FISH_VALUES.filter((f) => f.rarity === 'Mythical');
  const legendary = FISH_VALUES.filter((f) => f.rarity === 'Legendary');
  const common = FISH_VALUES.filter((f) => f.rarity === 'Common');

  const rarityBadge = (rarity: string) =>
    rarity === 'Mythical' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' :
    rarity === 'Legendary' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
    'bg-slate-800 text-slate-300 border border-slate-700';

  const renderRows = (fish: typeof FISH_VALUES) =>
    fish.map((f) => (
      <tr key={f.name} className="hover:bg-slate-900/50 transition-colors">
        <td className="p-4 font-bold text-white text-sm whitespace-nowrap">{f.name}</td>
        <td className="p-4">
          <span className={`px-2 py-0.5 text-[10px] font-black rounded border ${rarityBadge(f.rarity)}`}>
            {f.rarity}
          </span>
        </td>
        <td className="p-4 text-slate-400 whitespace-nowrap">{f.location}</td>
        <td className="p-4 font-mono text-cyan-300 font-semibold">C$ {f.pricePerKg}</td>
        <td className="p-4 font-mono font-bold text-amber-300 text-sm">
          {f.avgValue === 'Not documented' ? <span className="text-slate-500 font-normal">Not documented</span> : `C$ ${f.avgValue}`}
        </td>
      </tr>
    ));

  const tableHeader = (
    <thead className="bg-slate-900 uppercase text-[10px] font-bold text-slate-300 tracking-wider border-b border-slate-800">
      <tr>
        <th className="p-4">Fish Species</th>
        <th className="p-4">Rarity</th>
        <th className="p-4">Location</th>
        <th className="p-4">Avg Value per kg</th>
        <th className="p-4">Avg Value (single catch)</th>
      </tr>
    </thead>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold">
          <DollarSign className="w-4 h-4" />
          <span>Verified Prices • {FISH_VALUES.length} Species</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox <span className="gradient-text-gold">Fish Values &amp; Price List</span>
        </h1>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          Every fish name, location and price below is transcribed from the official Fisch Wiki fish tables (fischipedia.org). The previous version of this page listed dozens of fish that do not exist in the game — that list has been deleted and rebuilt from scratch. Where the official table does not publish a single-catch average, we say &quot;Not documented&quot; instead of inventing a number.
        </p>
        <div className="flex items-start gap-2 bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 text-[11px] text-slate-400 text-left">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <span>
            Fisch has 18 rarity tiers in total; this page covers the three we have fully verified price lines for (Common, Legendary, Mythical). Actual sale price in game also scales with the weight and mutation of your individual catch.
          </span>
        </div>
      </div>

      {/* Mythical */}
      <section className="space-y-4">
        <h2 className="text-2xl font-extrabold text-white">Mythical Fish Prices ({mythical.length})</h2>
        <div className="glass-card rounded-2xl overflow-x-auto border border-slate-800">
          <table className="w-full text-left text-xs">
            {tableHeader}
            <tbody className="divide-y divide-slate-800/80 text-slate-300">{renderRows(mythical)}</tbody>
          </table>
        </div>
      </section>

      {/* Legendary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-extrabold text-white">Legendary Fish Prices ({legendary.length})</h2>
        <div className="glass-card rounded-2xl overflow-x-auto border border-slate-800">
          <table className="w-full text-left text-xs">
            {tableHeader}
            <tbody className="divide-y divide-slate-800/80 text-slate-300">{renderRows(legendary)}</tbody>
          </table>
        </div>
      </section>

      {/* Common */}
      <section className="space-y-4">
        <h2 className="text-2xl font-extrabold text-white">Common Fish Prices ({common.length})</h2>
        <div className="glass-card rounded-2xl overflow-x-auto border border-slate-800">
          <table className="w-full text-left text-xs">
            {tableHeader}
            <tbody className="divide-y divide-slate-800/80 text-slate-300">{renderRows(common)}</tbody>
          </table>
        </div>
      </section>

      {/* Source note */}
      <section className="glass-card p-5 rounded-2xl border border-slate-800">
        <p className="text-[11px] text-slate-400 leading-relaxed">{DATA_SOURCE_NOTE}</p>
      </section>
    </div>
  );
}
