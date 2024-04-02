import axios from 'axios'

import { 
    QUIZ_LIST_REQUEST,
    QUIZ_LIST_SUCCESS,
    QUIZ_LIST_FAILURE,
    QUIZ_UPDATE_REQUEST,
    QUIZ_UPDATE_SUCCESS,
    QUIZ_UPDATE_FAILURE
} from '../constants/quizConstants'; 

// ACTION CREATOR returning a function instead of an action through thunk
export const listQuizzes = (lesson_id, user_id) => async (dispatch) => {
    try {
        // Dispatches the action (with type QUIZ_LIST_REQUEST) to indicate the start of the async operation
        dispatch({ type: QUIZ_LIST_REQUEST });

        // Make an asynchronous API call (e.g., using axios)
        const { data } = await axios.get(`/api/lessons/${lesson_id}/quiz/user/${user_id}`);

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

export const updateQuiz = (lesson_id, user_id, score) => async(dispatch) => {
    try {
        // Dispatches the action (with type QUIZ_LIST_REQUEST) to indicate the start of the async operation
        dispatch({ type: QUIZ_UPDATE_REQUEST });

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        // Make an asynchronous API call (e.g., using axios)
        const { data } = await axios.put(
            `/api/lessons/${lesson_id}/quiz/update-user/${user_id}/`,
            {'lesson_grade': score},
            config
            )

        // Dispatches the action (with type QUIZ_UPDATE_SUCCESS) when the API call is successful
        dispatch({
            type: QUIZ_UPDATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        // Dispatches the action (with type QUIZ_UPDATE_FAILURE) when there's an error
        dispatch({
            type: QUIZ_UPDATE_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    } 
}
