import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { LuxuryEditorialMarquee } from '@/components/home/LuxuryEditorialMarquee';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { ArtisanCraftsmanshipSection } from '@/components/home/ArtisanCraftsmanshipSection';
import { FeaturedCollections } from '@/components/home/FeaturedCollections';
import { BestsellerShowcase } from '@/components/home/BestsellerShowcase';
import { BrandStorySection } from '@/components/home/BrandStorySection';
import { EditorialPromoBanner } from '@/components/home/EditorialPromoBanner';
import { StoreVisitSection } from '@/components/home/StoreVisitSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Cinematic Mughal Arched Editorial Hero with Live Medallion & Concierge */}
      <HeroSection />

      {/* 2. Live Luxury Brand Promises Marquee Ribbon */}
      <LuxuryEditorialMarquee />

      {/* 3. Shop by Category in Perfectly Balanced & Symmetrical 4-Col Grid */}
      <CategoryGrid />

      {/* 4. The Pillars of Alankar Atelier (Interactive Indian Goldsmithing & Silver Craft) */}
      <ArtisanCraftsmanshipSection />

      {/* 5. Featured Collections Suites */}
      <FeaturedCollections />

      {/* 6. Bestselling Jewellery & Ladies Accessories Showcase (Valuation on Request) */}
      <BestsellerShowcase />

      {/* 7. Brand Heritage & Royal Court Story */}
      <BrandStorySection />

      {/* 8. Complete Bridal Trousseau & Ladies Accessories Banner */}
      <EditorialPromoBanner />

      {/* 9. Physical Jewellery Showrooms & Store Visit Section */}
      <StoreVisitSection />
    </div>
  );
}
