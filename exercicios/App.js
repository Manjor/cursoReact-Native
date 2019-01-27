import React from 'react'
import { View, StyleSheet } from 'react-native'
import Simples from './src/components/Simples'
import ParImpar from './src/components/Parimpar'
import { Inverter , MegaSena } from './src/components/Mult'

export default class App extends React.Component{
  render(){
	return (
		<View style={styles.container}> 
			<Simples texto='Flexível!!!'/>
			<ParImpar numero={31}/>
			<Inverter texto='React Nativo'/>
			<MegaSena numeros={6}/>
		</View>
	)
  }
}

const styles =  StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})