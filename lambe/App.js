import React, {Component} from 'react'
import Header from './src/components/Header'
import { View, Text } from 'react-native'
import Post from './src/components/Post'

export default class App extends Component {
  render() {
    return (
      <View>
        <Header/>
        <Post image={require('./assets/imgs/fence.jpg')} />  
      </View>
      
    )
  }
}

