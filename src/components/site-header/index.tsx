import Link from 'next/link';
import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 sm:px-8">
        <Link
          href="/"
          aria-label="Rowers Hub home"
          className="group flex shrink-0 items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-foreground text-background shadow-sm transition-transform group-hover:scale-105">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-5">
              <path
                d="M4 18h16M6 14l3-8h6l3 8M8 10h8"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span
            aria-hidden="true"
            className="hidden flex-col leading-tight sm:flex">
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
