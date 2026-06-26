"use client";

import { usePathname } from "next/navigation";
import { primaryLinks, NavLinkItem } from ".";

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
