import type { ShowcaseComponent } from "./types";

export const showcaseComponents: ShowcaseComponent[] = [
  {
    slug: "button",
    name: "Button",
    description: "Interactive control for actions, forms, and navigation.",
    importPath: "@/components/ui/button",
    status: "stable",
    route: "/internal/ui/button",
  },
  {
    slug: "heading",
    name: "Heading",
    description: "Typography component for page titles, section headers, and content hierarchy.",
    importPath: "@/components/ui/heading",
    status: "stable",
    route: "/internal/heading",
  },
];

export function getShowcaseRoute(component: ShowcaseComponent) {
  return component.route ?? `/internal/ui/${component.slug}`;
}

export function getShowcaseComponent(slug: string) {
  return showcaseComponents.find((component) => component.slug === slug);
}
