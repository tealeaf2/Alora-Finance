import { 
    QUIZ_LIST_REQUEST,
    QUIZ_LIST_SUCCESS,
    QUIZ_LIST_FAILURE
} from '../constants/quizConstants'; 


// Initial state with an empty array of quizzes
// export const quizListReducer = (state = { quiz: [] }, action) => {
//     switch (action.type) {
//         // When a request for QUIZ list is made
//         case QUIZ_LIST_REQUEST:
//             // return state s.t. request is loading and empty quizzes array
//             return { loading: true, quiz: [] }

//         // When the QUIZ list request is successful
//         case QUIZ_LIST_SUCCESS:
//             // return state s.t. request not loading and quizzes array filled 
//             return { loading: false, quiz: action.payload }

//         // When the QUIZ list request encounters an error
//         case QUIZ_LIST_FAILURE:
//             // return state s.t. request not loading and error msg
//             return { loading: false, error: action.payload }

//         // Default case, returns the current state
//         // if the action type doesn't match any of the defined cases
//         default:
//             return state
//     }
// };

export const quizListReducer = (state = { quiz: [] }, action) => {
    switch (action.type) {
        // When a request for QUIZ list is made
        case QUIZ_LIST_REQUEST:
            // return state s.t. request is loading and empty quizzes array
            return { loading: true, quiz: [] }

        // When the QUIZ list request is successful
        case QUIZ_LIST_SUCCESS:
            // return state s.t. request not loading and quizzes array filled 
            return { loading: false, quiz: action.payload }

        // When the QUIZ list request encounters an error
        case QUIZ_LIST_FAILURE:
            // return state s.t. request not loading and error msg
            return { loading: false, error: action.payload }

        // Default case, returns the current state
        // if the action type doesn't match any of the defined cases
        default:
            return state
    }
};