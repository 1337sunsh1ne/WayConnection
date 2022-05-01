import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
// ROUTES
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
