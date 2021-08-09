/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
    ${({ cssVariables }) =>
      cssVariables.light
        .map(({ path, value }) => `--${path}: ${value};`)
        .join('')}
  }
  .dark { 
      ${({ cssVariables }) =>
        cssVariables.dark
          .map(({ path, value }) => `--${path}: ${value};`)
          .join('')}
  }
`;

const BrowserThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {
    console.error('Err, wrong!');
  },
});

export const useBrowserTheme = () => React.useContext(BrowserThemeContext);

interface UIThemeProviderProps {
  children: React.ReactNode;
}
export default function UIThemeProvider({ children }: UIThemeProviderProps) {
  const [browserTheme, setBrowserTheme] = React.useState(
    (globalThis as any).__theme || 'light'
  );
  const { cssVariables, theme } = createDefinitionTheme(palleteDevSoutinho);

  return (
    <BrowserThemeContext.Provider
      value={{
        theme: browserTheme,
        toggleTheme: () => {
          setBrowserTheme((currentTheme: 'light' | 'dark') => {
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            (globalThis as any).__setPreferredTheme(newTheme);
            return newTheme;
          });
        },
      }}
    >
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function() {
            function setTheme(newTheme) {
              console.log('Tematizou!', newTheme)
              window.__theme = newTheme;
              preferredTheme = newTheme;
              document.body.className = newTheme;
            }

            var preferredTheme;
            try {
              preferredTheme = localStorage.getItem('theme');
            } catch (err) { }

            window.__setPreferredTheme = function(newTheme) {
              setTheme(newTheme);
              try {
              localStorage.setItem('theme', newTheme);
              } catch (err) { }
            }

            var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
            darkQuery.addListener(function(e) {
              window.__setPreferredTheme(e.matches ? 'dark' : 'light')
            });

            setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
          })();
          `,
        }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle cssVariables={cssVariables} />
        {children}
      </ThemeProvider>
    </BrowserThemeContext.Provider>
  );
}
