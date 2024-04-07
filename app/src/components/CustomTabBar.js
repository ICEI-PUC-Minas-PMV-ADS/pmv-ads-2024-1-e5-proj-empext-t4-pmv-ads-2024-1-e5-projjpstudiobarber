import React, { useContext } from 'react';
import styled from 'styled-components/native';

import { UserContext } from '../contexts/UserContext';

import HomeIcon from '../assets/home.svg';
//import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/my_location.svg';
//import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: #000000;
    flex-direction: row;
    `;
const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content: center;
    align-items: center;    
`;
const TabItemCenter = styled.TouchableOpacity`
    width:70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    border-radius: 35px;
    border: 3px solid #c2995b;
    margin-top: -20px;
    `;
const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    `;

export default ({ state, navigation }) => {
  const { state: user } = useContext(UserContext);

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  }

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon style={{ opacity: state.index === 0 ? 1 : 0.5 }} width="24" height="24" fill="#c2995b" />
      </TabItem>

      <TabItemCenter onPress={() => goTo('Appointments')}>
        <TodayIcon style={{ opacity: state.index === 2 ? 1 : 0.5 }} width="40" height="40" fill="#c2995b" />
      </TabItemCenter>

      <TabItem onPress={() => goTo('Profile')}>
        {user.avatar != '' ?
          <AvatarIcon source={{uri: user.avatar}} />
          :
          <AccountIcon style={{opacity: state.index === 4 ? 1 : 0.5 }} width="24" height="24" fill="#c2995b" />

        }
      </TabItem>
    </TabArea>
  );
}