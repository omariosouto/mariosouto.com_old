import React from 'react';
import UIThemeProvider, { useBrowserTheme } from '@devsoutinho/ui/src/theme/provider/UIThemeProvider';
import Demo from '@devsoutinho/ui/src/theme/Demo';

function websiteHOC(Component) {
  return () => (
    <Provider>
      <Component />
    </Provider>
  );
}

function Provider({ children }) {
  return (
    <UIThemeProvider>
      {children}
    </UIThemeProvider>
  )
}

// ==============================================================================
// ==============================================================================

function HomeScreen() {
  const browserTheme = useBrowserTheme();

  return (
    <div>
      <h1>Get Started</h1>
      <Demo />

      <button onClick={() => browserTheme.toggleTheme()}>
        Dark mode toggler!
      </button>
    </div>
  )
}


export default websiteHOC(HomeScreen); 
