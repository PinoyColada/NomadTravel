import { createStore, combineReducers, } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import CommentReducer from './reducers/CommentsReducer'
import LikesReducer from './reducers/LikesReducer'
import PostReducer from './reducers/PostReducer'


const store = createStore(
    combineReducers({
        commentState: CommentReducer,
        likesState: LikesReducer,
        postState: PostReducer
    }),
    composeWithDevTools()
)

export default store