import type { ReactNode } from "react";
import { ShowcaseShell } from "@/components/ui-showcase/shell";
import type { TocItem } from "@/components/ui-showcase/toc";

type ShowcasePageProps = {
  children: ReactNode;
  toc?: TocItem[];
};

export function ShowcasePage({ children, toc }: ShowcasePageProps) {
  return <ShowcaseShell toc={toc}>{children}</ShowcaseShell>;
}
