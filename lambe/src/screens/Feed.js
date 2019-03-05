import React, { Component } from 'react'
import {
    StyleSheet, FlatList, View
} from 'react-native'

import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component{
    state ={
        posts: [
            {
                id: Math.random(),
                email: 'manoel@example.com',
                nickname: 'Manoel Tavares',
                image: require('../../assets/imgs/fence.jpg'),
                comments: [{
                    nickname: 'Jon Ray',
                    comment: 'Stunning'
                },{
                    nickname: 'Jon Doe',
                    comment: 'Beulty Photo'
                }]
            },
            {
                id: Math.random(),
                email: 'adria@example.com',
                nickname: 'Adria Mikaela',
                image: require('../../assets/imgs/bw.jpg'),
                comments: [{
                    nickname: 'Jon Ray',
                    comment: 'Stunning'
                }]
            }
        ]
    }

    render(){
        return(
            <View style={styles.container}>
                <Header />
                <FlatList 
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => 
                        <Post key={item.id} {...item}/> }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed