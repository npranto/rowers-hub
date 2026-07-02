import BlogPreviewCard from "@/components/home/blog-preview-card";
import { blogPosts } from "@/lib/blog";
import { defineShowcase, group, show } from "@/lib/showcase/define-showcase";

const samplePost = blogPosts[0]!;

export const blogPreviewCardShowcase = defineShowcase({
  slug: "blog-preview-card",
  name: "Blog Preview Card",
  description:
    "Linked article card with reading time, title, excerpt, and call to action.",
  importPath: "@/components/home/blog-preview-card",
  status: "stable",
  metadataDescription:
    "Blog preview card with reading time, title, excerpt, and hover states.",
  groups: [
    group("default", "Default", {
      description: "Single article card used inside the blog preview section.",
      items: [
        show(
          "Article card",
          <div className="w-full max-w-sm">
            <BlogPreviewCard post={samplePost} />
          </div>,
          `<BlogPreviewCard post={post} />`,
        ),
      ],
    }),
  ],
  props: [
    {
      name: "post",
      type: "BlogPost",
      required: true,
      description: "Blog post metadata and excerpt for the card preview.",
    },
  ],
  usage: [
    `import BlogPreviewCard from "@/components/home/blog-preview-card";\n\n<BlogPreviewCard post={post} />`,
  ],
});
