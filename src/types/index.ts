export type ProductSpec = {
  label: string
  value: string
}

export type Product = {
  id: string
  slug: string
  name: string
  subtitle: string
  description: string
  /** Price in USD cents (e.g. 219500 = $2,195). */
  price: number
  /** Optional strike-through price in USD cents. Omit when not on sale. */
  compareAtPrice?: number
  image: string
  imageAlt: string
  features: string[]
  specs: ProductSpec[]
  stripePriceId: string
  shopifyVariantId: string
}

/** Safe to pass to Client Components or serialize in RSC payloads. */
export type PublicProduct = Omit<Product, 'stripePriceId' | 'shopifyVariantId'>

/** CMS-style content blocks. Extend with new `type` variants as needed. */
export type BlogBlock =
  | { type: 'heading'; text: string; level?: 2 | 3 }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'video'; src: string; poster?: string; caption?: string }
  | { type: 'code'; code: string; language?: string }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  /** ISO 8601 date (YYYY-MM-DD). */
  date: string
  readingTime: string
  image: string
  imageAlt: string
  content: BlogBlock[]
}

export type CartLine = {
  slug: string
  quantity: number
}
