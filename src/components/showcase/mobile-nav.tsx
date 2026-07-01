"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getShowcaseRoute,
  showcaseComponents,
} from "@/lib/showcase/registry";
import { cn } from "@/lib/utils";

export function ShowcaseMobileNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 overflow-x-auto">
      <Link
        href="/internal/ui"
        className={cn(
          "rounded-lg px-2.5 py-1.5 text-xs font-medium",
          pathname === "/internal/ui"
            ? "bg-white text-[#101820] shadow-sm"
            : "text-[#101820]/70",
        )}
      >
        Overview
      </Link>
      {showcaseComponents.map((component) => {
        const href = getShowcaseRoute(component);
        const active = pathname === href;

        return (
          <Link
            key={component.slug}
            href={href}
            className={cn(
              "rounded-lg px-2.5 py-1.5 text-xs font-medium whitespace-nowrap",
              active
                ? "bg-white text-[#101820] shadow-sm"
                : "text-[#101820]/70",
            )}
          >
            {component.name}
          </Link>
        );
      })}
    </nav>
  );
}
