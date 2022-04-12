import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';

 const isAndroid = Platform.OS === 'android';

export default function App() {
 

  return (
    <>
      <RestaurantsScreen/>
      <ExpoStatusBar style="auto" />
    </>
  );
}

