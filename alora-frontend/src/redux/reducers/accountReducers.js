import { 
    ACCOUNT_LOGIN_REQUEST,
    ACCOUNT_LOGIN_SUCCESS,
    ACCOUNT_LOGIN_FAILURE,
    ACCOUNT_LOGOUT,

    ACCOUNT_REGISTER_REQUEST,
    ACCOUNT_REGISTER_SUCCESS,
    ACCOUNT_REGISTER_FAILURE,

    ACCOUNT_DETAILS_REQUEST,
    ACCOUNT_DETAILS_SUCCESS,
    ACCOUNT_DETAILS_FAILURE,
    ACCOUNT_DETAILS_RESET,
    ACCOUNT_LIST_RESET,

    ACCOUNT_UPDATE_PROFILE_REQUEST,
    ACCOUNT_UPDATE_PROFILE_SUCCESS,
    ACCOUNT_UPDATE_PROFILE_FAILURE,
    ACCOUNT_UPDATE_PROFILE_RESET,

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



// Initial state with an empty array of lessons
export const accountRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        // login request
        case ACCOUNT_REGISTER_REQUEST:
            // return state s.t. request is loading
            return { loading: true}

        // login success
        case ACCOUNT_REGISTER_SUCCESS:
            // not laoding + return info
            return { loading: false, accountInfo: action.payload }

        // login failure
        case ACCOUNT_REGISTER_FAILURE:
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

// getting account details
export const accountDetailsReducer = (state = { account: {} }, action) => {

    // console.log("\n\n\n\nacc reducer\n\n\n\n")
    // console.log(action.type)


    switch (action.type) {
        case ACCOUNT_DETAILS_REQUEST:
            return { ...state, loading: true }

        case ACCOUNT_DETAILS_SUCCESS:
            return { loading: false, account: action.payload }

        case ACCOUNT_DETAILS_FAILURE:
            return { loading: false, error: action.payload }

        case ACCOUNT_DETAILS_RESET:
            return { account: {} }


        default:
            // console.log("\n\n\n\nACCOUNT DETAILS REDUCER default\n\n\n\n")

            return state
    }
}

export const accountUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case ACCOUNT_UPDATE_PROFILE_REQUEST:
            return { loading: true }

        case ACCOUNT_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true, accountInfo: action.payload }

        case ACCOUNT_UPDATE_PROFILE_FAILURE:
            return { loading: false, error: action.payload }

        case ACCOUNT_UPDATE_PROFILE_RESET:
            return {}

        default:
            return state
    }
}