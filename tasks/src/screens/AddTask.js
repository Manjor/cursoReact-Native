import React,{Component} from 'react'
import {
    Modal,
    View,
    Text,
    TextInput,
    DatePickerIOS,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
    Platform
} from 'react-native'
import moment from 'moment'
import commonStyles from '../commonStyles'

const initialState = {desc: '', date: new Date()}

export default class AddTask extends Component{
    state = {...initialState }

    save =()=>{
        if(!this.state.desc.trim()){
            Alert.alert('Dados Inválidos!', 'Informe uma descrição para a tarefa.')
            return
        }
        //Clona o stado atual
        const data = { ...this.state }
        //Chama o evento passado pelo props
        this.props.onSave(data)
        //Limpa o stado do componente
        this.setState({ ...initialState })
    }

    render(){
        return(
            <Modal onRequestClose={this.props.onCancel}
                visible={this.props.isVisible}
                animationType='slide' transparent={true}>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa!</Text>
                    <TextInput placeholder="Descrição" style={styles.input}
                        onChangeText={desc => this.setState({ desc })}
                        value={this.state.desc} />
                    {
                        Platform.OS === 'ios'? 
                        <DatePickerIOS mode='date' date={this.state.date}
                            onDateChange={date => this.setState({ date })} /> :
                            false
                    }   
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.offset}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    offset:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    button:{
        margin: 20,
        marginRight: 30,
        color: commonStyles.colors.default,
    },
    header:{
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.default,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 15,
    },
    input:{
        fontFamily: commonStyles.fontFamily,
        width: '90%',
        height: 40,
        marginTop: 10,
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6
    }
})