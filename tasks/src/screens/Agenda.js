import React, {Component} from 'react'
import {
    StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity, Platform, Alert
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'
import Task from '../components/Task'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActionButton from 'react-native-action-button'
import AddTask from './AddTask'

export default class Agenda extends Component{

    state = {
        tasks:[
            { id: Math.random(), desc: 'Comprar Curso React Native',
                estimateAt: new Date(), doneAt: new Date()},
            { id: Math.random(), desc: 'Conluir o Curso',
                estimateAt: new Date(), doneAt: null},
            { id: Math.random(), desc: 'Comprar Curso React Native',
                estimateAt: new Date(), doneAt: new Date()},
            { id: Math.random(), desc: 'Conluir o Curso',
                estimateAt: new Date(), doneAt: null},
            { id: Math.random(), desc: 'Comprar Curso React Native',
                estimateAt: new Date(), doneAt: new Date()},
            { id: Math.random(), desc: 'Conluir o Curso',
                estimateAt: new Date(), doneAt: null},
            { id: Math.random(), desc: 'Comprar Curso React Native',
                estimateAt: new Date(), doneAt: new Date()},
            { id: Math.random(), desc: 'Conluir o Curso',
                estimateAt: new Date(), doneAt: null},
            { id: Math.random(), desc: 'Comprar Curso React Native',
                estimateAt: new Date(), doneAt: new Date()},
            { id: Math.random(), desc: 'Conluir o Curso',
                estimateAt: new Date(), doneAt: null},
            { id: Math.random(), desc: 'Comprar Curso React Native',
                estimateAt: new Date(), doneAt: new Date()},
            { id: Math.random(), desc: 'Conluir o Curso',
                estimateAt: new Date(), doneAt: null},
            { id: Math.random(), desc: 'Comprar Curso React Native',
                estimateAt: new Date(), doneAt: new Date()},
            { id: Math.random(), desc: 'Conluir o Curso',
                estimateAt: new Date(), doneAt: null},
        ],
        visibleTask: [],
        showDoneTasks: true,
        showAddTask: false,
    }

    addTask = task =>{
        const tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(),
            desc: task.desc,
            estimateAt: task.date,
            doneAt: null
        })

        this.setState({ tasks, showAddTask: false}, this.filterTasks)
    }

    filterTasks = () =>{
        let visibleTask = null
        if(this.state.showDoneTasks){
            visibleTask = [...this.state.tasks]
        }else{
            const pending = task => task.doneAt === null

            visibleTask = this.state.tasks.filter(pending)
        }
        this.setState({ visibleTask })
    }

    toggleFilter = ()=>{
        this.setState({ showDoneTasks: !this.state.showDoneTasks},this.filterTasks)
    }

    //Função que é chamada assim que o componente é renderizado
    componentDidMount = () =>{
        this.filterTasks()
    }

    toggleTask = id =>{
        const tasks = this.state.tasks.map(task =>{
            if(task.id === id){
                task = {...task}
                task.doneAt = task.doneAt ? null : new Date()
            }
            return task
        })
        this.setState({ tasks },this.filterTasks)
    }

    render(){
        return(
            <View style={styles.container}>
            <AddTask isVisible={this.state.showAddTask}
                onSave={this.addTask}
                onCancel={() => this.setState({ showAddTask: false})}/>
                <ImageBackground source={todayImage} 
                    style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks ? 'eye': 'eye-slash'}
                                size={20} color={commonStyles.colors.secondary}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br').format('ddd,D [de] MMMM')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.tasksContainer}>
                    <FlatList data={this.state.visibleTask} keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item} toggleTask={this.toggleTask} />} />
                </View>
                <ActionButton buttonColor={commonStyles.colors.today}
                    onPress={() => {this.setState({ showAddTask: true })}} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    background:{
        flex: 3,
    },
    titleBar:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    title:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subtitle:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    tasksContainer:{
        flex: 7,
    },
    iconBar:{
        marginTop: Platform.OS == 'ios' ? 30:10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})