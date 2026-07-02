import FeaturedProductsSection from "@/components/home/featured-products-section";
import { defineShowcase, group, show } from "@/lib/showcase/define-showcase";

export const featuredProductsSectionShowcase = defineShowcase({
  slug: "featured-products-section",
  name: "Featured Products Section",
  description:
    "Homepage product grid with section header, view-all link, and featured cards.",
  importPath: "@/components/home/featured-products-section",
  status: "stable",
  metadataDescription:
    "Featured products section with responsive grid and product cards.",
  groups: [
    group("default", "Default", {
      description: "Renders all products from the catalog in a three-column grid.",
      items: [
        show(
          "Product grid",
          <div className="w-full overflow-hidden rounded-xl">
            <FeaturedProductsSection />
          </div>,
          `<FeaturedProductsSection />`,
        ),
      ],
    }),
  ],
  props: [],
  usage: [
    `import FeaturedProductsSection from "@/components/home/featured-products-section";\n\n<FeaturedProductsSection />`,
  ],
});
