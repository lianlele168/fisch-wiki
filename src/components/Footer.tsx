import Link from 'next/link';
import { Anchor, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Brand & About */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
              <Anchor className="w-4 h-4 text-slate-950" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">Fisch Wiki & Database</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-400 max-w-md">
            The fan-made Roblox Fisch guide built on verified data. Find active codes, verified fishing rod stats, real fish prices, and every location on the official map.
          </p>
          <p className="text-[11px] text-slate-500">
            Disclaimer: Fisch Wiki is an independent community wiki created for educational and entertainment purposes. We are not affiliated with or endorsed by Roblox Corporation or Woozy NATE.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">Guides & Wikis</h3>
          <ul className="space-y-2 text-xs">
            <li><Link href="/codes" className="hover:text-cyan-400 transition-colors">Roblox Fisch Codes</Link></li>
            <li><Link href="/rod-tier-list" className="hover:text-cyan-400 transition-colors">Fishing Rod Tier List</Link></li>
            <li><Link href="/locations" className="hover:text-cyan-400 transition-colors">Locations Guide</Link></li>
            <li><Link href="/fish-values" className="hover:text-cyan-400 transition-colors">Fish Prices & Values</Link></li>
            <li><Link href="/beginner-guide" className="hover:text-cyan-400 transition-colors">Beginner Fast EXP Guide</Link></li>
          </ul>
        </div>

        {/* Official Links */}
        <div>
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">Official Links</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="https://www.roblox.com/games/16732694052/FISCH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <span>Play Fisch on Roblox</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/fisch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <span>Official Fisch Discord</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
        <p>© {new Date().getFullYear()} Fisch Wiki. All rights reserved.</p>
        <p className="flex items-center gap-1">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          <span>for Roblox Anglers</span>
        </p>
      </div>
    </footer>
  );
}

