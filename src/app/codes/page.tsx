import type { Metadata } from 'next';
import { Gift, CheckCircle2, AlertCircle, HelpCircle, Users, Search } from 'lucide-react';
import { ACTIVE_CODES, EXPIRED_CODES } from '@/data/wikiData';
import CopyButton from '@/components/CopyButton';
import AuthorCard from '@/components/AuthorCard';


export const metadata: Metadata = {
  alternates: {
    canonical: '/codes',
  },

  title: `Roblox Fisch Codes — ${ACTIVE_CODES.length} Working Codes + ${EXPIRED_CODES.length} Expired`,
  description:
    `The ${ACTIVE_CODES.length} Roblox Fisch codes that still redeem, with exact rewards and level requirements — plus a ${EXPIRED_CODES.length}-entry archive of dead codes so you never paste an expired string again.`,
  keywords: [
    'fisch codes',
    'roblox fisch codes',
    'active fisch codes',
    'fisch codes ',
    'fisch expired codes',
    'codes for fisch',
    'fisch code not working',
  ],
};

const permanentCodes = ACTIVE_CODES.filter((c) => c.category === 'permanent');
const expiredUpdateCodes = EXPIRED_CODES.filter((c) => c.category === 'update');
const expiredEventCodes = EXPIRED_CODES.filter((c) => c.category === 'event');

const faqs = [
  {
    q: 'How do I redeem codes in Roblox Fisch?',
    a: 'Launch Fisch and wait until your character has fully spawned, then open the Menu button at the top of the screen and choose Settings. Scroll to the bottom of that menu — the code box sits at the very bottom of the "Other" section, labelled Codes. Type or paste one string, press Enter, and the reward is applied to your account immediately.',
  },
  {
    q: 'Why do so many Fisch codes from other websites not work?',
    a: 'Because Fisch is not a normal code game. Most Roblox games leave codes live for months, but Fisch ships a new code with nearly every weekly update and kills it roughly 24 hours later. Documented examples include CREWS (live June 6-7), Sovereign (May 9-10) and LivyatanAndCompanions (May 30-31) — each lasted a single day. So any guide that has not been rewritten since the weekend is listing dead strings. If a code was published more than a few days ago and it is not one of the three long-running codes on this page, assume it is dead.',
  },
  {
    q: 'How many Fisch codes actually work right now?',
    a: `Three. ${ACTIVE_CODES.map((c) => c.code).join(', ')} are long-running codes that have survived repeated weekly updates and carry no published expiry date. Everything else the game has ever released is in the archive below. A page claiming 15 or 18 working Fisch codes is padding its list with weekly strings that died months ago — we deliberately do not chase those, because a code that expires within a day of publication cannot be kept accurate on a page nobody updates hourly.`,
  },
  {
    q: 'Do Fisch codes have level requirements?',
    a: 'Yes, and this catches out a lot of players. Most weekly update codes require Level 25 or higher before they will redeem, several of the older skin codes demanded Level 250 or even Level 401, and one 2026 code, TheDeepAwaitsForYou, required Level 1000. A code that refuses to redeem below its level gate is not expired — it simply will not fire until you level up, and by then it will usually be dead. Grind to Level 25 before the weekend if you want to catch update codes.',
  },
  {
    q: 'Why did my correct Fisch code still fail to redeem?',
    a: 'Four things to check in order. First, spelling and stray spaces: copy the string rather than retyping it, and if you are on mobile turn off autocorrect in the code box, because it will silently change your capitalisation. Second, the code may already have been claimed — most Fisch codes are one redemption per Roblox account. Third, some strings hit a global redemption cap and stop working for everyone, not just you. Fourth, you may be on an old server: leave the game, rejoin Roblox and try again on a fresh server. Finally, do not paste Fisch codes into Fish It! — that is a completely different game with its own codes.',
  },
  {
    q: 'When do new Fisch codes come out?',
    a: 'Almost always at a weekend update, typically around 16:00 UTC on the Saturday. Developer announcements land first in the official Fisch Discord, in the announcements and updates channels, and on the developer account @fischonroblox on X. Because the strings die within about a day, the only workable strategy is to redeem them the same hour they are posted — bookmarking a codes page and coming back midweek is already too late for anything except the three long-running codes.',
  },
];

