import HeroSection from '@/components/home/hero-section';
import { defineShowcase, group, show } from '@/lib/showcase/define-showcase';

export const heroSectionShowcase = defineShowcase({
  slug: 'hero-section',
  name: 'Hero Section',
  description: 'Homepage hero with headline, CTAs, and a fanned product image gallery.',
  importPath: '@/components/home/hero-section',
  status: 'stable',
  metadataDescription: 'Homepage hero layout with dark background, primary CTAs, and product fan.',
  groups: [
    group('default', 'Default', {
      description: 'Full-width hero used at the top of the homepage.',
      items: [
        show(
          'Homepage hero',
          <div className="w-full overflow-hidden rounded-xl">
            <HeroSection />
          </div>,
          `<HeroSection />`,
        ),
      ],
    }),
  ],
  props: [],
  usage: [`import HeroSection from "@/components/home/hero-section";\n\n<HeroSection />`],
});
