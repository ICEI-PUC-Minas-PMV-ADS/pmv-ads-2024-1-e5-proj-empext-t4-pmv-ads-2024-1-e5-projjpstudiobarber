import React, { useContext } from "react";
import styled from "styled-components/native";

import { UserContext } from '../contexts/UserContext';

import HomeIcon from '../logos/home.svg';
import SearchIcon from '../logos/search.svg';
import TodayIcon from '../logos/today.svg';
import FavoriteIcon from '../logos/favorite.svg';
import AccountIcon from '../logos/account.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: #000000;
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    border-radius: 35px;
    border: 3px solid #C2995B;
    margin-top: -20px;
`;
const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

const CustomTabBar = ({ state, navigation }) => {
    const { state: user } = useContext(UserContext);

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon style={{ opacity: state.index === 0 ? 1 : 0.7 }} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <SearchIcon style={{ opacity: state.index === 1 ? 1 : 0.7 }} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItemCenter onPress={() => goTo('Appointments')}>
                <TodayIcon width="32" height="32" fill="#C2995B" />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Favorites')}>
                <FavoriteIcon style={{ opacity: state.index === 3 ? 1 : 0.7 }} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                {user.avatar !== '' ?
                    <AvatarIcon source={{ uri: user.avatar }} />
                    :
                    <AccountIcon style={{ opacity: state.index === 4 ? 1 : 0.7 }} width="24" height="24" fill="#FFFFFF" />
                }
            </TabItem>
        </TabArea>
    );
}

export default CustomTabBar;
