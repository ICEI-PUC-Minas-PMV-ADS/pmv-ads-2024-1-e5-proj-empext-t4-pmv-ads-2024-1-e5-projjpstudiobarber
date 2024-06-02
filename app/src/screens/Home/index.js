import React, { useState, useEffect } from "react";
import { RefreshControl } from 'react-native';
import Api from "../../Api";
import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchButton,
    ListArea
} from './styles';

import BarberItem from '../../components/BarberItem';
import SearchIcon from '../../assets/today.svg';

import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation();
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const getBarbers = async () => {

        let lat = null;
        let lng = null;

        let res = await Api.getBarbers(lat, lng);
        if (res.error == '') {
            setList(res.data);
        } else {
            alert("Erro: " + res.error);
        }
    }

    useEffect(() => {
        getBarbers();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getBarbers();
    }

    const handleBarberPress = (barber) => {
        navigation.navigate('Appointments', { barber });
    }

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Olá, seja bem vindo(a)!</HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate('Search')}>
                        <SearchIcon
                            width="26"
                            height="26"
                            fill="transparent" // Define a cor como transparente
                            pointerEvents="none" // Impede eventos de clique no ícone
                        />
                    </SearchButton>
                </HeaderArea>

                <ListArea>
                    {list.length > 0 && (
                        <BarberItem 
                            key={0} 
                            data={list[0]} 
                            onPress={() => handleBarberPress(list[0])} // Passa a função de navegação
                        />
                    )}
                </ListArea>
                <SearchButton onPress={() => navigation.navigate('Appointments')}>
                        <SearchIcon
                            width="26"
                            height="26"
                            fill="#C2995B" // Define a cor como transparente
                           
                        />
                    </SearchButton>                   
                    

            </Scroller>
        </Container>
    );
}
