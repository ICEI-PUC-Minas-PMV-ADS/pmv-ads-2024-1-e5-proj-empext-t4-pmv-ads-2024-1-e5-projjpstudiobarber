import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/CustomTabBar";

import Home from '../screens/Home';
import Search from '../screens/Search';
import Appointments from '../screens/Home';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default () => (

  
    <Tab.Navigator
    screenOptions={{
        headerShown: true,
        headerStyle: {
            height: 40, 
            backgroundColor: 'black', 
        },
        headerTitle: '', 
    }}
    tabBar={props => <CustomTabBar {...props} />}
>
     
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Appointments" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>    
);