import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import agenda from "../page/agenda"
import galeri from "../page/galeri"
import live from "../page/live"
import mempelai from "../page/mempelai"
import penutup from "../page/penutup"
import sampul from "../page/sampul"

const Tab = createBottomTabNavigator();

export default ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName="sampul"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'sampul') {
                        iconName = 'home';
                    } else if (route.name === 'agenda') {
                        iconName = 'book';
                    } else if (route.name === 'galeri') {
                        iconName = 'images';
                    } else if (route.name === 'live') {
                        iconName = 'live-tv';
                    } else if (route.name === 'mempelai') {
                        iconName = 'emoji-people';
                    } else if (route.name === 'penutup') {
                        iconName = 'close-o';
                    }
                    // You can return any component that you like here!
                    return <Icon name={iconName} size={35} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: false
            }}
        >
            <Tab.Screen name="sampul" component={sampul} />
            <Tab.Screen name="agenda" component={agenda} />
            <Tab.Screen name="galeri" component={galeri} />
            <Tab.Screen name="live" component={live} />
            <Tab.Screen name="mempelai" component={mempelai} />
            <Tab.Screen name="penutup" component={penutup} />
        </Tab.Navigator>
    )
}