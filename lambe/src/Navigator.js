import React from 'react'
import {
    Text, View
} from 'react-native'
import { createBottomTabNavigator, createSwitchNavigator,createStackNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

const authRouter = createStackNavigator({
    Login:{ screen: Login, navigationOptions: {title: 'Login'}},
    Register: { screen: Register, navigationOptions:{ title: 'Register'}}
})

const LoginOrProfileRouter = createSwitchNavigator({
    Auth: authRouter,
    Profile: Profile
})

const MenuRoutes = {
    Feed:{
        name: 'Feed',
        screen: Feed,
        navigationOptions:{
            title: 'Feed',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={30} color={tintColor}/>
        }
    },
    Add:{
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions:{
            title: 'Add Photo',
            tabBarIcon: ({ tintColor }) =>
                <Icon name="camera" size={30} color={tintColor}/>
        }
    },
    Profile:{
        name: 'Profile',
        screen: LoginOrProfileRouter,
        navigationOptions:{
            title: 'Profile',
            tabBarIcon: ({ tintColor }) =>
                <Icon name="user" size={30} color={tintColor}/>
        }
    }
}


const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions:{
        showLabel: false,
    }
}
const TabNavigator = createBottomTabNavigator(MenuRoutes,MenuConfig)
export default createAppContainer(TabNavigator)