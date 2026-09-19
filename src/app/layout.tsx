import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://fisch.robloxwikihub.com'),
  title: 'Fisch Wiki — Roblox Fisch Codes, Rod Tier List & Map Locations ',
  description: 'The Roblox Fisch Wiki built on verified data. Get active fisch codes, verified fishing rod stats, real fish prices, and every location on the official map.',
  keywords: [
    'fisch codes',
    'roblox fisch wiki',
    'best rod in fisch',
    'fisch rod tier list',
    'fisch destiny rod',
    'fisch magma rod free',
    'fisch fish prices',
    'fisch locations',
    'fisch values list'
  ],
  authors: [{ name: 'Fisch Wiki Angler Community' }],
  openGraph: {
    title: 'Roblox Fisch Wiki & Codes Database',
    description: 'Active Fisch codes, verified rod stats, real fish prices, and the full location directory for Roblox anglers.',
    type: 'website',
    url: 'https://fisch.robloxwikihub.com',
    siteName: 'Fisch Wiki'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roblox Fisch Wiki & Codes Database',
    description: 'Active Fisch codes, verified rod stats, real fish prices, and the full location directory.'
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: 'K0YFUdYGQH2cucEllkbzoEcKAZoFJ7rGguAERbz2ZGM'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Fisch Wiki',
    url: 'https://fisch.robloxwikihub.com',
    description: 'The Roblox Fisch Wiki built on verified data: active codes, verified rod stats, real fish prices, and the full location directory.'
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-cyan-500 selection:text-slate-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

