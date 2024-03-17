import { 
    TOPIC_LIST_REQUEST,
    TOPIC_LIST_SUCCESS,
    TOPIC_LIST_FAILURE
} from '../constants/topicConstants'; 


// Initial state with an empty array of lessons
export const topicListReducer = (state = { topics: [] }, action) => {
    switch (action.type) {
        // When a request for lesson list is made
        case TOPIC_LIST_REQUEST:
            // return state s.t. request is loading and empty lessons array
            return { loading: true, topics: [] }

        // When the lesson list request is successful
        case TOPIC_LIST_SUCCESS:
            // return state s.t. request not loading and lessons array filled 
            return { loading: false, topics: action.payload }

        // When the lesson list request encounters an error
        case TOPIC_LIST_FAILURE:
            // return state s.t. request not loading and error msg
            return { loading: false, error: action.payload }
            // return { loading: false } 

        // Default case, returns the current state
        // if the action type doesn't match any of the defined cases
        default:
            return state
    }
};