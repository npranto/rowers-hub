"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ViewportSize = "mobile" | "tablet" | "desktop";

const viewportConfig: Record<
  ViewportSize,
  { label: string; width: string; icon: string }
> = {
  mobile: { label: "Mobile", width: "375px", icon: "M7 4h10v16H7z" },
  tablet: { label: "Tablet", width: "768px", icon: "M5 5h14v14H5z" },
  desktop: { label: "Desktop", width: "100%", icon: "M3 6h18v10H3z" },
};

type ViewportPreviewProps = {
  children: ReactNode;
  className?: string;
  defaultViewport?: ViewportSize;
  padded?: boolean;
};

export function ViewportPreview({
  children,
  className,
  defaultViewport = "desktop",
  padded = true,
}: ViewportPreviewProps) {
  const [viewport, setViewport] = useState<ViewportSize>(defaultViewport);
  const active = viewportConfig[viewport];

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1 rounded-xl border border-[#101820]/10 bg-[#f8f5f0] p-1">
          {(Object.keys(viewportConfig) as ViewportSize[]).map((size) => {
            const config = viewportConfig[size];
            const selected = viewport === size;

            return (
              <button
                key={size}
                type="button"
                onClick={() => setViewport(size)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition",
                  selected
                    ? "bg-white text-[#101820] shadow-sm"
                    : "text-[#101820]/55 hover:text-[#101820]",
                )}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-3.5"
                  fill="none"
                >
                  <path
                    d={config.icon}
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinejoin="round"
                  />
                </svg>
                {config.label}
              </button>
            );
          })}
        </div>

        <span className="font-mono text-xs text-[#101820]/45">{active.width}</span>
      </div>

      <div className="flex justify-center rounded-2xl border border-[#101820]/10 bg-[linear-gradient(135deg,#f8f5f0_0%,#ffffff_100%)] p-4 sm:p-6">
        <div
          className={cn(
            "w-full transition-all duration-300 ease-out",
            viewport !== "desktop" && "rounded-[28px] border border-[#101820]/12 bg-white shadow-[0_20px_60px_-30px_rgba(16,24,32,0.35)]",
          )}
          style={{
            maxWidth: viewport === "desktop" ? "100%" : active.width,
          }}
        >
          {viewport !== "desktop" ? (
            <div className="flex items-center justify-center border-b border-[#101820]/8 px-4 py-2">
              <div className="h-1 w-16 rounded-full bg-[#101820]/10" />
            </div>
          ) : null}

          <div className={cn(padded && "p-6 sm:p-8")}>{children}</div>
        </div>
      </div>
    </div>
  );
}
