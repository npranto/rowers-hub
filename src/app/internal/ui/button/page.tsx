import type { Metadata } from "next";
import Button from "@/components/ui/button";
import { ShowcasePage } from "@/components/ui-showcase/showcase-page";
import { CodeBlock } from "@/components/ui-showcase/code-block";
import { PageHeader } from "@/components/ui-showcase/page-header";
import { PropTable } from "@/components/ui-showcase/prop-table";
import { ShowcaseSection } from "@/components/ui-showcase/showcase-section";
import { TokenBadge } from "@/components/ui-showcase/token-badge";
import { VariantPreview } from "@/components/ui-showcase/variant-preview";
import { ViewportPreview } from "@/components/ui-showcase/viewport-preview";
import { formatButtonUsage } from "@/lib/ui-showcase/code";
import type { PropDefinition } from "@/lib/ui-showcase/types";

export const metadata: Metadata = {
  title: "Button | UI Library",
  description: "Button component variants, sizes, states, and usage examples.",
};

const buttonProps: PropDefinition[] = [
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
];

const toc = [
  { id: "overview", label: "Overview" },
  { id: "variants", label: "Variants" },
  { id: "sizes", label: "Sizes" },
  { id: "states", label: "States" },
  { id: "layout", label: "Layout" },
  { id: "responsive", label: "Responsive preview" },
  { id: "composition", label: "Composition" },
  { id: "props", label: "Props" },
  { id: "usage", label: "Usage" },
];

const variants = [
  {
    key: "primary",
    title: "Primary",
    description: "Default call-to-action for the highest-priority action on a screen.",
    label: "Shop now",
  },
  {
    key: "secondary",
    title: "Secondary",
    description: "Supporting actions that should remain visible but less prominent.",
    label: "View details",
  },
  {
    key: "ghost",
    title: "Ghost",
    description: "Low-emphasis actions on dense interfaces or inside cards.",
    label: "Learn more",
  },
  {
    key: "link",
    title: "Link",
    description: "Inline text actions that behave like links while keeping button semantics.",
    label: "Read article",
  },
] as const;

const sizes = [
  { key: "sm", label: "Small" },
  { key: "md", label: "Medium" },
  { key: "lg", label: "Large" },
] as const;

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

