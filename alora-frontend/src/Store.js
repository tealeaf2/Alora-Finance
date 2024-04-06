import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { topicListReducer } from './redux/reducers/topicReducers'
import { unitListReducer } from './redux/reducers/unitReducers'
import { lessonListReducer,
        lessonDetailsReducer,
        assignLessonReducer,
        deleteLessonReducer,
        teacherClassIDsReducer,
} from './redux/reducers/lessonReducers'

import { quizListReducer,
        quizUpdateReducer,
} from './redux/reducers/quizReducers'

import { listTreeNamesReducer,
        updateTreeNameReducer
} from './redux/reducers/treeReducers';

import { accountLoginReducer,
        accountRegisterReducer,
        accountDetailsReducer,
        accountUpdateProfileReducer,
} from './redux/reducers/accountReducers'

import {
        parseCurriculumReducer
} from './redux/reducers/parseReducers'


const reducer = combineReducers({
    topicList: topicListReducer,
    unitList: unitListReducer,

    lessonList: lessonListReducer,
    lessonDetails: lessonDetailsReducer,
    assignStatus: deleteLessonReducer,
    assignment: assignLessonReducer,
    teacherClassIds: teacherClassIDsReducer,

    quizList: quizListReducer,
    quizUpdate: quizUpdateReducer,

    treeNames: listTreeNamesReducer,
    treeNameUpdate: updateTreeNameReducer,

    parseUpdate: parseCurriculumReducer,

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