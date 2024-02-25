import axios from 'axios'

import { 
    QUIZ_LIST_REQUEST,
    QUIZ_LIST_SUCCESS,
    QUIZ_LIST_FAILURE
} from '../constants/quizConstants'; 

// ACTION CREATOR returning a function instead of an action through thunk
export const listQuizzes = (lesson_id) => async (dispatch) => {
    try {
        // Dispatches the action (with type QUIZ_LIST_REQUEST) to indicate the start of the async operation
        dispatch({ type: QUIZ_LIST_REQUEST });

        // Make an asynchronous API call (e.g., using axios)
        const { data } = await axios.get(`/api/lessons/${lesson_id}/quiz`);

        // Dispatches the action (with type QUIZ_LIST_SUCCESS) when the API call is successful
        dispatch({
            type: QUIZ_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        // Dispatches the action (with type QUIZ_LIST_FAILURE) when there's an error
        dispatch({
            type: QUIZ_LIST_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};
