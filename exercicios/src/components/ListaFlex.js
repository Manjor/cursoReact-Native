import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'Jõao', nota: 7.9},
    { id: 2, nome: 'Manoel', nota: 7.9},
    { id: 3, nome: 'Junior', nota: 7.9},
    { id: 4, nome: 'Oliveira', nota: 7.9},
    { id: 5, nome: 'Maria', nota: 7.9},
    { id: 6, nome: 'Adria', nota: 7.9},
    { id: 7, nome: 'Ana', nota: 7.9},
    { id: 8, nome: 'Rebeca', nota: 7.9},
    
    { id: 11, nome: 'Jõao', nota: 7.9},
    { id: 12, nome: 'Manoel', nota: 7.9},
    { id: 13, nome: 'Junior', nota: 7.9},
    { id: 14, nome: 'Oliveira', nota: 7.9},
    { id: 15, nome: 'Maria', nota: 7.9},
    { id: 16, nome: 'Adria', nota: 7.9},
    { id: 17, nome: 'Ana', nota: 7.9},
    { id: 18, nome: 'Rebeca', nota: 7.9},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props =>{
    //Recebe um objeto que possui um atributo item
    //Destructuring
    const renderItem = ({item}) =>{
        return <Aluno {...item}/>
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} 
                keyExtractor={(_,index) => index.toString()}/>
        </ScrollView>
    )
}