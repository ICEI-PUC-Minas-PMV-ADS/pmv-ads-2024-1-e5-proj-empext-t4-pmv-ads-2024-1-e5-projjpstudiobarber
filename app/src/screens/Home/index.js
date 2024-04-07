import React from "react";
import { useNavigation} from '@react-navigation/native';
import {
     Container,
     Scroller,

     HeaderArea,
     HeaderTitle,
     SearchButton,

     LocationArea,
     LocationInput,
     LocationFinder,


     } from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';



export default () => {

    const navigation = useNavigation();

    return (
        <Container>
            <Scroller>

                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o seu barbeiro favorito</HeaderTitle>
                    <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#c2995b" />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde voce está?"
                        placeholderTextColor="#ffffff"                    
                    />
                    <LocationFinder>
                        <MyLocationIcon width="24" heigth="24" fill="#c2995b" />
                    </LocationFinder>
                </LocationArea>
            </Scroller>            
        </Container>
    );
}