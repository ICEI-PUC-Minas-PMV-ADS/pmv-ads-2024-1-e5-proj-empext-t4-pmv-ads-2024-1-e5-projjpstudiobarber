import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #000000;
    flex: 1; 
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 0px 20px;
`;

export const ListArea = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const EmptyWarning = styled.Text`
    text-align: center;
    margin-top: 30px;
    color: #FFFFFF;
    font-size: 14px;
`;
