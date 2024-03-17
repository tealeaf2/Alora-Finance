import axios from 'axios'

import { 
    TOPIC_LIST_REQUEST,
    TOPIC_LIST_SUCCESS,
    TOPIC_LIST_FAILURE
} from '../constants/topicConstants'; 

// ACTION CREATOR returning a function instead of an action through thunk
export const listTopics = () => async (dispatch) => {
    try {
        // Dispatches the action (with type TOPIC_LIST_REQUEST) to indicate the start of the async operation
        dispatch({ type: TOPIC_LIST_REQUEST });


        // Make an asynchronous API call (e.g., using axios)
        const { data } = await axios.get('/api/topics/');

        // Dispatches the action (with type TOPIC_LIST_SUCCESS) when the API call is successful
        dispatch({
            type: TOPIC_LIST_SUCCESS,
            payload: data,
        });

    } catch (error) {
        // Dispatches the action (with type TOPIC_LIST_FAILURE) when there's an error
        dispatch({
            type: TOPIC_LIST_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
};
