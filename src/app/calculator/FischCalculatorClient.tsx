'use client';

import { useState, useMemo } from 'react';
import { RODS_DATA } from '@/data/wikiData';
import { Anchor, Sparkles, Play, Check, Copy, Flame, DollarSign, Clock, ShieldAlert } from 'lucide-react';

const ENCHANTMENTS = [
  { name: 'None', luck: 0, lure: 0, desc: 'Standard un-enchanted rod' },
  { name: 'Sea King (+15% Luck, +25% Size)', luck: 15, lure: 0, desc: 'Increases fish weight and chance of rare mutants' },
  { name: 'Mutated (+35% Luck)', luck: 35, lure: 0, desc: 'Highest raw luck bonus for Mythical catching' },
  { name: 'Blessed (+45% Luck)', luck: 45, lure: -5, desc: 'Divine blessing, slightly slows cast speed' },
  { name: 'Swift (+30% Lure Speed)', luck: 5, lure: 30, desc: 'Fastest bobber dip, best for speed farming' },
  { name: 'Resilient (+10% Control, +15% Luck)', luck: 15, lure: 5, desc: 'Easier minigame balance with stable bites' },
  { name: 'Abyssal (+25% Deep Sea Odds)', luck: 25, lure: 10, desc: 'Specialized for Desolate Deep and The Depths' },
];

const BAITS = [
  { name: 'None', luck: 0, lure: 0 },
  { name: 'Worm (+10% Lure)', luck: 0, lure: 10 },
  { name: 'Shrimp (+15% Luck, +5% Lure)', luck: 15, lure: 5 },
  { name: 'Squid (+25% Luck, +15% Lure)', luck: 25, lure: 15 },
  { name: 'Magnet (+50% Crate, +10% Luck)', luck: 10, lure: 5 },
  { name: 'Super Flakes (+40% Luck)', luck: 40, lure: 10 },
  { name: 'Truffle Worm (+65% Luck, +20% Lure)', luck: 65, lure: 20 },
];

const TOTEMS = [
  { name: 'Clear Sky (1.0x)', mult: 1.0, desc: 'Normal conditions' },
  { name: 'Tempest Totem (1.3x Luck / Rain)', mult: 1.3, desc: 'Rain storm, activates thunderstorm variants' },
  { name: 'Wind Totem (1.2x Luck / Breeze)', mult: 1.2, desc: 'Increased ocean current luck' },
  { name: 'Aurora Totem (1.7x Luck / Night)', mult: 1.7, desc: 'Massive surge in Mythical & exotic bites' },
  { name: 'Eclipse Totem (2.0x Luck / Mythic Event)', mult: 2.0, desc: 'Ultra-rare double luck event multiplier' },
];

const LOCATIONS = [
  { name: 'Moosewood (Beginner)', baseVal: 55, mythicBase: 0.008, legendaryBase: 0.05 },
  { name: 'Roslit Bay (Intermediate)', baseVal: 185, mythicBase: 0.015, legendaryBase: 0.09 },
  { name: 'Sunstone Island (Advanced)', baseVal: 480, mythicBase: 0.028, legendaryBase: 0.14 },
  { name: 'Desolate Deep (Endgame)', baseVal: 1350, mythicBase: 0.045, legendaryBase: 0.22 },
  { name: 'The Depths (Abyssal Zone)', baseVal: 2800, mythicBase: 0.065, legendaryBase: 0.28 },
];

