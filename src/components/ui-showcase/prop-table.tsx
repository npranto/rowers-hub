import type { PropDefinition } from "@/lib/ui-showcase/types";
import { cn } from "@/lib/utils";

type PropTableProps = {
  props: PropDefinition[];
  className?: string;
};

export function PropTable({ props, className }: PropTableProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-[#101820]/10 bg-white shadow-sm",
        className,
      )}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-[#101820]/8 bg-[#f8f5f0]">
            <tr>
              <th className="px-4 py-3 font-semibold text-[#101820]">Prop</th>
              <th className="px-4 py-3 font-semibold text-[#101820]">Type</th>
              <th className="px-4 py-3 font-semibold text-[#101820]">Default</th>
              <th className="px-4 py-3 font-semibold text-[#101820]">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop) => (
              <tr
                key={prop.name}
                className="border-b border-[#101820]/6 last:border-b-0"
              >
                <td className="px-4 py-3 align-top">
                  <code className="rounded bg-[#101820]/5 px-1.5 py-0.5 font-mono text-xs font-semibold text-[#101820]">
                    {prop.name}
                    {prop.required ? (
                      <span className="ml-1 text-red-600">*</span>
                    ) : null}
                  </code>
                </td>
                <td className="px-4 py-3 align-top">
                  <code className="font-mono text-xs text-[#101820]/70">{prop.type}</code>
                </td>
                <td className="px-4 py-3 align-top">
                  {prop.defaultValue ? (
                    <code className="font-mono text-xs text-[#101820]/70">
                      {prop.defaultValue}
                    </code>
                  ) : (
                    <span className="text-[#101820]/35">—</span>
                  )}
                </td>
                <td className="px-4 py-3 align-top text-[#101820]/75">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
