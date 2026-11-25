import type { Metadata } from 'next';
import './globals.css';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileContactBar } from '@/components/layout/MobileContactBar';
import { LuxuryAmbientBackground } from '@/components/common/LuxuryAmbientBackground';

export const metadata: Metadata = {
  title: 'ALANKAR LUXURY — 22K Gold Jewellery, Silver Heirlooms & Ladies Shringar',
  description:
    'Elegance That Lasts Forever. Discover exquisite 22K hallmarked gold jewellery, pure 92.5 sterling silver pooja heirlooms, and bespoke bridal accessories at Alankar Luxury.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  icons: {
    icon: '/images/logo/alankar-logo.png',
    apple: '/images/logo/alankar-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-warmIvory text-deepCharcoal font-sans selection:bg-rosePink selection:text-white relative">
        {/* Global Ambient Royal Jali & Stardust Aura */}
        <LuxuryAmbientBackground />

        {/* Global Announcement Bar */}
        <AnnouncementBar />

        {/* Global Header Navigation with Logo at Top Left */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Mobile Action Bar */}
        <MobileContactBar />
      </body>
    </html>
  );
}
