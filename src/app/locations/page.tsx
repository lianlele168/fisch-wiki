import type { Metadata } from 'next';
import { Compass, MapPin, ShieldCheck, Lightbulb } from 'lucide-react';
import { LOCATIONS_DATA, LIMITED_EVENT_LOCATIONS, DATA_SOURCE_NOTE } from '@/data/wikiData';

export const metadata: Metadata = {
  alternates: {
    canonical: '/locations',
  },

  title: 'Roblox Fisch Locations Guide — All Verified Major & Sub Locations',
  description: 'Every Roblox Fisch location verified against the official Fisch Wiki: major islands like Moosewood and Roslit Bay, sub-locations like The Depths and The Arch, plus which rods are sold where.',
  keywords: ['fisch locations', 'fisch map guide', 'fisch roslit bay', 'fisch moosewood', 'fisch the depths', 'roblox fisch islands']
};

export default function LocationsPage() {
  const withData = LOCATIONS_DATA.filter((l) => l.rodsSold.length > 0 || l.notableFish.length > 0);
  const directoryOnly = LOCATIONS_DATA.filter((l) => l.rodsSold.length === 0 && l.notableFish.length === 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-300 text-xs font-semibold">
          <Compass className="w-4 h-4 text-emerald-400" />
          <span>{LOCATIONS_DATA.length} Verified Locations</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox <span className="gradient-text-cyan">Fisch Locations Guide</span>
        </h1>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          The location names below are verified against the official Fisch Wiki locations list (fischipedia.org): {LOCATIONS_DATA.filter((l) => l.category === 'Major').length} major locations plus the sub-locations we have rod or fish data for. We intentionally do not publish coordinates, level requirements or gear gates — we could not verify them, and the fake coordinates in our old version have been removed.
        </p>
      </div>

      {/* Locations with verified rod / fish data */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white">Locations With Verified Rod Shops &amp; Fish</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {withData.map((loc) => (
            <div key={loc.name} className="glass-card p-6 rounded-2xl space-y-4 border-slate-800 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{loc.name}</span>
                  </h2>
                  <span className="px-2.5 py-1 text-[10px] font-bold bg-slate-900 text-slate-300 rounded border border-slate-700 whitespace-nowrap">
                    {loc.category}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{loc.note}</p>

                {loc.rodsSold.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-slate-400">Rods sold / obtained here:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.rodsSold.map((rod) => (
                        <span key={rod} className="px-2 py-0.5 text-[10px] font-medium bg-amber-950/60 text-amber-200 border border-amber-800/60 rounded">
                          {rod}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {loc.notableFish.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-slate-400">Verified fish here:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.notableFish.map((fish) => (
                        <span key={fish} className="px-2 py-0.5 text-[10px] font-medium bg-cyan-950 text-cyan-200 border border-cyan-800/60 rounded">
                          {fish}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-900 text-[11px] text-slate-400 flex items-start gap-2 bg-slate-900/40 p-3 rounded-lg mt-3">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Open the in-game map and sail to the island name shown above — Fisch marks every location on the map once discovered, no coordinates needed.</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full verified directory */}
      <section className="space-y-4">
        <h2 className="text-2xl font-extrabold text-white">Full Verified Location Directory</h2>
        <p className="text-xs text-slate-400">
          These locations are confirmed to exist on the official list. We have not yet documented their rod vendors or fish tables — blank entries stay blank instead of being filled with guesses.
        </p>
        <div className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-wrap gap-2">
          {directoryOnly.map((loc) => (
            <span key={loc.name} className="px-2.5 py-1 text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-700 rounded-lg">
              {loc.name}
            </span>
          ))}
        </div>
      </section>

      {/* Limited-time event locations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-extrabold text-white">Limited-Time Event Locations ({LIMITED_EVENT_LOCATIONS.length})</h2>
        <div className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-wrap gap-2">
          {LIMITED_EVENT_LOCATIONS.map((loc) => (
            <span key={loc} className="px-2.5 py-1 text-[11px] font-medium bg-purple-950/50 text-purple-200 border border-purple-800/60 rounded-lg">
              {loc}
            </span>
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
