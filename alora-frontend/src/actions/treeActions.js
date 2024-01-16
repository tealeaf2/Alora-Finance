import axios from 'axios'

import { 
    NAME_LIST_REQUEST,
    NAME_LIST_SUCCESS,
    NAME_LIST_FAILURE,
    NAME_DETAILS_REQUEST,
    NAME_DETAILS_SUCCESS,
    NAME_DETAILS_FAILURE,
} from '../constants/treeConstants'; 

// ACTION CREATOR returning a function instead of an action through thunk
// RETURNS ALL NAMES IN DB
export const listTrees = () => async (dispatch) => {
    try {
        // Dispatches the action (with type NAME_LIST_REQUEST) to indicate the start of the async operation
        dispatch({ type: NAME_LIST_REQUEST });

        // Make an asynchronous API call (e.g., using axios)
        const { data } = await axios.get('/api/names/');

        // Dispatches the action (with type NAME_LIST_SUCCESS) when the API call is successful
        dispatch({
            type: NAME_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        // Dispatches the action (with type NAME_LIST_FAILURE) when there's an error
        dispatch({
            type: NAME_LIST_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

// RETURNS NAME BASED ON ID
export const listTreeDetails = (id) => async (dispatch) => {

    try {

        dispatch({ type: NAME_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/names/${id}`)

        dispatch({
            type: NAME_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NAME_DETAILS_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }

}