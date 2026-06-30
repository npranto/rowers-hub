import { PageHeader } from "@/components/showcase/page-header";
import { CodeBlock } from "@/components/showcase/code-block";
import { PropTable } from "@/components/showcase/prop-table";
import { ShowcasePage } from "@/components/showcase/showcase-page";
import { ShowcaseSection } from "@/components/showcase/showcase-section";
import { VariantPreview } from "@/components/showcase/variant-preview";
import type { ShowcaseConfig } from "./types";

function buildToc(config: ShowcaseConfig) {
  return [
    ...config.groups.map((group) => ({
      id: group.id,
      label: group.title,
    })),
    { id: "props", label: "Props" },
    { id: "usage", label: "Usage" },
  ];
}

function buildUsageSnippets(config: ShowcaseConfig): string[] {
  if (config.usage?.length) return config.usage;

  const first = config.groups[0]?.items[0];
  if (!first) {
    return [
      `import ${config.name} from "${config.importPath}";\n\n<${config.name} />`,
    ];
  }

  return [
    `import ${config.name} from "${config.importPath}";\n\n${first.code}`,
  ];
}

type RenderShowcaseProps = {
  config: ShowcaseConfig;
};

export function RenderShowcase({ config }: RenderShowcaseProps) {
  const toc = buildToc(config);
  const usageSnippets = buildUsageSnippets(config);

  return (
    <ShowcasePage toc={toc}>
      <div className="space-y-12 pb-16">
        <PageHeader
          title={config.name}
          componentName={config.name}
          description={config.description}
          status={config.status}
          importPath={config.importPath}
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

        {config.groups.map((group) => (
          <ShowcaseSection
            key={group.id}
            id={group.id}
            title={group.title}
            description={group.description}
          >
            <div className="flex flex-col gap-8">
              {group.items.map((item) => (
                <VariantPreview
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  preview={item.preview}
                  code={item.code}
                />
              ))}
            </div>
          </ShowcaseSection>
        ))}

        <ShowcaseSection
          id="props"
          title="Props"
          description={`API reference for the ${config.name} component.`}
        >
          <PropTable props={config.props} />
        </ShowcaseSection>

        <ShowcaseSection
          id="usage"
          title="Usage"
          description="Copy these snippets to get started quickly."
        >
          {usageSnippets.map((snippet, index) => (
            <CodeBlock key={index} code={snippet} />
          ))}
        </ShowcaseSection>
      </div>
    </ShowcasePage>
  );
}
