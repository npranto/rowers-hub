export type NavLink = {
  href: string;
  label: string;
  description?: string;
};

export type NavSection = {
  title: string;
  links: NavLink[];
};

export const navSections: NavSection[] = [
  {
    title: "Browse",
    links: [
      { href: "/", label: "Home" },
      { href: "/products", label: "Products" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Examples",
    links: [
      {
        href: "/products/sample-product",
        label: "Product Item",
      },
      {
        href: "/blog/sample-post",
        label: "Blog Post",
      },
    ],
  },
  {
    title: "Checkout",
    links: [
      { href: "/cart", label: "Cart" },
      { href: "/checkout", label: "Checkout" },
      { href: "/checkout-success", label: "Checkout ✅" },
      { href: "/checkout-cancel", label: "Checkout ❌" },
    ],
  },
];

export const primaryLinks = navSections.flatMap((section) => section.links);

export function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.toLowerCase() === href.toLowerCase();
}
