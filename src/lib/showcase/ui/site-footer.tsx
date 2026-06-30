import SiteFooter from "@/components/site-footer";
import { defineShowcase, group, show } from "@/lib/showcase/define-showcase";

export const siteFooterShowcase = defineShowcase({
  slug: "site-footer",
  name: "Site Footer",
  description:
    "Site-wide footer with branding, primary links, and copyright notice.",
  importPath: "@/components/site-footer",
  status: "stable",
  metadataDescription:
    "Site footer layout with logo, navigation links, and copyright.",
  groups: [
    group("default", "Default", {
      description: "Rendered in the root layout below page content.",
      items: [
        show(
          "Full footer",
          <div className="w-full">
            <SiteFooter />
          </div>,
          `<SiteFooter />`,
        ),
      ],
    }),
  ],
  props: [],
  usage: [
    `import SiteFooter from "@/components/site-footer";\n\n<SiteFooter />`,
  ],
});
