import {combineReducers} from 'redux';
import {produce} from 'immer';

import {types} from './actions';

const initialState = {
    userLogin: {}
}

const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            return(produce(state,draftState => {
                draftState.userLogin = action.payload
            }))
        default:
            return {...state};
    }
}

export const reducer = combineReducers({
    layoutReducer: layoutReducer
})