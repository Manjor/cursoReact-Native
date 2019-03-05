import React, {Component} from 'react'
import Header from './src/components/Header'
import { View, Text,StyleSheet } from 'react-native'
import Post from './src/components/Post'

export default class App extends Component {
  render() {

    const comments = [
      {nickname: 'Manoel Tavares', comment: 'Muito Boa'},
      {nickname: 'Adria Mikaela', comment: 'Muito Ruim'},
      {nickname: 'Fulando de Tal', comment: 'Muito Topzera'},
    ]

    return (
      <View style={styles.container}>
        <Header/>
        <Post image={require('./assets/imgs/fence.jpg')} 
              comments={comments} />  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
  }
})