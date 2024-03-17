import { 
    UNIT_LIST_REQUEST,
    UNIT_LIST_SUCCESS,
    UNIT_LIST_FAILURE
} from '../constants/unitConstants'; 


// Initial state with an empty array of lessons
export const unitListReducer = (state = { units: [] }, action) => {
    switch (action.type) {
        // When a request for lesson list is made
        case UNIT_LIST_REQUEST:
            // return state s.t. request is loading and empty lessons array
            return { loading: true, units: [] }

        // When the lesson list request is successful
        case UNIT_LIST_SUCCESS:
            // return state s.t. request not loading and lessons array filled 
            return { loading: false, units: action.payload }

        // When the lesson list request encounters an error
        case UNIT_LIST_FAILURE:
            // return state s.t. request not loading and error msg
            return { loading: false, error: action.payload }
            // return { loading: false } 

        // Default case, returns the current state
        // if the action type doesn't match any of the defined cases
        default:
            return state
    }
};