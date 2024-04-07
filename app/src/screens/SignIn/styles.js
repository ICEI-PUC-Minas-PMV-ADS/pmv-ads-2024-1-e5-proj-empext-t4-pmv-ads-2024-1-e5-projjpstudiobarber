import React from 'react';
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #000000;
    flex: 1;
    justify-content: center;
    align-items: center;  
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
    
    
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #c2995b;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
    
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-contente: center;
    margin-top: 50px;
    margin-bottom: 20px;
    
    
`;

export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #c2995b;
    
    
`;

export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
    margin-left: 5px;
    
`;