import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import postsReducer from './reducers/PostsReducer'
import postCommentsReducer from './reducers/PostCommentsReducer'

const store = createStore(
    combineReducers({
        postsState: postsReducer,
        postCommentsState: postCommentsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store