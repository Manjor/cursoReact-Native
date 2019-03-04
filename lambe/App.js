import React, {Component} from 'react'
import Header from './src/components/Header'
import { View, Text } from 'react-native'
import Post from './src/components/Post'

export default class App extends Component {
  render() {

    const comments = [
      {nickname: 'Manoel Tavares', comment: 'Muito Boa'},
      {nickname: 'Adria Mikaela', comment: 'Muito Ruim'},
      {nickname: 'Fulando de Tal', comment: 'Muito Topzera'},
    ]

    return (
      <View>
        <Header/>
        <Post image={require('./assets/imgs/fence.jpg')} 
              comments={comments} />  
      </View>
    )
  }
}

