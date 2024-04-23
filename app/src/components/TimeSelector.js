import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import NavNext from '../logos/nav_next.svg'
import NavPrev from '../logos/nav_prev.svg'
import styled from 'styled-components/native';

const CustomText = styled.Text`
    color: white;
    font-size: 16px;
    text-align: center;
    margin: auto;
`;

const CustomNavPrev = styled(NavPrev)`
    text-align: center;
    margin: auto;
    color: white;
    fill: white;
`;

const CustomNavNext = styled(NavNext)`
    text-align: center;
    margin: auto;
    color: white;
    fill: white;
`;

const TIMES_TO_SHOW = 4;

const TimeSelector = ({ appointments, selected, setSelected }) => {
    const [selectedAppointment, setSelectedAppointment] = useState(selected);
    const [timeArrayIndex, setTimeArrayIndex] = useState(0);

    useEffect(() => {
        setSelectedAppointment(selected);
    }, [selected]);
    useEffect(() => {
        if (setSelected) setSelected(selectedAppointment);
    }, [selectedAppointment]);

    const handleNext = () => {
        if ((timeArrayIndex + TIMES_TO_SHOW) > (appointments.length - TIMES_TO_SHOW)) {
            return setTimeArrayIndex(appointments.length - TIMES_TO_SHOW);
        }
        setTimeArrayIndex(timeArrayIndex + TIMES_TO_SHOW);
    }

    const handlePrev = () => {
        if ((timeArrayIndex - TIMES_TO_SHOW) < 0) {
            return setTimeArrayIndex(0);
        }
        setTimeArrayIndex(timeArrayIndex - TIMES_TO_SHOW);
    }

    const renderTimeItem = (appointment) => {
        const isSelected = selectedAppointment === appointment;

        return (
            <View key={appointment.time} style={{ gap: 10, padding: 10}}>
                <TouchableOpacity
                    onPress={() => setSelectedAppointment(appointment)}
                    style={{
                        padding: 3,
                        backgroundColor: isSelected ? '#c39657' : 'transparent',
                        borderRadius: 10
                    }}
                >
                    <CustomText>{appointment.time}</CustomText>
                </TouchableOpacity>
                <CustomText style={{ fontSize: 10 }}>{appointment.name}</CustomText>
            </View>
        );
    };
    if (appointments.length === 0) return (
        <View style={{ backgroundColor: '#292a2c', width: '100%', height: 50, borderRadius: 20 }}>
            <CustomText>Nenhum horário para esse dia</CustomText>
        </View>
    );
    return (
        <View style={{ backgroundColor: '#292a2c', width: '100%', borderRadius: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={handlePrev}>
                    <CustomNavPrev />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>
                    {appointments.slice(timeArrayIndex, timeArrayIndex + TIMES_TO_SHOW).map(renderTimeItem)}
                </View>

                <TouchableOpacity onPress={handleNext}>
                    <CustomNavNext />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TimeSelector;