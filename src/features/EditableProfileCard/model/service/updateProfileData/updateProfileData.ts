import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { validateProfileData } from '../validateProfileData/validateProfileData'
import { ValidateProfileError } from '../../consts/consts'
import { Profile } from '@/entities/Profile'

export const updateProfileData = createAsyncThunk<
Profile,
void | never,
ThunkConfig<ValidateProfileError[]>
>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const formData = getProfileForm(getState())

        const errors = validateProfileData(formData)

        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>(
                '/users/profile',
                formData
            )

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    }
)
