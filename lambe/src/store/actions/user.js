import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED
} from './actionTypes'
import { setMessage } from './message'
import axios from 'axios'

const authBaseUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyCeNHSkZZ3nAI7yUa_OkBbUVyQwJ49xM9I'

export const userLogged = user =>{
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () =>{
    return {
        type: USER_LOGGED_OUT,
    }
}

export const createUser = user =>{
    return dispatch => {
        axios.post(`${authBaseUrl}/signupNewUser?key=${API_KEY}`,{
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .catch(err =>{
            dispatch(setMessage({
                title: 'Erro',
                text: 'Ocorreu um erro inesperado!'
            }))
        })
        .then(res =>{
            if(res.data.localId){
                axios.put(`/users/${res.data.localId}.json`,{
                    name: user.name
                }).catch(err => {
                    dispatch(setMessage({
                        title: 'Erro',
                        text: 'Ocorreu um erro inesperado!'
                    }))
                })
                    .then(res =>{
                        dispatch(setMessage({
                            title: 'Sucesso',
                            text: 'Usuário criado com Sucesso.'
                        }))
                    })
            }
        })
    }
}

export const loadingUser = () =>{
    return{
        type: LOADING_USER
    }
}

export const userLoaded = () =>{
    return{
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch =>{
        dispatch(loadingUser())
        axios.post(`${authBaseUrl}/verifyPassword?key=${API_KEY}`,{
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
            .catch( err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Ocorreu um erro inesperado!'
                }))
            })
            .then(res =>{
                if(res.data.localId){
                    axios.get(`/users/${res.data.localId}.json`)
                    .catch(err => {
                        dispatch(setMessage({
                            title: 'Erro',
                            text: 'Ocorreu um erro inesperado!'
                        }))
                    })
                    .then(res =>{
                        user.password = null,
                        user.name = res.data.name,
                        dispatch(userLogged(user))
                        dispatch(userLoaded())
                    })
                }
            })
    }
}