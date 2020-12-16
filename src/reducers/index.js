import {combineReducers} from 'redux'
import purchases from './purchases'
import listIsActive from './listIsActive'

export default combineReducers({
    purchases,
    listIsActive
})