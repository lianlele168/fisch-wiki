import type { Metadata } from 'next';
import { Sparkles, Sun, CloudRain, Wind, Zap, BookOpen } from 'lucide-react';
import { ENCHANTMENTS_DATA, TOTEMS_DATA } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';

export const metadata: Metadata = {
  title: 'Roblox Fisch Enchantments Tier List & Weather Totem Locations',
  description: 'Complete guide to Roblox Fisch enchantments (Sea King, Hasty, Lucky) and weather totems (Tempest, Wind, Sun Totem coordinates).',
  keywords: ['fisch enchantments tier list', 'fisch best enchants', 'fisch totem locations', 'fisch tempest totem']
};

export default function EnchantmentsTotemsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Magic Relics & Weather Control</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox <span className="gradient-text-cyan">Enchantments & Weather Totems</span>
        </h1>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          Enchanting your fishing rod boosts fish sizes and bite speeds, while weather totems allow you to force rare weather conditions (like Thunderstorms) to spawn mythical fish on demand.
        </p>
      </div>

      {/* Section 1: Enchantments Tier List */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span>Rod Enchantments Tier List</span>
          </h2>
          <p className="text-xs text-slate-400">Use Enchantment Relics at Keep Sanctuary or Merlin NPC to roll these passives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ENCHANTMENTS_DATA.map((enc) => (
            <div key={enc.name} className="glass-card p-5 rounded-xl space-y-2 border-purple-500/20">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-white">{enc.name}</span>
                <span className={`px-2 py-0.5 text-xs font-extrabold rounded ${
                  enc.tier === 'S' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' :
                  'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                }`}>
                  {enc.tier} Tier
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold">
                <span className="text-emerald-400">{enc.effect}</span>
                <span className="text-amber-300">({enc.multiplier})</span>
              </div>
              <p className="text-xs text-slate-400">{enc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Weather Totems Guide */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <CloudRain className="w-5 h-5 text-cyan-400" />
            <span>Weather Totems & Purchase Locations</span>
          </h2>
          <p className="text-xs text-slate-400">Buy totems to manipulate global weather and time of day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOTEMS_DATA.map((totem) => (
            <div key={totem.name} className="glass-card p-6 rounded-2xl space-y-4 border-slate-800 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{totem.name}</h3>
                  <span className="text-xs font-mono font-bold text-amber-300">{totem.price}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{totem.effect}</p>
                <div className="text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-300">Location:</span> {totem.location}
                </div>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-300">{totem.coordinates}</span>
                  <CopyButton textToCopy={totem.coordinates} className="px-2 py-0.5 text-[10px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
