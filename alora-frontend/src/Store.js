import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'


import { unitListReducer } from './reducers/unitReducers'

const reducer = combineReducers({
    unitList: unitListReducer,
})

const initialState = {}

const store = configureStore({
    reducer: {reducer},
    // preloadedState: initialState,
    // middleware: middleware,
});

// const store = configureStore(reducer, initialState,
//     composeWithDevTools(applyMiddleware(...middleware)))


export default store;