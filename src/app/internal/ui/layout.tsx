import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "UI Library | Rowers Hub",
  description: "Internal design system documentation for Rowers Hub components.",
};

export default function UiShowcaseLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
