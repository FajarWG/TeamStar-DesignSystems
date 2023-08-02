import { Avatars } from "../components/Avatars";

export default {
  title: "Avatars",
  component: Avatars,

  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    type: "desc",
    size: "md",
    label: "Olivia Rhye",
    desc: "olivia@untitledui.com",
  },
};
