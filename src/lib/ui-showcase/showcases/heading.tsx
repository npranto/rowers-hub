import Heading from "@/components/ui/heading";
import { defineShowcase, group, show } from "@/lib/ui-showcase/define-showcase";

export const headingShowcase = defineShowcase({
  slug: "heading",
  name: "Heading",
  description:
    "Headings establish visual and semantic hierarchy across product pages, articles, and checkout flows.",
  importPath: "@/components/ui/heading",
  status: "stable",
  metadataDescription:
    "Heading component levels, alignment, and typography hierarchy.",
  groups: [
    group("examples", "Examples", {
      description: "Common heading configurations.",
      items: [
        show(
          "Page title",
          <Heading level={1}>Concept2 Model D</Heading>,
          `<Heading level={1}>Concept2 Model D</Heading>`,
        ),
        show(
          "Section header",
          <Heading level={2}>Featured equipment</Heading>,
          `<Heading level={2}>Featured equipment</Heading>`,
        ),
        show(
          "Center aligned",
          <Heading level={2} align="center">
            Shop rowing gear
          </Heading>,
          `<Heading level={2} align="center">Shop rowing gear</Heading>`,
        ),
        show(
          "Balanced text",
          <Heading level={2} balance className="max-w-md">
            Premium rowing machines built for clubs and home gyms
          </Heading>,
          `<Heading level={2} balance className="max-w-md">
  Premium rowing machines built for clubs and home gyms
</Heading>`,
          {
            description: "text-balance distributes line lengths more evenly.",
          },
        ),
      ],
    }),
  ],
  props: [
    {
      name: "level",
      type: "1 | 2 | 3 | 4 | 5 | 6",
      defaultValue: "1",
      description: "Semantic heading level rendered as h1 through h6.",
    },
    {
      name: "align",
      type: '"left" | "center"',
      defaultValue: '"left"',
      description: "Horizontal text alignment.",
    },
    {
      name: "balance",
      type: "boolean",
      defaultValue: "false",
      description:
        "Applies text-balance for more even line lengths in multi-line headings.",
    },
    {
      name: "children",
      type: "ReactNode",
      required: true,
      description: "Heading text or custom content.",
    },
    {
      name: "className",
      type: "string",
      description: "Additional Tailwind classes merged into the root element.",
    },
  ],
});
