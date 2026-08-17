import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://fisch-wiki.vercel.app'),
  alternates: {
    canonical: '/',
  },
  title: 'Fisch Wiki — Roblox Fisch Codes, Rod Tier List & Map Locations (August 2026)',
  description: 'The ultimate Roblox Fisch Wiki & Database. Get active fisch codes, fishing rod tier list, desolate deep location coordinates, enchantments, and fish values.',
  keywords: [
    'fisch codes',
    'roblox fisch wiki',
    'best rod in fisch',
    'fisch rod tier list',
    'fisch desolate deep location',
    'fisch secret island location',
    'fisch enchantments tier list',
    'fisch totem locations',
    'fisch values list'
  ],
  authors: [{ name: 'Fisch Wiki Angler Community' }],
  openGraph: {
    title: 'Roblox Fisch Wiki & Codes Database',
    description: 'Active Fisch codes, fishing rod tier list, secret locations, and weather totems for Roblox anglers.',
    type: 'website',
    url: 'https://fisch-wiki.vercel.app',
    siteName: 'Fisch Wiki'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roblox Fisch Wiki & Codes Database',
    description: 'Active Fisch codes, fishing rod tier list, secret locations, and weather totems.'
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
    url: 'https://fisch-wiki.vercel.app',
    description: 'The ultimate Roblox Fisch Wiki & Database for active codes, rod tier lists, and map coordinates.'
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

