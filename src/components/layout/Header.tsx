'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Menu, X, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { AlankarLogo } from '@/components/common/AlankarLogo';
import { SearchModal } from './SearchModal';
import { AppointmentModal } from '@/components/appointment/AppointmentModal';
import { STORE_INFO, getWhatsAppGeneralUrl } from '@/data/storeInfo';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Collections', href: '/collections' },
  { name: 'About Alankar', href: '/about' },
  { name: 'Stores & Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-warmIvory/95 backdrop-blur-md shadow-sm border-b border-champagneGold/20 py-3'
            : 'bg-warmIvory border-b border-champagneGold/15 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Top Left: Official Alankar Luxury Logo */}
            <div className="flex items-center shrink-0">
              <AlankarLogo size="md" variant="horizontal" />
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-xs uppercase font-sans tracking-widest transition-colors py-1 ${
                      isActive
                        ? 'text-rosePink font-semibold'
                        : 'text-deepCharcoal/80 hover:text-rosePink font-medium'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-rosePink rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center space-x-2.5 sm:space-x-4 shrink-0">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search Catalogue"
                className="p-2 sm:p-2.5 rounded-full text-deepCharcoal/70 hover:text-rosePink hover:bg-rosePink/5 border border-transparent hover:border-champagneGold/30 transition-all"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* WhatsApp Store Quick Link */}
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans text-deepCharcoal/80 hover:text-white bg-white hover:bg-[#25D366] border border-champagneGold/30 hover:border-[#25D366] transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white" />
                <span className="font-medium tracking-wide">WhatsApp</span>
              </a>

              {/* Plan Store Visit CTA */}
              <button
                onClick={() => setIsAppointmentOpen(true)}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rosePink hover:bg-rosePink-600 text-white text-xs font-sans font-semibold tracking-wider uppercase transition-all shadow-pinkGlow hover:shadow-lg hover:scale-[1.02]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Plan Store Visit</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 rounded-full text-deepCharcoal/80 hover:bg-rosePink/5 hover:text-rosePink border border-champagneGold/20 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-deepCharcoal/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-5/6 max-w-sm bg-warmIvory shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-champagneGold/30"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-champagneGold/20">
                  <AlankarLogo size="sm" variant="horizontal" />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full text-deepCharcoal/60 hover:text-deepCharcoal hover:bg-warmIvory-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 space-y-4">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-base font-serif tracking-wider transition-colors py-2 px-3 rounded-lg ${
                          isActive
                            ? 'bg-rosePink/10 text-rosePink font-semibold'
                            : 'text-deepCharcoal hover:bg-white hover:text-rosePink'
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-champagneGold/20 space-y-3">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsSearchOpen(true);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-champagneGold/20 text-sm font-sans text-deepCharcoal hover:border-rosePink"
                  >
                    <Search className="w-4 h-4 text-champagneGold" />
                    <span>Search Catalogue...</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsAppointmentOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-rosePink text-white text-sm font-sans font-semibold tracking-wide shadow-pinkGlow"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Plan Store Visit</span>
                  </button>

                  <a
                    href={getWhatsAppGeneralUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white text-sm font-sans font-medium"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="pt-6 border-t border-champagneGold/20 text-xs text-deepCharcoal/60">
                <div className="flex items-center gap-2 mb-1 text-deepCharcoal font-medium">
                  <MapPin className="w-3.5 h-3.5 text-champagneGold" />
                  <span>Flagship: Banjara Hills, Hyderabad</span>
                </div>
                <p className="text-[11px] text-deepCharcoal/50">
                  ALANKAR LUXURY &bull; 22K Gold &amp; Silver Showroom
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AppointmentModal isOpen={isAppointmentOpen} onClose={() => setIsAppointmentOpen(false)} />
    </>
  );
};
