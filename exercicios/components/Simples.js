import React from 'react'
import { View,Text } from 'react-native'
import Padrao from '../styles/Padrao'

export default props => [
        <Text style={[Padrao.ex]} key={1}>{props.texto}</Text>,
        <Text style={Padrao.ex} key={2}>{props.texto}</Text>
]
    
    