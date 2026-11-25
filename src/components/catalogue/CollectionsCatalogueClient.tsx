'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
  ChevronDown,
  Sparkles,
  RefreshCw,
  Grid3X3,
  Grid2X2,
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { ProductCard } from '@/components/catalogue/ProductCard';

export const CollectionsCatalogueClient: React.FC = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialCollection = searchParams.get('collection') || 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedCollection, setSelectedCollection] = useState<string>(initialCollection);
  const [selectedMaterial, setSelectedMaterial] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [gridCols, setGridCols] = useState<3 | 2>(3);

  // Sync when query params change
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
    const col = searchParams.get('collection');
    if (col) setSelectedCollection(col);
  }, [searchParams]);

  // Filtering logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          (p.specifications.gemstones && p.specifications.gemstones.toLowerCase().includes(q)) ||
          p.specifications.metal.toLowerCase().includes(q)
      );
    }

    // Category
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Collection
    if (selectedCollection !== 'All') {
      const colNormalized = selectedCollection.toLowerCase().replace(/[-_]/g, ' ');
      result = result.filter((p) =>
        p.collection.toLowerCase().includes(colNormalized)
      );
    }

    // Material
    if (selectedMaterial !== 'All') {
      result = result.filter((p) =>
        p.specifications.metal.toLowerCase().includes(selectedMaterial.toLowerCase()) ||
        p.specifications.purity.toLowerCase().includes(selectedMaterial.toLowerCase())
      );
    }

    // Sorting
    if (sortBy === 'a-z') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'z-a') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'bestseller') {
      result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedCollection, selectedMaterial, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedCollection('All');
    setSelectedMaterial('All');
    setSortBy('featured');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'All' ||
    selectedCollection !== 'All' ||
    selectedMaterial !== 'All' ||
    sortBy !== 'featured';

  return (
    <div className="bg-warmIvory min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-rosePink text-xs font-sans uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Alankar Luxury Jewellery, Silver &amp; Ladies Catalogue</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-deepCharcoal tracking-tight">
            The Haute Catalogue
          </h1>
          <div className="w-20 h-0.5 bg-champagneGold mx-auto my-2" />
          <p className="text-sm sm:text-base text-deepCharcoal/70 font-sans font-light leading-relaxed">
            Explore 22K hallmarked gold jewellery, pure 92.5 sterling silver pooja heirlooms, royal bridal shringar, and handcrafted zardozi potlis. Enquire directly on WhatsApp for prices and store viewing.
          </p>
        </div>

        {/* Search & Top Action Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-champagneGold/20 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-champagneGold absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by jewellery, silver, potli, stone (e.g. Polki, Choker, Diya, Payal)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-full border border-champagneGold/30 text-xs sm:text-sm text-deepCharcoal placeholder-deepCharcoal/40 focus:outline-none focus:border-rosePink bg-warmIvory/30"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-deepCharcoal/40 hover:text-deepCharcoal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right Controls: Sort & Mobile Filter Toggle */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            {/* Sort Select */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans text-deepCharcoal/60 uppercase tracking-wider hidden sm:inline">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3.5 py-2 rounded-full border border-champagneGold/30 text-xs font-sans text-deepCharcoal bg-white focus:outline-none focus:border-rosePink cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="bestseller">Bestsellers First</option>
                <option value="a-z">Alphabetical (A &rarr; Z)</option>
                <option value="z-a">Alphabetical (Z &rarr; A)</option>
              </select>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deepCharcoal text-warmIvory text-xs font-sans font-medium"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-champagneGold" />
              <span>Filters {hasActiveFilters && '•'}</span>
            </button>

            {/* Grid Layout Switcher (Desktop) */}
            <div className="hidden lg:flex items-center gap-1 border-l border-champagneGold/20 pl-3">
              <button
                onClick={() => setGridCols(3)}
                className={`p-1.5 rounded-md ${
                  gridCols === 3 ? 'text-rosePink bg-rosePink/10' : 'text-deepCharcoal/40'
                }`}
                title="3 Columns"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridCols(2)}
                className={`p-1.5 rounded-md ${
                  gridCols === 2 ? 'text-rosePink bg-rosePink/10' : 'text-deepCharcoal/40'
                }`}
                title="2 Columns"
              >
                <Grid2X2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Layout: Filters Sidebar + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-champagneGold/20 shadow-sm space-y-6 sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-champagneGold/15">
                <div className="flex items-center gap-2 text-deepCharcoal font-serif font-semibold text-lg">
                  <Filter className="w-4 h-4 text-rosePink" />
                  <span>Refine Catalogue</span>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-[11px] font-sans text-rosePink hover:underline flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Reset
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div>
                <h4 className="text-xs uppercase font-sans tracking-widest text-deepCharcoal/60 font-semibold mb-3">
                  Categories
                </h4>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-sans transition-all flex items-center justify-between ${
                      selectedCategory === 'All'
                        ? 'bg-rosePink/10 text-rosePink font-semibold'
                        : 'text-deepCharcoal/70 hover:bg-warmIvory'
                    }`}
                  >
                    <span>All Showroom Pieces</span>
                    <span className="text-[10px] text-deepCharcoal/40">{PRODUCTS.length}</span>
                  </button>

                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-sans transition-all flex items-center justify-between ${
                        selectedCategory === cat.id
                          ? 'bg-rosePink/10 text-rosePink font-semibold'
                          : 'text-deepCharcoal/70 hover:bg-warmIvory'
                      }`}
                    >
                      <span className="truncate pr-2">{cat.name}</span>
                      <span className="text-[10px] text-deepCharcoal/40 shrink-0">
                        {PRODUCTS.filter((p) => p.category === cat.id).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="pt-4 border-t border-champagneGold/15">
                <h4 className="text-xs uppercase font-sans tracking-widest text-deepCharcoal/60 font-semibold mb-3">
                  Material &amp; Metal
                </h4>
                <div className="space-y-1.5">
                  {['All', '22K', 'Jadau', 'Silver', 'Velvet'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-sans transition-all ${
                        selectedMaterial === mat
                          ? 'text-rosePink font-semibold bg-rosePink/5'
                          : 'text-deepCharcoal/70 hover:text-deepCharcoal'
                      }`}
                    >
                      {mat === 'All'
                        ? 'All Materials'
                        : mat === '22K'
                        ? '22K Hallmarked Gold'
                        : mat === 'Jadau'
                        ? '24K Jadau Pure Gold Foil'
                        : mat === 'Silver'
                        ? '92.5 Pure Sterling Silver'
                        : 'Handcrafted Velvet & Zardozi'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Valuation Notice */}
              <div className="p-4 rounded-xl bg-champagneGold-50 border border-champagneGold/30 text-[11px] text-champagneGold-900 leading-relaxed font-sans">
                <strong className="block text-champagneGold-900 font-semibold mb-0.5">
                  Boutique Pricing Notice
                </strong>
                Prices are provided upon request. Our showroom concierge provides exact quotes based on current bullion market rates and your personalized measurements.
              </div>
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Active Filters Display Bar */}
            <div className="flex items-center justify-between text-xs font-sans text-deepCharcoal/60">
              <div>
                Showing <strong className="text-deepCharcoal">{filteredProducts.length}</strong>{' '}
                curated pieces
                {selectedCategory !== 'All' && (
                  <span className="ml-1.5 px-2.5 py-0.5 rounded-full bg-rosePink/10 text-rosePink font-medium">
                    {selectedCategory}
                  </span>
                )}
              </div>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-rosePink hover:underline text-xs font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Results Grid */}
            {filteredProducts.length > 0 ? (
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                  gridCols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
                } gap-6`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="p-16 text-center bg-white rounded-3xl border border-champagneGold/20 space-y-4">
                <div className="w-16 h-16 rounded-full bg-warmIvory text-champagneGold flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-deepCharcoal">
                  No items found
                </h3>
                <p className="text-sm text-deepCharcoal/60 max-w-md mx-auto">
                  We could not find any items matching your criteria. Try searching for Gold, Choker, Diya, Payal, or Potli.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-full bg-rosePink text-white text-xs font-sans font-semibold tracking-wider uppercase hover:bg-rosePink-600 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-deepCharcoal/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 max-h-[85vh] bg-warmIvory rounded-t-3xl shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-t border-champagneGold/30"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-champagneGold/20">
                  <div className="flex items-center gap-2 text-deepCharcoal font-serif font-semibold text-xl">
                    <SlidersHorizontal className="w-5 h-5 text-rosePink" />
                    <span>Filter Catalogue</span>
                  </div>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-1.5 rounded-full text-deepCharcoal/60 hover:bg-warmIvory-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Categories */}
                <div className="py-4">
                  <h4 className="text-xs uppercase font-sans tracking-widest text-deepCharcoal/60 font-semibold mb-3">
                    Category
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCategory('All')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-sans ${
                        selectedCategory === 'All'
                          ? 'bg-deepCharcoal text-white'
                          : 'bg-white border border-champagneGold/30 text-deepCharcoal'
                      }`}
                    >
                      All
                    </button>
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-sans ${
                          selectedCategory === cat.id
                            ? 'bg-rosePink text-white'
                            : 'bg-white border border-champagneGold/30 text-deepCharcoal'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div className="py-4 border-t border-champagneGold/20">
                  <h4 className="text-xs uppercase font-sans tracking-widest text-deepCharcoal/60 font-semibold mb-3">
                    Material &amp; Metal
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['All', '22K', 'Jadau', 'Silver', 'Velvet'].map((mat) => (
                      <button
                        key={mat}
                        onClick={() => setSelectedMaterial(mat)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-sans ${
                          selectedMaterial === mat
                            ? 'bg-champagneGold-600 text-white'
                            : 'bg-white border border-champagneGold/30 text-deepCharcoal'
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-champagneGold/20 flex gap-3">
                <button
                  onClick={resetFilters}
                  className="flex-1 py-3 rounded-full border border-deepCharcoal/20 text-xs font-sans text-deepCharcoal"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="flex-2 py-3 px-6 rounded-full bg-rosePink text-white text-xs font-sans font-semibold tracking-wider uppercase shadow-pinkGlow"
                >
                  Apply Filters ({filteredProducts.length})
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
