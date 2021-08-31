import React from 'react';
import UIThemeProvider from '@devsoutinho/universalui/src/theme/provider/UIThemeProvider/web';

import componentToWeb from '@devsoutinho/universalui/src/libs/SkynexBridge/componentToWeb';
import PartialMainScreen from '@devsoutinho/universalui/src/patterns/pokedex';

const MainScreen = componentToWeb(PartialMainScreen);

export default function PokedexScreen(): JSX.Element {
  return (
    <UIThemeProvider>
      <MainScreen />
    </UIThemeProvider>
  );
}
