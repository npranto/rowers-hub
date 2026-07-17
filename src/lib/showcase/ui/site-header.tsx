import SiteHeader from "@/components/site-header";
import { defineShowcase, group, show } from "@/lib/showcase/define-showcase";

export const siteHeaderShowcase = defineShowcase({
  slug: "site-header",
  name: "Site Header",
  description:
    "Sticky top navigation with logo, primary links, and a responsive mobile menu.",
  importPath: "@/components/site-header",
  status: "stable",
  metadataDescription:
    "Site header layout with desktop navigation, mobile drawer, and active route states.",
  groups: [
    group("default", "Default", {
      description:
        "Rendered in the root layout on every page. Resize the viewport to see the mobile menu.",
      items: [
        show(
          "Full header",
          <div className="w-full">
            <SiteHeader />
          </div>,
          `<SiteHeader />`,
        ),
      ],
    }),
  ],
  props: [],
  usage: [
    `import SiteHeader from "@/components/site-header";\n\n<SiteHeader />`,
  ],
});
