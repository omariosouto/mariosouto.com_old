import React from 'react';

const contextInitialValues = {
  theme: 'light',
  toggleTheme: () => {
    console.error('Err, wrong!');
  },
};
export const BrowserThemeContext = React.createContext(contextInitialValues);

export const useBrowserTheme = (): typeof contextInitialValues =>
  React.useContext(BrowserThemeContext);

interface BrowserThemeProviderProps {
  children: React.ReactNode;
}
export default function BrowserThemeProvider({
  children,
}: BrowserThemeProviderProps): JSX.Element {
  const [browserTheme, setBrowserTheme] = React.useState(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (globalThis as any).__theme || 'light'
  );

  return (
    <BrowserThemeContext.Provider
      value={{
        theme: browserTheme,
        toggleTheme: () => {
          setBrowserTheme((currentTheme: 'light' | 'dark') => {
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      {children}
    </BrowserThemeContext.Provider>
  );
}
