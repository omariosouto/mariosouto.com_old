import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from '@devsoutinho/universalui/src/patterns/qrcode-generator/HomeScreen/native';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <HomeScreen />
    </>
  );
}
