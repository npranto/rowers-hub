import type { ReactNode } from 'react';
import { ShowcaseMobileNav } from './mobile-nav';
import { ShowcaseSidebar } from './sidebar';
import { ShowcaseToc, type TocItem } from './toc';

type ShowcaseShellProps = {
  children: ReactNode;
  toc?: TocItem[];
};

export function ShowcaseShell({ children, toc }: ShowcaseShellProps) {
  return (
    <div className="fixed inset-0 z-[100] flex bg-[#f3efe8]">
      <div className="hidden w-72 shrink-0 lg:block">
        <ShowcaseSidebar />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="border-b border-[#101820]/10 bg-[#fcfaf7]/90 px-4 py-3 backdrop-blur lg:hidden">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-[#101820]">UI Library</p>
            <ShowcaseMobileNav />
          </div>
        </div>

        <div className="flex min-h-0 flex-1">
          <main className="min-w-0 flex-1 overflow-y-auto">
            <div className="mx-auto flex max-w-7xl">
              <div className="min-w-0 flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">{children}</div>
              {toc && toc.length > 0 ? <ShowcaseToc items={toc} /> : null}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
