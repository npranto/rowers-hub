import { getBlogPosts } from '@/lib/blog';
import { formatPostDate } from '@/lib/blogs';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | RowersHub',
  description: 'Blog posts about rowing and the RowersHub brand',
  openGraph: {
    title: 'Blog | RowersHub',
    description: 'Blog posts about rowing and the RowersHub brand',
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
          Blog
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Articles about rowing and our brand.
        </h1>
        <p className="mt-4 text-lg text-black/65">
          Keep up to date with the latest news and insights from the RowersHub
          team.
        </p>
      </header>

      <section
        className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Blog posts">
        {posts.map(post => (
          <article
            key={post.slug}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#101820]/8 bg-white/70 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#101820]/14 hover:bg-white hover:shadow-md">
            <Link
              href={`/blog/${post.slug}`}
              aria-label={`Read ${post.title}`}
              className="block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820] focus-visible:ring-offset-2">
              <div className="relative aspect-3/2 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent opacity-60 transition duration-300 group-hover:opacity-40" />
              </div>
            </Link>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-full bg-[#101820]/6 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#101820]/70">
                  {post.readingTime}
                </span>
                <time
                  dateTime={post.date}
                  className="text-xs font-medium text-[#101820]/45">
                  {formatPostDate(post.date)}
                </time>
              </div>

              <h2 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition hover:text-[#101820]/80 focus:outline-none focus-visible:underline">
                  {post.title}
                </Link>
              </h2>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#101820]/60">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#101820] transition focus:outline-none focus-visible:underline">
                Read article
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
