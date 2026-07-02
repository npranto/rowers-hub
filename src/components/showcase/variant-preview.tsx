import type { ReactNode } from 'react';
import { CodeBlock } from './code-block';
import { cn } from '@/lib/utils';

type VariantPreviewProps = {
  title: string;
  description?: string;
  preview: ReactNode;
  code: string;
  className?: string;
};

export function VariantPreview({ title, description, preview, code, className }: VariantPreviewProps) {
  return (
    <article className={cn('overflow-hidden rounded-2xl border border-[#101820]/10 bg-white shadow-sm', className)}>
      <div className="border-b border-[#101820]/8 px-5 py-4">
        <h3 className="text-base font-semibold text-[#101820]">{title}</h3>
        {description ? <p className="mt-1 text-sm leading-6 text-[#101820]/65">{description}</p> : null}
      </div>

      <div className="flex flex-col">
        <div className="flex min-h-28 items-center justify-center bg-[linear-gradient(180deg,#fcfaf7_0%,#ffffff_100%)] p-8 sm:min-h-32">
          {preview}
        </div>
        <div className="border-t border-[#101820]/8 p-4 sm:p-5">
          <CodeBlock code={code} />
        </div>
      </div>
    </article>
  );
}
