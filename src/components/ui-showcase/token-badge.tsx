import { cn } from "@/lib/utils";

type TokenBadgeProps = {
  label: string;
  value?: string;
  className?: string;
};

export function TokenBadge({ label, value, className }: TokenBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[#101820]/10 bg-[#f2ede5]/60 px-2.5 py-1 font-mono text-[11px] text-[#101820]/80",
        className,
      )}
    >
      <span className="text-[#101820]/45">{label}</span>
      {value ? <span className="font-semibold text-[#101820]">{value}</span> : null}
    </span>
  );
}
