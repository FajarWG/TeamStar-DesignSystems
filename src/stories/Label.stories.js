import { Label } from "../components/Label";

export default {
  title: "Label",
  component: Label,

  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    type: "default",
    text: "Label",
  },
};

export const Required = {
  args: {
    type: "required",
    text: "Label",
  },
};

export const Info = {
  args: {
    type: "info",
    text: "Label",
  },
};

export const Change = {
  args: {
    type: "change",
    text: "Label",
  },
};