export default function FischCalculatorClient() {
  const [selectedRodName, setSelectedRodName] = useState(RODS_DATA[0]?.name || 'Destiny Rod');
  const [selectedEnchant, setSelectedEnchant] = useState(1);
  const [selectedBait, setSelectedBait] = useState(2);
  const [selectedTotem, setSelectedTotem] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(3);
  const [serverBoost, setServerBoost] = useState(1.0);

  const [copied, setCopied] = useState(false);
  const [simResults, setSimResults] = useState<{
    mythics: number;
    legendaries: number;
    rares: number;
    commons: number;
    totalProfit: number;
    recentCatches: string[];
  } | null>(null);

  const currentRod = useMemo(() => {
    return RODS_DATA.find((r) => r.name === selectedRodName) || RODS_DATA[0];
  }, [selectedRodName]);

  const rodLuckNum = useMemo(() => {
    const parsed = parseInt(currentRod.luck.replace(/[^0-9]/g, '')) || 50;
    return parsed;
  }, [currentRod]);

  const rodLureNum = useMemo(() => {
    const parsed = parseInt(currentRod.lureSpeed.replace(/[^0-9]/g, '')) || 30;
    return parsed;
  }, [currentRod]);

  const calculations = useMemo(() => {
    const enchant = ENCHANTMENTS[selectedEnchant];
    const bait = BAITS[selectedBait];
    const totem = TOTEMS[selectedTotem];
    const loc = LOCATIONS[selectedLocation];

    const rawLuck = rodLuckNum + enchant.luck + bait.luck;
    const finalLuck = Math.round(rawLuck * totem.mult * serverBoost);

    const rawLure = rodLureNum + enchant.lure + bait.lure;
    const cappedLure = Math.min(rawLure, 95);
    const biteTimeSec = Math.max(1.2, +(10 * (1 - cappedLure / 100)).toFixed(1));
    const cycleTimeSec = biteTimeSec + 5.0; // Minigame + re-cast

    const luckFactor = 1 + finalLuck / 100;
    const mythicRate = Math.min(0.25, +(loc.mythicBase * luckFactor).toFixed(4));
    const legendaryRate = Math.min(0.45, +(loc.legendaryBase * luckFactor).toFixed(4));
    const rareRate = Math.min(0.60, +(0.35 * (1 + finalLuck / 250)).toFixed(4));

    const avgCatchVal = Math.round(
      loc.baseVal * (1 + mythicRate * 8 + legendaryRate * 3 + rareRate * 1)
    );
    const hourlyCatches = Math.round(3600 / cycleTimeSec);
    const projectedHourlyProfit = hourlyCatches * avgCatchVal;

    return {
      finalLuck,
      cappedLure,
      biteTimeSec,
      cycleTimeSec,
      mythicPct: (mythicRate * 100).toFixed(2),
      legendaryPct: (legendaryRate * 100).toFixed(2),
      hourlyCatches,
      projectedHourlyProfit,
      avgCatchVal,
    };
  }, [rodLuckNum, rodLureNum, selectedEnchant, selectedBait, selectedTotem, selectedLocation, serverBoost]);

  const runSimulation = () => {
    const mythicProb = parseFloat(calculations.mythicPct) / 100;
    const legProb = parseFloat(calculations.legendaryPct) / 100;
    const loc = LOCATIONS[selectedLocation];

    let mythics = 0;
    let legendaries = 0;
    let rares = 0;
    let commons = 0;
    let profit = 0;
    const catches: string[] = [];

    for (let i = 0; i < 100; i++) {
      const roll = Math.random();
      if (roll < mythicProb) {
        mythics++;
        const val = loc.baseVal * 12;
        profit += val;
        if (catches.length < 5) catches.push(`✨ Mythical Fish (+C$ ${val.toLocaleString()})`);
      } else if (roll < mythicProb + legProb) {
        legendaries++;
        const val = loc.baseVal * 4;
        profit += val;
        if (catches.length < 5) catches.push(`⭐ Legendary Fish (+C$ ${val.toLocaleString()})`);
      } else if (roll < mythicProb + legProb + 0.35) {
        rares++;
        const val = Math.round(loc.baseVal * 1.5);
        profit += val;
        if (catches.length < 5) catches.push(`🐟 Rare Catch (+C$ ${val.toLocaleString()})`);
      } else {
        commons++;
        const val = loc.baseVal;
        profit += val;
        if (catches.length < 5) catches.push(`🐟 Common Fish (+C$ ${val.toLocaleString()})`);
      }
    }

    setSimResults({
      mythics,
      legendaries,
      rares,
      commons,
      totalProfit: profit,
      recentCatches: catches,
    });
  };

  const copyBuild = () => {
    const text = `Roblox Fisch Optimal Build:\n• Rod: ${currentRod.name}\n• Enchantment: ${ENCHANTMENTS[selectedEnchant].name}\n• Bait: ${BAITS[selectedBait].name}\n• Totem: ${TOTEMS[selectedTotem].name}\n• Location: ${LOCATIONS[selectedLocation].name}\n• Total Luck: +${calculations.finalLuck}%\n• Projected Profit: C$ ${calculations.projectedHourlyProfit.toLocaleString()}/hr\nCalculated on https://fisch.robloxwikihub.com/calculator/`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Control Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Configuration Inputs */}
        <div className="lg:col-span-2 space-y-6 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
          <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Anchor className="w-5 h-5 text-cyan-400" />
            <span>Equipment & Environment Config</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 1. Rod Select */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Fishing Rod ({RODS_DATA.length} Available)
              </label>
              <select
                value={selectedRodName}
                onChange={(e) => setSelectedRodName(e.target.value)}
                aria-label="Select Fishing Rod"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                {RODS_DATA.map((r) => (
                  <option key={r.name} value={r.name}>
                    [{r.tier}] {r.name} ({r.price})
                  </option>
                ))}
              </select>
              <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                <span>Base Luck: <strong className="text-cyan-300">{currentRod.luck}</strong></span>
                <span>Lure Speed: <strong className="text-cyan-300">{currentRod.lureSpeed}</strong></span>
                <span>Max Kg: <strong className="text-slate-300">{currentRod.maxKg}</strong></span>
              </div>
            </div>

            {/* 2. Enchantment Select */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Rod Enchantment
              </label>
              <select
                value={selectedEnchant}
                onChange={(e) => setSelectedEnchant(Number(e.target.value))}
                aria-label="Select Rod Enchantment"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                {ENCHANTMENTS.map((item, idx) => (
                  <option key={item.name} value={idx}>
                    {item.name}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-400 px-1">{ENCHANTMENTS[selectedEnchant].desc}</p>
            </div>

            {/* 3. Bait Select */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Active Bait Type
              </label>
              <select
                value={selectedBait}
                onChange={(e) => setSelectedBait(Number(e.target.value))}
                aria-label="Select Active Bait Type"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                {BAITS.map((b, idx) => (
                  <option key={b.name} value={idx}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Weather Totem Select */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Active Weather Totem
              </label>
              <select
                value={selectedTotem}
                onChange={(e) => setSelectedTotem(Number(e.target.value))}
                aria-label="Select Active Weather Totem"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                {TOTEMS.map((t, idx) => (
                  <option key={t.name} value={idx}>
                    {t.name}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-400 px-1">{TOTEMS[selectedTotem].desc}</p>
            </div>

            {/* 5. Location Select */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Fishing Destination Spot
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(Number(e.target.value))}
                aria-label="Select Fishing Destination Spot"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                {LOCATIONS.map((loc, idx) => (
                  <option key={loc.name} value={idx}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 6. Server / Event Boost */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                Server Boost / Event Multiplier: <strong className="text-amber-300">{serverBoost}x</strong>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[1.0, 1.5, 2.0].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setServerBoost(val)}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                      serverBoost === val
                        ? 'bg-cyan-600 text-white border-cyan-400 shadow-md shadow-cyan-600/30'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {val}x Boost
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Real-Time Calculated Metrics */}
        <div className="space-y-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-900/40 p-6 rounded-2xl shadow-xl shadow-cyan-950/20">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Calculated Stats</span>
            </h3>
            <button
              onClick={copyBuild}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Share Build'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">Net Luck Bonus</span>
              <span className="text-xl font-black text-cyan-300">+{calculations.finalLuck}%</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">Avg Bite Time</span>
              <span className="text-xl font-black text-amber-300">{calculations.biteTimeSec}s</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">Mythical Odds</span>
              <span className="text-lg font-black text-purple-300">{calculations.mythicPct}%</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[11px] font-medium text-slate-400 block">Legendary Odds</span>
              <span className="text-lg font-black text-yellow-300">{calculations.legendaryPct}%</span>
            </div>
          </div>

          {/* Profit Prediction Card */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/40 via-slate-950 to-slate-900 border border-emerald-500/30 space-y-1">
            <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
              <DollarSign className="w-4 h-4" />
              Projected Hourly Farming Yield
            </span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">
              C$ {calculations.projectedHourlyProfit.toLocaleString()}
              <span className="text-xs font-normal text-slate-400"> / hr</span>
            </div>
            <span className="text-[11px] text-slate-400 block">
              Based on ~{calculations.hourlyCatches} casts/hour at average value C$ {calculations.avgCatchVal}
            </span>
          </div>

          {/* Quick 100-Cast Simulator Trigger */}
          <button
            onClick={runSimulation}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>Simulate 100 Casts Now</span>
          </button>
        </div>
      </div>

      {/* Virtual 100-Cast Simulation Output Log */}
      {simResults && (
        <div className="p-6 rounded-2xl border border-cyan-800/60 bg-slate-950 space-y-4 animate-in fade-in duration-300">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400" />
              <span>100-Cast Simulation Results</span>
            </h3>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
              Total C$ Won: +C$ {simResults.totalProfit.toLocaleString()}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-800/40 text-center">
              <span className="text-xs text-purple-300 font-semibold">Mythical Fish</span>
              <span className="text-2xl font-black text-purple-200 block">{simResults.mythics}</span>
            </div>
            <div className="p-3 rounded-xl bg-yellow-950/30 border border-yellow-800/40 text-center">
              <span className="text-xs text-yellow-300 font-semibold">Legendary Fish</span>
              <span className="text-2xl font-black text-yellow-200 block">{simResults.legendaries}</span>
            </div>
            <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-center">
              <span className="text-xs text-cyan-300 font-semibold">Rare Fish</span>
              <span className="text-2xl font-black text-cyan-200 block">{simResults.rares}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="text-xs text-slate-400 font-semibold">Common Fish</span>
              <span className="text-2xl font-black text-slate-300 block">{simResults.commons}</span>
            </div>
          </div>

          <div className="space-y-1 pt-2">
            <span className="text-xs font-semibold text-slate-400">Sample Catches from this Session:</span>
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
