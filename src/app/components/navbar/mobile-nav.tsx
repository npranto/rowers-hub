"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavLinkItem, isActive, navSections } from ".";

export function MobileNav() {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const cartActive = isActive(pathname, "/cart");

  return (
    <>
      <div className="ml-auto flex items-center gap-2">
        <Link
          href="/cart"
          onClick={() => setMobileOpen(false)}
          aria-current={cartActive ? "page" : undefined}
          className={[
            "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            cartActive
              ? "bg-foreground text-background"
              : "border border-foreground/15 text-foreground hover:bg-foreground/5",
          ].join(" ")}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="size-4"
          >
            <path
              d="M6 6h15l-1.5 9h-12L6 6Zm0 0L5 3H2"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden sm:inline">Cart</span>
        </Link>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-foreground/15 text-foreground transition-colors hover:bg-foreground/5 lg:hidden"
        >
          {mobileOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-5"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-5"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen ? (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-x-0 bottom-0 top-16 z-40 bg-foreground/20 backdrop-blur-[1px] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      <div
        id="mobile-nav-panel"
        className={[
          "fixed left-0 right-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-foreground/10 bg-background lg:hidden",
          mobileOpen ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl space-y-6 px-4 py-5 sm:px-6">
          {navSections.map((section) => (
            <div key={section.title}>
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-foreground/45">
                {section.title}
              </p>

              <div className="grid gap-1">
                {section.links.map((link) => (
                  <NavLinkItem
                    key={link.href}
                    {...link}
                    pathname={pathname}
                    compact
                    onNavigate={() => setMobileOpen(false)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}