import BlogPreviewSection from '@/components/home/blog-preview-section';
import { defineShowcase, group, show } from '@/lib/showcase/define-showcase';

export const blogPreviewSectionShowcase = defineShowcase({
  slug: 'blog-preview-section',
  name: 'Blog Preview Section',
  description: 'Homepage blog module with section header, view-all link, and article cards.',
  importPath: '@/components/home/blog-preview-section',
  status: 'stable',
  metadataDescription: 'Blog preview section with card grid inside a bordered container.',
  groups: [
    group('default', 'Default', {
      description: 'Renders all blog posts from the content catalog.',
      items: [
        show(
          'Article grid',
          <div className="w-full overflow-hidden rounded-xl">
            <BlogPreviewSection />
          </div>,
          `<BlogPreviewSection />`,
        ),
      ],
    }),
  ],
  props: [],
  usage: [`import BlogPreviewSection from "@/components/home/blog-preview-section";\n\n<BlogPreviewSection />`],
});
