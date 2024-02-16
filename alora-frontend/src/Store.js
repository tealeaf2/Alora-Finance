import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { unitListReducer } from './reducers/unitReducers'
import { lessonListReducer,
        lessonDetailsReducer 

} from './reducers/lessonReducers'

import { quizListReducer } from './reducers/quizReducers'

import { listTreeNameReducer,
        updateTreeNameReducer
} from './reducers/treeReducers';

import { accountLoginReducer } from './reducers/accountReducers'


const reducer = combineReducers({
    unitList: unitListReducer,

    lessonList: lessonListReducer,
    lessonDetails: lessonDetailsReducer,

    quizList: quizListReducer,

    treeName: listTreeNameReducer,
    treeNameUpdate: updateTreeNameReducer,

    accountLogin: accountLoginReducer,
})

const accountLoginInfoFromStorage = localStorage.getItem('accountInfo') ?
    JSON.parse(localStorage.getItem('accountInfo')) : null

const initialState = {
    accountLogin: { accountInfo: accountLoginInfoFromStorage },
}

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    // middleware: middleware,
});

// const store = configureStore(reducer, initialState,
//     composeWithDevTools(applyMiddleware(...middleware)))


export default store;