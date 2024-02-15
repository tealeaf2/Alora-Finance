import axios from 'axios'

import { 
    LESSON_LIST_REQUEST,
    LESSON_LIST_SUCCESS,
    LESSON_LIST_FAILURE,
    LESSON_DETAILS_REQUEST,
    LESSON_DETAILS_SUCCESS,
    LESSON_DETAILS_FAILURE,
} from '../constants/lessonConstants'; 

// ACTION CREATOR returning a function instead of an action through thunk
export const listLessons = (number) => async (dispatch) => {
    try {
        // Dispatches the action (with type LESSON_LIST_REQUEST) to indicate the start of the async operation
        dispatch({ type: LESSON_LIST_REQUEST });

        // Make an asynchronous API call (e.g., using axios)
        const { data } = await axios.get(`/api/unit/${number}/lessons/`);

        // Dispatches the action (with type LESSON_LIST_SUCCESS) when the API call is successful
        dispatch({
            type: LESSON_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        // Dispatches the action (with type LESSON_LIST_FAILURE) when there's an error
        dispatch({
            type: LESSON_LIST_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};


export const listLessonDetails = (unit_id, lesson_id) => async (dispatch) => {

    try {

        dispatch({ type: LESSON_DETAILS_REQUEST })


        const { data } = await axios.get(`/api/units/${unit_id}/lessons/${lesson_id}`)

        dispatch({
            type: LESSON_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LESSON_DETAILS_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }

}