export default function CodesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',

    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Redeem Codes in Roblox Fisch',
    description:
      'Step-by-step guide to redeem active codes in Roblox Fisch for free cash, boats, rod skins and boosts.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Launch Roblox Fisch',
        itemListElement: [
          { '@type': 'HowToDirection', text: 'Open Roblox Fisch on PC, Mobile, or Console and wait until your character has fully spawned into the world.' },
        ],
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Open Settings and find the Codes box',
        itemListElement: [
          { '@type': 'HowToDirection', text: 'Click the Menu button at the top of the screen, choose Settings, then scroll to the very bottom of the menu. The code box sits at the bottom of the "Other" section.' },
        ],
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Enter the code',
        itemListElement: [
          { '@type': 'HowToDirection', text: 'Copy one code from the list, paste it into the Enter Code box and press Enter. Rewards are applied to your account instantly.' },
        ],
      },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Working Roblox Fisch Codes ',
    numberOfItems: ACTIVE_CODES.length,
    itemListElement: ACTIVE_CODES.map((c, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `Fisch Code: ${c.code}`,
      description: `${c.reward}${c.levelReq ? ` (${c.levelReq})` : ''}`,
    })),
  };

  const renderCodeCard = (item: (typeof ACTIVE_CODES)[number]) => (
    <div
      key={item.code}
      className="glass-card p-5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-amber-500/20"
    >
      <div className="space-y-1.5 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-lg font-black text-amber-300 font-mono tracking-wider">{item.code}</span>
          <span className="px-2 py-0.5 text-[9px] font-bold bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30">
            {item.status}
          </span>
          {item.isNew && (
            <span className="px-2 py-0.5 text-[9px] font-bold bg-rose-500/20 text-rose-300 rounded border border-rose-500/30">
              NEW
            </span>
          )}
          {item.levelReq && (
            <span className="px-2 py-0.5 text-[9px] font-bold bg-cyan-500/15 text-cyan-300 rounded border border-cyan-500/30">
              {item.levelReq}
            </span>
          )}
        </div>
        <p className="text-xs font-medium text-slate-300">{item.reward}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-slate-500">
          {item.addedDate && <span>Added: {item.addedDate}</span>}
          {item.expires && (
            <span className={item.expires === 'No published expiry' ? '' : 'text-amber-500/80'}>
              Expires: {item.expires}
            </span>
          )}
        </div>
      </div>
      <CopyButton textToCopy={item.code} className="px-4 py-2 text-xs font-bold shrink-0" />
    </div>
  );

  const renderArchiveTable = (rows: typeof EXPIRED_CODES) => (
    <div className="glass-card rounded-xl overflow-hidden border-slate-900">
      <table className="w-full text-left text-xs text-slate-400">
        <thead className="bg-slate-900/60 uppercase text-[10px] font-bold">
          <tr>
            <th className="p-3">Code</th>
            <th className="p-3">Reward it used to give</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {rows.map((item) => (
            <tr key={item.code}>
              <td className="p-3 font-mono line-through text-slate-500 whitespace-nowrap align-top">{item.code}</td>
              <td className="p-3 align-top">
                {item.reward}
                {item.levelReq && <span className="text-slate-600"> — required {item.levelReq}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Header Banner */}
      <div className="space-y-4 text-center sm:text-left border-b border-slate-800 pb-8">
        
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Roblox <span className="gradient-text-gold">Fisch Codes</span> 
        </h1>
        <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
          {ACTIVE_CODES.length} Fisch codes currently redeem, and all {permanentCodes.length} of them are permanent codes with no published expiry date. Each entry lists the exact cosmetic it unlocks and any level gate attached. Below that sits an archive of {EXPIRED_CODES.length} dead strings, so you can confirm in one glance whether the code from an old video is worth typing.
        </p>
      </div>

      {/* Why Fisch lists are wrong */}
      <section className="glass-card p-6 sm:p-8 rounded-2xl space-y-4 border-rose-500/30 bg-rose-500/5">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-rose-400" />
          <span>Read this before you trust any Fisch code list (including ours)</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Fisch does not handle codes the way most Roblox games do. The developer ships a fresh code with almost every weekly update and then <strong className="text-white">retires it roughly 24 hours later</strong>. Documented examples: <strong className="text-rose-300">CREWS</strong> was redeemable June 6&ndash;7, <strong className="text-rose-300">Sovereign</strong> May 9&ndash;10, and <strong className="text-rose-300">LivyatanAndCompanions</strong> May 30&ndash;31. Each of those existed for a single day.
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          The largest list we audited advertised 18 &ldquo;working&rdquo; codes &mdash; but 12 of them were weekly drops that died within a day of publication, and its own expired section listed <strong className="text-white">MerryFischmas2</strong> and <strong className="text-white">ALIENS</strong> twice each while still claiming they worked. We would rather tell you there are {ACTIVE_CODES.length} than pad the page with strings we cannot keep accurate.
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          The practical rule: any Fisch code that is not one of the {permanentCodes.length} below is almost certainly dead. Weekly codes are published on a Saturday and retired by Sunday, so by the time a list reaches you they are gone.
        </p>
      </section>

      {/* Long-running codes */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Long-running Fisch codes ({permanentCodes.length}) — safe to redeem any time</span>
          </h2>
        </div>
        <p className="text-xs text-slate-400 -mt-3">
          None of these carry a published expiry date, and all three have survived multiple weekly updates. They grant cosmetics rather than currency, but they are the only Fisch codes you can safely come back for.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {permanentCodes.map(renderCodeCard)}
        </div>
      </section>

      {/* Why we do not list weekly codes */}
      <section className="glass-card p-6 sm:p-8 rounded-2xl space-y-4 border-slate-800">
        <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
          <Gift className="w-5 h-5 text-amber-400" />
          <span>Why this page lists no weekly update codes</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Fisch ships a new code with almost every Saturday update and retires it roughly 24 hours later. A typical weekly drop pays 1,000 C$ plus a boat and a bait bundle, and it is worth having &mdash; but only during that single-day window. We do not republish those strings here, because a page that is edited once a week cannot honestly claim a code is live, and telling you a dead code works is worse than telling you nothing.
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          If you want the weekly drop, take it from the source the same day it appears: the <strong className="text-white">announcements</strong> and <strong className="text-white">updates</strong> channels of the official Fisch Discord, or the developer account <strong className="text-white">@fischonroblox</strong> on X. Codes usually go live around 16:00 UTC on Saturday. Most weekly codes also require <strong className="text-white">Level 25+</strong>, so level past that before the weekend rather than after the code appears.
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Every retired weekly code we have confirmed is preserved in the archive below instead of being deleted, so if you are working through an old video or a Discord scrollback you can check here in seconds.
        </p>
      </section>

      {/* Code Redemption Tutorial */}
      <section className="glass-card p-6 sm:p-8 rounded-2xl space-y-6 border-slate-800">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-cyan-400" />
          <span>How to Redeem Codes in Roblox Fisch</span>
        </h2>
        <ol className="space-y-4 text-xs sm:text-sm text-slate-300 list-decimal list-inside leading-relaxed">
          <li className="pl-2">Launch <strong className="text-white">Roblox Fisch</strong> on PC, Mobile, or Console and wait until your character has fully spawned in.</li>
          <li className="pl-2">Click the <strong className="text-cyan-300">Menu</strong> button at the top of the screen and choose <strong className="text-cyan-300">Settings</strong>.</li>
          <li className="pl-2">Scroll all the way to the bottom of the Settings menu. The code box lives at the bottom of the <strong className="text-cyan-300">Other</strong> section, under the label <span className="font-mono text-amber-300">Codes @woozynate</span>.</li>
          <li className="pl-2">Copy one code from the list above, paste it into the box, and press <strong className="text-emerald-300">Enter</strong>.</li>
          <li className="pl-2">Wait for the on-screen confirmation, then move to the next code. Codes redeem one at a time, not as a batch.</li>
        </ol>
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <p className="text-[11px] text-slate-400 leading-relaxed">
            <strong className="text-slate-200">Mobile tip:</strong> turn off autocorrect before you paste. It is the single most common reason a correctly spelled Fisch code is rejected on phones, because it silently rewrites your capitalisation as you type.
          </p>
        </div>
      </section>

      {/* Free cash without codes */}
      <section className="glass-card p-6 sm:p-8 rounded-2xl space-y-4 border-slate-800">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-amber-400" />
          <span>Free C$ that is not a code (and never expires)</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Fisch hands out cash for simply supporting the game, and these bonuses never expire the way weekly codes do. Join the official Fisch group on Roblox and like the experience — both reward C$ directly to your account, and they are completely separate from the code system. New players also receive a small welcome bonus of roughly 200 C$ on their first join, and quests remain by far the best source of free rods and bobbers.
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          If you are starting fresh, the fastest route is: claim the three long-running codes, join the group, like the game, then spend an hour on quests. That will comfortably out-earn any single weekly code.
        </p>
      </section>

      {/* Expired Codes Archive */}
      <section className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Search className="w-5 h-5 text-rose-400" />
            <span>Expired Fisch codes archive ({EXPIRED_CODES.length} entries)</span>
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Most guides delete dead codes and then rediscover them as &ldquo;new&rdquo; a year later. We keep every retired string we have ever confirmed instead, so when you find a code in an old video or a Discord scrollback you can check here in seconds and see whether it is worth typing. Where the developer never published a payout, we say so rather than inventing one.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wide">
            Retired weekly update codes ({expiredUpdateCodes.length})
          </h3>
          {renderArchiveTable(expiredUpdateCodes)}
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wide">
            Holiday, event, apology and milestone codes ({expiredEventCodes.length})
          </h3>
          {renderArchiveTable(expiredEventCodes)}
        </div>
      </section>

      {/* FAQ */}
      <section className="glass-card p-6 sm:p-8 rounded-2xl space-y-6 border-slate-800">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-cyan-400" />
          <span>Fisch Codes FAQ</span>
        </h2>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-sm font-bold text-white">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1.5">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related pages */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-white">Keep going</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a href="/beginner-guide" className="glass-card p-4 rounded-xl border-slate-800 hover:border-amber-500/40 transition-all">
            <h3 className="text-xs font-bold text-white">Beginner Guide</h3>
            <p className="text-[11px] text-slate-400 mt-1">Level fast, then come back for the weekend codes.</p>
          </a>
          <a href="/rod-tier-list" className="glass-card p-4 rounded-xl border-slate-800 hover:border-amber-500/40 transition-all">
            <h3 className="text-xs font-bold text-white">Rod Tier List</h3>
            <p className="text-[11px] text-slate-400 mt-1">Where to spend the cash your codes just gave you.</p>
          </a>
          <a href="/calculator" className="glass-card p-4 rounded-xl border-slate-800 hover:border-amber-500/40 transition-all">
            <h3 className="text-xs font-bold text-white">Fisch Calculator</h3>
            <p className="text-[11px] text-slate-400 mt-1">Work out your profit per hour before buying a rod.</p>
          </a>
        </div>
      </section>

      <AuthorCard
        authorName="Alex Vance"
        role="Fisch Codes & Mechanics Analyst"
        experience="600+ hours fished since launch"
        patchVersion="Permanent codes re-verified against live redemption"
        editorialNote="Every code on this page is cross-checked against the official Fisch Discord announcements, the developer's X account, and at least two independent guides before it is listed as active — and dead strings are moved to the archive rather than quietly deleted."
      />
    </div>
  );
}
