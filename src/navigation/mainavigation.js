import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import LoginForm from '../components/LoginForm';
import menu from './menunav';
// import forgot from '../components/forgotpassword';
// import register from '../components/register';
// import drawer from './DrawerNav'

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Menu" component={menu} />
        </Stack.Navigator>
    )
}