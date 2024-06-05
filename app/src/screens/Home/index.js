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
import SearchIcon from '../../logos/search.svg';
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation();
    const [list, setList] = useState([]);
    const [locationText, setLocationText] = useState('');
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const getBarbers = async () => {

        let res = await Api.getBarbers();
        if (res.error == '') {
            if (res.loc) {
                //setLocationText(res.loc);
            }
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

 {/*               <ListArea>
                    {list.map((item, k) => (
                        <BarberItem key={k} data={item} />
                    ))}
                </ListArea>
 */}
                
                
            </Scroller>
        </Container>
    );
}
