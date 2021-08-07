import { useDarkMode } from 'storybook-dark-mode';
import "../src/theme/globals.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  // options: {
  //   storySort: {
  //     order: ['Foundation', 'Components', '*'],
  //   },
  // },
}

export const decorators = [
  (Story) => (
    <div className={useDarkMode() ? 'dark' : ''}>
      <Story />
    </div>
  ),
];