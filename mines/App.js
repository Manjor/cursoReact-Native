import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>   
        <Text style={styles.instructions}>
          Tamanho da grade:
          {params.getRowsAmount()}X{params.getColumnsAmount()}
        </Text>
        <Field/>   
        <Field opened nearMines={1}/>   
        <Field opened nearMines={2}/>   
        <Field opened nearMines={3}/>   
        <Field opened nearMines={6}/>   
        <Field mined/>
        <Field opened mined/>
        <Field opened mined exploded/>
        <Field flagged opened/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
