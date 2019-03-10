import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { connect } from 'react-redux'
import { createUser } from '../store/actions/user'

class Register extends Component{

    state ={
        name: '',
        email: '',
        password: ''
    }
    
    componentDidUpdate = prevProps =>{
        if(prevProps.isLoading && !this.props.isLoading){
            this.setState ({
                name: '',
                email: '',
                password: ''
            })
            this.props.navigation.navigate('Feed')
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput placeholder='Nome' style={styles.input}
                    autoFocus={true} value={this.state.name}
                    onChangeText={name => this.setState({ name })}/>
                <TextInput placeholder='Email' style={styles.input}
                    value={this.state.email} keyboardType="email-address"
                    onChangeText={email => this.setState({ email })}/>
                <TextInput placeholder='Senha' style={styles.input}
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={ password => this.setState({ password })}/>
                <TouchableOpacity onPress={() => { this.props.onCreateUser(this.state) }} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        marginTop: 10,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15,
    },
    button:{
        marginTop:30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    buttonText:{
        fontSize: 20,
        color: '#FFF',
        
    }
})

const mapStateToProps = ({ user }) =>{
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)