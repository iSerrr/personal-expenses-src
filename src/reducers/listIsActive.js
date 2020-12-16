import {LIST} from '../actions/actionsTypes'

const initialState = {
    listIsActive: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LIST:
            return {...state, listIsActive: !state.listIsActive}
        default:
            return state
    }
}