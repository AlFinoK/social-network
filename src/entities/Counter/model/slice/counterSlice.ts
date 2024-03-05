import { createSlice } from '@reduxjs/toolkit'
import { CounterScheme } from '../types/CounterScheme'

const initialState: CounterScheme = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value += 1
        },
        decrement(state) {
            if (state.value > 0) {
                state.value -= 1
            }
        },
    },
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice
