'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Anchor, Gift, ShieldAlert, Compass, Sparkles, BookOpen, ExternalLink, Menu, X, DollarSign } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Calculator', href: '/calculator', icon: Sparkles, badge: 'TOOL' },
    { name: 'Codes', href: '/codes', icon: Gift, badge: 'HOT' },
    { name: 'Rod Tier List', href: '/rod-tier-list', icon: ShieldAlert },
    { name: 'Locations & Map', href: '/locations', icon: Compass },
    { name: 'Fish Values', href: '/fish-values', icon: DollarSign },
    { name: 'Beginner Guide', href: '/beginner-guide', icon: BookOpen }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 shadow-lg shadow-cyan-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-300">
              <Anchor className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                Fisch Wiki
              </span>
              <span className="block text-[10px] uppercase font-semibold text-cyan-400/90 tracking-wider">
                Roblox Database
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60 rounded-lg transition-colors relative group"
                >
                  <Icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[9px] font-extrabold text-amber-950 bg-amber-400 rounded-full animate-pulse">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Play Roblox CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.roblox.com/games/16732694052/FISCH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <span>Play on Roblox</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900 hover:text-cyan-300"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-bold text-amber-950 bg-amber-400 rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href="https://www.roblox.com/games/16732694052/FISCH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 rounded-lg"
            >
              <span>Play Fisch on Roblox</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
