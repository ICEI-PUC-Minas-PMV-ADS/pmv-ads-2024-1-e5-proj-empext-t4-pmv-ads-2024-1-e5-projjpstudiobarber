import React, { useState, useEffect } from 'react';
import { Container, InputArea, Title, Appointment } from './styles';
import { View } from "react-native";
import moment from 'moment-timezone';
import Calendar from '../../components/Calendar';
import TimeSelector from '../../components/TimeSelector';

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
            <InputArea>
                <Calendar selectedDay={values.date} setSelectedDay={setDate} />
                <TimeSelector appointments={appointments} selected={values.appointment} setSelected={setAppointment} />
                <Appointment>
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
                </Appointment>
            </InputArea>
        </Container>
    );
}
