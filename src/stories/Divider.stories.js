import { Divider } from "../components/Divider";

export default {
  title: "Divider",
  component: Divider,

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    variant: "default",
  },
};

export const Left = {
  args: {
    variant: "left",
    label: "Content",
  },
};

export const Middle = {
  args: {
    variant: "middle",
    label: "Content",
  },
};

export const Right = {
  args: {
    variant: "right",
    label: "Content",
  },
};
