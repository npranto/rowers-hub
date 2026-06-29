import type { Metadata } from "next";
import Heading from "@/components/ui/heading";
import { ShowcasePage } from "@/components/ui-showcase/showcase-page";
import { CodeBlock } from "@/components/ui-showcase/code-block";
import { PageHeader } from "@/components/ui-showcase/page-header";
import { PropTable } from "@/components/ui-showcase/prop-table";
import { ShowcaseSection } from "@/components/ui-showcase/showcase-section";
import { TokenBadge } from "@/components/ui-showcase/token-badge";
import { VariantPreview } from "@/components/ui-showcase/variant-preview";
import { formatHeadingUsage } from "@/lib/ui-showcase/code";
import type { PropDefinition } from "@/lib/ui-showcase/types";

export const metadata: Metadata = {
  title: "Heading | UI Library",
  description: "Heading component levels, alignment, and typography hierarchy.",
};

const headingProps: PropDefinition[] = [
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
    description: "Applies text-balance for more even line lengths in multi-line headings.",
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
];

const toc = [
  { id: "overview", label: "Overview" },
  { id: "levels", label: "Levels" },
  { id: "alignment", label: "Alignment" },
  { id: "composition", label: "Composition" },
  { id: "props", label: "Props" },
  { id: "usage", label: "Usage" },
];

const levels = [
  {
    key: 1 as const,
    title: "Level 1",
    description: "Page titles and hero headlines.",
    label: "Rowing machines for every crew",
  },
  {
    key: 2 as const,
    title: "Level 2",
    description: "Major section headers on landing and product pages.",
    label: "Featured equipment",
  },
  {
    key: 3 as const,
    title: "Level 3",
    description: "Subsection titles within cards and content blocks.",
    label: "Concept2 Model D",
  },
  {
    key: 4 as const,
    title: "Level 4",
    description: "Supporting headings in dense layouts.",
    label: "Specifications",
  },
  {
    key: 5 as const,
    title: "Level 5",
    description: "Compact labels above grouped content.",
    label: "Shipping details",
  },
  {
    key: 6 as const,
    title: "Level 6",
    description: "Smallest heading style for metadata and fine-grained hierarchy.",
    label: "Last updated",
  },
];

export default function HeadingShowcasePage() {
  return (
    <ShowcasePage toc={toc}>
      <div className="space-y-12 pb-16">
        <PageHeader
          title="Heading"
          description="Headings establish visual and semantic hierarchy across product pages, articles, and checkout flows. Use level to match document structure and reserve level 1 for a single page title."
          status="stable"
          importPath='"@/components/ui/heading"'
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
          description="Design tokens and defaults used by the Heading component."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#101820]/10 bg-white p-4 shadow-sm">
              <p className="mb-3 text-sm font-medium text-[#101820]">Color</p>
              <div className="flex flex-wrap gap-2">
                <TokenBadge label="ink" value="#101820" />
              </div>
            </div>
            <div className="rounded-2xl border border-[#101820]/10 bg-white p-4 shadow-sm">
              <p className="mb-3 text-sm font-medium text-[#101820]">Weight</p>
              <div className="flex flex-wrap gap-2">
                <TokenBadge label="font" value="semibold" />
              </div>
            </div>
            <div className="rounded-2xl border border-[#101820]/10 bg-white p-4 shadow-sm">
              <p className="mb-3 text-sm font-medium text-[#101820]">Tracking</p>
              <div className="flex flex-wrap gap-2">
                <TokenBadge label="tracking" value="tight" />
              </div>
            </div>
            <div className="rounded-2xl border border-[#101820]/10 bg-white p-4 shadow-sm">
              <p className="mb-3 text-sm font-medium text-[#101820]">Default level</p>
              <div className="flex flex-wrap gap-2">
                <TokenBadge label="level" value="1" />
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <ShowcaseSection
          id="levels"
          title="Levels"
          description="Six levels map to semantic h1–h6 elements with responsive type scales."
        >
          <div className="grid gap-4">
            {levels.map((level) => (
              <VariantPreview
                key={level.key}
                title={level.title}
                description={level.description}
                layout="split"
                preview={<Heading level={level.key}>{level.label}</Heading>}
                code={formatHeadingUsage({ level: level.key }, level.label)}
              />
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#101820]/10 bg-white p-6 shadow-sm">
            <p className="mb-6 text-sm font-medium text-[#101820]">Full hierarchy</p>
            <div className="space-y-4">
              {levels.map((level) => (
                <Heading key={level.key} level={level.key}>
                  {level.title}: {level.label}
                </Heading>
              ))}
            </div>
          </div>
        </ShowcaseSection>

        <ShowcaseSection
          id="alignment"
          title="Alignment"
          description="Center-aligned headings work well in hero sections and empty states."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <VariantPreview
              title="Left aligned"
              description="Default alignment for most page content."
              preview={<Heading level={2}>Shop rowing gear</Heading>}
              code={formatHeadingUsage({ level: 2 }, "Shop rowing gear")}
            />
            <VariantPreview
              title="Center aligned"
              description="Use for hero headlines and centered layouts."
              preview={
                <Heading level={2} align="center">
                  Shop rowing gear
                </Heading>
              }
              code={formatHeadingUsage(
                { level: 2, align: "center" },
                "Shop rowing gear",
              )}
            />
          </div>
        </ShowcaseSection>

        <ShowcaseSection
          id="composition"
          title="Composition"
          description="Combine balance and custom classes for polished multi-line headings."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <VariantPreview
              title="Balanced text"
              description="text-balance distributes line lengths more evenly."
              preview={
                <Heading level={2} balance className="max-w-md">
                  Premium rowing machines built for clubs and home gyms
                </Heading>
              }
              code={formatHeadingUsage(
                { level: 2, balance: true, className: "max-w-md" },
                "Premium rowing machines built for clubs and home gyms",
              )}
            />
            <VariantPreview
              title="With subtitle pattern"
              description="Pair headings with body copy for section intros."
              preview={
                <div className="space-y-2">
                  <Heading level={3}>Indoor rowing</Heading>
                  <p className="text-sm leading-6 text-[#101820]/65">
                    Ergometers, accessories, and maintenance parts for training year-round.
                  </p>
                </div>
              }
              code={`<Heading level={3}>Indoor rowing</Heading>
<p className="text-sm leading-6 text-[#101820]/65">
  Ergometers, accessories, and maintenance parts for training year-round.
</p>`}
            />
          </div>
        </ShowcaseSection>

        <ShowcaseSection
          id="props"
          title="Props"
          description="API reference for the Heading component."
        >
          <PropTable props={headingProps} />
        </ShowcaseSection>

        <ShowcaseSection
          id="usage"
          title="Usage"
          description="Copy these snippets to get started quickly."
        >
          <CodeBlock
            code={`import Heading from "@/components/ui/heading";

export function ProductPageTitle() {
  return (
    <header className="space-y-3">
      <Heading level={1}>Concept2 Model D</Heading>
      <p className="text-base text-[#101820]/70">
        The industry-standard indoor rowing machine.
      </p>
    </header>
  );
}`}
          />

          <CodeBlock
            code={formatHeadingUsage(
              { level: 2, align: "center", balance: true },
              "Find your next ergometer",
            )}
          />
        </ShowcaseSection>
      </div>
    </ShowcasePage>
  );
}
