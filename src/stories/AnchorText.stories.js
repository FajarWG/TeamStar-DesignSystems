import { AnchorText } from "../components/AnchorText";

export default {
  title: "Anchor Text",
  component: AnchorText,

  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    type: "text",
    label: "Anchor Text",
    size: "md",
    disabled: false,
  },
};

export const Icon = {
  args: {
    type: "icon",
    size: "md",
    disabled: false,
  },
};
