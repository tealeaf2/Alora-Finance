import { 
    PARSE_REQUEST,
    PARSE_SUCCESS,
    PARSE_FAILURE,
} from '../constants/parseConstants'; 

export const parseCurriculumReducer = (state = {}, action) => {
    switch (action.type) {
        case PARSE_REQUEST:
            return { loading: true }
        
        case PARSE_SUCCESS:
            return { loading: false, parse: action.payload }
        
        case PARSE_FAILURE:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}