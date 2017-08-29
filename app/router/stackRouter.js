import {StackNavigator} from 'react-navigation'
import HomeScreen from '../containers/home/HomeScreen'
import LoginScreen from '../containers/login/LoginScreen'
import RegisterScreen from '../containers/register/RegisterScreen'
import React from 'react'

export const Just_Do_It = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        },
    },

    Login: {
        screen: LoginScreen,
    },
    Register: {
        screen: RegisterScreen,
    },

}, {
    initialRouteName: 'Home',
});