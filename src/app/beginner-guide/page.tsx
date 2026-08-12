import type { Metadata } from 'next';
import { BookOpen, CheckCircle, ArrowRight, Zap, Target, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roblox Fisch Beginner Guide — Fast Leveling 1 to 50 & Best Bait',
  description: 'Ultimate Roblox Fisch beginner guide. Learn fast leveling routes from level 1 to 50, early cash farming, and best bait selection.',
  keywords: ['fisch beginner guide', 'fisch leveling guide', 'fisch fast exp', 'how to level up in fisch']
};

export default function BeginnerGuidePage() {
  const steps = [
    {
      step: '1',
      title: 'Complete Daily Moosewood Quests',
      desc: 'Talk to the Angler NPC at Moosewood Docks immediately upon spawning. Completing 3 daily fish delivery quests yields $1,500+ and instant Level 5 progression.'
    },
    {
      step: '2',
      title: 'Upgrade to Fast Rod ($750)',
      desc: 'Do not save for expensive rods early on! Buy the Fast Rod ($750) at Moosewood Dock. Its +90% lure speed lets you hook fish twice as fast, doubling your EXP per minute.'
    },
    {
      step: '3',
      title: 'Migrate to Roslit Bay (Level 15)',
      desc: 'Buy a basic wooden boat and sail southwest to Roslit Bay. The ocean fish here yield 3x more EXP and cash per catch than Moosewood starters.'
    },
    {
      step: '4',
      title: 'Unlock Diving Gear & Desolate Deep (Level 40+)',
      desc: 'Once you hit level 40, buy Diving Gear ($3,000) at Moosewood and head to the Desolate Deep trench to catch Abyssal Anglerfish for $4,000+ per fish.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-xs font-semibold">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>Leveling 1 to 50 Roadmap</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox <span className="gradient-text-cyan">Fisch Beginner & Leveling Guide</span>
        </h1>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          New to Roblox Fisch? Follow our step-by-step roadmap to farm cash rapidly, upgrade from Flimsy Rod to Supreme Rod, and reach end-game trenches in minimal time.
        </p>
      </div>

      {/* Step Roadmap */}
      <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white">4-Step Fast EXP Progression</h2>
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.step} className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-start gap-5 border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-extrabold text-xl shrink-0">
                {s.step}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
