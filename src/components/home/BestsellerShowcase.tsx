'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/catalogue/ProductCard';

export const BestsellerShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filterTabs = [
    { label: 'All Bestsellers', value: 'All' },
    { label: 'Gold Necklaces', value: 'Necklaces' },
    { label: 'Earrings', value: 'Earrings' },
    { label: 'Bangles & Kadas', value: 'Bangles & Kadas' },
    { label: 'Bridal Shringar', value: 'Bridal Shringar' },
    { label: 'Pure Silverware', value: 'Silver & Pooja Heirlooms' },
    { label: 'Bridal Potlis', value: 'Luxury Bridal Potlis' },
  ];

  const bestsellers = PRODUCTS.filter((p) => p.bestseller);

  const filteredProducts = activeCategory === 'All'
    ? bestsellers.slice(0, 6)
    : bestsellers.filter((p) => p.category === activeCategory).slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-warmIvory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-rosePink text-xs font-sans uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Patron Favourites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-deepCharcoal tracking-tight">
              Bestselling Showcase
            </h2>
            <div className="w-16 h-0.5 bg-champagneGold my-2" />
            <p className="text-sm sm:text-base text-deepCharcoal/70 max-w-xl font-sans font-light leading-relaxed">
              Beloved creations cherished by brides, families, and connoisseurs. Each piece is crafted in pure 22K hallmarked gold, 925 sterling silver, or artisanal zardozi velvet.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`px-3.5 py-2 rounded-full text-xs font-sans font-medium tracking-wide transition-all ${
                  activeCategory === tab.value
                    ? 'bg-deepCharcoal text-warmIvory shadow-md'
                    : 'bg-white text-deepCharcoal/70 border border-champagneGold/25 hover:border-champagneGold'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/collections"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-rosePink hover:bg-rosePink-600 text-white font-sans text-xs font-semibold tracking-widest uppercase transition-all shadow-pinkGlow hover:shadow-lg hover:scale-105"
          >
            <span>Explore Complete Store Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs text-deepCharcoal/50 mt-3 font-sans">
            *Price on Request. Real-time quotes confirmed directly by our showroom concierge based on daily bullion rates and custom sizing.
          </p>
        </div>
      </div>
    </section>
  );
};
