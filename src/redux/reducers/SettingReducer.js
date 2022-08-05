import { GET_SETTING_LIST, UPDATE_SETTING } from "../actions/SettingActions";

const initialState = {
    settingList: [
			{
				id:1,
				name: "John Xena"
			}
		]
}

const settingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SETTING_LIST:
            return {
                ...state,
                settingList: [...action.payload]
            }
        case UPDATE_SETTING:
            return {
                ...state,
                settingList: [...action.payload]
            }
        default:
            return {
                ...state,
            }

    }
}

export default settingReducer;

