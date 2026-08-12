import type { Metadata } from 'next';
import { Compass, MapPin, Shield, AlertTriangle, Lightbulb } from 'lucide-react';
import { LOCATIONS_DATA } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';

export const metadata: Metadata = {
  title: 'Roblox Fisch Map & Locations Guide — Desolate Deep Coordinates',
  description: 'Find all Roblox Fisch island coordinates, secret underwater trenches like Desolate Deep, entry gear requirements, and rare fish spawn spots.',
  keywords: ['fisch locations guide', 'fisch desolate deep location', 'fisch secret island location', 'fisch map coordinates']
};

export default function LocationsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-300 text-xs font-semibold">
          <Compass className="w-4 h-4 text-emerald-400" />
          <span>Full World Map Navigation</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox <span className="gradient-text-cyan">Fisch Map & Locations Guide</span>
        </h1>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          Discover all major islands, secret underwater trenches, and fog-shrouded sanctuaries in Roblox Fisch. Copy exact in-game coordinates below.
        </p>
      </div>

      {/* Locations Cards */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LOCATIONS_DATA.map((loc) => (
            <div key={loc.name} className="glass-card p-6 rounded-2xl space-y-4 border-slate-800 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{loc.name}</span>
                    </h2>
                    <span className="text-[11px] text-cyan-300/80 font-mono font-medium">{loc.reqLevel}</span>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-bold bg-slate-900 text-slate-300 rounded border border-slate-700">
                    {loc.reqGear}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{loc.description}</p>

                {/* Coordinates Box */}
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block">In-Game Coordinates</span>
                    <span className="text-xs font-mono font-bold text-amber-300">{loc.coordinates}</span>
                  </div>
                  <CopyButton textToCopy={loc.coordinates} className="px-3 py-1 text-[11px]" />
                </div>

                {/* Notable Fish */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-semibold text-slate-400">Exclusive / Notable Fish:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.notableFish.map((fish) => (
                      <span key={fish} className="px-2 py-0.5 text-[10px] font-medium bg-cyan-950 text-cyan-200 border border-cyan-800/60 rounded">
                        {fish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tip */}
              <div className="pt-3 border-t border-slate-900 text-[11px] text-slate-400 flex items-start gap-2 bg-slate-900/40 p-3 rounded-lg">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{loc.tips}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Spotlight: How to find Desolate Deep */}
      <section className="glass-card p-6 sm:p-8 rounded-2xl space-y-4 border-cyan-500/30">
        <div className="flex items-center gap-2 text-cyan-300">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <h2 className="text-lg font-bold text-white">Crucial Tip for Desolate Deep</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          The <strong className="text-white">Desolate Deep</strong> is the most lucrative mid-to-late game fishing spot in Roblox Fisch. To enter, travel to the sea cavern west of Sunstone Island. <strong className="text-amber-300">WARNING:</strong> Do not dive without buying the <strong className="text-cyan-300">Diving Gear ($3,000)</strong> from Moosewood, or your character will drown before reaching the bottom altar!
        </p>
      </section>
    </div>
  );
}
