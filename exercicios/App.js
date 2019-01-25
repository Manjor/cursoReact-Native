import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class App extends React.Component{
  render(){
	return (
		<View style={styles.container}> 
			<Text style={styles.f20}>App!</Text>
		</View>
	)
  }
}

const styles =  StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	f20:{
		fontSize: 20
	}
})