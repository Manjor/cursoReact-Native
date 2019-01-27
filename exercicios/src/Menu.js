import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './components/Simples'
import ParImpar from './components/Parimpar'
import { Inverter , MegaSena } from './components/Mult'
import Contador from './components/Contador'

export default createDrawerNavigator({
    Contador: {
        screen: () => <Contador numeroInicial={100}/>
    },
    MegaSena:{
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: { title: 'MegaSena' }
    },
    Inverter: {
        screen: () => <Inverter texto="Manoel Tavares" />,
    },
    ParImpar: {
        screen: () => <ParImpar numero={11}/>,
        navigationOptions: { title: 'Par & Impar' }
    },
    Simples: {
        screen: () => <Simples texto="Flexível"/>
    }
}, { drawerWidth: 300 })