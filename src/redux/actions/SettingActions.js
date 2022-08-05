import axios from "../../axios"

export const GET_SETTING_LIST = 'GET_SETTING_LIST';
export const UPDATE_SETTING = 'UPDATE_SETTING';


export const getSettings = () => (dispatch) => {
	axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => {
		return dispatch({
			type: GET_SETTING_LIST,
			payload: resp.data
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

