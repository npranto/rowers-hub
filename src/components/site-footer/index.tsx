import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#101820] text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-start">
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
          <span className="text-xs text-white/70">
            Your e-commerce destination for rowing excellence.
          </span>
        </div>
        <nav className="flex flex-row items-center gap-8">
          <Link href="/products" className="hover:text-[#00cfff] transition-colors text-sm font-medium">
            Shop
          </Link>
          <Link href="/about" className="hover:text-[#00cfff] transition-colors text-sm font-medium">
            About
          </Link>
          <Link href="/support" className="hover:text-[#00cfff] transition-colors text-sm font-medium">
            Support
          </Link>
        </nav>
        <div className="flex flex-col items-end md:items-end text-xs text-white/50 space-y-1">
          <span>&copy; {new Date().getFullYear()} Rowers Hub</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}