import React from 'react';
import { ThemeProvider } from 'styled-components';
import createTheme from '../../createTheme';
import GlobalStyle from '../../web/GlobalStyle';

interface UIThemeProviderProps {
  children: React.ReactNode;
}
export default function UIThemeProvider({
  children,
}: UIThemeProviderProps): JSX.Element {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
