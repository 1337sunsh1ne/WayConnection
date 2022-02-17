/* eslint-disable prettier/prettier */
import {
  BackHandler,
  ImageBackground,
  Text,
  View,
} from 'react-native';

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import LogoWay from '../../../assets/Logo.png';
import { ButtonChoice, Container, InputCadastro, ViewButton, TextButtonChoice, ButtonRegister } from './styled';
import { Logo, TextButton } from '../Login/styles';
import { RadioButton } from 'react-native-paper';

export default function Login() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checked, setChecked] = useState('first')

  return (
    <Container>
      <Logo source={LogoWay} />
      <InputCadastro
        placeholder="Nome Completo"
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <InputCadastro
        placeholder="Email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <InputCadastro
        placeholder="Digite sua senha"
        value={password}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
      />

      <ViewButton>
        <ButtonChoice>
          <TextButtonChoice>Guia</TextButtonChoice>
        </ButtonChoice>

        <ButtonChoice style={{ backgroundColor: '#6E742E' }}>
          <TextButtonChoice>Viajantes</TextButtonChoice>
        </ButtonChoice>
      </ViewButton>

      {/* <RadioButton
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      /> */}

      <ButtonRegister>
        <TextButtonChoice style={{fontSize:20}}>Cadastrar</TextButtonChoice>
      </ButtonRegister>
    </Container>
  );
}