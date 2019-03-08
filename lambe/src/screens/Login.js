import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'
import {
    View, Text, StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Login extends Component{

    state = {
        name: 'Temporário',
        email: '',
        password: ''
    }
    
    componentDidUpdate = prevProps =>{
        if(prevProps.isLoading && !this.props.isLoading){
            this.props.navigation.navigate('Profile')
        }
    }

    login = () =>{
        this.props.onLogin({...this.state})
    }

    signup = ()=>{
        this.props.navigation.navigate('Register')
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput placeholder='Email' style={styles.input}
                    autoFocus={true} keyboardType='email-address'
                    value={this.state.email} onChangeText={ email => this.setState({ email })}/>
                <TextInput placeholder='Senha' style={styles.input}
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={ password => this.setState({ password})} />
                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.signup} style={styles.button}>
                    <Text style={styles.buttonText}>Criar Nova Conta</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText:{
        fontSize: 20,
        color: '#FFF'
    },
    input:{
        marginTop: 20,
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    }
})

const mapStateToProps = ({ user }) =>{
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onLogin: user => dispatch(login(user))
    }
}

// export default Login
export default connect(mapStateToProps,mapDispatchToProps)(Login)