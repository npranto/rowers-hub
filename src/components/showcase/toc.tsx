export type TocItem = {
  id: string;
  label: string;
};

type ShowcaseTocProps = {
  items: TocItem[];
};

export function ShowcaseToc({ items }: ShowcaseTocProps) {
  return (
    <aside className="hidden w-52 shrink-0 py-10 pr-6 xl:block">
      <div className="sticky top-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#101820]/40">
          On this page
        </p>
        <ul className="space-y-2 text-sm">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block rounded-md px-2 py-1 text-[#101820]/65 transition hover:bg-white hover:text-[#101820]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
