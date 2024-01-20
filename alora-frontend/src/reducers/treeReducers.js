import { 
    NAME_LIST_REQUEST,
    NAME_LIST_SUCCESS,
    NAME_LIST_FAILURE,
    NAME_DETAILS_REQUEST,
    NAME_DETAILS_SUCCESS,
    NAME_DETAILS_FAILURE
} from '../constants/treeConstants'; 


// Initial state with an empty array of names
// RETURNS ALL PROFILES
export const treeListReducer = (state = { names: [] }, action) => {
    switch (action.type) {
        // When a request for NAME list is made
        case NAME_LIST_REQUEST:
            // return state s.t. request is loading and empty NAMEs array
            return { loading: true, names: [] }

        // When the NAME list request is successful
        case NAME_LIST_SUCCESS:
            // return state s.t. request not loading and NAMEs array filled 
            return { loading: false, names: action.payload }

        // When the NAME list request encounters an error
        case NAME_LIST_FAILURE:
            // return state s.t. request not loading and error msg
            return { loading: false, error: action.payload }

        // Default case, returns the current state
        // if the action type doesn't match any of the defined cases
        default:
            return state
    }
};

export const treeDetailsReducer = (state = { tree: {}}, action) => {
    switch (action.type) {
        case NAME_DETAILS_REQUEST:
            return { loading: true, ...state}
        
        case NAME_DETAILS_SUCCESS:
            return { loading: false, tree: action.payload }
        
        case NAME_DETAILS_FAILURE:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}