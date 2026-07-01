import type { Product } from '@/types'

export const products: Product[] = [
  {
    id: 'prod_origin',
    slug: 'hydrow-origin',
    name: 'Hydrow Origin',
    subtitle: 'The flagship at-home rowing experience.',
    description: 'A premium rowing machine concept built for immersive, low-impact training at home.',
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
      { label: 'Best for', value: 'Dedicated home gyms' },
      { label: 'Training style', value: 'Rowing, endurance, intervals' },
      { label: 'Setup', value: 'Premium fixed setup' },
    ],
    stripePriceId: 'price_REPLACE_WITH_ORIGIN_PRICE_ID',
    shopifyVariantId: 'gid://shopify/ProductVariant/REPLACE_ORIGIN',
  },
  {
    id: 'prod_wave',
    slug: 'hydrow-wave',
    name: 'Hydrow Wave',
    subtitle: 'Compact rowing for modern homes.',
    description: 'A lighter, space-conscious rowing experience for apartments, condos, and shared spaces.',
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
      { label: 'Best for', value: 'Apartments and smaller rooms' },
      { label: 'Training style', value: 'Low-impact cardio' },
      { label: 'Setup', value: 'Space-saving setup' },
    ],
    stripePriceId: 'price_REPLACE_WITH_WAVE_PRICE_ID',
    shopifyVariantId: 'gid://shopify/ProductVariant/REPLACE_WAVE',
  },
  {
    id: 'prod_arc',
    slug: 'hydrow-arc',
    name: 'Hydrow Arc',
    subtitle: 'Strength, mobility, and recovery companion.',
    description: 'A companion product concept for strength, mobility, and consistency beyond rowing.',
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
      { label: 'Training style', value: 'Mobility, strength, recovery' },
      { label: 'Setup', value: 'Flexible home use' },
    ],
    stripePriceId: 'price_REPLACE_WITH_ARC_PRICE_ID',
    shopifyVariantId: 'gid://shopify/ProductVariant/REPLACE_ARC',
  },
]

export function getProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug)
}

export function getProductSlugs(): string[] {
  return products.map(product => product.slug)
}
