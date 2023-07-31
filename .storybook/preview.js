/** @type { import('@storybook/react').Preview } */

import "../src/index.css";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      controls: { exclude: ["style"] },
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
