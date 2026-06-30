"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getShowcaseRoute,
  showcaseComponents,
} from "@/lib/showcase/registry";
import { cn } from "@/lib/utils";

export function ShowcaseSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col border-r border-[#101820]/10 bg-[#fcfaf7]">
      <div className="border-b border-[#101820]/10 px-5 py-5">
        <Link href="/internal/ui" className="group flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-[#101820] text-white shadow-sm transition group-hover:scale-[1.02]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-5"
            >
              <path
                d="M4 7h16M4 12h10M4 17h16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span>
            <span className="block text-sm font-semibold text-[#101820]">
              UI Library
            </span>
            <span className="block text-xs text-[#101820]/50">
              Rowers Hub Design System
            </span>
          </span>
        </Link>
      </div>

      <nav aria-label="UI components" className="flex-1 overflow-y-auto p-4">
        <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#101820]/40">
          Components
        </p>
        <ul className="space-y-1">
          {showcaseComponents.map((component) => {
            const href = getShowcaseRoute(component);
            const active = pathname === href;

            return (
              <li key={component.slug}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition",
                    active
                      ? "bg-white text-[#101820] shadow-sm ring-1 ring-[#101820]/8"
                      : "text-[#101820]/70 hover:bg-white/70 hover:text-[#101820]",
                  )}
                >
                  <span className="font-medium">{component.name}</span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                      component.status === "stable" && "bg-emerald-50 text-emerald-700",
                      component.status === "beta" && "bg-amber-50 text-amber-700",
                      component.status === "draft" && "bg-slate-100 text-slate-600",
                    )}
                  >
                    {component.status}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-[#101820]/10 p-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#101820]/65 transition hover:bg-white hover:text-[#101820]"
        >
          <span aria-hidden="true">←</span>
          Back to app
        </Link>
      </div>
    </aside>
  );
}
