import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #000000;
    flex: 1;   
`;

export const HeaderArea = styled.View`    
    height: 50px;
    justify-content: center;
    padding: 0 20px;
`;

export const HeaderTitle = styled.Text`
    font-size: 18px;
    color: #F6E9C3;
    font-weight: bold;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 0 20px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 30px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const EmptyWarning = styled.Text`
    text-align: center;
    margin-top: 30px;
    color: #F6E9C3;
    font-size: 14px;
`;
