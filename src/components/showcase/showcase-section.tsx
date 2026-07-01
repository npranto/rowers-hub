import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ShowcaseSectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function ShowcaseSection({
  id,
  title,
  description,
  children,
  className,
}: ShowcaseSectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-28 space-y-5", className)}>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight text-[#101820] sm:text-2xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-sm leading-6 text-[#101820]/65 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
