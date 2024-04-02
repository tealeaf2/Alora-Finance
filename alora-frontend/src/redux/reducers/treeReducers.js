import { 
    NAME_UPDATE_REQUEST,
    NAME_UPDATE_SUCCESS,
    NAME_UPDATE_FAILURE,
    NAME_DETAIL_REQUEST,
    NAME_DETAIL_SUCCESS,
    NAME_DETAIL_FAILURE
} from '../constants/treeConstants'; 

export const listTreeNamesReducer = (state = { treeNameGet: [] }, action) => {
    switch (action.type) {
        // When a request looking for name
        case NAME_DETAIL_REQUEST:
            // return state s.t. request is loading and returns name dict with null value
            return { loading: true, treeNameGet: [] }

        // When the NAME list request is successful
        case NAME_DETAIL_SUCCESS:
            // return state s.t. request not loading and NAME is successful, returning tree_name
            return { loading: false, treeNameGet: action.payload }

        // When the NAME list request encounters an error
        case NAME_DETAIL_FAILURE:
            // return state s.t. request not loading and error msg
            return { loading: false, error: action.payload }

        // Default case, returns the current state
        // if the action type doesn't match any of the defined cases
        default:
            return state
    }
};

export const updateTreeNameReducer = (state = { treeNameUpdate: [] }, action) => {
    switch (action.type) {
        case NAME_UPDATE_REQUEST:
            return { loading: true, state}
        
        case NAME_UPDATE_SUCCESS:
            return { loading: false, treeNameUpdate: action.payload }
        
        case NAME_UPDATE_FAILURE:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}