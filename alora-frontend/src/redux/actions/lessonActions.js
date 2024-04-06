import axios from 'axios'

import {
    LESSON_LIST_REQUEST,
    LESSON_LIST_SUCCESS,
    LESSON_LIST_FAILURE,
    LESSON_DETAILS_REQUEST,
    LESSON_DETAILS_SUCCESS,
    LESSON_DETAILS_FAILURE,
    LESSON_ASSIGN_REQUEST,
    LESSON_ASSIGN_SUCCESS,
    LESSON_ASSIGN_FAILURE,
    LESSON_DELETE_REQUEST,
    LESSON_DELETE_SUCCESS,
    LESSON_DELETE_FAILURE,
    TEACHER_IDS_REQUEST,
    TEACHER_IDS_SUCCESS,
    TEACHER_IDS_FAILURE,
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

export const listLessonDetails = (uid, lid) => async (dispatch) => {

    try {

        dispatch({ type: LESSON_DETAILS_REQUEST })


        const { data } = await axios.get(`/api/lessons/${uid}/${lid}/video/`)

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

//////////////////////// TEACHER SIDE ////////////////////////

export const listTeacherClassIds = (user_id) => async (dispatch) => {
    try {

        dispatch({ type: TEACHER_IDS_REQUEST })


        const { data } = await axios.get(`/api/teacher/class-ids/user/${user_id}/`)

        dispatch({
            type: TEACHER_IDS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TEACHER_IDS_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
}

export const assignLesson = (lid, dateAvailable, dateDue, class_id) => async (dispatch) => {
    try {

        dispatch({ type: LESSON_ASSIGN_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `/api/teacher/assign-lesson/${lid}/`,
            {
                'available_date': dateAvailable,
                'due_date': dateDue,
                'class_id': class_id,
            },
            config
        )

        dispatch({
            type: LESSON_ASSIGN_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LESSON_ASSIGN_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
}

export const deleteLesson = (lid, classId) => async (dispatch) => {
    try {
        dispatch({ type: LESSON_DELETE_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            },
            data: {
                'class_id': classId
            }
        }
        const { data } = await axios.delete(
            `/api/teacher/delete-lesson/${lid}/`,
            config
        )
        dispatch({
            type: LESSON_DELETE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LESSON_DELETE_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
}