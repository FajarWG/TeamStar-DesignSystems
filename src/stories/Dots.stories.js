import { Dots } from "../components/Dots";

export default {
  title: "Dots",
  component: Dots,

  parameters: {
    layout: "centered",
  },
};

export const Online = {
  args: {
    states: "online",
  },
};

export const Offline = {
  args: {
    states: "offline",
  },
};
