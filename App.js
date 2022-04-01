import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// ROUTES
import Login from './src/screens/Login/Login';
import SplashScreen from './src/screens/SplashScreen';
import Register from './src/screens/Register';
import ChoiceTrip from './src/screens/ChoiceTrip';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{gestureEnabled: false, headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChoiceTrip"
          component={ChoiceTrip}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
