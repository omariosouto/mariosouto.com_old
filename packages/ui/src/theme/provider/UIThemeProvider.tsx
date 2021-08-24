import React from 'react';
import { ThemeProvider } from 'styled-components';
import BrowserThemeProvider from './BrowserThemeProvider';
import { GlobalStyle } from '../GlobalStyle';
import mainTheme from './themes/main';
import { createThemeDefinitions } from './createThemeDefinitions';
import GlobalProvider from './GlobalProvider';
export { useBrowserTheme } from './BrowserThemeProvider';

interface UIThemeProviderProps {
  NextJSLinkWrapper?: React.ComponentType;
  children: React.ReactNode;
}
export default function UIThemeProvider({
  NextJSLinkWrapper,
  children,
}: UIThemeProviderProps): JSX.Element {
  const { theme, cssVariables } = createThemeDefinitions(mainTheme);

  return (
    <GlobalProvider NextJSLinkWrapper={NextJSLinkWrapper}>
      <BrowserThemeProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle cssVariables={cssVariables} />
          {children}
        </ThemeProvider>
      </BrowserThemeProvider>
    </GlobalProvider>
  );
}
