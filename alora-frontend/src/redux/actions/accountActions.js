import { 
    ACCOUNT_LOGIN_REQUEST,
    ACCOUNT_LOGIN_SUCCESS,
    ACCOUNT_LOGIN_FAILURE,
    ACCOUNT_LOGOUT,

    ACCOUNT_REGISTER_REQUEST,
    ACCOUNT_REGISTER_SUCCESS,
    ACCOUNT_REGISTER_FAILURE,

    ACCOUNT_DETAILS_REQUEST,
    ACCOUNT_DETAILS_SUCCESS,
    ACCOUNT_DETAILS_FAILURE,
    ACCOUNT_DETAILS_RESET,
    ACCOUNT_LIST_RESET,

    ACCOUNT_UPDATE_PROFILE_REQUEST,
    ACCOUNT_UPDATE_PROFILE_SUCCESS,
    ACCOUNT_UPDATE_PROFILE_FAILURE,
    ACCOUNT_UPDATE_PROFILE_RESET,

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


export const register = (fname, lname, account_type, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: ACCOUNT_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/users/register/',
            { 'first_name': fname, 'last_name': lname, 'account_type': account_type, 'email': email, 'password': password },
            config
        )

        dispatch({
            type: ACCOUNT_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: ACCOUNT_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('accountInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: ACCOUNT_REGISTER_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('accountInfo')
    dispatch({ type: ACCOUNT_LOGOUT })
    dispatch({ type: ACCOUNT_DETAILS_RESET })
    dispatch({ type: ACCOUNT_LIST_RESET })
}

// gets account details based on account id
export const getAccountDetails = (id) => async (dispatch, getState) => {
    try {

        // console.log("\n\n\n\nacc action\n\n\n\n")

        dispatch({
            type: ACCOUNT_DETAILS_REQUEST
        })

        const {
            accountLogin: { accountInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${accountInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/users/${id}/`,
            config
        )

        console.log("DATA: ")
        console.log(data)

        dispatch({
            type: ACCOUNT_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ACCOUNT_DETAILS_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const updateAccountProfile = (account) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ACCOUNT_UPDATE_PROFILE_REQUEST
        })

        const {
            accountLogin: { accountInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${accountInfo.token}`
            }
        }

        const { data } = await axios.put(
            `/api/users/profile/update/`,
            account,
            config
        )

        dispatch({
            type: ACCOUNT_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        dispatch({
            type: ACCOUNT_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('accountInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: ACCOUNT_UPDATE_PROFILE_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


// export const listUsers = () => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: USER_LIST_REQUEST
//         })

//         const {
//             userLogin: { userInfo },
//         } = getState()

//         const config = {
//             headers: {
//                 'Content-type': 'application/json',
//                 Authorization: `Bearer ${userInfo.token}`
//             }
//         }

//         const { data } = await axios.get(
//             `/api/users/`,
//             config
//         )

//         dispatch({
//             type: USER_LIST_SUCCESS,
//             payload: data
//         })


//     } catch (error) {
//         dispatch({
//             type: USER_LIST_FAIL,
//             payload: error.response && error.response.data.detail
//                 ? error.response.data.detail
//                 : error.message,
//         })
//     }
// }


// export const deleteUser = (id) => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: USER_DELETE_REQUEST
//         })

//         const {
//             userLogin: { userInfo },
//         } = getState()

//         const config = {
//             headers: {
//                 'Content-type': 'application/json',
//                 Authorization: `Bearer ${userInfo.token}`
//             }
//         }

//         const { data } = await axios.delete(
//             `/api/users/delete/${id}/`,
//             config
//         )

//         dispatch({
//             type: USER_DELETE_SUCCESS,
//             payload: data
//         })


//     } catch (error) {
//         dispatch({
//             type: USER_DELETE_FAIL,
//             payload: error.response && error.response.data.detail
//                 ? error.response.data.detail
//                 : error.message,
//         })
//     }
// }


// export const updateUser = (user) => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: USER_UPDATE_REQUEST
//         })

//         const {
//             userLogin: { userInfo },
//         } = getState()

//         const config = {
//             headers: {
//                 'Content-type': 'application/json',
//                 Authorization: `Bearer ${userInfo.token}`
//             }
//         }

//         const { data } = await axios.put(
//             `/api/users/update/${user._id}/`,
//             user,
//             config
//         )

//         dispatch({
//             type: USER_UPDATE_SUCCESS,
//         })

//         dispatch({
//             type: USER_DETAILS_SUCCESS,
//             payload: data
//         })


//     } catch (error) {
//         dispatch({
//             type: USER_UPDATE_FAIL,
//             payload: error.response && error.response.data.detail
//                 ? error.response.data.detail
//                 : error.message,
//         })
//     }
// }