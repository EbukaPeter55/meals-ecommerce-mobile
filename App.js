import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';

 const isAndroid = Platform.OS === 'android';

export default function App() {
 

  return (
    <>
    <ThemeProvider theme={theme}>
      <RestaurantsScreen/>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

