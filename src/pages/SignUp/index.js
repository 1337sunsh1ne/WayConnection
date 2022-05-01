import React, {useState, useContext} from 'react';
import LogoWay from '../../../assets/Logo.png';
import {
  Container,
  InputCadastro,
  TextButtonChoice,
  ButtonRegister,
} from './styled';
import {Logo} from '../SignIn/styled';

import {AuthContext} from '../../contexts/auth';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signUp} = useContext(AuthContext);

  function handleSignUp() {
    signUp(email, password, name);
  }

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

      <ButtonRegister onPress={handleSignUp}>
        <TextButtonChoice>Cadastrar</TextButtonChoice>
      </ButtonRegister>
    </Container>
  );
}
