import React, { useState, useEffect } from "react";
import { Platform, RefreshControl, View } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Api from "../../Api";
import { Container, Scroller, HeaderArea, HeaderTitle, SearchButton, ListArea, Title, InputArea, Appointment } from './styles';

import moment from 'moment-timezone';
import Calendar from '../../components/Calendar';
import TimeSelector from '../../components/TimeSelector';

import BarberItem from '../../components/BarberItem';
import { Text } from "react-native";
import SearchIcon from '../../logos/search.svg';
import MyLocationIcon from '../../logos/my_location.svg';
import { useNavigation } from "@react-navigation/native";

const MOCK_APPOINTMENTS = [
    { time: '09:00', name: 'Felipe', phone: '319XXXX-XXXX', services: ['Corte', 'Tintura'] },
    { time: '10:00', name: 'Augusto', phone: '319XXXX-XXXX', services: ['Corte'] },
    { time: '11:00', name: 'José', phone: '319XXXX-XXXX', services: ['Corte', 'Barba'] },
    { time: '12:00', name: 'Mateus', phone: '319XXXX-XXXX', services: ['Corte', 'Sobrancelha'] },
    { time: '13:00', name: 'Ricardo', phone: '319XXXX-XXXX', services: ['Corte'] },
    { time: '14:00', name: 'Jorge', phone: '319XXXX-XXXX', services: ['Corte', 'Platinado'] },
    { time: '15:00', name: 'Armando', phone: '319XXXX-XXXX', services: ['Corte', 'Barba'] },
    { time: '16:00', name: 'Lucas', phone: '319XXXX-XXXX', services: ['Corte'] },
    { time: '17:00', name: 'Charles', phone: '319XXXX-XXXX', services: ['Corte'] },
    { time: '18:00', name: 'Xavier', phone: '319XXXX-XXXX', services: ['Corte', 'Barba'] },
]

moment.tz.setDefault('America/Sao_Paulo');

export default () => {

    const navigation = useNavigation();

    const handleLocationSearch = () => {
        setCoords({});
        getBarbers();
    }

    const [list, setList] = useState([]);

    const [coords, setCoords] = useState(null);

    const [locationText, setLocationText] = useState('');

    const [loading, setLoading] = useState(false);

    const [refreshing, setRefreshing] = useState(false);

    const getBarbers = async () => {
        setLoading(true);
        setList([]);

        let lat = null;
        let lng = null;
        if(coords) {
            lat = coords.latitude;
            lng = coords.longitude;
        }

        let res = await Api.getBarbers(lat, lng, locationText);
        if(res.error == '') {
            if(res.loc){
                setLocationText(res.loc);
            }
            setList(res.data);

        } else {
            alert("Erro: "+res.error);
        }

        setLoading(false);
    }

    useEffect(()=>{
        getBarbers();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getBarbers();
    }


    // CÓDIGO DO HISTÓRICO DE AGENDAMENTOS

    const NOW = moment();
    const [values, setValues] = useState({
        date: NOW.format('YYYY-MM-DD'),
        appointment: undefined
    })
    const [appointments, setAppointments] = useState([]);

    const setDate = (date) => {
        setValues({ ...values, date: date })
    }
    const setAppointment = (appointment) => {
        setValues({ ...values, appointment: appointment })
    }

    useEffect(() => {
        setValues({ ...values, appointment: undefined })
        console.log('Fetching appointments from API') // TODO: Remove this line
        // TODO: Change to fetch appointments from API
        setAppointments(MOCK_APPOINTMENTS);
    }, [values.date]);

    // TODO: Remove this block
    useEffect(() => {
        console.log('Values:', values)
    }, [values]);

    return (
        <Container>
        <Title>Agenda</Title>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <HeaderArea>
                    <HeaderTitle numberOfLine={2}>Escolha a data, horário e os serviços desejados</HeaderTitle>
                        <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon
                                width="26"
                                height="26"
                                fill="transparent" // Define a cor como transparente
                                pointerEvents="none" // Impede eventos de clique no ícone
                            />
                        </SearchButton>
                </HeaderArea>

                {/*} <LocationArea>
                        <LocationInput
                            placeholder="Onde você está?"
                            placeholderTextColor="#FFFFFF"
                            value={locationText}
                            onChangeText={t=>setLocationText(t)}
                            onEndEditing={handleLocationSearch}
                        />

                    <LocationFinder>
                        <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
                    </LocationFinder>
                </LocationArea>*/}

                <ListArea>
                    {list.length > 0 && (
                        <BarberItem key={0} data={list[0]} />
                    )}
                </ListArea>
                <InputArea>
                    <Calendar selectedDay={values.date} setSelectedDay={setDate} />
                    <TimeSelector appointments={appointments} selected={values.appointment} setSelected={setAppointment} />
                    <Appointment>
                    <Scroller>
                    {values.appointment && (
                        <>
                            <View>
                                <Appointment.Title>{values.appointment.name}</Appointment.Title>
                                <Appointment.Text>Contato</Appointment.Text>
                                <Appointment.Text>{values.appointment.phone}</Appointment.Text>
                            </View>
                            <View>
                                <Appointment.Title>Serviços</Appointment.Title>
                                {values.appointment.services.map((service, index) => (
                                    <Appointment.Text key={index}>• {service}</Appointment.Text>
                                ))}
                            </View>
                        </>
                    )}
                    {!values.appointment && (
                        <Appointment.Text>Selecione um horário</Appointment.Text>
                    )}
                    </Scroller>
                    </Appointment>
                </InputArea>
            </Scroller>
        </Container>
    );
}