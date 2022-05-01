/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const InputCadastro = styled.TextInput`
  width: 300px;
  height: 49px;
  margin: 12px;
  border: 1px solid;
  padding: 10px;
  background-color: #f5f5f5f5;
  border-radius: 10px;
`;

export const TextButtonChoice = styled.Text`
  color: #ffffff;
  display: flex;
  font-size: 20px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  background: #6e742e;
  margin-top: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
