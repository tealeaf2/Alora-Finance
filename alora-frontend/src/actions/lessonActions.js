import axios from 'axios'

import { 
    LESSON_LIST_REQUEST,
    LESSON_LIST_SUCCESS,
    LESSON_LIST_FAILURE
} from '../constants/lessonConstants'; 

// ACTION CREATOR returning a function instead of an action through thunk
const listLessons = () => async (dispatch) => {
    try {
        // Dispatches the action (with type LESSON_LIST_REQUEST) to indicate the start of the async operation
        dispatch({ type: LESSON_LIST_REQUEST });

        // Make an asynchronous API call (e.g., using axios)
        const { data } = await axios.get('/api/lessons/');

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

try {
    const {data} = await axios.get('api/units/')
    setUnits(data)
} catch (error) {
    console.log(error.message);
}