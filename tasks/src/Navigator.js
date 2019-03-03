import React from 'react'
import { createStackNavigator, createAppContainer, createDrawerNavigator }from 'react-navigation'
import Agenda from './screens/Agenda'
import Auth from './screens/Auth'
import commonStyles from './commonStyles'


const MenuRouters = {
    Today:{
        name: 'Today',
        screen: props => <Agenda title='Hoje' daysAhead={0} {...props}/>,
        navigationOptions:{
            title: 'Hoje',
            header: null
        }
    },
    Tomorrow: {
        name: 'Tomorrow',
        screen: props => <Agenda title='Amanhã' daysAhead={1} {...props}/>,
        navigationOptions:{
            title: 'Amanhã'
        }
    },
    Week: {
        name: 'Week',
        screen: props => <Agenda title='Semana' daysAhead={7} {...props}/>,
        navigationOptions:{
            title: 'Semana'
        }
    },
    Month: {
        name: 'Month',
        screen: props => <Agenda title='Mês' daysAhead={30} {...props}/>,
        navigationOptions:{
            title: 'Mês'
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Today',
    contentOptions: {
        labelStyle:{
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20,
        },
        activeLabelStyle: {
            color: '#080'
        }
    }
}
const MenuNavigator = createDrawerNavigator(MenuRouters,MenuConfig)
const AppNavigator = createStackNavigator({
    Auth:{
        screen: Auth,
        navigationOptions: () => ({
            header: null
        })
    },
    Home: {
        screen: MenuNavigator,
        navigationOptions:()=> ({
            header: null
        })
    }
})


const MainNavigator = createAppContainer(AppNavigator)
export default MainNavigator