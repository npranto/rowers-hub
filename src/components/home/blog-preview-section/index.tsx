import Link from 'next/link';
import { blogPosts } from '@/lib/blog';
import BlogPreviewCard from './blog-preview-card';

export default function BlogPreviewSection() {
  return (
    <section className="bg-[#f8f5f0]">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="rounded-[2rem] border border-[#101820]/6 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#101820]/45">From the blog</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Fitness articles for rowing, recovery, and consistency
              </h2>
            </div>
            <Link
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[#101820] underline-offset-4 transition hover:text-[#101820]/70 hover:underline"
              href="/blog">
              View all articles
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3 md:gap-6">
            {blogPosts.map(post => (
              <BlogPreviewCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
