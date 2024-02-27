import { 
    ACCOUNT_LOGIN_REQUEST,
    ACCOUNT_LOGIN_SUCCESS,
    ACCOUNT_LOGIN_FAILURE,
    ACCOUNT_LOGOUT

} from '../constants/accountConstants'; 


// Initial state with an empty array of lessons
export const accountLoginReducer = (state = {}, action) => {
    switch (action.type) {
        // login request
        case ACCOUNT_LOGIN_REQUEST:
            // return state s.t. request is loading
            return { loading: true}

        // login success
        case ACCOUNT_LOGIN_SUCCESS:
            // not laoding + return info
            return { loading: false, accountInfo: action.payload }

        // login failure
        case ACCOUNT_LOGIN_FAILURE:
            // return state s.t. request not loading and error msg
            return { loading: false, error: action.payload }
        
        // logout
        case ACCOUNT_LOGOUT:
            return {}

        // Default case, returns the current state
        // if the action type doesn't match any of the defined cases
        default:
            return state
    }
};
