import React from 'react';
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

const NextJSLinkWrapper = React.forwardRef(({ children }) => {
  return children;
})

export const decorators = [
  (Story) => (
    <UIThemeProvider NextJSLinkWrapper={NextJSLinkWrapper}>
      <div className={useDarkMode() ? 'dark' : ''}>
        <Story />
      </div>
    </UIThemeProvider>
  ),
];
