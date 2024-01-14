import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { unitListReducer } from './reducers/unitReducers'
import { lessonListReducer,
        lessonDetailsReducer 

} from './reducers/lessonReducers'
import { quizListReducer } from './reducers/quizReducers'


const reducer = combineReducers({
    unitList: unitListReducer,

    lessonList: lessonListReducer,
    lessonDetails: lessonDetailsReducer,

    quizList: quizListReducer,
})

const initialState = {}

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    // middleware: middleware,
});

// const store = configureStore(reducer, initialState,
//     composeWithDevTools(applyMiddleware(...middleware)))


export default store;