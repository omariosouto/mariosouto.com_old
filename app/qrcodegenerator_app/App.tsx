import { StatusBar } from 'expo-status-bar';
import React from 'react';
import UIThemeProvider from '@devsoutinho/universalui/src/theme/provider/UIThemeProvider/native';
import HomeScreen from '@devsoutinho/universalui/src/patterns/qrcode-generator/HomeScreen/native';


export default function App() {
  return (
    <UIThemeProvider>
      <StatusBar style="auto" />
      <HomeScreen />
    </UIThemeProvider>
  );
}
