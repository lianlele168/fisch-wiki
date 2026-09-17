import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};
import Link from 'next/link';
import { Gift, ShieldAlert, Compass, Sparkles, BookOpen, ExternalLink, Flame, CheckCircle2, ArrowRight, Zap, Trophy, HelpCircle } from 'lucide-react';
import { ACTIVE_CODES, RODS_DATA, LOCATIONS_DATA } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';

export default function HomePage() {
  const topRods = RODS_DATA.slice(0, 4);
  const featuredLocations = LOCATIONS_DATA.slice(0, 3);

  const faqs = [
    {
      q: 'How do I redeem active codes in Roblox Fisch?',
      a: 'Open Roblox Fisch, click the Settings gear icon at the top of your screen, scroll to the bottom of the pop-up menu, paste an active code from our list into the "Enter Code" box, and hit Enter!'
    },
    {
      q: 'What is the best fishing rod in Roblox Fisch?',
      a: 'The Supreme Rod ($150,000) and Destiny Rod ($190,000) are considered S+ Tier. Supreme Rod offers +80% Lure Speed and +150% Luck, making it the most balanced end-game rod.'
    },
    {
      q: 'Where is the Desolate Deep located in Fisch?',
      a: 'The Desolate Deep is hidden underwater near Sunstone Island (X: -950, Y: -250, Z: -1800). You MUST purchase Diving Gear ($3,000) at Moosewood before diving, or you will drown in seconds.'
    },
    {
      q: 'How do I change weather and summon rain in Fisch?',
      a: 'You can buy weather totems from hidden islands! For example, the Tempest Totem ($2,000) at Terrapin Island instantly summons a thunderstorm for 15 minutes.'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-inner">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            <span>Updated for September 2026 • 100% Verified Roblox Data</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Roblox <span className="gradient-text-cyan">Fisch Wiki</span> & Codes Database
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Your ultimate community guide for Roblox Fisch. Grab active <strong className="text-cyan-300 font-semibold">Fisch codes</strong>, compare the <strong className="text-cyan-300 font-semibold">fishing rod tier list</strong>, navigate to <strong className="text-cyan-300 font-semibold">Desolate Deep coordinates</strong>, and unlock weather totems.
          </p>

          {/* Quick Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/codes"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-xl shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <Gift className="w-4 h-4" />
              <span>Get Active Codes (5)</span>
            </Link>

            <Link
              href="/rod-tier-list"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:border-cyan-500/50 rounded-xl shadow-md transition-all"
            >
              <Trophy className="w-4 h-4 text-cyan-400" />
              <span>View Rod Tier List</span>
            </Link>

            <a
              href="https://www.roblox.com/games/16732694052/FISCH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/60 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <span>Play on Roblox</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Key Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 max-w-4xl mx-auto">
            <div className="glass-card p-4 rounded-xl text-center">
              <span className="block text-2xl font-extrabold text-cyan-400">500M+</span>
              <span className="text-xs text-slate-400">Total Visits</span>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <span className="block text-2xl font-extrabold text-amber-400">15+</span>
              <span className="text-xs text-slate-400">Unique Rods</span>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <span className="block text-2xl font-extrabold text-emerald-400">100+</span>
              <span className="text-xs text-slate-400">Fish Species</span>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <span className="block text-2xl font-extrabold text-purple-400">10+</span>
              <span className="text-xs text-slate-400">Islands & Trenches</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Explore Fisch Guides & Databases</h2>
          <p className="text-xs sm:text-sm text-slate-400">Everything you need to level up fast, get rich, and catch legendary fish.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Codes */}
          <Link href="/codes" className="glass-card glass-card-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">Roblox Fisch Codes</h3>
                <span className="px-2 py-0.5 text-[10px] font-extrabold bg-amber-400 text-amber-950 rounded-full">HOT</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Copy active codes for free cash, EXP boosts, and bait boxes. Regularly updated for new game milestones.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>View Active Codes</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </Link>

          {/* Card 2: Rod Tier List */}
          <Link href="/rod-tier-list" className="glass-card glass-card-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">Fishing Rod Tier List</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Rankings and stat comparisons for Supreme Rod, Destiny Rod, Magma Rod, and early game economy rods.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
              <span>Check Tier Rankings</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </Link>

          {/* Card 3: Locations */}
          <Link href="/locations" className="glass-card glass-card-hover p-6 rounded-2xl space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">Map & Locations Guide</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Coordinates for Moosewood, Roslit Volcano, Snowcap Peak, and the underwater Desolate Deep trench.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
              <span>Find All Coordinates</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Active Codes Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 sm:p-8 rounded-2xl border-amber-500/20 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl font-bold text-white">Latest Active Fisch Codes</h2>
              </div>
              <p className="text-xs text-slate-400">Click &apos;Copy&apos; to instantly copy code to your clipboard.</p>
            </div>
            <Link
              href="/codes"
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
            >
              <span>View All Expired & Active Codes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ACTIVE_CODES.slice(0, 3).map((item) => (
              <div key={item.code} className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold text-amber-300 font-mono tracking-wide">{item.code}</span>
                    <span className="px-1.5 py-0.5 text-[9px] font-bold bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30">
                      {item.status}
                    </span>
                  </div>
                  <span className="block text-[11px] text-slate-400 mt-1">{item.reward}</span>
                </div>
                <CopyButton textToCopy={item.code} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Rods Teaser Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Top Fishing Rods Overview</h2>
            <p className="text-xs text-slate-400">Quick summary of high-tier rods in Roblox Fisch.</p>
          </div>
          <Link href="/rod-tier-list" className="text-xs font-semibold text-cyan-400 hover:underline">
            Full Tier List →
          </Link>
        </div>

        <div className="glass-card rounded-2xl overflow-x-auto border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/80 text-slate-300 uppercase text-[10px] font-bold tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Tier</th>
                <th className="p-4">Rod Name</th>
                <th className="p-4">Price</th>
                <th className="p-4">Lure Speed</th>
                <th className="p-4">Luck</th>
                <th className="p-4">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {topRods.map((rod) => (
                <tr key={rod.name} className="hover:bg-slate-900/40 transition-colors">
                  <td className="p-4">
                    <span className={`px-2 py-0.5 text-[10px] font-black rounded ${
                      rod.tier === 'S+' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' :
                      rod.tier === 'S' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' :
                      'bg-slate-700/50 text-slate-300'
                    }`}>
                      {rod.tier}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-white">{rod.name}</td>
                  <td className="p-4 font-mono text-amber-300">{rod.price}</td>
                  <td className="p-4 text-emerald-400 font-semibold">{rod.lureSpeed}</td>
                  <td className="p-4 text-cyan-300 font-semibold">{rod.luck}</td>
                  <td className="p-4 text-slate-400 max-w-xs truncate">{rod.recommendedFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SEO Rich Text Section & About */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 sm:p-10 rounded-2xl space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            About Roblox Fisch & Community Wiki
          </h2>
          <p>
            <strong className="text-white">Roblox Fisch</strong> is an open-world fishing RPG developed by Woozy NATE. Players embark on nautical journeys across open oceans, discovering unseen sea monsters, enchanting specialized fishing rods, and upgrading high-speed powerboats.
          </p>
          <p>
            Our community database tracks every vital gameplay mechanic—from finding hidden diving trenches like <strong className="text-cyan-300">Desolate Deep</strong> to calculating optimal rod luck multipliers. Use our guides to maximize your cash per hour and complete your fish encyclopedia.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Fisch Roblox FAQ</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card p-5 rounded-xl space-y-2">
              <h3 className="text-sm font-bold text-cyan-200 flex items-start gap-2">
                <span className="text-cyan-400">Q:</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
