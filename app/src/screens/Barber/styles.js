import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex 1;
    background-color: #FFFFFF;   
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const SwipeDot = styled.View`
    width: 10px;
    height: 10px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeDotActive = styled.View`
    width: 10px;
    height: 10px;
    background-color: #000000;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeItem = styled.View`
    flex: 1;
    background-color: #63C2D1;
`;

export const SwipeImage = styled.Image`
    width: 100%;
    height: 240px;
`;

export const FakeSwiper = styled.View`
    height: 240px;
    background-color: #63C2D1;
`;

export const PageBody = styled.View`
    background-color: #FFFFFF;
    border-top-left-radius: 50px;
    margin-top: -50px;
    min-height: 400px;
`;

export const UserInfoArea = styled.View`
    flex-direction: row;
    margin-top: -30px;
`;

export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #FFFFFF;
`;

export const UserInfo = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const UserInfoName = styled.Text`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const UserFavButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: #FFFFFF;
    border: 2px solid #999999;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 20px;
`;

export const ServiceArea = styled.View``;

export const TestimonialArea = styled.View``;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
`;


