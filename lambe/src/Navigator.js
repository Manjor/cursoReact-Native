import React from 'react'
import {
    Text, View
} from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'

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
        screen: Feed,
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