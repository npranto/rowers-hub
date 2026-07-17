import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'prod_origin',
    slug: 'hydrow-origin',
    name: 'Hydrow Origin',
    subtitle: 'The flagship at-home rowing experience.',
    description:
      'A premium rowing machine concept built for immersive, low-impact training at home.',
    price: 219500,
    compareAtPrice: 249500,
    image: '/products/origin.svg',
    imageAlt: 'Hydrow Origin product placeholder illustration',
    features: [
      'Flagship rowing feel',
      'Immersive training experience',
      'Smooth low-impact cardio',
      'Designed for full-body consistency',
    ],
    specs: [
      { label: 'Dimensions', value: '86"L x 25"W x 47"H' },
      {
        label: 'Stored Dimensions',
        value:
          '25"W x 33"D x 86"H. Upright Storage Kit (sold separately) required for vertical storage',
      },
      { label: 'Weight', value: '145 lbs; 197 lbs boxed' },
      { label: 'Weight Limit', value: 'Holds up to 375 lbs (170 kg)' },
      {
        label: 'Height Limit',
        value:
          'Up to a 36" inseam, which typically accommodates users up to 6\'6"',
      },
      {
        label: 'Frame',
        value:
          'Aluminum and steel frame with flat anthracite polymer body + high-quality polyester webbing for smooth and quiet operation.',
      },
      {
        label: 'Display',
        value:
          '22" PCAP touchscreen with 1920 x 1080 resolution, Full HD screen.',
      },
      {
        label: 'Sounds',
        value:
          'Audio available through speakers or your own headphones. Amplifier x2 channel, 10W, 8 ohms, front-facing speakers for immersive experience.',
      },
      {
        label: 'Connectivity',
        value:
          'Supports Bluetooth and ANT+ connection\nWifi (10mbps recommended): 802.11 a/b/g/n/ac\nEthernet (optional): 100mbps / RJ45',
      },
      {
        label: 'Compatibility',
        value:
          'Sync fitness trackers like Strava, Apple Health, Fitbit, Garmin, and more to follow your heart rate and key progress metrics.',
      },
      {
        label: 'Audio',
        value: 'Pairs with Bluetooth speakers and headphones',
      },
      { label: 'Outlet', value: 'Uses standard 3-prong outlet' },
      {
        label: 'Voltage',
        value:
          'The device can handle a wide range of voltages (100 to 240 volts) and frequencies (50 or 60 hertz).',
      },
      {
        label: 'Power (Max)',
        value: '210W (2A); Power (Avg): 35W (.54A); Power (Idle): 5W (50mA)',
      },
    ],
    stripePriceId: 'price_REPLACE_WITH_ORIGIN_PRICE_ID',
    shopifyVariantId: 'gid://shopify/ProductVariant/REPLACE_ORIGIN',
  },
  {
    id: 'prod_wave',
    slug: 'hydrow-wave',
    name: 'Hydrow Wave',
    subtitle: 'Compact rowing for modern homes.',
    description:
      'A lighter, space-conscious rowing experience for apartments, condos, and shared spaces.',
    price: 169500,
    compareAtPrice: 189500,
    image: '/products/wave.svg',
    imageAlt: 'Hydrow Wave product placeholder illustration',
    features: [
      'Compact footprint',
      'Quiet training sessions',
      'Beginner-friendly workouts',
      'Easy fit for smaller spaces',
    ],
    specs: [
      { label: 'Dimensions', value: '86"L x 25"W x 47"H' },
      {
        label: 'Stored Dimensions',
        value:
          '25"W x 33"D x 86"H. Upright Storage Kit (sold separately) required for vertical storage',
      },
      { label: 'Weight', value: '145 lbs; 197 lbs boxed' },
      { label: 'Weight Limit', value: 'Holds up to 375 lbs (170 kg)' },
      {
        label: 'Height Limit',
        value:
          'Up to a 36" inseam, which typically accommodates users up to 6\'6"',
      },
      {
        label: 'Frame',
        value:
          'Aluminum and steel frame with flat anthracite polymer body + high-quality polyester webbing for smooth and quiet operation.',
      },
      {
        label: 'Display',
        value:
          '22" PCAP touchscreen with 1920 x 1080 resolution, Full HD screen.',
      },
      {
        label: 'Sounds',
        value:
          'Audio available through speakers or your own headphones. Amplifier x2 channel, 10W, 8 ohms, front-facing speakers for immersive experience.',
      },
      {
        label: 'Connectivity',
        value:
          'Supports Bluetooth and ANT+ connection\nWifi (10mbps recommended): 802.11 a/b/g/n/ac\nEthernet (optional): 100mbps / RJ45',
      },
      {
        label: 'Compatibility',
        value:
          'Sync fitness trackers like Strava, Apple Health, Fitbit, Garmin, and more to follow your heart rate and key progress metrics.',
      },
      {
        label: 'Audio',
        value: 'Pairs with Bluetooth speakers and headphones',
      },
      { label: 'Outlet', value: 'Uses standard 3-prong outlet' },
      {
        label: 'Voltage',
        value:
          'The device can handle a wide range of voltages (100 to 240 volts) and frequencies (50 or 60 hertz).',
      },
      {
        label: 'Power (Max)',
        value: '210W (2A); Power (Avg): 35W (.54A); Power (Idle): 5W (50mA)',
      },
    ],
    stripePriceId: 'price_REPLACE_WITH_WAVE_PRICE_ID',
    shopifyVariantId: 'gid://shopify/ProductVariant/REPLACE_WAVE',
  },
  {
    id: 'prod_arc',
    slug: 'hydrow-arc',
    name: 'Hydrow Arc',
    subtitle: 'Strength, mobility, and recovery companion.',
    description:
      'A companion product concept for strength, mobility, and consistency beyond rowing.',
    price: 99500,
    compareAtPrice: 119500,
    image: '/products/arc.svg',
    imageAlt: 'Hydrow Arc product placeholder illustration',
    features: [
      'Strength-focused companion',
      'Recovery-friendly routines',
      'Mobility and stability support',
      'Pairs well with rowing days',
    ],
    specs: [
      { label: 'Best for', value: 'Strength and recovery' },
      {
        label: 'Training style',
        value: 'Mobility, strength, recovery',
      },
      { label: 'Setup', value: 'Flexible home use' },
      { label: 'Weight', value: '12 lbs' },
      {
        label: 'Footprint',
        value: 'Compact enough for living rooms, bedrooms, and shared spaces',
      },
      {
        label: 'Compatibility',
        value:
          'Pairs with Hydrow rowing sessions and common fitness trackers for progress tracking.',
      },
    ],
    stripePriceId: 'price_REPLACE_WITH_ARC_PRICE_ID',
    shopifyVariantId: 'gid://shopify/ProductVariant/REPLACE_ARC',
  },
];

export function getProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductSlugs(): string[] {
  return products.map(product => product.slug);
}
