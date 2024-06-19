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
    const [nextAppointment, setNextAppointment] = useState(null);

    const getNextAppointment = async () => {
        setLoading(true);
        let res = await Api.getAppointments();

        if (res.error === '') {
            if (res.list && res.list.length > 0) {
                const now = new Date();
                const upcomingAppointments = res.list.filter(appointment => new Date(appointment.datetime) > now);
                upcomingAppointments.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
                if (upcomingAppointments.length > 0) {
                    setNextAppointment(upcomingAppointments[0]);
                } else {
                    setNextAppointment(null);
                }
            } else {
                setNextAppointment(null);
            }
        } else {
            alert("Erro: " + res.error);
        }
        setLoading(false);
    }

    useEffect(() => {
        getNextAppointment();
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        getNextAppointment();
        setRefreshing(false);
    }

    const handleSchedulePress = () => {
        navigation.navigate('Appointments'); 
    }

    const formatDate = (datetime) => {
        const date = new Date(datetime);
        return date.toLocaleDateString('pt-BR'); // Formata a data para DD/MM/YYYY
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
                    
                    {nextAppointment ? (
                        <LastAppointment>
                            <AppointmentInfo>Próximo Atendimento Agendado:</AppointmentInfo>
                            <AppointmentInfo>Data: {formatDate(nextAppointment.datetime)}</AppointmentInfo>
                            <AppointmentInfo>Hora: {nextAppointment.datetime.substring(11, 16)}</AppointmentInfo>
                            <AppointmentInfo>Barbeiro: {nextAppointment.barber.name}</AppointmentInfo>
                            <AppointmentInfo>Serviço: {nextAppointment.service.name}</AppointmentInfo>
                        </LastAppointment>
                    ) : (
                        <NoAppointmentText>Nenhum agendamento próximo</NoAppointmentText>
                    )}

                    <ScheduleButton onPress={handleSchedulePress}>
                        <ScheduleButtonText>Iniciar Agendamento</ScheduleButtonText>
                    </ScheduleButton>

                </ListArea>

            </Scroller>
            <InfoText style={{textAlign: 'center'}}>
                {"\n\n"}
                Rua Mineiro Joaquim Calixto, 162 - Bela Vista,
                {"\n"}
                Nova Lima - MG, 34004-223, Brazil 
            </InfoText>
        </Container>
    );
}
