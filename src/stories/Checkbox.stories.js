import { Checkbox } from "../components/CheckBox";

export default {
  title: "Checkbox",
  component: Checkbox,

  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    size: "md",
  },
};

export const Checked = {
  args: {
    size: "md",
    checked: true,
  },
};
