type CodePropValue = string | number | boolean | undefined;

export function formatComponentUsage(
  componentName: string,
  props: Record<string, CodePropValue>,
  children?: string,
): string {
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

  if (children === undefined) {
    if (propLines.length === 0) {
      return `<${componentName} />`;
    }
    return `<${componentName}\n${propLines.join("\n")}\n/>`;
  }

  if (propLines.length === 0) {
    return `<${componentName}>${children}</${componentName}>`;
  }

  return `<${componentName}\n${propLines.join("\n")}\n>${children}</${componentName}>`;
}
