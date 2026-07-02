import FeaturedProductCard from "@/components/home/featured-product-card";
import { products } from "@/lib/products";
import { defineShowcase, group, show } from "@/lib/showcase/define-showcase";

const sampleProduct = products[0]!;

export const featuredProductCardShowcase = defineShowcase({
  slug: "featured-product-card",
  name: "Featured Product Card",
  description:
    "Product card with image, pricing, add-to-cart action, and detail link.",
  importPath: "@/components/home/featured-product-card",
  status: "stable",
  metadataDescription:
    "Featured product card layout with image, price, and commerce actions.",
  groups: [
    group("default", "Default", {
      description: "Single product card used inside the featured products grid.",
      items: [
        show(
          "With sale price",
          <div className="w-full max-w-sm">
            <FeaturedProductCard product={sampleProduct} />
          </div>,
          `<FeaturedProductCard product={product} />`,
        ),
        show(
          "Without compare-at price",
          <div className="w-full max-w-sm">
            <FeaturedProductCard
              product={{ ...sampleProduct, compareAtPrice: undefined }}
            />
          </div>,
          `<FeaturedProductCard product={product} />`,
          {
            description: "Omit compareAtPrice when the product is not on sale.",
          },
        ),
      ],
    }),
  ],
  props: [
    {
      name: "product",
      type: "Product",
      required: true,
      description: "Product data including image, pricing, and slug for links.",
    },
  ],
  usage: [
    `import FeaturedProductCard from "@/components/home/featured-product-card";\n\n<FeaturedProductCard product={product} />`,
  ],
});
