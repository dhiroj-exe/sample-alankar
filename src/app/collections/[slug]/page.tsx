import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS, getProductBySlug } from '@/data/products';
import { ProductDetailClient } from '@/components/product/ProductDetailClient';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Piece Not Found — ALANKAR LUXURY',
    };
  }

  return {
    title: `${product.name} — ALANKAR LUXURY`,
    description: `${product.tagline}. Handcrafted in ${product.specifications.metal}. Enquire for store viewing and availability.`,
    openGraph: {
      title: `${product.name} | ALANKAR LUXURY`,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 1500,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
