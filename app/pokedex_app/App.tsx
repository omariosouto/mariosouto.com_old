import { StatusBar } from 'expo-status-bar';
import React from 'react';
import UIThemeProvider from '@devsoutinho/universalui/src/theme/provider/UIThemeProvider/native';
import componentToNative from '@devsoutinho/universalui/src/libs/SkynexBridge/componentToNative';
import PartialMainScreen from '@devsoutinho/universalui/src/patterns/pokedex';

const MainScreen = componentToNative(PartialMainScreen);

export default function App() {
  return (
    <UIThemeProvider>
      <StatusBar style="auto" />
      <MainScreen />
    </UIThemeProvider>
  );
}
