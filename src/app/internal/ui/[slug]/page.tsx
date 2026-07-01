import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RenderShowcase } from "@/lib/showcase/render-showcase";
import {
  getAllShowcaseSlugs,
  getShowcaseComponent,
} from "@/lib/showcase/registry";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllShowcaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const showcase = getShowcaseComponent(slug);
  if (!showcase) return {};

  return {
    title: `${showcase.name} | UI Library`,
    description: showcase.metadataDescription,
  };
}

export default async function ComponentShowcasePage({ params }: PageProps) {
  const { slug } = await params;
  const showcase = getShowcaseComponent(slug);
  if (!showcase) notFound();

  return <RenderShowcase config={showcase} />;
}
