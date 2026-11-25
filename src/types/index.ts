export type ProductCategory = 
  | 'Necklaces' 
  | 'Earrings' 
  | 'Bangles & Kadas' 
  | 'Rings' 
  | 'Bridal Shringar' 
  | 'Payals & Anklets'
  | 'Silver & Pooja Heirlooms' 
  | 'Luxury Bridal Potlis';

export interface ProductSpecification {
  metal: string;
  purity: string;
  gemstones?: string;
  grossWeight?: string;
  netWeight?: string;
  dimensions?: string;
  closure?: string;
  craftsmanship: string;
  certification: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  collection: string;
  tagline: string;
  description: string;
  details: string[];
  indicativePrice: number;
  priceNote: string;
  images: string[];
  featured?: boolean;
  bestseller?: boolean;
  isNew?: boolean;
  specifications: ProductSpecification;
  sku: string;
  availability: 'In Store' | 'Made to Order' | 'Artisanal Limited';
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
  count: number;
  highlightText: string;
}

export interface CollectionInfo {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  coverImage: string;
  accentColor: string;
  productCount: number;
}
