/**
 * Adding a showcased component:
 * 1. Create the UI component at src/components/ui/{slug}/index.tsx
 * 2. Create a showcase config at src/lib/ui-showcase/showcases/{slug}.tsx
 *    using show() for JSX previews and group() for sections
 * 3. Import it below and add to the showcaseComponents allowlist
 */
import { buttonShowcase } from "./ui/button";
import { headingShowcase } from "./ui/heading";
import { siteFooterShowcase } from "./ui/site-footer";
import { siteHeaderShowcase } from "./ui/site-header";
import type { ShowcaseConfig } from "./types";

export const showcaseComponents: ShowcaseConfig[] = [
  buttonShowcase,
  headingShowcase,
  siteHeaderShowcase,
  siteFooterShowcase,
];

export function getShowcaseRoute(component: Pick<ShowcaseConfig, "slug">) {
  return `/internal/ui/${component.slug}`;
}

export function getShowcaseComponent(slug: string) {
  return showcaseComponents.find((component) => component.slug === slug);
}

export function getAllShowcaseSlugs() {
  return showcaseComponents.map((component) => component.slug);
}
