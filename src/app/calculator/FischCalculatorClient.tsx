'use client';

import { useState, useMemo } from 'react';
import { RODS_DATA, FISH_VALUES } from '@/data/wikiData';
import { Anchor, Sparkles, Play, Check, Copy, Flame, DollarSign } from 'lucide-react';

// Fish with a verified single-catch average price. Common fish only have a
// verified per-kg price, so they are handled separately in the simulator.
const FISH_WITH_AVG_VALUE = FISH_VALUES.filter((f) => f.avgValue !== 'Not documented');
const COMMON_FISH = FISH_VALUES.filter((f) => f.rarity === 'Common');

// Generic, clearly-labelled model bonuses. These are NOT official game numbers —
// the previous version dressed invented enchantment/bait/totem multipliers up as
// facts; now every extra bonus is a plain user-adjustable estimate.
const LUCK_EXTRAS = [0, 25, 50, 75, 100];
const LURE_EXTRAS = [0, 15, 30, 45, 60];

// Simulator rarity mix: a modelling assumption, not an official drop rate.
const MODEL_ODDS = { mythical: 0.05, legendary: 0.25 };

function parsePct(value: string): number {
  const n = parseInt(value.replace(/[^0-9-]/g, ''), 10);
  return Number.isNaN(n) ? 0 : n;
}

