import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile, ValidateProfileError } from '../../types/profile'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<Profile, void | never, ThunkConfig<ValidateProfileError>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const formData = getProfileForm(getState())

        const errors = validateProfileData(formData)

        if (errors.length) {
            return rejectWithValue(error)
        }
            try {
                const response = await extra.api.put<Profile>('/users/profile', formData)
                return response.data
            } catch (e) {
                return rejectWithValue('error')
            }
        }
    }
)
