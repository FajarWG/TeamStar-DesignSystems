import { Badges } from "../components/Badges";

export default {
  title: "Badges",
  component: Badges,

  parameters: {
    layout: "centered",
  },
};

export const Primary = {
  args: {
    type: "primary",
    label: "Primary",
    size: "md",
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    label: "Secondary",
    size: "md",
  },
};

export const Success = {
  args: {
    type: "success",
    label: "Success",
    size: "md",
  },
};

export const Danger = {
  args: {
    type: "danger",
    label: "Danger",
    size: "md",
  },
};
