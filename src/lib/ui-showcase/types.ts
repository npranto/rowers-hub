import type { ReactNode } from "react";

export type PropDefinition = {
  name: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
  description: string;
};

/** One live preview + matching copy-paste snippet. */
export type ShowcaseExample = {
  title: string;
  description?: string;
  preview: ReactNode;
  code: string;
};

export type ShowcaseGroup = {
  id: string;
  title: string;
  description?: string;
  items: ShowcaseExample[];
};

export type ShowcaseConfig = {
  slug: string;
  name: string;
  description: string;
  importPath: string;
  status: "stable" | "beta" | "draft";
  metadataDescription: string;
  props: PropDefinition[];
  groups: ShowcaseGroup[];
  usage?: string[];
};
