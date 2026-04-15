import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigation from './src/navigation';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
        <Navigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
