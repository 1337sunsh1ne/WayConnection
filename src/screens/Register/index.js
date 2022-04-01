import React, {useState} from 'react';

import LogoWay from '../../../assets/Logo.png';
import {
  ButtonChoice,
  Container,
  InputCadastro,
  ViewButton,
  TextButtonChoice,
  ButtonRegister,
} from './styled';
import {Logo} from '../Login/styles';

export default function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Container>
      <Logo source={LogoWay} />
      <InputCadastro
        placeholder="Nome Completo"
        value={name}
        onChangeText={value => setName(value)}
      />
      <InputCadastro
        placeholder="Email"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <InputCadastro
        placeholder="Digite sua senha"
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />

      <ViewButton>
        <ButtonChoice>
          <TextButtonChoice>Guia</TextButtonChoice>
        </ButtonChoice>

        <ButtonChoice style={{backgroundColor: '#6E742E'}}>
          <TextButtonChoice>Viajantes</TextButtonChoice>
        </ButtonChoice>
      </ViewButton>

      <ButtonRegister>
        <TextButtonChoice style={{fontSize: 20}}>Cadastrar</TextButtonChoice>
      </ButtonRegister>
    </Container>
  );
}
