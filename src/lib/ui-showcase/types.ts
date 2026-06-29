export type PropDefinition = {
  name: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
  description: string;
};

export type ShowcaseComponent = {
  slug: string;
  name: string;
  description: string;
  importPath: string;
  status: "stable" | "beta" | "draft";
  route?: string;
};
