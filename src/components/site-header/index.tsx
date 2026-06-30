import Link from "next/link";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export type NavLink = {
  href: string;
  label: string;
  description?: string;
};

export type NavSection = {
  title: string;
  links: NavLink[];
};

export const navSections: NavSection[] = [
  {
    title: "Browse",
    links: [
      { href: "/", label: "Home" },
      { href: "/products", label: "Products" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Examples",
    links: [
      {
        href: "/products/sample-product",
        label: "Product Item",
      },
      {
        href: "/blog/sample-post",
        label: "Blog Post",
      },
    ],
  },
  {
    title: "Checkout",
    links: [
      { href: "/cart", label: "Cart" },
      { href: "/checkout", label: "Checkout" },
      { href: "/checkout-success", label: "Checkout ✅" },
      { href: "/checkout-cancel", label: "Checkout ❌" },
    ],
  },
];

export const primaryLinks = navSections.flatMap((section) => section.links);

export function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.toLowerCase() === href.toLowerCase();
}

export function NavLinkItem({
  href,
  label,
  description,
  pathname,
  onNavigate,
  compact = false,
}: NavLink & {
  pathname: string;
  onNavigate?: () => void;
  compact?: boolean;
}) {
  const active = isActive(pathname, href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={[
        "rounded-lg transition-colors",
        compact
          ? "flex flex-col gap-0.5 px-3 py-2.5"
          : "px-3 py-2 text-sm font-medium",
        active
          ? "bg-foreground/10 text-foreground"
          : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground",
      ].join(" ")}
    >
      <span>{label}</span>

      {description ? (
        <span className="font-mono text-xs text-foreground/45">
          {description}
        </span>
      ) : null}
    </Link>
  );
}


export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-foreground text-background shadow-sm transition-transform group-hover:scale-105">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-5"
            >
              <path
                d="M4 18h16M6 14l3-8h6l3 8M8 10h8"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-tight">
              RowersHub
            </span>
          </span>
        </Link>

        <DesktopNav />
        <MobileNav />
      </nav>
    </header>
  );
}