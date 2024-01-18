import axios from 'axios'

import { 
    NAME_DETAIL_REQUEST,
    NAME_DETAIL_SUCCESS,
    NAME_DETAIL_FAILURE,
    NAME_UPDATE_REQUEST,
    NAME_UPDATE_SUCCESS,
    NAME_UPDATE_FAILURE,
} from '../constants/treeConstants'; 

export const listTreeName = (id) => async (dispatch) => {
    try {
        // Dispatches the action (with type NAME_LIST_REQUEST) to indicate the start of the async operation
        dispatch({ type: NAME_DETAIL_REQUEST });

        // Make an asynchronous API call (e.g., using axios)
        const { data } = await axios.get(`/api/units/${id}/name`);

        // Dispatches the action (with type NAME_LIST_SUCCESS) when the API call is successful
        dispatch({
            type: NAME_DETAIL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        // Dispatches the action (with type NAME_LIST_FAILURE) when there's an error
        dispatch({
            type: NAME_DETAIL_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

export const updateTreeName = (id, name) => async (dispatch) => {

    try {

        dispatch({ type: NAME_UPDATE_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        //Calls the api in the backend and saves tree_name with new tempName
        const { data } = await axios.put(
            `/api/units/${id}/name`, 
            name,
            config
        )

        dispatch({
            type: NAME_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NAME_UPDATE_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }

}