import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description: string;
  status?: "stable" | "beta" | "draft";
  importPath: string;
  className?: string;
};

const statusStyles = {
  stable: "bg-emerald-50 text-emerald-700 border-emerald-200",
  beta: "bg-amber-50 text-amber-700 border-amber-200",
  draft: "bg-slate-100 text-slate-600 border-slate-200",
} as const;

export function PageHeader({
  title,
  description,
  status = "stable",
  importPath,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("space-y-5", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-[#101820] sm:text-4xl">
          {title}
        </h1>
        <span
          className={cn(
            "rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
            statusStyles[status],
          )}
        >
          {status}
        </span>
      </div>

      <p className="max-w-3xl text-base leading-7 text-[#101820]/70 sm:text-lg">
        {description}
      </p>

      <div className="inline-flex items-center gap-2 rounded-xl border border-[#101820]/10 bg-[#f8f5f0] px-3 py-2 font-mono text-xs text-[#101820]/75">
        <span className="text-[#101820]/45">import</span>
        <span className="text-[#101820]">Button</span>
        <span className="text-[#101820]/45">from</span>
        <span className="text-emerald-700">{importPath}</span>
      </div>
    </header>
  );
}
