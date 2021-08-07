import { useDarkMode } from 'storybook-dark-mode';
import "../src/theme/globals.css"
import UIThemeProvider from '../src/theme/provider/UIThemeProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  options: {
    storySort: {
      order: ['Foundation', 'Components', '*'],
    },
  },
}

export const decorators = [
  (Story) => (
    <UIThemeProvider>
      <div className={useDarkMode() ? 'dark' : ''}>
        <Story />
      </div>
    </UIThemeProvider>
  ),
];