export default function ButtonShowcasePage() {
  return (
    <ShowcasePage toc={toc}>
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Button"
        description="Buttons trigger actions across checkout, product pages, and navigation. Use variant and size to express hierarchy, and reserve primary for the main action in each view."
        status="stable"
        importPath='"@/components/ui/button"'
      />

      <nav aria-label="Page sections" className="flex flex-wrap gap-2 xl:hidden">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-full border border-[#101820]/10 bg-white px-3 py-1.5 text-xs font-medium text-[#101820]/70"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <ShowcaseSection
        id="overview"
        title="Overview"
        description="Design tokens and defaults used by the Button component."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-[#101820]/10 bg-white p-4 shadow-sm">
            <p className="mb-3 text-sm font-medium text-[#101820]">Brand colors</p>
            <div className="flex flex-wrap gap-2">
              <TokenBadge label="ink" value="#101820" />
              <TokenBadge label="surface" value="#f2ede5" />
            </div>
          </div>
          <div className="rounded-2xl border border-[#101820]/10 bg-white p-4 shadow-sm">
            <p className="mb-3 text-sm font-medium text-[#101820]">Shape</p>
            <div className="flex flex-wrap gap-2">
              <TokenBadge label="radius" value="rounded-md / full" />
            </div>
          </div>
          <div className="rounded-2xl border border-[#101820]/10 bg-white p-4 shadow-sm">
            <p className="mb-3 text-sm font-medium text-[#101820]">Default variant</p>
            <div className="flex flex-wrap gap-2">
              <TokenBadge label="variant" value="primary" />
              <TokenBadge label="size" value="md" />
            </div>
          </div>
          <div className="rounded-2xl border border-[#101820]/10 bg-white p-4 shadow-sm">
            <p className="mb-3 text-sm font-medium text-[#101820]">Focus</p>
            <div className="flex flex-wrap gap-2">
              <TokenBadge label="ring" value="2px offset" />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        id="variants"
        title="Variants"
        description="Four visual treatments map to common action hierarchy patterns."
      >
        <div className="grid gap-4">
          {variants.map((variant) => (
            <VariantPreview
              key={variant.key}
              title={variant.title}
              description={variant.description}
              layout="split"
              preview={
                <Button variant={variant.key}>{variant.label}</Button>
              }
              code={formatButtonUsage(
                { variant: variant.key },
                variant.label,
              )}
            />
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#101820]/10 bg-white p-6 shadow-sm">
          <p className="mb-4 text-sm font-medium text-[#101820]">All variants together</p>
          <div className="flex flex-wrap items-center gap-3">
            {variants.map((variant) => (
              <Button key={variant.key} variant={variant.key}>
                {variant.title}
              </Button>
            ))}
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        id="sizes"
        title="Sizes"
        description="Three sizes support compact toolbars, default forms, and hero CTAs."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {sizes.map((size) => (
            <VariantPreview
              key={size.key}
              title={size.label}
              preview={<Button size={size.key}>{size.label}</Button>}
              code={formatButtonUsage({ size: size.key }, size.label)}
            />
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#101820]/10 bg-white p-6 shadow-sm">
          <p className="mb-4 text-sm font-medium text-[#101820]">Size comparison</p>
          <div className="flex flex-wrap items-end gap-3">
            {sizes.map((size) => (
              <Button key={size.key} size={size.key}>
                {size.label}
              </Button>
            ))}
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        id="states"
        title="States"
        description="Interactive and non-interactive states designers and engineers should account for."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <VariantPreview
            title="Default"
            description="Resting state before interaction."
            preview={<Button>Continue</Button>}
            code={formatButtonUsage({}, "Continue")}
          />
          <VariantPreview
            title="Disabled"
            description="Use when an action is unavailable. Cursor and opacity communicate the state."
            preview={<Button disabled>Unavailable</Button>}
            code={formatButtonUsage({ disabled: true }, "Unavailable")}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {variants.map((variant) => (
            <div
              key={variant.key}
              className="rounded-2xl border border-[#101820]/10 bg-white p-5 shadow-sm"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#101820]/45">
                {variant.title} disabled
              </p>
              <Button variant={variant.key} disabled>
                Disabled
              </Button>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        id="layout"
        title="Layout"
        description="Full-width buttons are useful in mobile checkout flows and stacked form actions."
      >
        <VariantPreview
          title="Full width"
          description="Stretches to the container width — common in mobile layouts and modals."
          layout="split"
          preview={
            <div className="w-full max-w-sm">
              <Button fullWidth>Proceed to checkout</Button>
            </div>
          }
          code={formatButtonUsage({ fullWidth: true }, "Proceed to checkout")}
        />

        <div className="rounded-2xl border border-[#101820]/10 bg-white p-6 shadow-sm">
          <p className="mb-4 text-sm font-medium text-[#101820]">Stacked actions</p>
          <div className="mx-auto flex w-full max-w-sm flex-col gap-3">
            <Button fullWidth>Place order</Button>
            <Button fullWidth variant="secondary">
              Save for later
            </Button>
            <Button fullWidth variant="ghost">
              Continue shopping
            </Button>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        id="responsive"
        title="Responsive preview"
        description="Preview how button groups behave across mobile, tablet, and desktop widths."
      >
        <ViewportPreview defaultViewport="mobile">
          <div className="space-y-6">
            <div>
              <p className="mb-3 text-sm font-medium text-[#101820]">Product card actions</p>
              <div className="rounded-2xl border border-[#101820]/10 bg-[#fcfaf7] p-4">
                <div className="mb-4 aspect-4/3 rounded-xl bg-[#101820]/5" />
                <h3 className="text-base font-semibold text-[#101820]">Concept2 Model D</h3>
                <p className="mt-1 text-sm text-[#101820]/60">Indoor rowing machine</p>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <Button fullWidth className="sm:flex-1">
                    Add to cart
                  </Button>
                  <Button fullWidth variant="secondary" className="sm:flex-1">
                    Details
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-[#101820]">Toolbar row</p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Filter</Button>
                <Button size="sm" variant="secondary">
                  Sort
                </Button>
                <Button size="sm" variant="ghost">
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </ViewportPreview>
      </ShowcaseSection>

      <ShowcaseSection
        id="composition"
        title="Composition"
        description="Buttons accept icons and rich labels through children."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <VariantPreview
            title="With icon"
            description="Place icons beside labels using flex children. Keep labels concise."
            preview={
              <Button className="gap-2">
                <CartIcon />
                Add to cart
              </Button>
            }
            code={`<Button className="gap-2">
  <CartIcon />
  Add to cart
</Button>`}
          />
          <VariantPreview
            title="Variant matrix"
            description="Combine size and variant when building dense interfaces."
            preview={
              <div className="grid w-full max-w-xs gap-2">
                <Button size="sm" variant="primary">
                  Primary sm
                </Button>
                <Button size="sm" variant="secondary">
                  Secondary sm
                </Button>
                <Button size="lg" variant="ghost">
                  Ghost lg
                </Button>
              </div>
            }
            code={`<Button size="sm" variant="primary">Primary sm</Button>
<Button size="sm" variant="secondary">Secondary sm</Button>
<Button size="lg" variant="ghost">Ghost lg</Button>`}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        id="props"
        title="Props"
        description="API reference for the Button component."
      >
        <PropTable props={buttonProps} />
      </ShowcaseSection>

      <ShowcaseSection
        id="usage"
        title="Usage"
        description="Copy these snippets to get started quickly."
      >
        <CodeBlock
          code={`import Button from "@/components/ui/button";

export function ProductActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button>Add to cart</Button>
      <Button variant="secondary">View details</Button>
    </div>
  );
}`}
        />

        <CodeBlock
          code={formatButtonUsage(
            { variant: "primary", size: "lg", fullWidth: true },
            "Shop rowing machines",
          )}
        />
      </ShowcaseSection>
    </div>
    </ShowcasePage>
  );
}
