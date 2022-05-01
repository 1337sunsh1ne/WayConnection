// ROTAS DE LOGIN, CADASTRO...
import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignIn}
      />

      <AuthStack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUp}
      />
    </AuthStack.Navigator>
  );
}
