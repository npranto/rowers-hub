"use client";

import { usePathname } from "next/navigation";
import { NavLinkItem } from "./nav-link-item";
import { primaryLinks } from "./nav-config";

export function DesktopNav() {
  const pathname = usePathname() ?? "/";

  return (
    <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
      {primaryLinks.map((link) => (
        <NavLinkItem key={link.href} {...link} pathname={pathname} />
      ))}
    </div>
  );
}
