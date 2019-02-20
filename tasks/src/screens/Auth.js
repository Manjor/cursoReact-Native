import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'
import commonStyles from '../commonStyles'
import backgroundImage from '../../assets/imgs/login.jpg'

export default class Auth extends Component {

    state = {
        stageNew: false,
        name: '',
        email: '',
        passowrd: '',
        confirmPassword: '',
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            Alert.alert('Sucesso', 'Criar Conta')
        } else {
            Alert.alert('Sucesso', 'Logar')
        }
    }

    render() {
        return (
            <ImageBackground source={backgroundImage}
                             style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stateNew ? 'Cria a sua conta' : 'Informe seus Dados'}
                    </Text>
                    {this.state.stageNew &&
                    <TextInput placeholder="Nome" style={styles.input}
                               value={this.state.name}
                               onChangeText={name => this.setState({name})}/>}
                    <TextInput placeholder="Email" style={styles.input}
                               value={this.state.email}
                               onChangeText={email => this.setState({email})}/>
                    <TextInput placeholder='Senha' style={styles.input}
                               value={this.state.passowrd}
                               onChangeText={password => this.setState({password})}/>
                    {this.state.stageNew &&
                    <TextInput placeholder='Cofirmação' style={styles.input}
                               value={this.state.confirmPassword}
                               onChangeText={confirmPassword => this.setState({confirmPassword})}/>}
                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}
                                  {this.state.stageNew ? 'Register' : 'Entrar'}>
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{padding: 10}}
                                  onPress={() => this.setState({stageNew: !this.state.stageNew})}>
                    <Text style={styles.buttonText}>
                        {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }

}