/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.View`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    flex: 1;
`;

export const InputCadastro = styled.TextInput`
    width: 300px;
    height: 49px;
    margin: 12px;
    border: 1px solid;
    padding: 10px;
    background-color:#f5f5f5f5;
    border-radius:10px;
`;

export const ViewButton = styled.View`
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-top:41px;
`;

export const ButtonChoice = styled.TouchableOpacity`
    width: 125px;
    height: 50px;
    background:#A74D2A;
    border-radius:10px;
    display: flex;
    justify-content:center;
    align-items:center;
    margin:0px 20px 0px 20px;
`;

export const TextButtonChoice = styled.Text`
    color: #ffffff;
    display: flex;
`;

export const ButtonRegister = styled.TouchableOpacity`
    width: 300px;
    height: 50px;
    background:#6E742E;
    margin-top:50px;
    border-radius:10px;
    display: flex;
    justify-content:center;
    align-items:center
`;