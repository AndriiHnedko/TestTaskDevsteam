import {
    REQUEST_POST,
    LOAD_POST,
} from './action'
import {combineReducers} from 'redux'


const initialState = {
    posts: []
}

const reducerPost = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POST:
            return Object.assign({}, state, {
                posts: [...state.posts, action.post]
            })
        case LOAD_POST:
            return Object.assign({}, state, {
                posts: []
            })
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    posts: reducerPost
})