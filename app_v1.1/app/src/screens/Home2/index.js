import React, { useState, useEffect } from "react";
import { Text, RefreshControl, Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Api from "../../Api";
import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    ListArea,
    LoadingIcon,
    InfoText,
    ScheduleButton,
    ScheduleButtonText,
    LastAppointment,
    AppointmentInfo,
    NoAppointmentText
} from './styles';

export default () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [lastAppointment, setLastAppointment] = useState(null);

    const getLastAppointment = async () => {
        setLoading(true);
        let res = await Api.getAppointments();
        // console.log("API response:", res);  // Adicione esta linha para debug

        if (res.error === '') {
            if (res.list && res.list.length > 0) {
                // Obtendo o último agendamento (supondo que a lista esteja em ordem cronológica)
                const lastApp = res.list[res.list.length - 1];
                //console.log("Last appointment:", lastApp);  // Adicione esta linha para debug
                setLastAppointment(lastApp);
            } else {
                setLastAppointment(null);
            }
        } else {
            alert("Erro: " + res.error);
        }
        setLoading(false);
    }

    useEffect(() => {
        getLastAppointment();
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        getLastAppointment();
        setRefreshing(false);
    }

    const handleSchedulePress = () => {
        navigation.navigate('Appointments'); // Substitua 'Appointments' pelo nome correto da tela de agendamento
    }

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Olá, seja bem vindo(a)!</HeaderTitle>
                </HeaderArea>

                <ListArea>
                    <InfoText>
                        JP Barber, desde 2020 entregando qualidade!
                        {"\n\n"}
                        O homem moderno também cuida da sua aparência, e a nossa barbearia é o melhor lugar para fazer isso! Quem quer ser bem atendido e voltar para casa mais bonito sabe que aqui na JP Studio Barber é o melhor lugar!
                        {"\n\n"}
                        Email: <Text style={{ color: '#F6E9C3' }} onPress={() => Linking.openURL('mailto:Jonatas_fsn@outlook.com')}>Jonatas_fsn@outlook.com</Text>
                        {"\n\n"}
                        Tel: <Text style={{ color: '#F6E9C3' }} onPress={() => Linking.openURL('https://wa.me/5531975240533')}>31-975240533</Text>
                        {"\n\n"}
                        Instagran: <Text style={{ color: '#F6E9C3' }} onPress={() => Linking.openURL('https://www.instagram.com/j0natas_nunes')}>@j0natas_nunes</Text>
                    </InfoText>

                    {loading && <LoadingIcon size="large" color="#C2995B" />}
                    
                    {!loading && lastAppointment ? (
                        <LastAppointment>
                            <AppointmentInfo>Último Agendamento:</AppointmentInfo>
                            <AppointmentInfo>Data: {lastAppointment.date}</AppointmentInfo>
                            <AppointmentInfo>Hora: {lastAppointment.hour}</AppointmentInfo>
                            <AppointmentInfo>Barbeiro: {lastAppointment.barberName}</AppointmentInfo>
                        </LastAppointment>
                    ) : (
                        <NoAppointmentText>Nenhum agendamento realizado</NoAppointmentText>
                    )}

                    <ScheduleButton onPress={handleSchedulePress}>
                        <ScheduleButtonText>Iniciar Agendamento</ScheduleButtonText>
                    </ScheduleButton>

                </ListArea>

            </Scroller>
            <InfoText>
                {"\n\n"}
                Rua Mineiro Joaquim Calixto, 162 - Bela Vista,
                {"\n"}
                Nova Lima - MG, 34004-223, Brazil </InfoText>
        </Container>
    );
}
