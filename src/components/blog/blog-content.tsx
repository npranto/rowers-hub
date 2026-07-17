import type { BlogBlock } from '@/types';
import Image from 'next/image';

type BlogContentProps = {
  blocks: BlogBlock[];
};

export function BlogContent({ blocks }: BlogContentProps) {
  return (
    <div className="mt-10 space-y-6 text-base leading-8 text-[#101820]/75 sm:mt-12 sm:text-lg sm:leading-8">
      {blocks.map((block, index) => (
        <BlogBlockRenderer key={`${block.type}-${index}`} block={block} />
      ))}
    </div>
  );
}

function BlogBlockRenderer({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'heading': {
      const Tag = block.level === 3 ? 'h3' : 'h2';
      return (
        <Tag
          className={
            block.level === 3
              ? 'pt-4 text-xl font-semibold tracking-tight text-[#101820] first:pt-0 sm:text-2xl'
              : 'pt-6 text-2xl font-semibold tracking-tight text-[#101820] first:pt-0 sm:text-3xl'
          }>
          {block.text}
        </Tag>
      );
    }
    case 'paragraph':
      return <p>{block.text}</p>;
    case 'image':
      return (
        <figure className="my-2">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#101820]/5">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 42rem, 100vw"
            />
          </div>
          {block.caption ? (
            <figcaption className="mt-3 text-sm leading-6 text-[#101820]/50">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    case 'video':
      return (
        <figure className="my-2">
          <video
            className="aspect-video w-full rounded-2xl bg-[#101820]/5"
            src={block.src}
            poster={block.poster}
            controls
            preload="metadata"
            aria-label={block.caption ?? 'Video'}
          />
          {block.caption ? (
            <figcaption className="mt-3 text-sm leading-6 text-[#101820]/50">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    case 'code':
      return (
        <pre
          className="overflow-x-auto rounded-2xl border border-[#101820]/10 bg-[#101820] p-5 font-mono text-[13px] leading-6 text-[#f2ede5]/90 sm:p-6"
          tabIndex={0}>
          {block.language ? (
            <span className="mb-3 block text-[11px] uppercase tracking-[0.18em] text-white/45">
              {block.language}
            </span>
          ) : null}
          <code className={block.language ? `language-${block.language}` : undefined}>
            {block.code}
          </code>
        </pre>
      );
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}
