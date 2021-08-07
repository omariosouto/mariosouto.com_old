import NextHead from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{
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
          `
      }} />
      <Component {...pageProps} />
    </>
  )
}
