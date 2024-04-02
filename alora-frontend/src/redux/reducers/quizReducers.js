import { 
    QUIZ_LIST_REQUEST,
    QUIZ_LIST_SUCCESS,
    QUIZ_LIST_FAILURE,

    QUIZ_UPDATE_REQUEST,
    QUIZ_UPDATE_SUCCESS,
    QUIZ_UPDATE_FAILURE,
} from '../constants/quizConstants'; 

export const quizListReducer = (state = { quiz: [] }, action) => {
    switch (action.type) {
        // When a request for QUIZ list is made
        case QUIZ_LIST_REQUEST:
            // return state s.t. request is loading and empty quizzes array
            return { loading: true, quiz: [] }

        // When the QUIZ LIST request is successful
        case QUIZ_LIST_SUCCESS:
            // return state s.t. request not loading and quizzes array filled 
            return { loading: false, quiz: action.payload }

        // When the QUIZ LIST request encounters an error
        case QUIZ_LIST_FAILURE:
            // return state s.t. request not loading and error msg
            return { loading: false, error: action.payload }

        // Default case, returns the current state
        // if the action type doesn't match any of the defined cases
        default:
            return state
    }
};

export const quizUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        // When a request for QUIZ update is made
        case QUIZ_UPDATE_REQUEST:
            // return state s.t. request is loading and empty quizzes array
            return { loading: true }

        // When the QUIZ update request is successful
        case QUIZ_UPDATE_SUCCESS:
            // return state s.t. request not loading and quizzes array filled 
            return { loading: false, quizUpdate: action.payload }

        // When the QUIZ update request encounters an error
        case QUIZ_UPDATE_FAILURE:
            // return state s.t. request not loading and error msg
            return { loading: false, error: action.payload }

        // Default case, returns the current state
        // if the action type doesn't match any of the defined cases
        default:
            return state
    }
};