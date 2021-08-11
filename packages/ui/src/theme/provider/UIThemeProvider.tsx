/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import BrowserThemeProvider from './BrowserThemeProvider';
import { GlobalStyle } from '../GlobalStyle';
import mainTheme from './themes/main';
import { createThemeDefinitions } from './createThemeDefinitions';

interface UIThemeProviderProps {
  children: React.ReactNode;
}
export default function UIThemeProvider({ children }: UIThemeProviderProps) {
  const { theme, cssVariables } = createThemeDefinitions(mainTheme);

  return (
    <BrowserThemeProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle cssVariables={cssVariables} />
        {children}
      </ThemeProvider>
    </BrowserThemeProvider>
  );
}
