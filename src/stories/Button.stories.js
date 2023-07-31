import { Button } from "../components/Button";

export default {
  title: "Button",
  component: Button,

  parameters: {
    layout: "centered",
  },
};

export const Primary = {
  args: {
    type: "primary",
    label: "Primary",
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    label: "Secondary",
  },
};

export const Tertiary = {
  args: {
    type: "tertiary",
    label: "Teritary",
  },
};

export const Label = {
  args: {
    variant: "label",
    label: "Label",
  },
};

export const Icon = {
  args: {
    variant: "icon",
  },
};

export const IconLabel = {
  args: {
    variant: "icon-label",
    label: "Icon Label",
  },
};
