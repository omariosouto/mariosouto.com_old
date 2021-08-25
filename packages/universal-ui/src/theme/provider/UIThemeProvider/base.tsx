import React from 'react';
import { ThemeProvider } from 'styled-components';
import createTheme from '../../createTheme';

interface UIThemeProviderProps {
  children: React.ReactNode;
}
export default function UIThemeProvider({
  children,
}: UIThemeProviderProps): JSX.Element {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
