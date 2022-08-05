import { GET_SETTING_LIST, UPDATE_SETTING } from "../actions/SettingActions";

const initialState = [
]

const settingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SETTING_LIST:
            return [
							...action.payload
            ]
        case UPDATE_SETTING:
            return [
                ...action.payload
							]
        default:
            return [
                ...state,
							]

    }
}

export default settingReducer;

