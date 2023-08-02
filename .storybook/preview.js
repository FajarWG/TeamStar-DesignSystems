/** @type { import('@storybook/react').Preview } */

import "../src/index.css";
import { themes } from "@storybook/theming";

const preview = {
  parameters: {
    backgrounds: {
      disable: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      controls: { exclude: ["style"] },
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
