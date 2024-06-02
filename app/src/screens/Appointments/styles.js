import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
    min-height: ${Dimensions.get('window').height}px;
    background-color: #141416;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 3px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    width:  300px;
    font-size: 24px;
    font-weight: bold;
    color: #F6E9C3;
    margin-bottom: 5px;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
`;

export const LocationArea = styled.View`
    background-color: #464A4C;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;
export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
`;
export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;
export const ListArea = styled.View`
    margin-top: 3px;
    margin-bottom: 3px;
`;

export const Appointment = styled.View`
    margin-top: 10px;
    padding: 20px;
    min-width: 100%;
    background-color: #292a2c;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 5;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
    margin-bottom: 1px;
`;

export const InputArea = styled.View`
    width: 90%;
    margin: 0 auto;
    align-items: center;
    gap: 5px;
    margin-top: 3px;
    margin-bottom: 5px;
`;

Appointment.Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`;

Appointment.Text = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-bottom: 5px;
`;