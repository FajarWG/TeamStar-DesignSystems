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
    label: "Click Here!",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
