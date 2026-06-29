import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingAlign = "left" | "center";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel;
  align?: HeadingAlign;
  balance?: boolean;
};

const levelStyles: Record<HeadingLevel, string> = {
  1: "text-4xl sm:text-5xl",
  2: "text-3xl sm:text-4xl",
  3: "text-2xl sm:text-3xl",
  4: "text-xl sm:text-2xl",
  5: "text-lg sm:text-xl",
  6: "text-base sm:text-lg",
};

const alignStyles: Record<HeadingAlign, string> = {
  left: "text-left",
  center: "text-center",
};

export default function Heading({
  level = 1,
  align = "left",
  balance = false,
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      className={cn(
        "font-semibold tracking-tight text-[#101820]",
        levelStyles[level],
        alignStyles[align],
        balance && "text-balance",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
