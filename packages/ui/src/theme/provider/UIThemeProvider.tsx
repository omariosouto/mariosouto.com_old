import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { palleteDevSoutinho } from './palletes/palleteDevSoutinho';
import { createDefinitionTheme } from './createDefinitionTheme';

interface CSSColorPalleteItem {
  path: string;
  value: string;
}
interface CSSColorPallete {
  light: CSSColorPalleteItem[];
  dark: CSSColorPalleteItem[];
}
const GlobalStyle = createGlobalStyle<{ cssVariables: CSSColorPallete }>`
  * {
    box-sizing: border-box;
  }

  :root {
    ${({ cssVariables }) => cssVariables.light
    .map(({ path, value }) => `--${path}: ${value};`)
    .join('')}
  }
  .dark { 
      ${({ cssVariables }) => cssVariables.dark
    .map(({ path, value }) => `--${path}: ${value};`)
    .join('')}
  }
`;

const BrowserThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {
    console.log('Err, wrong!')
  },
});

export const useBrowserTheme = () => React.useContext(BrowserThemeContext);

export default function UIThemeProvider({ children }) {
  const [browserTheme, setBrowserTheme] = React.useState(globalThis.__theme || 'light');
  const { cssVariables, theme } = createDefinitionTheme(palleteDevSoutinho);

  return (
    <BrowserThemeContext.Provider value={{
      theme: browserTheme,
      toggleTheme: () => {
        setBrowserTheme((currentTheme) => {
          const newTheme = currentTheme === 'light' ? 'dark' : 'light';
          globalThis.__setPreferredTheme(newTheme);
          return newTheme;
        });
      }
    }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle cssVariables={cssVariables} />
        {children}
      </ThemeProvider>
    </BrowserThemeContext.Provider>
  );
}
