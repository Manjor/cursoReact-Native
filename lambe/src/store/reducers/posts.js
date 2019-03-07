import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes'

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
        case ADD_COMMENT:
            return{
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.postId){
                        if(post.comments){
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        }else{
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default:
            return state
    }
}

export default reducer