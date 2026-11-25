'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        (p.specifications.gemstones && p.specifications.gemstones.toLowerCase().includes(q)) ||
        p.specifications.metal.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-deepCharcoal/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-warmIvory rounded-2xl shadow-2xl border border-champagneGold/30 overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="relative flex items-center px-6 py-5 border-b border-champagneGold/20 bg-white">
              <Search className="w-5 h-5 text-champagneGold mr-3 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jewellery, silver, potlis, stones (e.g. Polki, Choker, Diya, Payal)..."
                autoFocus
                className="w-full bg-transparent text-deepCharcoal text-base placeholder-deepCharcoal/40 focus:outline-none font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 hover:bg-warmIvory-200 rounded-full text-deepCharcoal/50 mr-2"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-1.5 text-deepCharcoal/60 hover:text-deepCharcoal hover:bg-warmIvory-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results or Suggestions */}
            <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
              {query.trim() === '' ? (
                <div>
                  <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-deepCharcoal/60 mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-rosePink" />
                    <span>Popular Categories</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/collections?category=${encodeURIComponent(cat.id)}`}
                        onClick={onClose}
                        className="px-3.5 py-2 rounded-full bg-white border border-champagneGold/30 text-xs text-deepCharcoal hover:border-rosePink hover:text-rosePink hover:bg-rosePink/5 transition-colors font-medium"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-champagneGold/20">
                    <div className="text-xs font-sans uppercase tracking-widest text-deepCharcoal/60 mb-3">
                      Featured Collections
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <Link
                        href="/collections?collection=royal-polki-heritage"
                        onClick={onClose}
                        className="p-3 rounded-xl bg-white border border-champagneGold/20 hover:border-champagneGold hover:shadow-sm transition-all text-left flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-sm font-serif font-semibold text-deepCharcoal group-hover:text-rosePink transition-colors">
                            The Royal Polki &amp; Jadau
                          </div>
                          <div className="text-[11px] text-deepCharcoal/50">24K Pure Gold Jadau</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-champagneGold group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        href="/collections?collection=silver-pooja-and-potlis"
                        onClick={onClose}
                        className="p-3 rounded-xl bg-white border border-champagneGold/20 hover:border-champagneGold hover:shadow-sm transition-all text-left flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-sm font-serif font-semibold text-deepCharcoal group-hover:text-rosePink transition-colors">
                            Heirloom Silverware &amp; Potlis
                          </div>
                          <div className="text-[11px] text-deepCharcoal/50">92.5 Silver &amp; Zardozi Batwas</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-champagneGold group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : filteredProducts.length > 0 ? (
                <div>
                  <div className="text-xs font-sans uppercase tracking-widest text-deepCharcoal/60 mb-4">
                    Found {filteredProducts.length} Match{filteredProducts.length > 1 ? 'es' : ''}
                  </div>
                  <div className="space-y-3">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/collections/${product.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-4 p-3 rounded-xl bg-white border border-champagneGold/20 hover:border-rosePink hover:shadow-md transition-all group"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-warmIvory shrink-0 border border-champagneGold/30">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] tracking-wider uppercase font-sans text-rosePink font-semibold">
                            {product.category}
                          </span>
                          <h4 className="text-sm font-serif font-medium text-deepCharcoal truncate group-hover:text-rosePink transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-xs text-champagneGold-700 font-sans italic mt-0.5">
                            Price on Request
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-champagneGold group-hover:translate-x-1 transition-transform shrink-0 mr-2" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-deepCharcoal/60 text-sm">
                    No items found matching &ldquo;{query}&rdquo;.
                  </p>
                  <p className="text-xs text-deepCharcoal/40 mt-1">
                    Try searching for Polki, Choker, Diya, Payal, or Potli.
                  </p>
                </div>
              )}
            </div>

            {/* Footer Note */}
            <div className="px-6 py-3 bg-warmIvory-200/60 border-t border-champagneGold/20 flex items-center justify-between text-xs text-deepCharcoal/60">
              <span>Press ESC to close</span>
              <Link
                href="/collections"
                onClick={onClose}
                className="text-rosePink hover:underline font-medium"
              >
                View Full Showroom Catalogue &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
