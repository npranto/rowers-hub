import Button from "@/components/ui/button";
import { defineShowcase, group, show } from "@/lib/showcase/define-showcase";

function CartIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="size-4"
    >
      <path
        d="M6 6h15l-1.5 9h-12L6 6zm0 0L5 3H2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const buttonShowcase = defineShowcase({
  slug: "button",
  name: "Button",
  description:
    "Buttons trigger actions across checkout, product pages, and navigation.",
  importPath: "@/components/ui/button",
  status: "stable",
  metadataDescription:
    "Button component variants, sizes, states, and usage examples.",
  groups: [
    group("variants", "Variants", {
      description: "Visual styles for action hierarchy.",
      items: [
        show(
          "Primary",
          <Button variant="primary">Shop now</Button>,
          `<Button variant="primary">Shop now</Button>`,
        ),
        show(
          "Secondary",
          <Button variant="secondary">View details</Button>,
          `<Button variant="secondary">View details</Button>`,
        ),
        show(
          "Ghost",
          <Button variant="ghost">Learn more</Button>,
          `<Button variant="ghost">Learn more</Button>`,
        ),
        show(
          "Link",
          <Button variant="link">Read article</Button>,
          `<Button variant="link">Read article</Button>`,
        ),
      ],
    }),
    group("sizes", "Sizes", {
      items: [
        show(
          "Small",
          <Button size="sm">Small</Button>,
          `<Button size="sm">Small</Button>`,
        ),
        show(
          "Medium",
          <Button size="md">Medium</Button>,
          `<Button size="md">Medium</Button>`,
        ),
        show(
          "Large",
          <Button size="lg">Large</Button>,
          `<Button size="lg">Large</Button>`,
        ),
      ],
    }),
    group("states", "States", {
      items: [
        show(
          "Default",
          <Button>Continue</Button>,
          `<Button>Continue</Button>`,
        ),
        show(
          "Disabled",
          <Button disabled>Unavailable</Button>,
          `<Button disabled>Unavailable</Button>`,
          { description: "Use when an action is unavailable." },
        ),
        show(
          "Full width",
          <Button fullWidth>Proceed to checkout</Button>,
          `<Button fullWidth>Proceed to checkout</Button>`,
        ),
      ],
    }),
    group("composition", "Composition", {
      items: [
        show(
          "With icon",
          <Button className="gap-2">
            <CartIcon />
            Add to cart
          </Button>,
          `<Button className="gap-2">
  <CartIcon />
  Add to cart
</Button>`,
        ),
      ],
    }),
  ],
  props: [
    {
      name: "variant",
      type: '"primary" | "secondary" | "ghost" | "link"',
      defaultValue: '"primary"',
      description: "Visual style that communicates action hierarchy.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description: "Controls height, padding, and type scale.",
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: "false",
      description: "Expands the button to fill the width of its container.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Prevents interaction and applies a muted visual state.",
    },
    {
      name: "children",
      type: "ReactNode",
      required: true,
      description: "Button label or custom content.",
    },
    {
      name: "className",
      type: "string",
      description: "Additional Tailwind classes merged into the root element.",
    },
  ],
});
