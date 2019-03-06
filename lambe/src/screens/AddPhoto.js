import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/posts'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

class AddPhoto extends Component{
    state = {
        image: null,
        comment: '',
    }

    pickImage = () =>{
        ImagePicker.showImagePicker({
            title: 'Escolha a Imagem',
            maxWidth: 600,
            maxWidth: 800
        }, res =>{
            if(!res.didCancel){
                this.setState({ image: { uri: res.uri, base64: res.data }}) 
            }
        })
    }

    save = async () =>{
        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments:[
                { nickname: this.props.name, comment: this.state.comment }
            ]
        })
        this.setState({ image: null, comment: '' })
        Alert.alert('Postado', 'Postado com Sucesso!')
        this.props.navigation.navigate('Feed')
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma Imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image}/>
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                        <Text style={styles.buttonText}>Escolha a Foto</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Algum Comentário para a foto?'
                        style={styles.input} value={this.state.comment}
                        onChangeText={ comment => this.setState({ comment })} />
                        <TouchableOpacity onPress={this.save} style={styles.buttonText}>
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        marginTop: Platform.oS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer:{
        width: '90%',
        height: Dimensions.get('window').width * 3 / 4,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 /4,
        resizeMode: 'center'
    },
    button:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    input:{
        marginTop: 20,
        width: '90%',
    }
})

const mapStateToProps = ({ user }) =>{
    return{
        name: user.name,
        email: user.email
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPhoto)
