import { ADD_POST } from '../actions/actionTypes'

const initialState = {
    posts: [
        {
            id: Math.random(),
            email: 'manoel@example.com',
            nickname: 'Manoel Tavares',
            image: require('../../../assets/imgs/fence.jpg'),
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
            image: require('../../../assets/imgs/bw.jpg'),
            comments: [{
                nickname: 'Jon Ray',
                comment: 'Stunning'
            }]
        }
    ]
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
}

export default reducer