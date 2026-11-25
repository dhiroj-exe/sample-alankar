export const STORE_INFO = {
  brandName: 'ALANKAR LUXURY',
  tagline: 'Elegance That Lasts Forever',
  whatsappNumber: '+919876543210',
  whatsappDisplay: '+91 98765 43210 (Demo Store Concierge)',
  isDemoNumber: true,
  email: 'store@alankarluxury.com',
  phone: '+91 (0) 40 2345 6789',
  flagshipStore: {
    name: 'Alankar Luxury Flagship Jewellery Store',
    address: 'Plot No. 42, Road No. 10, Banjara Hills',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500034',
    country: 'India',
    landmark: 'Opposite Luxury Boulevard Park',
  },
  regionalStore: {
    name: 'Alankar Luxury Heritage Jewellery Showroom',
    address: 'Heritage Manor, 14 Rampart Row, Kala Ghoda, Fort',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    country: 'India',
    landmark: 'Near Prince of Wales Museum',
  },
  openingHours: [
    { days: 'Monday – Saturday', hours: '10:30 AM – 8:00 PM IST' },
    { days: 'Sunday', hours: '11:30 AM – 6:30 PM IST (Store Open / Appointments Preferred)' },
  ],
  services: [
    'Private Jewellery & Trousseau Viewing Room',
    'Custom 22K Gold & Jadau Bespoke Commissioning',
    'Bridal Shringar & Complete Head-to-Toe Styling',
    'Pure 92.5 Sterling Silver Pooja & Giftware Counter',
    'Luxury Handcrafted Bridal Potlis & Batwas',
    'Complimentary Ultrasonic Gold Cleaning & Inspection',
    'Certified 916 Hallmark & Silver Purity Testing',
  ],
};

export function getWhatsAppProductUrl(productName: string, sku?: string): string {
  const cleanNumber = STORE_INFO.whatsappNumber.replace(/[^0-9]/g, '');
  const codeText = sku ? ` (Ref: ${sku})` : '';
  const message = `Hello Alankar Luxury, I'm interested in ${productName}${codeText}. Could you please share more details, price and availability at your store?`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppGeneralUrl(): string {
  const cleanNumber = STORE_INFO.whatsappNumber.replace(/[^0-9]/g, '');
  const message = `Hello Alankar Luxury, I would like to enquire about your jewellery collections, silver articles and bridal accessories, and plan a visit to your store.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppAppointmentUrl(details: { name: string; date: string; category: string }): string {
  const cleanNumber = STORE_INFO.whatsappNumber.replace(/[^0-9]/g, '');
  const message = `Hello Alankar Luxury, I would like to book a visit to your jewellery store.
Name: ${details.name}
Preferred Date: ${details.date}
Interested in: ${details.category}
Please let me know available slots. Thank you!`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
