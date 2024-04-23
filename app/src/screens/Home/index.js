import React, { useState, useEffect } from "react";
import { Platform, RefreshControl } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Api from "../../Api";
import { 
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchButton,
    
    LocationArea,
    LocationInput,
    LocationFinder,
    ListArea

} from './styles';

import BarberItem from '../../components/BarberItem';

import { Text } from "react-native";

import SearchIcon from '../../logos/search.svg';
import MyLocationIcon from '../../logos/my_location.svg';
import { useNavigation } from "@react-navigation/native";

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
    
    return (
        <Container>            
                <Scroller refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>

                    <HeaderArea>
                        <HeaderTitle numberOfLine={2}>Encontre o seu barbeiro favorito</HeaderTitle>
                        <SearchButton onPress={()=>navigation.navigate('Search')}>
                            <SearchIcon width="26" height="26" fill="#FFFFFF" />
                        </SearchButton>
                    </HeaderArea>

                    <LocationArea>
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
                    </LocationArea>

                    <ListArea>
                        {list.map((item, k)=>(
                            <BarberItem key={k} data={item} />
                        ))}
                    </ListArea>



                </Scroller>            
        </Container>
    );
}