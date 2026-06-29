export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  /** Price in USD cents (e.g. 219500 = $2,195). */
  price: number;
  /** Optional strike-through price in USD cents. Omit when not on sale. */
  compareAtPrice?: number;
  image: string;
  imageAlt: string;
  features: string[];
  specs: ProductSpec[];
  stripePriceId: string;
  shopifyVariantId: string;
};

/** Safe to pass to Client Components or serialize in RSC payloads. */
export type PublicProduct = Omit<
  Product,
  "stripePriceId" | "shopifyVariantId"
>;

export type BlogSection = {
  heading: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO 8601 date (YYYY-MM-DD). */
  date: string;
  readingTime: string;
  sections: BlogSection[];
};

export type CartLine = {
  slug: string;
  quantity: number;
};
