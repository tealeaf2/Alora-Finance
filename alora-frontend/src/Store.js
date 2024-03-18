import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { topicListReducer } from './redux/reducers/topicReducers'
import { unitListReducer } from './redux/reducers/unitReducers'
import { lessonListReducer,
        lessonDetailsReducer 
} from './redux/reducers/lessonReducers'

import { quizListReducer } from './redux/reducers/quizReducers'

import { listTreeNameReducer,
        updateTreeNameReducer
} from './redux/reducers/treeReducers';

import { accountLoginReducer,
        accountRegisterReducer,
        accountDetailsReducer,
        accountUpdateProfileReducer,
} from './redux/reducers/accountReducers'


const reducer = combineReducers({
    topicList: topicListReducer,
    unitList: unitListReducer,

    lessonList: lessonListReducer,
    lessonDetails: lessonDetailsReducer,

    quizList: quizListReducer,

    treeName: listTreeNameReducer,
    treeNameUpdate: updateTreeNameReducer,

    accountLogin: accountLoginReducer,
    accountRegister: accountRegisterReducer,
    accountDetails: accountDetailsReducer,
    accountUpdateProfile: accountUpdateProfileReducer,
})

const accountInfoFromStorage = localStorage.getItem('accountInfo') ?
    JSON.parse(localStorage.getItem('accountInfo')) : null

const initialState = {
    accountLogin: { accountInfo: accountInfoFromStorage
 },
}

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    // middleware: middleware,
});

// const store = configureStore(reducer, initialState,
//     composeWithDevTools(applyMiddleware(...middleware)))


export default store;