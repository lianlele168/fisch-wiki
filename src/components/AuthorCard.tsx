import React from 'react';

interface AuthorCardProps {
  authorName?: string;
  role?: string;
  experience?: string;
  patchVersion?: string;
  lastUpdated?: string;
  editorialNote?: string;
}

export default function AuthorCard({
  authorName = 'Hlele',
  role = 'Editor',
  experience = 'AI-assisted research, human-reviewed',
  patchVersion = 'Patch v1.48',
  lastUpdated = '',
  editorialNote = 'All drop rates, luck multipliers, and mathematical formulas are compiled with AI-assisted research and cross-checked against multiple community sources; any figure we could not independently confirm is explicitly labeled as unverified.',
}: AuthorCardProps) {
  return (
    <div className="w-full rounded-2xl bg-gray-900/50 border border-white/10 p-4 sm:p-5 backdrop-blur-md my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-white/5">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg shadow-inner">
            {authorName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-white text-sm sm:text-base">{authorName}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Independent editorial
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              {role} • <span className="text-gray-300 font-medium">{experience}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
            ⚡ {patchVersion}
          </span>
          
        </div>
      </div>

      <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed italic">
        "{editorialNote}"
      </p>
      <div className="mt-2 pt-2 border-t border-cyan-900/30 text-right">
        <a href="https://robloxwikihub.com/about#methodology" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-xs underline">Editorial Standards & Methodology →</a>
      </div>
    </div>
  );
}
