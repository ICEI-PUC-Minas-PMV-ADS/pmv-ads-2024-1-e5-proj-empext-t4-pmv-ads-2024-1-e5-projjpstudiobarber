import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
    min-height: ${Dimensions.get('window').height}px;
    background-color: #141416;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin: 30px;
    text-align: center;
`;

export const InputArea = styled.View`
    width: 80%;
    margin: 0 auto;
    align-items: center;
    gap: 20px;
`;

export const Appointment = styled.View`
    min-width: 100%;
    background-color: #292a2c;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

Appointment.Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

Appointment.Text = styled.Text`
    color: #fff;
    font-size: 16px;
`;
