import React, {useState, useEffect} from "react";
import { useNavigation, useRoute } from '@react-navigation/native'
import { Text } from "react-native";
import Swiper from 'react-native-swiper';

import Stars from '../../components/Stars';

import FavoriteIcon from '../../logos/favorite.svg';

import BackIcon from '../../logos/back.svg'; 


import { 
    Scroller,
    Container,

    FakeSwiper,
    SwipeDot,
    SwipeDotActive,
    SwipeItem,
    SwipeImage,

    PageBody,

    UserInfoArea,
    UserAvatar,
    UserInfo,
    UserInfoName,
    UserFavButton,
    
    BackButton,
    LoadingIcon,

    ServiceArea,
    ServiceItem,
    ServiceName,
    ServicePrice,
    ServiceChoseButton,
    ServiceChoseBtnText,
    ServicesTitle,
        
    TestimonialArea,
 } from './styles';

import Api from "../../Api";


export default () => {
    const navigation = useNavigation()
    const route = useRoute();

    const [userInfo, setUserInfo] = useState ({
        id: route.params.id,
        avatar: route.params.avatar,
        name: route.params.name,
        stars: route.params.stars,
    });
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getBarberInfo = async () => {
            setLoading(true); 

            let json = await Api.getBarber(userInfo.id);
            if(json.error == '') {
                //setUserInfo(json.data);
            } else{
                alert("Erro: "+json.error);
            }

            setLoading(false);
        }
        getBarberInfo();
    },[]);

    const handleBackButton = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Scroller>
                {userInfo.photos && userInfo.photos.length > 0 ?
                <Swiper
                    style={{height: 240}}
                    dot={<SwipeDot/>}
                    activeDot={<SwipeDotActive/>}
                    paginationStyle={{top:15, right: 15, bottom: null, left: null}}
                    autoplay={true}
                >
                    {userInfo.photos.map((item, key)=>(
                        <SwipeItem key={key}>
                            <SwipeImage source={{uri:item.url}} resizeMode="cover"/>
                        </SwipeItem>
                    ))}

                </Swiper>
                :
                <FakeSwiper></FakeSwiper>
                }
                <PageBody>
                    <UserInfoArea>
                        <UserAvatar source={{uri:userInfo.avatar}}/>
                        <UserInfo>
                            <UserInfoName>{userInfo.name}</UserInfoName>
                            <Stars stars={userInfo.stars} showNumber={true} />
                        </UserInfo>
                        <UserFavButton>
                            <FavoriteIcon width="24" height="24" fill="#FF0000" />
                        </UserFavButton>
                    </UserInfoArea>
                    
                    {loading &&
                        <LoadingIcon size="large" color="#000000" />
                    }


                    
                    {userInfo.services &&
                        <ServiceArea>
                            <ServicesTitle> Lista de serviços </ServicesTitle>

                            {userInfo.services.map((item,key)=>(
                                <ServiceItem key={key}>
                                    <ServiceInfo>
                                        <ServiceName>{item.name}</ServiceName>
                                        <ServicePrice>R$ {item.price} </ServicePrice>
                                    </ServiceInfo>
                                    <ServiceChoseButton>
                                        <ServiceChoseBtnText>Agendar</ServiceChoseBtnText>
                                    </ServiceChoseButton>
                                </ServiceItem>
                            ))}

                        </ServiceArea>
                    }
                    <TestimonialArea>

                    </TestimonialArea>
                </PageBody>
            </Scroller>
            <BackButton onPress={handleBackButton}>
                <BackIcon width="44" height="44" fill='#FFFFFF'/>
            </BackButton>
        </Container>
    );
}