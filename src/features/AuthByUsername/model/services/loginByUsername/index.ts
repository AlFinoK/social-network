import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from 'entities/User/model/types/user'
import i18n from 'shared/config/i18n'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)
            if (!response.data) {
                throw new Error(i18n.t('Data wasnt gave'))
            } else {
                return response.data
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(i18n.t('Invalid login or password'))
        }
    },
)
