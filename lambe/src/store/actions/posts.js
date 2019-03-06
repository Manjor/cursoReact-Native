import { ADD_POST } from './actionTypes'

export const addPost = post =>{
    return{
        type: ADD_POST,
        payload: post
    }
}