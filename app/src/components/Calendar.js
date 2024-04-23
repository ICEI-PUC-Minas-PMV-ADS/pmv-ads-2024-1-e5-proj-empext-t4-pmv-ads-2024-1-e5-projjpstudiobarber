import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
    today: "Hoje",
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    monthNamesShort: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEC'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
};
LocaleConfig.defaultLocale = 'pt-br';


export default ({ selectedDay, setSelectedDay }) => {
    const [date, setDate] = useState(selectedDay);

    useEffect(() => {
        if (selectedDay) setSelectedDay(date);
    }, [date]);

    return (
        <View style={{
            borderRadius: 20,
            overflow: 'hidden',
            width: Dimensions.get('window').width * 0.8
            }}>
        <Calendar
            theme={{
                backgroundColor: '#141416',
                calendarBackground: '#292a2c',
                contentStyle: { borderRadius: 20 },
                textSectionTitleColor: '#b6c1cd',
                selectedDayBackgroundColor: '#c39657',
                selectedDayTextColor: '#fff',
                todayTextColor: '#c39657',
                dayTextColor: '#fff',
                textDayFontWeight: '400',
                textDisabledColor: '#666',
                arrowColor: '#c39657',
                monthTextColor: '#fff',
                todayDotColor: '#c39657',
                stylesheet: {
                    '*': {
                        overflow: 'hidden',
                    }
                }
            }}
            onDayPress={day => { setDate(day.dateString) }}
            markedDates={{
                [date]: { selected: true, disableTouchEvent: true }
            }}
        />
        </View>
    );
}
