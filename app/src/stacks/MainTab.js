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

    // Integrador 001
    <Tab.Navigator
    screenOptions={{
        headerShown: true,
        headerStyle: {
            height: 40, // Define a altura do header
            backgroundColor: 'black', // Define a cor de fundo como transparente
        },
        headerTitle: '', // Remove o texto do header
    }}
    tabBar={props => <CustomTabBar {...props} />}
>
     {/*</Tab.Navigator><Tab.Navigator tabBar={props=><CustomTabBar {...props} />}> */}
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Appointments" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>    
);