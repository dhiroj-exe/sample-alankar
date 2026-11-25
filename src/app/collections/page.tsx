import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { CollectionsCatalogueClient } from '@/components/catalogue/CollectionsCatalogueClient';

export const metadata: Metadata = {
  title: 'Jewellery, Silverware & Ladies Accessories Catalogue — ALANKAR LUXURY',
  description:
    'Explore our handcrafted 22K hallmarked gold chokers, temple jewellery, pure 92.5 sterling silver pooja articles, and luxury bridal potlis. Enquire directly for store viewing.',
};

export default function CollectionsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-warmIvory">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-2 border-champagneGold border-t-rosePink rounded-full animate-spin mx-auto" />
            <p className="font-serif text-deepCharcoal text-lg">
              Opening the Alankar Catalogue...
            </p>
          </div>
        </div>
      }
    >
      <CollectionsCatalogueClient />
    </Suspense>
  );
}
