import React from 'react';
import { WebView } from 'react-native-webview';

export default function MainMenu() {
  return(
  <WebView
  source={{ uri: 'https://expo.io' }} 
  />
  );
}