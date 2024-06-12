import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #141416;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #C2995B;
`;

export const ListArea = styled.View`
    margin-top: 4px;
    margin-bottom: -1px;
`;

export const InfoText = styled.Text`
    font-size: 16px;
    color: #C2995B;
    margin-bottom: 20px;
    margin-top: 10px;
    margin-right: 10px;
    text-align: justify;
`;

export const InfoText2 = styled.Text`
    font-size: 16px;
    color: #C2995B;
    text-align: center;
    margin-top: 20px;
`;

export const ScheduleButton = styled.TouchableOpacity`
    height: 50px;
    background-color: #C2995B;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const ScheduleButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000000;
`;

export const LastAppointment = styled.View`
    background-color: #464a4c;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
`;

export const AppointmentInfo = styled.Text`
    font-size: 16px;
    color: #C2995B;
    margin-bottom: 10px;
`;

export const NoAppointmentText = styled.Text`
    font-size: 16px;
    color: #C2995B;
    text-align: center;
    margin-bottom: 30px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 40px;
`;
