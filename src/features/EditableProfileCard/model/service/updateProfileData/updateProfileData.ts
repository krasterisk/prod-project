import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../types/profile'

export const updateProfileData = createAsyncThunk<Profile, void | never, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const formData = getProfileForm(getState())

        try {
            const response = await extra.api.put<Profile>('/users/profile', formData)
            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
