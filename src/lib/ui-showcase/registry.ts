import type { ShowcaseComponent } from "./types";

export const showcaseComponents: ShowcaseComponent[] = [
  {
    slug: "button",
    name: "Button",
    description: "Interactive control for actions, forms, and navigation.",
    importPath: "@/components/ui/button",
    status: "stable",
  },
];

export function getShowcaseComponent(slug: string) {
  return showcaseComponents.find((component) => component.slug === slug);
}
