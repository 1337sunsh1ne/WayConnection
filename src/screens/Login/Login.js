/* eslint-disable prettier/prettier */
import {
  BackHandler,
  ImageBackground,
  Text,
  View,
} from 'react-native';


import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  ButtonEntrar,
  Container,
  InputLogin,
  Logo,
  TextButton,
  TextCadastro,
}
  from './styles';


import LogoWay from '../../../assets/Logo.png';
import Background from '../../../assets/Background.png'
export default function Login() {

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
  }, []);

  const navigation = useNavigation();

  return (

    <ImageBackground
      source={Background}
      resizeMode='cover'
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Container>

        <Logo source={LogoWay} />

        <InputLogin
          onChangeText={(value) => setUserName(value)}
          value={userName}
          placeholder="Username"
        />

        <InputLogin
          onChangeText={(value) => setPassword(value)}
          value={password}
          placeholder="Senha"
          secureTextEntry={true}
        />

        <ButtonEntrar>
          <TextButton>Entrar</TextButton>
        </ButtonEntrar>

        <View style={{ marginTop: 31, display: 'flex', flexDirection: 'row' }}>
          <Text>Ainda não tem um conta?</Text>
          <TextCadastro onPress={() => navigation.navigate('Register')}>Cadastre-se</TextCadastro>
        </View>
      </Container>
    </ImageBackground >
  );
}