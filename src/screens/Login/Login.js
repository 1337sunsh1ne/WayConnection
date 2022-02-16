/* eslint-disable prettier/prettier */
import { View, BackHandler, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Container, InputLogin, Logo } from './styles';
// import {Logo} from '../../../assets/Logo.svg';

export default function Login() {

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
  }, []);

  return (
    <Container>

      <Logo
       source={require('../../../assets/Logo.svg')}
      />

      <InputLogin
        onChangeText={setUserName}
        value={userName}
        placeholder="Username"
      />

      <InputLogin
        onChangeText={setPassword}
        value={password}
        placeholder="Senha"
      />
    </Container>
  );
}