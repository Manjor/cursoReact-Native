import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './components/Simples'
import ParImpar from './components/Parimpar'
import { Inverter , MegaSena } from './components/Mult'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import ValidarProps  from './components/ValidarProps'
import Evento from './components/Evento'
import Avo from './components/ComunicacaoDireta'
import TextoSincronizado from './components/ComunicacaoIndireta'
import ListaFlex from './components/ListaFlex'
import Flex from './components/Flex'

export default createDrawerNavigator({
    Flex:{
        screen: Flex
    },
    ListaFlex:{
        screen: ListaFlex,
        navigationOptions: {title: 'Lista (Flex)'}
    },
    TextoSincronizado:{
        screen:() => TextoSincronizado,
        navigationOptions: {title: 'Texto Sincronizado'}
    },
    Avo: {
        screen: () => <Avo nome="Jõao" sobrenome="Silva" />
    },
    Evento:{
        screen:() => <Evento/>
    },
    ValidarProps:{
        screen:() => <ValidarProps ano={19}/>
    },
    Plataformas: {
        screen:() => <Plataformas/>
    },
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