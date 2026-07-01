import Link from "next/link";
import { isActive, type NavLink } from "./nav-config";

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
