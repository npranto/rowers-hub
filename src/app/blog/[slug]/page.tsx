import { BlogContent } from '@/components/blog/blog-content';
import {
  formatBlogPostDate,
  getBlogPostBySlug,
  getBlogPosts,
} from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => {
  const blogPosts = getBlogPosts();

  if (!Array.isArray(blogPosts)) return [];

  return blogPosts
    .filter(
      post => post && typeof post.slug === 'string' && post.slug.trim() !== '',
    )
    .map(post => ({ slug: post.slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog post not found | RowersHub',
      description: 'Blog post not found',
    };
  }

  return {
    title: `${post.title} | RowersHub`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      url: `https://rowershub.com/blog/${post.slug}`,
      siteName: 'RowersHub',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
    },
  };
};

export default async function BlogItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#101820]/55 transition hover:text-[#101820] focus:outline-none focus-visible:underline">
          <span aria-hidden="true">←</span>
          Back to blog
        </Link>
      </nav>

      <article className="mx-auto max-w-3xl">
        <header>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#101820]/55">
            <time dateTime={post.date}>{formatBlogPostDate(post.date)}</time>
            <span aria-hidden="true" className="text-[#101820]/25">
              ·
            </span>
            <span>{post.readingTime}</span>
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#101820] sm:text-5xl sm:leading-[1.1]">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-[#101820]/65 sm:text-xl">
            {post.excerpt}
          </p>

          <figure className="mt-8 sm:mt-10">
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-[#101820]/5 sm:rounded-[2rem]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 48rem, 100vw"
              />
            </div>
          </figure>
        </header>

        <BlogContent blocks={post.content} />
      </article>
    </div>
  );
}
