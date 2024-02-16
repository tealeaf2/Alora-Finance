import { 
    ACCOUNT_LOGIN_REQUEST,
    ACCOUNT_LOGIN_SUCCESS,
    ACCOUNT_LOGIN_FAILURE,
    ACCOUNT_LOGOUT

} from '../constants/accountConstants'; 

import axios from 'axios'


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: ACCOUNT_LOGIN_REQUEST
        })

        // returns as json data
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        // console.log("DISPATCHED ACC REQUEST NOW GOING TO ASK FOR DATA")

        // send username + password = receive token
        const { data } = await axios.post(
            '/api/users/login/',
            { 'username': email, 'password': password },
            config
        )

        // console.log("GOT DATA")
        // console.log(data)

        // if we succeed, return success and data
        dispatch({
            type: ACCOUNT_LOGIN_SUCCESS,
            payload: data
        })
    
        // console.log("SENT DATATATATAAAAAAAAAA")

        localStorage.setItem('accountInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: ACCOUNT_LOGIN_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
