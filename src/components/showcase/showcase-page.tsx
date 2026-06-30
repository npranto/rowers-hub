import type { ReactNode } from "react";
import { ShowcaseShell } from "@/components/showcase/shell";
import type { TocItem } from "@/components/showcase/toc";

type ShowcasePageProps = {
  children: ReactNode;
  toc?: TocItem[];
};

export function ShowcasePage({ children, toc }: ShowcasePageProps) {
  return <ShowcaseShell toc={toc}>{children}</ShowcaseShell>;
}
