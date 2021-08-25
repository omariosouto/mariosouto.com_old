import React from 'react';
import UIThemeProvider from './base';


interface UIThemeProviderNativeProps {
  children: React.ReactNode;
}
export default function UIThemeProviderNative({ children }: UIThemeProviderNativeProps) {
  return (
    <UIThemeProvider>
      {children}
    </UIThemeProvider>
  );
}
