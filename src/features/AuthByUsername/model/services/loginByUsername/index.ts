import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userActions } from 'entities/User'
import { User } from 'entities/User/model/types/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

enum LoginErrors {
    INCORRECT_DATA = ' ',
    SERVER_ERROR = ' ',
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    // eslint-disable-next-line consistent-return
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)
            if (!response.data) {
                throw new Error(LoginErrors.SERVER_ERROR)
            } else {
                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
                thunkAPI.dispatch(userActions.setAuthData(response.data))
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(LoginErrors.INCORRECT_DATA)
        }
    },
)
