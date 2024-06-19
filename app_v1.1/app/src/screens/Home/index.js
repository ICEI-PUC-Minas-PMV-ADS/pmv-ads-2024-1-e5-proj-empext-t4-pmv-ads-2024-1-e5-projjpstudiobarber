import React, { useState, useEffect } from "react";
import { RefreshControl, Text } from 'react-native';
import Api from "../../Api";
import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchButton,
    ListArea,
    Subtitle
} from './styles';
import BarberItem from '../../components/BarberItem';
import SearchIcon from '../../logos/search.svg';
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation();
    const [list, setList] = useState([]);
    //const [locationText, setLocationText] = useState('');
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const getBarbers = async () => {
        setLoading(true);
        setList([]);

        let res = await Api.getBarbers();
        //console.log(res);
        if (res.error == '') {
            if (0) {
                //setLocationText(res.loc);
            }
            setList(res.data);
        } else {
            alert("Erro: " + res.error);
        }

        setLoading(false);
    }

    useEffect(() => {
        getBarbers();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getBarbers();
    }

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Realize o seu Agendamento.</HeaderTitle>

                    <SearchButton onPress={() => navigation.navigate('Search')}>

                        <SearchIcon
                            width="26"
                            height="26"
                            fill="transparent" // Define a cor como transparente
                            pointerEvents="none" // Impede eventos de clique no ícone
                        />
                    </SearchButton>

                </HeaderArea>
                <Subtitle>*Clique em Ver Perfil e Agendar</Subtitle>
                {/* Codigo abaixo destinado para filtrar a exibição exclusiva do JP}
                {/* 
                <ListArea>
                    {list.length > 0 && (
                        <BarberItem
                            key={0}
                            data={list[0]}
                            onPress={() => handleBarberPress(list[0])} // Passa a função de navegação
                        />
                    )}
                </ListArea>
                */}


                {/* Codigo abaixo destinado para exibir todos os Barbeiros que estiverem cadastrados}
                {/*

                <ListArea>
                    {list.map((item, k) => (
                        <BarberItem key={k} data={item} />
                    ))}
                </ListArea>
 
                */}
                {/* Codigo abaixo destinado para filtrar a exibição do JP e sua esposa*/}

                <ListArea>
                    {list.length > 0 && list.slice(0, 2).map((item, index) => (
                        <BarberItem
                            key={index}
                            data={item}
                            onPress={() => handleBarberPress(item)} // Passa a função de navegação
                        />
                    ))}
                </ListArea>

            </Scroller>
        </Container>
    );
}
