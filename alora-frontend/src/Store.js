import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { unitListReducer } from './reducers/unitReducers'
import { lessonListReducer,
        lessonDetailsReducer 

} from './reducers/lessonReducers'

import { quizListReducer } from './reducers/quizReducers'

import { listTreeNameReducer,
        updateTreeNameReducer
} from './reducers/treeReducers';

import { accountLoginReducer,
        accountRegisterReducer,
} from './reducers/accountReducers'


const reducer = combineReducers({
    unitList: unitListReducer,

    lessonList: lessonListReducer,
    lessonDetails: lessonDetailsReducer,

    quizList: quizListReducer,

    treeName: listTreeNameReducer,
    treeNameUpdate: updateTreeNameReducer,

    accountLogin: accountLoginReducer,
    accountRegister: accountRegisterReducer,
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