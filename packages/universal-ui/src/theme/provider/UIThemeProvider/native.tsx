import React from 'react';
import UIThemeProvider from './base';
// TODO: https://docs.expo.dev/guides/using-custom-fonts/#using-a-google-font
import { useFonts, OpenSans_300Light, OpenSans_400Regular } from '@expo-google-fonts/open-sans';


interface UIThemeProviderNativeProps {
  children: React.ReactNode;
}

export default function UIThemeProviderNative({ children }: UIThemeProviderNativeProps) {
  return (
    <UIThemeProvider platform="mobile">
      {children}
    </UIThemeProvider>
  );
}
