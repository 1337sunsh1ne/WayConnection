import {Image} from 'react-native';
import React from 'react';

import Logo from '../../../assets/Logo.png';
import {Container} from './style';

export default function Header() {
  return (
    <Container>
      <Image source={Logo} />
    </Container>
  );
}
