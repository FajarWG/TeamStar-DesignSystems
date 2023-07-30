import { Button } from "../components/Button";

export default {
  title: "Button",
  component: Button,

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    hierarchy: "primary",
    label: "Button",
  },
};

export const Secondary = {
  args: {
    hierarchy: "secondary",
    label: "Button",
  },
};

export const Tertiary = {
  args: {
    hierarchy: "tertiary",
    label: "Button",
  },
};
