/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const InputLogin = styled.TextInput`
    width: 300px;
    height: 49px;
    margin: 12px;
    border: 1px solid;
    padding: 10px;
    background-color:#f5f5f5f5;
    border-radius:10px;
`;

export const Logo = styled.Image`
    width:238px;
    height: 50px;
    margin-bottom:39px
`;

export const ButtonEntrar = styled.TouchableOpacity`
    width: 150px;
    height: 47px;
    background-color:#6E742E;
    border-radius:10px;
    display: flex;
    justify-content:center;
    align-items:center;
    margin-top:26px;
`;

export const TextButton = styled.Text`
    color: #ffffff;
    font-size:18px;
`;

export const TextCadastro = styled.Text`
    color:#0038FF ;
    margin-left:5px
`;