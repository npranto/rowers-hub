import type { ReactNode } from "react";
import type { ShowcaseConfig, ShowcaseExample, ShowcaseGroup } from "./types";

type ShowOptions = Omit<ShowcaseExample, "title" | "preview" | "code">;

/**
 * Define a showcase example. Pass the JSX you want rendered and the matching
 * code string shown in the snippet panel.
 *
 * @example
 * show(
 *   "Page title",
 *   <Heading level={1}>Concept2 Model D</Heading>,
 *   `<Heading level={1}>Concept2 Model D</Heading>`,
 * )
 */
export function show(
  title: string,
  preview: ReactNode,
  code: string,
  options?: ShowOptions,
): ShowcaseExample {
  return { title, preview, code, ...options };
}

type GroupOptions = {
  description?: string;
  items: ShowcaseExample[];
};

/** Group related examples into one page section. */
export function group(
  id: string,
  title: string,
  options: GroupOptions,
): ShowcaseGroup {
  return { id, title, ...options };
}

export function defineShowcase<const T extends ShowcaseConfig>(config: T): T {
  return config;
}
