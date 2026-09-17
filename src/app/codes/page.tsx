import type { Metadata } from 'next';
import { Gift, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';

export const metadata: Metadata = {
  alternates: {
    canonical: '/codes',
  },

  title: 'Roblox Fisch Codes (September 2026) — Active Free Cash & EXP Boosts',
  description: 'Full list of working active Roblox Fisch codes. Copy codes for free cash, EXP boosts, and bait crates. Updated daily with new working codes.',
  keywords: ['fisch codes', 'roblox fisch codes', 'active fisch codes', 'fisch codes september 2026', 'codes for fisch']
};

export default function CodesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I redeem codes in Roblox Fisch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Open Roblox Fisch, click the Settings Gear icon at the top of your screen, scroll down to the bottom of the menu, paste your code into the Enter Code box, and hit Enter.',
        },
      },
      {
        '@type': 'Question',
        name: 'What rewards do Fisch codes give?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fisch codes reward players with free Cash, 2x EXP Boost multipliers, Bait Boxes, Bobbers, and rare titles.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why did my Fisch code fail to redeem?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fisch codes expire quickly following update releases. Make sure you enter exact capitalization and check if you already redeemed it.',
        },
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Redeem Codes in Roblox Fisch',
    description: 'Quick step-by-step guide to redeem active codes in Roblox Fisch for free cash and boosts.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Launch Roblox Fisch',
        itemListElement: [{ '@type': 'HowToDirection', text: 'Open Roblox Fisch on PC, Mobile, or Console.' }],
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Open Settings',
        itemListElement: [{ '@type': 'HowToDirection', text: 'Click the Settings Gear Icon at the top of your screen and scroll to the bottom.' }],
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Enter Active Code',
        itemListElement: [{ '@type': 'HowToDirection', text: 'Paste your code into the Enter Code box and press Enter to receive free rewards.' }],
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Header Banner */}
      <div className="space-y-4 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold">
          <Gift className="w-4 h-4 animate-pulse" />
          <span>Active & Tested Daily: August 27, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox <span className="gradient-text-gold">Fisch Codes</span> (September 2026)
        </h1>
        <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
          Redeem the latest active Roblox Fisch codes below to unlock free cash, 2x EXP boosts, and bait boxes. Click any code box to copy it directly!
        </p>
      </div>

      {/* Active Codes Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Active Fisch Codes ({ACTIVE_CODES.length})</span>
          </h2>
          <span className="text-xs text-slate-400">Click &apos;Copy&apos; & paste in game</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVE_CODES.map((item) => (
            <div key={item.code} className="glass-card p-5 rounded-xl flex items-center justify-between gap-4 border-amber-500/20">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-amber-300 font-mono tracking-wider">{item.code}</span>
                  <span className="px-2 py-0.5 text-[9px] font-bold bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30">
                    {item.status}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-300">{item.reward}</p>
                {item.addedDate && <p className="text-[10px] text-slate-500">{item.addedDate}</p>}
              </div>
              <CopyButton textToCopy={item.code} className="px-4 py-2 text-xs font-bold" />
            </div>
          ))}
        </div>
      </section>

      {/* Code Redemption Tutorial */}
      <section className="glass-card p-6 sm:p-8 rounded-2xl space-y-6 border-slate-800">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-cyan-400" />
          <span>How to Redeem Codes in Roblox Fisch</span>
        </h2>
        <ol className="space-y-4 text-xs sm:text-sm text-slate-300 list-decimal list-inside leading-relaxed">
          <li className="pl-2">Launch <strong className="text-white">Roblox Fisch</strong> on PC, Mobile, or Console.</li>
          <li className="pl-2">Look at the top center of your screen and click the <strong className="text-cyan-300">Settings (Gear Icon)</strong>.</li>
          <li className="pl-2">Scroll all the way down to the bottom of the Settings window.</li>
          <li className="pl-2">Locate the text box labeled <strong className="text-amber-300">&quot;Enter Code&quot;</strong>.</li>
          <li className="pl-2">Copy any active code from above, paste it into the box, and press <strong className="text-emerald-300">Enter</strong> to claim your rewards!</li>
        </ol>
      </section>

      {/* Expired Codes Table */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-400 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-400" />
          <span>Expired Fisch Codes</span>
        </h2>
        <div className="glass-card rounded-xl overflow-hidden border-slate-900 opacity-75">
          <table className="w-full text-left text-xs text-slate-400">
            <thead className="bg-slate-900/60 uppercase text-[10px] font-bold">
              <tr>
                <th className="p-3">Code</th>
                <th className="p-3">Reward</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {EXPIRED_CODES.map((item) => (
                <tr key={item.code}>
                  <td className="p-3 font-mono line-through text-slate-500">{item.code}</td>
                  <td className="p-3">{item.reward}</td>
                  <td className="p-3 text-rose-400 font-semibold">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

