import { BlogPreviewSection, FeaturedProductsSection, HeroSection } from '@/components/home';

export default function Home() {
  return (
    <div className="divide-y divide-[#101820]/8">
      <HeroSection />
      <FeaturedProductsSection />
      <BlogPreviewSection />
    </div>
  );
}
