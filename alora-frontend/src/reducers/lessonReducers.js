import { 
    LESSON_LIST_REQUEST,
    LESSON_LIST_SUCCESS,
    LESSON_LIST_FAILURE
} from '../constants/lessonConstants'; 


// Initial state with an empty array of lessons
export const lessonListReducer = (state = { lessons: [] }, action) => {
    switch (action.type) {
        // When a request for lesson list is made
        case LESSON_LIST_REQUEST:
            // return state s.t. request is loading and empty lessons array
            return { loading: true, lessons: [] }

        // When the lesson list request is successful
        case LESSON_LIST_SUCCESS:
            // return state s.t. request not loading and lessons array filled 
            return { loading: false, lessons: action.payload }

        // When the lesson list request encounters an error
        case LESSON_LIST_FAILURE:
            // return state s.t. request not loading and error msg
            return { loading: false, error: action.payload }

        // Default case, returns the current state
        // if the action type doesn't match any of the defined cases
        default:
            return state
    }
};