import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginByUsername } from '../services/loginByUsername'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },

    // extraReducers - предназначен для работы с asyncThunk
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state, action) => {
            state.isLoading = true
            state.error = undefined
        })
        builder.addCase(loginByUsername.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
