//configure store:- it wraps createstore , its by default automatically handle middle ware such as redux-thunk and redux devtools extension.It can automatically combine slice reducers and middle ware include redux thunk and extension.


import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import postReducer from "../features/posts/postSlice"

export const store = configureStore({
    reducer:{
        counter :counterReducer,
        posts : postReducer,
    },
    //middle ware ...
    devTools: process.env.NODE_ENV !== 'production',
})
// The store now has redux-thunk added and the Redux DevTools Extension is turned on






















// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batched subscribe, and devtools enhancers were composed together