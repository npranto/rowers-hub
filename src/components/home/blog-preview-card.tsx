import Link from 'next/link';
import type { BlogPost } from '@/types';

type BlogPreviewCardProps = {
  post: BlogPost;
};

export default function BlogPreviewCard({ post }: BlogPreviewCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-[#101820]/8 bg-[#faf8f5] p-5 transition duration-300 hover:border-[#101820]/14 hover:bg-[#f7f3ec] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820] focus-visible:ring-offset-2 sm:p-6">
      <p className="text-xs font-medium uppercase tracking-wide text-[#101820]/45">{post.readingTime}</p>
      <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight transition group-hover:text-[#101820]/85 sm:text-xl">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[#101820]/60">{post.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#101820]/70 transition group-hover:gap-2 group-hover:text-[#101820]">
        Read article
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
