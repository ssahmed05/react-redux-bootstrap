import axios from "../../axios"

export const GET_SETTING_LIST = 'GET_SETTING_LIST';
export const UPDATE_SETTING = 'UPDATE_SETTING';


export const getSettings = () => (dispatch) => {
    fetch('http://pmp-backend.test/api/get-timezone').then(resp => {
        resp.json(resp).then(data => {
            return dispatch({
                type: GET_SETTING_LIST,
                payload: data
            });
        });
    })
}

export const updateSettings = (payload) => (dispatch) => {

    axios.post('http://pmp-backend.test/api/update-setting', payload).then(resp => {
        console.log(resp);
    })
    // dispatch({
    //     type: UPDATE_SETTING,
    //     payload: data
    // });
    // console.log(payload);
    // fetch().then(resp => {
    //     return true;
    // });
}

