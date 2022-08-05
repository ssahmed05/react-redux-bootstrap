
import { combineReducers } from 'redux'
import SettingReducer from './SettingReducer'


const RootReducer = combineReducers({

    settings: SettingReducer

})

export default RootReducer
