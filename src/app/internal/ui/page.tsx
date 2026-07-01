import Link from "next/link";
import { ShowcasePage } from "@/components/showcase/showcase-page";
import {
  getShowcaseRoute,
  showcaseComponents,
} from "@/lib/showcase/registry";
import { cn } from "@/lib/utils";

const statusStyles = {
  stable: "bg-emerald-50 text-emerald-700",
  beta: "bg-amber-50 text-amber-700",
  draft: "bg-slate-100 text-slate-600",
} as const;

export default function UiShowcaseIndexPage() {
  return (
    <ShowcasePage>
    <div className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#101820]/45">
          Design System
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[#101820]">
          Rowers Hub UI Library
        </h1>
        <p className="max-w-2xl text-base leading-7 text-[#101820]/70">
          Browse component documentation with live previews, responsive viewport
          frames, prop references, and copy-ready code snippets for designers and
          engineers.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {showcaseComponents.map((component) => (
          <Link
            key={component.slug}
            href={getShowcaseRoute(component)}
            className="group rounded-2xl border border-[#101820]/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#101820]/20 hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#101820] group-hover:text-[#24343b]">
                {component.name}
              </h2>
              <span
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                  statusStyles[component.status],
                )}
              >
                {component.status}
              </span>
            </div>
            <p className="text-sm leading-6 text-[#101820]/65">{component.description}</p>
            <p className="mt-4 font-mono text-xs text-[#101820]/45">
              {component.importPath}
            </p>
          </Link>
        ))}
      </section>
    </div>
    </ShowcasePage>
  );
}
