import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component{
    
    state = {
        numero: this.props.numeroInicial
    }

    //Caso usar funções diretas é necessário fazer o bind no construtor
    // constructor(props){
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

    maisUm = () =>{
        this.setState({ numero: this.state.numero + 1 })
    }
    //Usando arrow function ja resolve o problema do bind
    limpar = () =>{
        this.setState({ numero: this.props.numeroInicial })
    }

    render(){
        return (
            <View>
                <Text style={{fontSize:30}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}
                    >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}