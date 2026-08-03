import categories from "@/configs/categories";
import technologies from "@/configs/technologies";

export type PreviewEntry = {
  name: string;
  component: React.FC,
  code?: string;
};

export type SourceEntry = {
  name: string;
  content: string;
  lang: string;
};

export type UsageEntry = {
  name: string;
  content: string;
  lang: string;
};

export type ComponentsAPIEntry = {
  name: string;
  props: any;
};

export type ComponentConfig = {
  /** General */
  id: string;
  name: string;
  description: string;
  category: (typeof categories)[keyof typeof categories]["id"];
  dependencies: typeof technologies[keyof typeof technologies]["key"][];
  preview: any;
  previews?: PreviewEntry[];
  previewClassName?: string; 

  /** Installation */
  source: SourceEntry[],

  /** Usage */
  usage: UsageEntry[],

  /** Components API */
  componentsAPI: ComponentsAPIEntry[],
};

const defineComponent = (
  config: ComponentConfig
) => ({
  ...config,
});

export default defineComponent;