import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};

export default function Button({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-[#101820] text-white hover:bg-[#24343b] focus:ring-[#101820]",
    secondary:
      "border border-[#101820]/15 bg-white text-[#101820] hover:bg-[#f2ede5] focus:ring-[#101820]",
    ghost:
      "bg-transparent text-[#101820] hover:bg-[#101820]/5 focus:ring-[#101820]",
    link: "bg-transparent text-[#101820] underline-offset-4 hover:underline focus:ring-[#101820]",
  };

  const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "h-9 rounded-md px-2.5 text-xs",
    md: "h-10 rounded-md px-4 text-sm",
    lg: "h-11 rounded-md px-8 text-base",
  };

  return <button className={cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  )} {...props} />;
}
