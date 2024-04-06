import axios from 'axios'

import { 
    PARSE_REQUEST,
    PARSE_SUCCESS,
    PARSE_FAILURE,
} from '../constants/parseConstants'; 

export const parseCurriculum = () => async (dispatch) => {
    try {
        dispatch({ type: PARSE_REQUEST })

        const { data } = await axios.post(
            `/api/parse-quiz-file/`
        )
        dispatch({
            type: PARSE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PARSE_FAILURE,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        });
    }
}