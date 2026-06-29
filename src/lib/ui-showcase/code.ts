type CodePropValue = string | number | boolean | undefined;

export function formatButtonUsage(
  props: Record<string, CodePropValue>,
  children = "Button",
) {
  const propLines = Object.entries(props)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => {
      if (typeof value === "boolean") {
        return value ? `  ${key}` : `  ${key}={false}`;
      }
      if (typeof value === "string") {
        return `  ${key}="${value}"`;
      }
      return `  ${key}={${value}}`;
    });

  if (propLines.length === 0) {
    return `<Button>${children}</Button>`;
  }

  return `<Button\n${propLines.join("\n")}\n>${children}</Button>`;
}
