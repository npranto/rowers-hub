"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
};

export function CodeBlock({ code, language = "tsx", className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-[#101820]/10 bg-[#101820] text-[#f2ede5]",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
          {language}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-md px-2.5 py-1 text-xs font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-6 text-[#f2ede5]/90">
        <code>{code}</code>
      </pre>
    </div>
  );
}
