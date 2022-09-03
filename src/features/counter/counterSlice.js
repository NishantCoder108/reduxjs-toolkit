import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

export const counterSlice = createSlice({

    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) =>{
            state.count = 0;
        },
        incrementByValue :(state,action) =>{
            state.count += action.payload; 
        },
        decrementByValue :(state,action) =>{
            state.count -= action.payload; 
        },
    }
})
//A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state. This API is the standard approach for writing Redux logic

export const { increment, decrement, reset,incrementByValue,decrementByValue } = counterSlice.actions;

export default counterSlice.reducer

