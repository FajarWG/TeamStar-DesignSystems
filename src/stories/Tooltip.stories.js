import { Tooltip } from "../components/Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,

  parameters: {
    layout: "centered",
  },
};

export const Top = {
  args: {
    label: "Tooltip",
    content: "Tooltip Top",
    direction: "top",
  },
};

export const Right = {
  args: {
    label: "Tooltip",
    content: "Tooltip Right",
    direction: "right",
  },
};

export const Bottom = {
  args: {
    label: "Tooltip",
    content: "Tooltip Bottom",
    direction: "bottom",
  },
};

export const Left = {
  args: {
    label: "Tooltip",
    content: "Tooltip Left",
    direction: "left",
  },
};
