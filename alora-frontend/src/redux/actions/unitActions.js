import axios from 'axios'

import { 
    UNIT_LIST_REQUEST,
    UNIT_LIST_SUCCESS,
    UNIT_LIST_FAILURE
} from '../constants/unitConstants'; 

// ACTION CREATOR returning a function instead of an action through thunk
export const listUnits = (tid) => async (dispatch) => {
    try {
        // Dispatches the action (with type TOPIC_LIST_REQUEST) to indicate the start of the async operation
        dispatch({ type: UNIT_LIST_REQUEST });


        // Make an asynchronous API call (e.g., using axios)
        const { data } = await axios.get(`/api/units/${tid}/`);

        // Dispatches the action (with type TOPIC_LIST_SUCCESS) when the API call is successful
        dispatch({
            type: UNIT_LIST_SUCCESS,
            payload: data,
        });

    } catch (error) {
        // Dispatches the action (with type TOPIC_LIST_FAILURE) when there's an error
        dispatch({
            type: UNIT_LIST_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