export default function FischCalculatorClient() {
  const [selectedRodName, setSelectedRodName] = useState(RODS_DATA[0]?.name || 'Flimsy Rod');
  const [selectedFishName, setSelectedFishName] = useState(FISH_WITH_AVG_VALUE[0]?.name || 'Axolotl');
  const [luckExtra, setLuckExtra] = useState(0);
  const [lureExtra, setLureExtra] = useState(0);
  const [copied, setCopied] = useState(false);
  const [simResults, setSimResults] = useState<{
    mythics: number;
    legendaries: number;
    commons: number;
    totalProfit: number;
    recentCatches: string[];
  } | null>(null);

  const currentRod = useMemo(() => {
    return RODS_DATA.find((r) => r.name === selectedRodName) || RODS_DATA[0];
  }, [selectedRodName]);

  const currentFish = useMemo(() => {
    return FISH_WITH_AVG_VALUE.find((f) => f.name === selectedFishName) || FISH_WITH_AVG_VALUE[0];
  }, [selectedFishName]);

  const rodLuckNum = useMemo(() => parsePct(currentRod?.luck ?? '0'), [currentRod]);
  const rodLureNum = useMemo(() => parsePct(currentRod?.lureSpeed ?? '0'), [currentRod]);

  const calculations = useMemo(() => {
    const netLuck = rodLuckNum + luckExtra;
    const cappedLure = Math.min(rodLureNum + lureExtra, 95);
    const biteTimeSec = Math.max(1.2, +(10 * (1 - cappedLure / 100)).toFixed(1));
    const cycleTimeSec = biteTimeSec + 5.0; // estimated reeling minigame + recast
    const hourlyCatches = Math.round(3600 / cycleTimeSec);
    const fishValue = parseInt((currentFish?.avgValue ?? '0').replace(/[^0-9]/g, ''), 10) || 0;
    const projectedHourlyProfit = hourlyCatches * fishValue;

    return { netLuck, cappedLure, biteTimeSec, cycleTimeSec, hourlyCatches, fishValue, projectedHourlyProfit };
  }, [rodLuckNum, rodLureNum, luckExtra, lureExtra, currentFish]);

  const runSimulation = () => {
    let mythics = 0;
    let legendaries = 0;
    let commons = 0;
    let profit = 0;
    const catches: string[] = [];

    for (let i = 0; i < 100; i++) {
      const roll = Math.random();
      if (roll < MODEL_ODDS.mythical) {
        const fish = FISH_WITH_AVG_VALUE.filter((f) => f.rarity === 'Mythical');
        const pick = fish[Math.floor(Math.random() * fish.length)];
        const val = parseInt((pick?.avgValue ?? '0').replace(/[^0-9]/g, ''), 10) || 0;
        mythics++;
        profit += val;
        if (catches.length < 5 && pick) catches.push(`${pick.name} (Mythical, +C$ ${val.toLocaleString()})`);
      } else if (roll < MODEL_ODDS.mythical + MODEL_ODDS.legendary) {
        const fish = FISH_WITH_AVG_VALUE.filter((f) => f.rarity === 'Legendary');
        const pick = fish[Math.floor(Math.random() * fish.length)];
        const val = parseInt((pick?.avgValue ?? '0').replace(/[^0-9]/g, ''), 10) || 0;
        legendaries++;
        profit += val;
        if (catches.length < 5 && pick) catches.push(`${pick.name} (Legendary, +C$ ${val.toLocaleString()})`);
      } else {
        const pick = COMMON_FISH[Math.floor(Math.random() * COMMON_FISH.length)];
        // Common fish have no documented single-catch price; model assumes a
        // 1 kg catch sold at the verified per-kg rate.
        const val = Math.round(parseFloat(pick?.pricePerKg ?? '0')) || 0;
        commons++;
        profit += val;
        if (catches.length < 5 && pick) catches.push(`${pick.name} (Common, ~1kg, +C$ ${val.toLocaleString()})`);
      }
    }

    setSimResults({ mythics, legendaries, commons, totalProfit: profit, recentCatches: catches });
  };

  const copyBuild = () => {
    const text = `Roblox Fisch Profit Estimate:\n• Rod: ${currentRod?.name} (${currentRod?.luck} Luck, ${currentRod?.lureSpeed} Lure)\n• Target fish: ${currentFish?.name} (avg C$ ${currentFish?.avgValue})\n• Estimated extra bonuses: +${luckExtra}% Luck, +${lureExtra}% Lure (model)\n• Estimated casts/hour: ${calculations.hourlyCatches}\n• Projected yield: C$ ${calculations.projectedHourlyProfit.toLocaleString()}/hr\nNote: bonuses and bite times are model estimates, not official game numbers.\nCalculated on https://fisch.robloxwikihub.com/calculator/`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Model disclaimer */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-[11px] text-slate-400 leading-relaxed">
        <strong className="text-slate-300">How this tool works, honestly:</strong> rod stats and fish prices come from the official Fisch Wiki (verified September 2026). The bonus percentages, bite-time model and rarity mix below are modelling assumptions for estimation only — Fisch does not publish official drop-rate formulas. Nothing here is an official game number.
      </div>

      {/* Control Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Configuration Inputs */}
        <div className="lg:col-span-2 space-y-6 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
          <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Anchor className="w-5 h-5 text-cyan-400" />
            <span>Rod &amp; Target Fish</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 1. Rod Select */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Fishing Rod ({RODS_DATA.length} verified rods)
              </label>
              <select
                value={selectedRodName}
                onChange={(e) => setSelectedRodName(e.target.value)}
                aria-label="Select Fishing Rod"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                {RODS_DATA.map((r) => (
                  <option key={r.name} value={r.name}>
                    {r.name} — {r.price}
                  </option>
                ))}
              </select>
              <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                <span>Luck: <strong className="text-cyan-300">{currentRod?.luck}</strong></span>
                <span>Lure: <strong className="text-cyan-300">{currentRod?.lureSpeed}</strong></span>
                <span>Max: <strong className="text-slate-300">{currentRod?.maxKg}</strong></span>
              </div>
            </div>

            {/* 2. Target Fish */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Target Fish ({FISH_WITH_AVG_VALUE.length} with verified avg price)
              </label>
              <select
                value={selectedFishName}
                onChange={(e) => setSelectedFishName(e.target.value)}
                aria-label="Select Target Fish"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                {FISH_WITH_AVG_VALUE.map((f) => (
                  <option key={f.name} value={f.name}>
                    {f.name} ({f.rarity}) — avg C$ {f.avgValue}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-400 px-1">
                Location: {currentFish?.location} • C$ {currentFish?.pricePerKg}/kg
              </p>
            </div>

            {/* 3. Estimated Luck Bonus */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Extra Luck Bonus <span className="text-slate-500">(model estimate)</span>
              </label>
              <select
                value={luckExtra}
                onChange={(e) => setLuckExtra(Number(e.target.value))}
                aria-label="Select Estimated Luck Bonus"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                {LUCK_EXTRAS.map((v) => (
                  <option key={v} value={v}>
                    +{v}% (estimated — enchants, bait, totems combined)
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Estimated Lure Bonus */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Extra Lure Bonus <span className="text-slate-500">(model estimate)</span>
              </label>
              <select
                value={lureExtra}
                onChange={(e) => setLureExtra(Number(e.target.value))}
                aria-label="Select Estimated Lure Bonus"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                {LURE_EXTRAS.map((v) => (
                  <option key={v} value={v}>
                    +{v}% (estimated — enchants, bait, totems combined)
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Right Column: Real-Time Calculated Metrics */}
        <div className="space-y-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-900/40 p-6 rounded-2xl shadow-xl shadow-cyan-950/20">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Estimated Output</span>
            </h3>
            <button
              onClick={copyBuild}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Share Estimate'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">Net Luck (est.)</span>
              <span className="text-xl font-black text-cyan-300">{calculations.netLuck >= 0 ? '+' : ''}{calculations.netLuck}%</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">Est. Bite Time</span>
              <span className="text-xl font-black text-amber-300">{calculations.biteTimeSec}s</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">Est. Casts / Hour</span>
              <span className="text-lg font-black text-emerald-300">{calculations.hourlyCatches}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">Fish Avg Value</span>
              <span className="text-lg font-black text-amber-300">C$ {(currentFish?.avgValue ?? '0').replace(/[^0-9,]/g, '')}</span>
            </div>
          </div>

          {/* Profit Prediction Card */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/40 via-slate-950 to-slate-900 border border-emerald-500/30 space-y-1">
            <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
              <DollarSign className="w-4 h-4" />
              Projected Hourly Yield (if every catch is the target fish)
            </span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">
              C$ {calculations.projectedHourlyProfit.toLocaleString()}
              <span className="text-xs font-normal text-slate-400"> / hr</span>
            </div>
            <span className="text-[11px] text-slate-400 block">
              {calculations.hourlyCatches} casts/hour × verified avg value C$ {calculations.fishValue.toLocaleString()}. Real hourly yield depends on what actually bites.
            </span>
          </div>

          {/* 100-Cast Simulator Trigger */}
          <button
            onClick={runSimulation}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>Simulate 100 Casts (model odds)</span>
          </button>
        </div>
      </div>

      {/* Virtual 100-Cast Simulation Output Log */}
      {simResults && (
        <div className="p-6 rounded-2xl border border-cyan-800/60 bg-slate-950 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400" />
              <span>100-Cast Simulation (model: 5% Mythical / 25% Legendary / 70% Common)</span>
            </h3>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
              Estimated Total: +C$ {simResults.totalProfit.toLocaleString()}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-800/40 text-center">
              <span className="text-xs text-purple-300 font-semibold">Mythical</span>
              <span className="text-2xl font-black text-purple-200 block">{simResults.mythics}</span>
            </div>
            <div className="p-3 rounded-xl bg-yellow-950/30 border border-yellow-800/40 text-center">
              <span className="text-xs text-yellow-300 font-semibold">Legendary</span>
              <span className="text-2xl font-black text-yellow-200 block">{simResults.legendaries}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="text-xs text-slate-400 font-semibold">Common (~1kg)</span>
              <span className="text-2xl font-black text-slate-300 block">{simResults.commons}</span>
            </div>
          </div>

          <div className="space-y-1 pt-2">
            <span className="text-xs font-semibold text-slate-400">Sample catches (real verified species):</span>
            <div className="flex flex-wrap gap-2 pt-1">
              {simResults.recentCatches.map((catchText, idx) => (
                <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                  {catchText}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
